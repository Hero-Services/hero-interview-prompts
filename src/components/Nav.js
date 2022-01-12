import React from "react";

// Style
import styled from "styled-components";
import {pad, colors, Heading} from "../style/components/general.js";

const Nav = () => {
  return (
    <Menu>
      <Logo src="/logo.png" alt="Hero Services Logo" />
      <Heading>Interview Challenges</Heading>
    </Menu>
  );
};

// Style
const Menu = styled.nav`
  width: 100%;
  padding: ${pad}px;
  background: ${colors.black};
  display: fixed;
  top: 0;
  left: 0;
  align-items: center;
  justify-content: center;
`;

const Logo = styled.img`
  height: 50px;
  margin: 0 ${pad}px;
`;

export default Nav;
