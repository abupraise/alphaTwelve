/*
===============================================================================
  Project Name:    Alpha Twelve
  File:            SidebarContext.jsx
  Author:          Praise Abu
  Created on:      2024-10-24
  Last modified:   2024-10-24
===============================================================================
*/

import { createContext, useContext, useState } from "react";

const SidebarContext = createContext();

export function SidebarProvider({ children }) {
  const [isCollapsed, setIsCollapsed] = useState(false);

  const toggleCollapse = () => {
    setIsCollapsed((prevState) => !prevState);
  };

  return (
    <SidebarContext.Provider value={{ isCollapsed, toggleCollapse }}>
      {children}
    </SidebarContext.Provider>
  );
}

export function useSidebar() {
  return useContext(SidebarContext);
}