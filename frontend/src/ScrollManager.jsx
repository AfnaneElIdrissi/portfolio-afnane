import { useEffect, useRef } from "react";
import { useNavigate, useLocation } from "react-router-dom";

const routes = ["/", "/about", "/projects", "/contact"];

export default function ScrollManager() {
  const navigate = useNavigate();
  const location = useLocation();
  const isLocked = useRef(false);

  useEffect(() => {
    const handleWheel = (e) => {
      if (isLocked.current) return;

      // 🔒 lock scroll
      isLocked.current = true;

      const currentIndex = routes.indexOf(location.pathname);

      // Safety check
      if (currentIndex === -1) {
        isLocked.current = false;
        return;
      }

      // ⬇️ Scroll down
      if (e.deltaY > 60 && currentIndex < routes.length - 1) {
        navigate(routes[currentIndex + 1]);
      }

      // ⬆️ Scroll up
      if (e.deltaY < -60 && currentIndex > 0) {
        navigate(routes[currentIndex - 1]);
      }

      // ⏱ cooldown
      setTimeout(() => {
        isLocked.current = false;
      }, 100);
    };

    window.addEventListener("wheel", handleWheel, { passive: true });

    return () => {
      window.removeEventListener("wheel", handleWheel);
    };
  }, [location.pathname, navigate]);

  return null;
}
