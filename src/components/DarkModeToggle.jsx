/*
===============================================================================
  Project Name:    Alpha Twelve
  File:            DarkModeToggle.jsx
  Author:          Praise Abu
  Created on:      2024-10-24
  Last modified:   2024-10-24
===============================================================================
*/

import styled from "styled-components";
import { useDarkMode } from "../context/DarkModeContext";
import { useSidebar } from "../context/SidebarContext";

const ToggleContainer = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;
  gap: ${({ isCollapsed }) => (isCollapsed ? ".1rem" : "2.2rem")};
  font-size: 1.6rem;
  font-weight: 500;
  padding: ${({ isCollapsed }) =>
    isCollapsed ? "1.2rem .1rem" : "1.2rem 1rem"};
  color: var(--color-grey-700);
  background: none;
  border: none;
  transition: all 0.3s;
  outline: none;

  & svg {
    width: 2.4rem;
    height: 2.4rem;
    color: var(--color-grey-600);
    transition: all 0.3s;
  }

  &:focus {
    outline: none;
  }
`;

const Toggle = styled.div`
  width: 4rem;
  height: 2.1rem;
  background: ${({ isActive }) =>
    isActive ? "var(--theme-btn-bg-dark)" : "var(--theme-btn-bg-light)"};
  border-radius: 1.5rem;
  position: relative;
  transition: background 0.3s ease;
`;

const Circle = styled.div`
  width: 2.1rem;
  height: 2.1rem;
  background: var(--theme-btn-color);
  border-radius: 50%;
  position: absolute;
  top: 0;
  left: ${({ isActive }) => (isActive ? "1.7rem" : ".1rem")};
  transition: left 0.3s ease;
`;

function DarkModeToggle({ closeMobileNav }) {
  const { isCollapsed } = useSidebar();
  const { isDarkMode, toggleDarkMode } = useDarkMode();

  const handleToggle = () => {
    toggleDarkMode();
    closeMobileNav();
  };

  if (isCollapsed) {
    return null;
  }

  return (
    <ToggleContainer onClick={handleToggle} isCollapsed={isCollapsed}>
      <Toggle isActive={isDarkMode}>
        <Circle isActive={isDarkMode} />
      </Toggle>
      {!isCollapsed && <span>{isDarkMode ? "Dark mode" : "Light mode"}</span>}
    </ToggleContainer>
  );
}

export default DarkModeToggle;
