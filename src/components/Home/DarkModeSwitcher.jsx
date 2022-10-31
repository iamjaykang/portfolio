import React, { useState } from "react";
import { DarkModeSwitch } from "react-toggle-dark-mode";

const DarkModeSwitcher = ({setDarkMode, darkMode}) => {

  const toggleDarkMode = (checked) => {
    setDarkMode(checked);
  };
  return (
    <DarkModeSwitch
      checked={darkMode}
      onChange={toggleDarkMode}
      size={25}
    />
  );
};

export default DarkModeSwitcher;
