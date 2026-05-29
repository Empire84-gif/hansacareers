// src/components/utils/ScrollToHash.jsx

import { useEffect } from "react";

function ScrollToHash() {
  useEffect(() => {
    const hash = window.location.hash;

    if (!hash) {
      window.scrollTo({
        top: 0,
        behavior: "auto",
      });

      return;
    }

    const id = hash.replace("#", "");

    const scrollToTarget = () => {
      const element = document.getElementById(id);

      if (!element) return;

      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    };

    const timeout = window.setTimeout(scrollToTarget, 180);

    return () => window.clearTimeout(timeout);
  }, []);

  return null;
}

export default ScrollToHash;