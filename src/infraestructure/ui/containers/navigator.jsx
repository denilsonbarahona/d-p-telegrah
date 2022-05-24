import React from "react";
import NavItem from "@ui/components/nav-item";
import PropTypes from "prop-types";
import {
  IoPhonePortraitOutline,
  IoPersonOutline,
  IoChatboxOutline,
  IoSettingsOutline,
} from "react-icons/io5";
import Nav from "@styles/containers/navigator.style";

const Navigator = ({ path }) => {
  return (
    <Nav>
      <ul>
        <li>
          <NavItem selected={path === "/"} to="/">
            <IoPersonOutline />
          </NavItem>
        </li>
        <li>
          <NavItem selected={path === "/call"} to="/call">
            <IoPhonePortraitOutline />
          </NavItem>
        </li>
        <li>
          <NavItem selected={path === "/message"} to="/message">
            <IoChatboxOutline />
          </NavItem>
        </li>
        <li>
          <NavItem selected={path === "/config"} to="/config">
            <IoSettingsOutline />
          </NavItem>
        </li>
      </ul>
    </Nav>
  );
};

Navigator.propTypes = {
  path: PropTypes.string,
};

Navigator.defaultProps = {
  path: "/",
};

export default Navigator;
