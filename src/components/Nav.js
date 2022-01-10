import React from "react";
import { Link } from "react-router-dom";

// Style
import styled from "styled-components";
import { voice } from "../style/components/typography.js";
import { 
  pad,
  colors,
  Text,
  List, 
  ListItem
} from "../style/components/general.js";

const Nav = () => {
  return (
    <Menu>
      <Text>FRM/Hero</Text>
      <List>
        <ListItem>
          <NavLink to="/">
            Home
          </NavLink>
        </ListItem>
      </List>
    </Menu>
  );
};

// Style
const Menu = styled.nav`
  width: 100%;
  padding: ${pad}px;
  background: ${colors.gray};
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const NavLink = styled(Link)`
  text-decoration: none;
  font-size: ${voice.normal}
`;

export default Nav;
