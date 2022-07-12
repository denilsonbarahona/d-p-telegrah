import React from "react";
import initialState from "@context/initState";
import PropTypes from "prop-types";

const Context = React.createContext(null);

export const ContextProvider = ({ children }) => {
  return <Context.Provider value={initialState()}>{children}</Context.Provider>;
};

ContextProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Context;
