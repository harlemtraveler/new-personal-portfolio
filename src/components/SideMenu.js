import React, { Component } from 'react';
import styled from 'styled-components';
import Icon from './Icon';

class SideMenu extends Component {

  render() {
    return (
      <MenuContainer>
        <a href="/">
          <LogoContainer id="logo">
            <Icon />
          </LogoContainer>
          <div>DevOpSec</div>
        </a>
        <div className="tabs-container">
          <nav>
            <ul>
              <li className="menu-item">
                <a href="/work">WORK</a>
              </li>
              <li className="menu-item">
                <a href="/blog">BLOG</a>
              </li>
              <li className="menu-item">
                <a href="/about">ABOUT</a>
              </li>
              <li className="menu-item">
                <a href="/contact">CONTACT</a>
              </li>
            </ul>
          </nav>
        </div>
      </MenuContainer>
    );
  }

}

export default SideMenu;

const MenuContainer = styled.div`
  margin: 0;
  padding: 0
  position: fixed;
  height: 100%;
  width: 204px;
  top: 0;
  left: 0;
  background-color: #fff;
  opacity: 0.8;
  text-decoration: none;
`;

const LogoContainer = styled.div`
  background-image: url('./img/cranium-2099120.svg');
  background-repeat: no-repeat;
  background-position: center 40px;
  position: relative;
  margin-bottom: 20px;
  margin-left: auto;
  margin-right: auto;
  height: 205px;
  width: 60%;
`;
