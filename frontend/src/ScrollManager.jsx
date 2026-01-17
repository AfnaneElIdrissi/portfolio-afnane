import { useEffect, useRef } from "react";
import { useNavigate, useLocation } from "react-router-dom";

const routes = ["/", "/about", "/projects", "/contact"];

export default function ScrollManager() {
  const navigate = useNavigate();
  const location = useLocation();
  const isAnimating = useRef(false);

  useEffect(() => {
    if (!window.matchMedia("(pointer: fine)").matches) return; // PC only

    const handleWheel = (e) => {
      const index = routes.indexOf(location.pathname);
      if (index === -1) return;

      const scrollTop = window.scrollY;
      const scrollHeight = document.documentElement.scrollHeight;
      const clientHeight = window.innerHeight;

      // 🟢 إذا مازال ميمكنش نروح للصفحة الموالية → خلي scroll الطبيعي
      if (e.deltaY > 0) {
        if (scrollTop + clientHeight < scrollHeight - 10) {
          // باقي content فالصفحة
          return; // خلي scroll الطبيعي
        }
      }

      if (e.deltaY < 0) {
        if (scrollTop > 10) {
          // باقي content فوق
          return;
        }
      }

      e.preventDefault(); // من بعد ما وصلنا bottom/top نمنع default
      if (isAnimating.current) return;

      if (e.deltaY > 0 && index < routes.length - 1) {
        isAnimating.current = true;
        navigateSmooth(routes[index + 1]);
      }

      if (e.deltaY < 0 && index > 0) {
        isAnimating.current = true;
        navigateSmooth(routes[index - 1]);
      }
    };

    const navigateSmooth = (path) => {
      setTimeout(() => {
        navigate(path);
        window.scrollTo({ top: 0, behavior: "smooth" });
      }, 100); // delay صغير باش يعطي إحساس smooth

      setTimeout(() => {
        isAnimating.current = false;
      }, 800);
    };

    window.addEventListener("wheel", handleWheel, { passive: false });
    return () => window.removeEventListener("wheel", handleWheel);
  }, [location.pathname, navigate]);

  return null;
}
