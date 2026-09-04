// ScrollToTop.jsx
import { useLayoutEffect } from "react";
import { useLocation } from "react-router-dom";

export default function ScrollToTop() {
  const { pathname } = useLocation();

  useLayoutEffect(() => {
    // Instantly snaps the window back to the top-left corner
    window.scrollTo({
        top: 0,
        left: 0,
        behavior: "smooth"
      });
  }, [pathname]); // Fires every time the URL path changes

  return null;
}
