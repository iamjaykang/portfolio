import { useEffect, useRef, useState } from "react";
import Home from "./pages/home/Home";
import CustomCursor from "./components/customCursor/CustomCursor";

function App() {
  const [darkMode, setDarkMode] = useState(false);
  const [mouseEnter, setMouseEnter] = useState(false);
  const cursorRef = useRef(null);

  useEffect(() => {
    const onMouseMove = (e) => {
      const { clientX, clientY } = e;
      const mouseX = clientX - cursorRef.current.clientWidth / 2;
      const mouseY = clientY - cursorRef.current.clientHeight / 2;
      cursorRef.current.style.transform = `translate3d(${mouseX}px, ${mouseY}px, 0)`;
    };
    document.addEventListener("mousemove", onMouseMove);

    return () => {
      document.removeEventListener("mousemove", onMouseMove);
    };
  }, []);

  return (
    <div
      className={darkMode ? "App dark" : "App"}
      onMouseEnter={() => setMouseEnter(true)}
      onMouseLeave={() => setMouseEnter(false)}
    >
      <Home setDarkMode={setDarkMode} darkMode={darkMode} />
      <CustomCursor cursorRef={cursorRef} mouseEnter={mouseEnter} />
    </div>
  );
}

export default App;
