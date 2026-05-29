// src/components/ui/HansaScrollTopButton.jsx

import { useEffect, useState } from "react";

function HansaScrollTopButton() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > 520);
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <button
      type="button"
      className={`hansa-scroll-top${isVisible ? " is-visible" : ""}`}
      onClick={scrollToTop}
      aria-label="Scroll to top"
    >
      <svg
        viewBox="0 0 24 24"
        aria-hidden="true"
        focusable="false"
      >
        <path d="M12 5.5 5.5 12l1.4 1.4 4.1-4.1V19h2V9.3l4.1 4.1 1.4-1.4L12 5.5Z" />
      </svg>
    </button>
  );
}

export default HansaScrollTopButton;