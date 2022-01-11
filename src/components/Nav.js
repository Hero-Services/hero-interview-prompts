import React from "react";
import {Link} from "react-router-dom";

// Style
import styled from "styled-components";
import {voice} from "../style/components/typography.js";
import {pad, colors, List, ListItem, Heading, Inline} from "../style/components/general.js";

const Nav = () => {
  return (
    <Menu>
      <Inline>
        <Logo src="/logo.png" alt="Hero Services Logo" />
        <Heading>Interview Challenges</Heading>
      </Inline>
      <List>
        <ListItem>
          <NavLink to="/">Top</NavLink>
        </ListItem>
      </List>
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
  justify-content: space-between;
`;

const Logo = styled.img`
  height: 50px;
  margin: 0 ${pad}px;
`;

const NavLink = styled(Link)`
  text-decoration: none;
  font-size: ${voice.normal};
  color: ${colors.green};
`;

export default Nav;
