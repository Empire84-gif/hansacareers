import express from "express";
import cors from "cors";
import nodemailer from "nodemailer";
import dotenv from "dotenv";
import path from "node:path";
import { fileURLToPath } from "node:url";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 10000;

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const allowedOrigins = (process.env.ALLOWED_ORIGINS || "")
  .split(",")
  .map((origin) => origin.trim())
  .filter(Boolean);

app.use(
  cors({
    origin(origin, callback) {
      if (!origin || allowedOrigins.length === 0 || allowedOrigins.includes(origin)) {
        callback(null, true);
        return;
      }

      callback(new Error("Origin not allowed by CORS"));
    },
  })
);

app.use(express.json({ limit: "80kb" }));

function cleanText(value, maxLength = 1000) {
  return String(value || "")
    .trim()
    .replace(/\s+/g, " ")
    .slice(0, maxLength);
}

function cleanMultiline(value, maxLength = 5000) {
  return String(value || "")
    .trim()
    .replace(/\r\n/g, "\n")
    .slice(0, maxLength);
}

async function verifyTurnstile(token, ip) {
  if (!process.env.TURNSTILE_SECRET_KEY) {
    throw new Error("TURNSTILE_SECRET_KEY is missing");
  }

  const body = new URLSearchParams({
    secret: process.env.TURNSTILE_SECRET_KEY,
    response: token,
  });

  if (ip) {
    body.append("remoteip", ip);
  }

  const response = await fetch(
    "https://challenges.cloudflare.com/turnstile/v0/siteverify",
    {
      method: "POST",
      headers: {
        "content-type": "application/x-www-form-urlencoded",
      },
      body,
    }
  );

  return response.json();
}

app.post("/api/contact", async (req, res) => {
  try {
    const {
      fullName,
      name,
      email,
      phone,
      company,
      contactType,
      subject,
      message,
      privacyAccepted,
      termsAccepted,
      turnstileToken,
    } = req.body;

    const safeName = cleanText(fullName || name, 140);
    const safeEmail = cleanText(email, 180);
    const safePhone = cleanText(phone, 80);
    const safeCompany = cleanText(company, 180);
    const safeContactType = cleanText(contactType, 140);
    const safeSubject = cleanText(subject, 180);
    const safeMessage = cleanMultiline(message, 5000);

    if (!safeName || !safeEmail || !safeMessage) {
      return res.status(400).json({
        ok: false,
        message: "Please complete your name, email address and message.",
      });
    }

    if (!privacyAccepted) {
      return res.status(400).json({
        ok: false,
        message: "Please accept the Privacy Policy confirmation.",
      });
    }

    if (!turnstileToken) {
      return res.status(400).json({
        ok: false,
        message: "Please complete the verification.",
      });
    }

    const ip =
      req.headers["cf-connecting-ip"] ||
      req.headers["x-forwarded-for"]?.split(",")[0]?.trim() ||
      req.socket.remoteAddress;

    const turnstileResult = await verifyTurnstile(turnstileToken, ip);

    if (!turnstileResult.success) {
      return res.status(403).json({
        ok: false,
        message: "Verification failed. Please try again.",
      });
    }

    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: Number(process.env.SMTP_PORT || 465),
      secure: process.env.SMTP_SECURE !== "false",
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    const mailSubject =
      safeSubject ||
      `New Hansa Careers enquiry${safeContactType ? ` — ${safeContactType}` : ""}`;

    await transporter.sendMail({
      from: `"Hansa Careers Website" <${
        process.env.SMTP_FROM || process.env.SMTP_USER
      }>`,
      to: process.env.CONTACT_TO,
      replyTo: safeEmail,
      subject: mailSubject,
      text: `
New enquiry from Hansa Careers website

Name:
${safeName}

Email:
${safeEmail}

Phone:
${safePhone || "-"}

Company:
${safeCompany || "-"}

Contact type:
${safeContactType || "-"}

Message:
${safeMessage}

Legal confirmations:
Privacy Policy accepted: ${privacyAccepted ? "Yes" : "No"}
Terms accepted: ${termsAccepted ? "Yes" : "No"}

IP:
${ip || "-"}
      `.trim(),
    });

    return res.json({
      ok: true,
      message: "Thank you. Your message has been sent successfully.",
    });
  } catch (error) {
    console.error("Contact form error:", error);

    return res.status(500).json({
      ok: false,
      message: "Something went wrong. Please try again later.",
    });
  }
});

app.use(express.static(path.join(__dirname, "dist")));

app.get(/.*/, (req, res) => {
  res.sendFile(path.join(__dirname, "dist", "index.html"));
});

app.listen(PORT, () => {
  console.log(`Hansa Careers server running on port ${PORT}`);
});