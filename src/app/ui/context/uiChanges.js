import React from "react";
import initialState from "@context/initState";
import PropTypes from "prop-types";

const UIChanges = React.createContext(null);

export const ContextProvider = ({ children }) => {
  return (
    <UIChanges.Provider value={initialState()}>{children}</UIChanges.Provider>
  );
};

ContextProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default UIChanges;
