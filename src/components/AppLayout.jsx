/*
===============================================================================
  Project Name:    Alpha Twelve
  File:            AppLayout.jsx
  Author:          Praise Abu
  Created on:      2024-10-24
  Last modified:   2024-10-24
===============================================================================
*/

import { Outlet } from "react-router-dom";
import Header from "./Header"; // Import Header
import styled from "styled-components";
import { useSidebar } from "../context/SidebarContext";

const StyledAppLayout = styled.div`
  display: grid;
  grid-template-columns: ${({ isCollapsed }) =>
      isCollapsed ? "8rem" : "22rem"} 1fr;
  grid-template-rows: auto 1fr;
  height: 100vh;
  background-color: var(--color-grey-0);

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const Main = styled.main`
  background-color: var(--color-grey-00);
  padding: 3rem 4rem 4rem 2.5rem;
  overflow-y: auto; /* Allows scrolling if the content overflows */

  @media (max-width: 768px) {
    padding-bottom: 6rem; /* Add space for the fixed bottom nav */
  }
`;

function AppLayout() {
  const { isCollapsed } = useSidebar();

  return (
      <StyledAppLayout isCollapsed={isCollapsed}>
        <Header />
        <Main>
          <Outlet />
        </Main>
      </StyledAppLayout>
  );
}

export default AppLayout;