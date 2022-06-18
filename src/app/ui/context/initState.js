import { useState } from "react";

const initialState = () => {
  const [showDisplay, setShowDisplay] = useState(false);
  const [Theme, setTheme] = useState("Dark");

  return {
    showDisplay,
    setShowDisplay,
    Theme,
    setTheme,
  };
};

export default initialState;
