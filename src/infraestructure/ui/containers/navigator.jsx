import React, { useMemo } from "react";
import NavItem from "@ui/components/nav-item";
import { IconContext } from "react-icons";
import {
  IoPhonePortraitOutline,
  IoPersonOutline,
  IoChatboxOutline,
  IoSettingsOutline,
} from "react-icons/io5";
import Nav from "@styles/containers/navigator.style";

const Navigator = () => {
  return (
    <Nav>
      <ul>
        <li>
          <NavItem selected={true}>
            <IconContext.Provider
              value={useMemo(
                () => ({ size: "18px", color: "#ffffff" }),
                [{ size: "18px", color: "#ffffff" }]
              )}
            >
              <IoPersonOutline />
            </IconContext.Provider>
          </NavItem>
        </li>
        <li>
          <NavItem>
            <IconContext.Provider
              value={useMemo(
                () => ({ size: "18px", color: "#62a1dd" }),
                [{ size: "18px", color: "#62a1dd" }]
              )}
            >
              <IoPhonePortraitOutline />
            </IconContext.Provider>
          </NavItem>
        </li>
        <li>
          <NavItem>
            <IconContext.Provider
              value={useMemo(
                () => ({ size: "18px", color: "#62a1dd" }),
                [{ size: "18px", color: "#62a1dd" }]
              )}
            >
              <IoChatboxOutline />
            </IconContext.Provider>
          </NavItem>
        </li>
        <li>
          <NavItem>
            <IconContext.Provider
              value={useMemo(
                () => ({ size: "18px", color: "#62a1dd" }),
                [{ size: "18px", color: "#62a1dd" }]
              )}
            >
              <IoSettingsOutline />
            </IconContext.Provider>
          </NavItem>
        </li>
      </ul>
    </Nav>
  );
};

export default Navigator;
