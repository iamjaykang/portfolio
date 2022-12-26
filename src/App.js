import { useEffect, useState } from "react";
import Home from "./pages/home/Home";
import CustomCursor from "./components/customCursor/CustomCursor";

function App() {
  const [darkMode, setDarkMode] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Check if the device is a mobile device
    const userAgent = window.navigator.userAgent;
    const isMobile = /Mobile/.test(userAgent);
    setIsMobile(isMobile);
  }, []);

  return (
    <div className={darkMode ? "App dark" : "App"}>
      <Home setDarkMode={setDarkMode} darkMode={darkMode} isMobile={isMobile} />
      {!isMobile && <CustomCursor />}
    </div>
  );
}

export default App;
