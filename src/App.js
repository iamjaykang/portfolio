import { useEffect, useState } from "react";
import Home from "./pages/Home/Home";
import CustomCursor from "./components/CustomCursor/CustomCursor";

function App() {
  const [darkMode, setDarkMode] = useState(false);
  const [mousePosition, setMousePosition] = useState({
    x: 0,
    y: 0,
  });

  const variants = {
    default: {
      x: mousePosition.x - 16,
      y: mousePosition.y - 16,
    },
  };

  useEffect(() => {
    const mouseMove = (e) => {
      setMousePosition({
        x: e.clientX,
        y: e.clientY,
      });
    };

    window.addEventListener("mousemove", mouseMove);

    return () => {
      window.addEventListener("mousemove", mouseMove);
    };
  }, []);

  return (
    <div className={`App ${darkMode && "dark"}`}>
      <Home setDarkMode={setDarkMode} darkMode={darkMode} />
      <CustomCursor variants={variants} />
    </div>
  );
}

export default App;
