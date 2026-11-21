import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function ScrollToTop() {
  const { hash, pathname } = useLocation();

  useEffect(() => {
    if (!hash || hash === "#page-top") {
      window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
    }
  }, [hash, pathname]);

  return null;
}
