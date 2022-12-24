import { useEffect, useRef, useState } from "react";
import Home from "./pages/home/Home";
import CustomCursor from "./components/customCursor/CustomCursor";

function App() {
  const [darkMode, setDarkMode] = useState(false);
  const cursorRef = useRef(null);

  const onMouseLeave = () => {
    cursorRef.current.style.border = "";
  };
  const onMouseEnter = () => {
    cursorRef.current.style.border = "1px solid gray";
  };

  useEffect(() => {
    const onMouseMove = (e) => {
      const { clientX, clientY } = e;
      const mouseX = clientX - cursorRef.current.clientWidth / 2;
      const mouseY = clientY - cursorRef.current.clientHeight / 2;
      cursorRef.current.style.transform = `translate3d(${mouseX}px, ${mouseY}px, 0)`;
    };
    document.addEventListener("mouseleave", onMouseLeave);
    document.addEventListener("mouseenter", onMouseEnter);
    document.addEventListener("mousemove", onMouseMove);

    return () => {
      document.removeEventListener("mousemove", onMouseMove);
      document.removeEventListener("mouseleave", onMouseLeave);
      document.removeEventListener("mouseenter", onMouseEnter);
    };
  }, []);

  return (
    <div className={darkMode ? "App dark" : "App"}>
      <Home setDarkMode={setDarkMode} darkMode={darkMode} />
      <CustomCursor cursorRef={cursorRef} />
    </div>
  );
}

export default App;
