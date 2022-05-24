import React from "react";
import PropTypes from "prop-types";
import { Anchor, Container } from "@styles/components/nav-item.style";

const NavItem = ({ children, selected, to }) => {
  return (
    <Anchor to={to}>
      <Container className={`${selected ? "isSelected" : ""}`}>
        {children}
      </Container>
    </Anchor>
  );
};

NavItem.propTypes = {
  children: PropTypes.element,
  selected: PropTypes.bool,
  to: PropTypes.string,
};

NavItem.defaultProps = {
  children: null,
  selected: false,
  to: "/",
};

export default NavItem;
