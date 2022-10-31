import { useState } from "react";
import Home from "./pages/Home/Home";

function App() {
  const [darkMode, setDarkMode] = useState(false);
  return (
    <div className={`App ${darkMode && "dark"}`}>
      <Home setDarkMode={setDarkMode} darkMode={darkMode} />
    </div>
  );
}

export default App;
