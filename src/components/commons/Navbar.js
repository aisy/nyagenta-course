import React from 'react';
import { Button } from 'antd';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

// style
const Header = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center; 
  padding: 15px 10%;
  color: ${props => props.textColor ? props.textColor : 'black'};
  background-color: ${props => props.backgroundColor ? props.backgroundColor : '#fff'};
  box-shadow: 0 4px 6px -1px rgba(0,0,0,0.07);
  position: fixed;
  z-index: 1;
  width: 100%;
  `;

const HeaderText = styled.p`
  font-size: 20px;
  font-weight: 600;
  margin-right: auto;
  margin-bottom: 0;
`;

const MenuHeader = styled.ul`
  list-style: none;
  margin-top: 0;
  margin-bottom: 0;
`;

const ListMenu = styled.li`
  display: inline-block;
  padding: 0px 20px;
  font-weight: 500;
`;

// Component
const Navbar = ({
  title,
  backgroundColor,
  textColor,
}) => {

  // const { Search } = Input

  // render
  return (
    <>
      <Header backgroundColor={backgroundColor} textColor={textColor}>
        <HeaderText>
          {title ? title : "Title"}
        </HeaderText>
        <nav>
          <MenuHeader>
            <ListMenu>
              <NavLink
                style={{ color: "black" }}
                activeStyle={{ color: "#d228e9", fontWeight: "bold" }}
                exact
                to={"/"}
              >
                Home
              </NavLink>
            </ListMenu>
            <ListMenu>
              <NavLink
                style={{ color: "black" }}
                activeStyle={{ color: "#d228e9", fontWeight: "bold" }}
                exact
                to={"/courses"}
              >
                Course
              </NavLink>
            </ListMenu>
            <ListMenu>
              <NavLink
                style={{ color: "black" }}
                activeStyle={{ color: "d228e9" }}
                exact
                to={"/blog"}
              >
                Blog
              </NavLink>
            </ListMenu>
          </MenuHeader>
        </nav>
        <NavLink to={"/login"} style={{ marginLeft: 20 }}>
          <Button type={"primary"} shape={"round"}>Sign In</Button>
        </NavLink>
      </Header>
    </>
  )
}


export default Navbar
