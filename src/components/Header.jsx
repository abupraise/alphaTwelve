/*
===============================================================================
  Project Name:    Alpha Twelve
  File:            Header.jsx
  Author:          Praise Abu
  Created on:      2024-10-24
  Last modified:   2024-10-24
===============================================================================
*/

import styled from "styled-components";
import { useState } from "react";
import Logo from "./Logo";
import { useSidebar } from "../context/SidebarContext";
import { GiHamburgerMenu } from "react-icons/gi";
import { RiCloseFill } from "react-icons/ri";

import MainNav from "./Navigation";

const StyledHeader = styled.header`
  @media (max-width: 768px) {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1rem 1rem 0;
    background-color: var(--color-grey-0);
    position: sticky;
    top: 0;
    z-index: 1000;
    width: 100%;
  }

  @media (min-width: 769px) {
    box-shadow: 1px 0 0 0 var(--color-outline-100);
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    padding: 1rem;
    background-color: var(--color-grey-0);
    position: sticky;
    top: 0;
    z-index: 1000;
    width: ${({ isCollapsed }) => (isCollapsed ? "8rem" : "22rem")};
    height: 100vh; /* Full height for desktop view */
    transition: width 0.3s;
  }
`;

const Wrapper = styled.div`
  @media (max-width: 768px) {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 2rem 2rem 0;
    background-color: var(--color-grey-0);
    position: sticky;
    top: 0;
    z-index: 1000;
    width: 100%;
    border-bottom: 1px solid var(--color-outline-100);
  }
`;


const HamburgerMenuButton = styled.button`
  background-color: ${({ isMenuOpen }) =>
    isMenuOpen ? "var(--color-grey-100)" : "transparent"};
  border: none;
  cursor: pointer;
  font-size: 2rem;
  color: var(--color-grey-600);
  padding: 0.8rem;
  border-radius: 50%; /* Makes the background circular */
  display: flex;
  align-items: center;
  justify-content: center;
  transition: background-color 0.3s ease;

  svg {
    width: 2.2rem;
    height: 2.2rem;
    transition: color 0.3s ease;
  }

  @media (min-width: 769px) {
    display: none; /* Hide the hamburger button on desktop */
  }
`;

function Header() {
  const { isCollapsed } = useSidebar();
  const [isMobileNavVisible, setIsMobileNavVisible] = useState(false);

  const toggleMobileNav = () => {
    setIsMobileNavVisible((prev) => !prev);
  };

  const closeMobileNav = () => {
    setIsMobileNavVisible(false);
  };

  return (
    <>
      <StyledHeader isCollapsed={isCollapsed}>
        <Wrapper>
          <Logo />
          <HamburgerMenuButton
            onClick={toggleMobileNav}
            isMenuOpen={isMobileNavVisible}
          >
            {isMobileNavVisible ? <RiCloseFill /> : <GiHamburgerMenu />}
          </HamburgerMenuButton>
        </Wrapper>
        <MainNav
          isMobileMenuOpen={isMobileNavVisible}
          closeMobileNav={closeMobileNav}
        />
      </StyledHeader>
    </>
  );
}

export default Header;