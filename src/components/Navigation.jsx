import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { FiHome, FiSettings } from "react-icons/fi";
import {
  IoCalendarOutline,
  IoDocumentTextOutline,
  IoChatbubblesOutline,
} from "react-icons/io5";
import { BiUserVoice } from "react-icons/bi";
import { GoBell } from "react-icons/go";
import { CgChevronDoubleLeft, CgChevronDoubleRight } from "react-icons/cg";
import DarkModeToggle from "./DarkModeToggle";
import ProfileMenuItem from "./ProfileMenuItem";
import { useSidebar } from "../context/SidebarContext";

const NavList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 0.8rem;
  position: relative;
  padding: 1rem;
  width: ${({ isCollapsed }) => (isCollapsed ? "6rem" : "22rem")};

  @media (max-width: 768px) {
    display: ${({ isMobileMenuOpen }) => (isMobileMenuOpen ? "flex" : "none")};
    position: absolute;
    top: 4rem;
    right: 0;
    background-color: var(--color-grey-0);
    width: 100%;
    z-index: 10;
    padding: 11rem 1rem 1rem;
    min-height: 100vh;
    top: 0;
    outline: 2px solid blue;
  }

  @media (min-width: 769px) {
    display: flex;
    background-color: transparent;
  }
`;

const StyledNavLink = styled(NavLink)`
  display: flex;
  align-items: center;
  gap: ${({ isCollapsed }) => (isCollapsed ? ".3rem" : "2.2rem")};
  color: var(--color-grey-700);
  font-size: 1.6rem;
  font-weight: 500;
  padding: ${({ isCollapsed }) =>
    isCollapsed ? "1.2rem .1rem 1.2rem 1rem" : "1.2rem 1rem"};
  transition: all 0.3s;
  justify-content: flex-start;
  width: ${({ isCollapsed }) => (isCollapsed ? "4.5rem" : "auto")};

  &:hover,
  &:active,
  &.active:link,
  &.active:visited {
    color: var(--color-nav-0);
    background-color: var(--color-highlight-1);
    border-radius: var(--border-radius-sm);
  }

  svg {
    width: 2.4rem;
    height: 2.4rem;
    color: var(--color-grey-600);
    transition: all 0.3s;
  }

  &:hover svg,
  &.active svg {
    color: var(--color-highlight-2);
  }

  span {
    display: ${({ isCollapsed }) => (isCollapsed ? "none" : "inline")};
  }
`;

const NotificationBadge = styled.div`
  position: absolute;
  top: ${({ isCollapsed }) => (isCollapsed ? "1.1rem" : "50%")};
  right: ${({ isCollapsed }) => (isCollapsed ? ".7rem" : ".1rem")};
  transform: ${({ isCollapsed }) =>
    isCollapsed ? "translate(50%, -50%)" : "translateY(-50%)"};
  width: ${({ isCollapsed }) => (isCollapsed ? "1.2rem" : "2.5rem")};
  height: ${({ isCollapsed }) => (isCollapsed ? "1.2rem" : "2.5rem")};
  background-color: var(--color-red-600);
  color: var(--theme-btn-color);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: ${({ isCollapsed }) => (isCollapsed ? "0.9rem" : "1.2rem")};
  font-weight: bold;
  pointer-events: none;
`;

const CollapseButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: ${({ isCollapsed }) => (isCollapsed ? "1.9rem" : "2.2rem")};
  font-size: 1.6rem;
  padding: ${({ isCollapsed }) =>
    isCollapsed ? "1.2rem 1rem" : "1.2rem 2.4rem"};
  color: var(--color-grey-700);
  background: none;
  border: none;
  cursor: pointer;
  transition: all 0.3s;

  svg {
    width: 2.4rem;
    height: 2.4rem;
    color: var(--color-grey-600);
    transition: all 0.3s;
  }

  &:focus {
    outline: none;
  }

  @media (max-width: 768px) {
    display: none; /* Hide on mobile view */
  }
`;

const BottomNav = styled.nav`
  display: none;
  /* padding: 2rem; */
  @media (max-width: 768px) {
    display: flex;
    justify-content: space-around;
    align-items: center;
    background-color: var(--color-grey-0);
    padding: 0.5rem;
    position: fixed;
    bottom: 0;
    left: 0;
    width: 100%;
    z-index: 1000;
    box-shadow: 0 -1px 5px rgba(0, 0, 0, 0.2);
  }
`;

const BottomNavItem = styled(NavLink)`
  display: flex;
  flex-direction: column;
  align-items: center;
  /* color: var(--color-grey-300); */
  text-decoration: none;
  font-size: 1.2rem;
  position: relative;

  &.active {
    color: var(--color-purple-500);
  }

  &.active::before {
    content: "";
    position: absolute;
    top: -0.5rem;
    left: 0;
    right: 0;
    height: 2px; /* The thickness of the top outline */
    background-color: var(--color-purple-500);
  }

  svg {
    font-size: 2rem;
  }
`;

function MainNav({ isMobileMenuOpen, closeMobileNav }) {
  const { isCollapsed, toggleCollapse } = useSidebar();

  return (
    <>
      <nav>
        <NavList isMobileMenuOpen={isMobileMenuOpen} isCollapsed={isCollapsed}>
          <li>
            <StyledNavLink
              to="/dashboard"
              isCollapsed={isCollapsed}
              onClick={closeMobileNav}
            >
              <FiHome />
              <span>Home</span>
            </StyledNavLink>
          </li>
          <li>
            <StyledNavLink
              to="/events"
              isCollapsed={isCollapsed}
              onClick={closeMobileNav}
            >
              <IoCalendarOutline />
              <span>Events</span>
            </StyledNavLink>
          </li>
          <li>
            <StyledNavLink
              to="/speakers"
              isCollapsed={isCollapsed}
              onClick={closeMobileNav}
            >
              <BiUserVoice />
              <span>Speakers</span>
            </StyledNavLink>
          </li>
          <li>
            <StyledNavLink
              to="/reports"
              isCollapsed={isCollapsed}
              onClick={closeMobileNav}
            >
              <IoDocumentTextOutline />
              <span>Reports</span>
            </StyledNavLink>
          </li>
          <li style={{ position: "relative" }}>
            <StyledNavLink
              to="/notifications"
              isCollapsed={isCollapsed}
              onClick={closeMobileNav}
            >
              <GoBell />
              <span>Notifications</span>
              <NotificationBadge isCollapsed={isCollapsed}>3</NotificationBadge>
            </StyledNavLink>
          </li>
          <li>
            <StyledNavLink
              to="/messages"
              isCollapsed={isCollapsed}
              onClick={closeMobileNav}
            >
              <IoChatbubblesOutline />
              <span>Messages</span>
            </StyledNavLink>
          </li>
          <li>
            <StyledNavLink
              to="/settings"
              isCollapsed={isCollapsed}
              onClick={closeMobileNav}
            >
              <FiSettings />
              <span>Settings</span>
            </StyledNavLink>
          </li>
          <li>
            <CollapseButton onClick={toggleCollapse} isCollapsed={isCollapsed}>
              {isCollapsed ? <CgChevronDoubleRight /> : <CgChevronDoubleLeft />}
              {!isCollapsed && <span>Collapse</span>}
            </CollapseButton>
          </li>
          <li>
            <DarkModeToggle closeMobileNav={closeMobileNav} />
          </li>
          <li>
            <ProfileMenuItem />
          </li>
        </NavList>
      </nav>

      <BottomNav>
        <BottomNavItem to="/dashboard" isCollapsed={isCollapsed}>
          <FiHome />
          <span>Home</span>
        </BottomNavItem>
        <BottomNavItem to="/events" isCollapsed={isCollapsed}>
          <IoCalendarOutline />
          <span>Events</span>
        </BottomNavItem>
        <BottomNavItem to="/speakers" isCollapsed={isCollapsed}>
          <BiUserVoice />
          <span>Speakers</span>
        </BottomNavItem>
        <BottomNavItem to="/reports" isCollapsed={isCollapsed}>
          <IoDocumentTextOutline />
          <span>Reports</span>
        </BottomNavItem>
        <BottomNavItem to="/profile" isCollapsed={isCollapsed}>
          <BiUserVoice />
          <span>Profile</span>
        </BottomNavItem>
      </BottomNav>
    </>
  );
}

export default MainNav;