import styled from "styled-components";
import { useSidebar } from "../context/SidebarContext";

const StyledSidebar = styled.aside`
  background-color: var(--color-grey-0);
  padding: ${({ isCollapsed }) =>
    isCollapsed ? "3.2rem 0 3.2rem 1rem" : "3.2rem 1.1rem"};
  border-right: 1px solid var(--color-grey-100);
  width: ${({ isCollapsed }) => (isCollapsed ? "6rem" : "22rem")};
  transition: width 0.3s ease;
  grid-row: 1 / -1;
  display: flex;
  flex-direction: column;
  gap: 3.2rem;

  @media (max-width: 768px) {
    display: none;
  }
`;

function Sidebar() {
  const { isCollapsed } = useSidebar();

  return <StyledSidebar isCollapsed={isCollapsed} />;
}

export default Sidebar;