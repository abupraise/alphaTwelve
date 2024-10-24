/*
===============================================================================
  Project Name:    Alpha Twelve
  File:            Logo.jsx
  Author:          Praise Abu
  Created on:      2024-10-24
  Last modified:   2024-10-24
===============================================================================
*/

import styled from "styled-components";

import { useSidebar } from "../context/SidebarContext";

const StyledLogo = styled.div`
  display: flex;
  align-items: center;
  justify-content: center; // Center horizontally
  width: ${({ isCollapsed }) => (isCollapsed ? "4rem" : "12rem")};
  height: 4rem;
  margin-left: ${({ isCollapsed }) => (isCollapsed ? "1rem" : "0")};
  padding: 0;
  background-color: var(--color-blue-600);
  color: var(--color-blue-700);
  transition: all 0.3s;
  border-radius: 0.2rem;
  margin: 1rem auto;
  margin-bottom: 2rem;

  @media (max-width: 768px) {
    justify-content: center;
    background-color: var(--color-blue-600);
    color: var(--color-blue-700);
    margin: 1rem;
    padding: 0;
  }
`;

function Logo() {
  const { isCollapsed } = useSidebar();
  return (
    <StyledLogo isCollapsed={isCollapsed}>
      {!isCollapsed && "Full Logo"}
    </StyledLogo>
  );
}

export default Logo;