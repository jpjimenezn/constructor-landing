import { useEffect } from "react";
import { useLocation } from "react-router-dom";

/** En SPAs el scroll no se resetea solo; al cambiar de ruta volvemos arriba. */
export default function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}
