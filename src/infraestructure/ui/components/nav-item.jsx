import React from "react";
import PropTypes from "prop-types";
import { Anchor, Container } from "@styles/components/nav-item.style";

const NavItem = ({ children, selected }) => {
  return (
    <Anchor href="#">
      <Container className={`${selected ? "isSelected" : ""}`}>
        {children}
      </Container>
    </Anchor>
  );
};

NavItem.propTypes = {
  children: PropTypes.element,
  selected: PropTypes.bool,
};

NavItem.defaultProps = {
  children: null,
  selected: false,
};

export default NavItem;
