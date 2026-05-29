// src/components/layout/HansaHeader.jsx

import { useState } from "react";

import hansaLogo from "../../assets/images/logo.png";

const navLinks = [
  {
    label: "Our Story",
    href: "/#about-us",
    children: [
      {
        label: "About Us",
        href: "/#about-us",
      },
      {
        label: "Industries",
        href: "/#industries",
      },
      {
        label: "Why Us",
        href: "/for-employers#why-us",
      },
      {
        label: "Meet the Founder",
        href: "/meet-the-founder",
      },
    ],
  },
  {
    label: "Current Openings",
    href: "/current-openings",
  },
  {
    label: "For Employers",
    href: "/for-employers",
  },
  {
    label: "Contact",
    href: "/contact",
  },
];

function HansaHeader() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <header className="hansa-header">
      <div className="hansa-container hansa-header__inner">
        <a href="/" className="hansa-logo" aria-label="Hansa Careers home">
          <img src={hansaLogo} alt="Hansa Careers" />
        </a>

        <nav className="hansa-nav" aria-label="Main navigation">
          {navLinks.map((link) => (
            <div
              key={link.href}
              className={`hansa-nav__item${
                link.children ? " has-submenu" : ""
              }`}
            >
              <a href={link.href} className="hansa-nav__link">
                {link.label}
              </a>

              {link.children && (
                <div className="hansa-nav__submenu">
                  {link.children.map((child) => (
                    <a key={child.href} href={child.href}>
                      {child.label}
                    </a>
                  ))}
                </div>
              )}
            </div>
          ))}
        </nav>

        <button
          type="button"
          className={`hansa-burger${isMenuOpen ? " is-open" : ""}`}
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          aria-expanded={isMenuOpen}
          onClick={() => setIsMenuOpen((current) => !current)}
        >
          <span />
          <span />
          <span />
        </button>
      </div>

      <div
        className={`hansa-menu-backdrop${isMenuOpen ? " is-visible" : ""}`}
        onClick={closeMenu}
        aria-hidden="true"
      />

      <nav
        className={`hansa-mobile-menu${isMenuOpen ? " is-open" : ""}`}
        aria-label="Mobile navigation"
      >
        <a href="/" className="hansa-mobile-menu__logo" onClick={closeMenu}>
          <img src={hansaLogo} alt="Hansa Careers" />
        </a>

        <div className="hansa-mobile-menu__links">
          {navLinks.map((link) => (
            <div key={link.href} className="hansa-mobile-menu__group">
              <a href={link.href} onClick={closeMenu}>
                {link.label}
              </a>

              {link.children && (
                <div className="hansa-mobile-menu__submenu">
                  {link.children.map((child) => (
                    <a key={child.href} href={child.href} onClick={closeMenu}>
                      {child.label}
                    </a>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </nav>
    </header>
  );
}

export default HansaHeader;