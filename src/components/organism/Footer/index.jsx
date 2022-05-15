import React from "react";
import styled from "styled-components";

//React Components
import Logo from "components/atom/Logo";
import MenuItem from "components/atom/MenuItem";
import MenuList from "components/molecule/MenuList";

//Variables
import { menuFooter } from "const/menu";

const Footer = styled.div`
  top: 0%;
  display: flex;
  width: 100%;
  height: 50px;
  margin-left: auto;
  margin-right: auto;
  background: #ffffff;
  border-radius: 30px;
  margin-top: auto;
`;


const MenuPos = styled.div`
  margin-left: 0px;
  margin-bottom: 0px;
`;

export default function index({ options = menuFooter }) {
  const MenuItems = options.map((item, index) => {
    return <MenuItem key={index} name={item.name} path={item.path} />;
  });
  return (
    <Footer>
      <MenuPos>
        <MenuList>{MenuItems}</MenuList>
      </MenuPos>
    </Footer>
  );
}
