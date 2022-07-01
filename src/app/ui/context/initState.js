import { useState } from "react";

const initialState = () => {

  const [showDisplay, setShowDisplay] = useState(false);
  const [Theme, setTheme] = useState("Light");

  return {
    showDisplay,
    Theme,
    setShowDisplay,
    setTheme,
  };
};

export default initialState;
