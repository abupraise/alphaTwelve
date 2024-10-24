/*
===============================================================================
  Project Name:    Alpha Twelve
  File:            ProfileMenuItem.jsx
  Author:          Praise Abu
  Created on:      2024-10-24
  Last modified:   2024-10-24
===============================================================================
*/

import styled from "styled-components";
import { PiUserCircleThin } from "react-icons/pi";

import { useSidebar } from "../context/SidebarContext";

const ProfileContainer = styled.div`
  display: flex;
  align-items: center;
  padding: 1.2rem 1rem;
  background-color: var(--color-white);
  border-radius: var(--border-radius-sm);
`;

const Avatar = styled.div`
  width: 3.2rem;
  height: 3.2rem;
  border-radius: 50%;
  background-color: var(--color-grey-300);
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: ${({ isCollapsed }) => (isCollapsed ? "0" : "1.2rem")};
  font-size: 1.6rem;
  color: var(--color-grey-500);

  & svg {
    width: 3.4rem;
    height: 3.4rem;
  }
`;

const UserInfo = styled.div`
  display: ${({ isCollapsed }) => (isCollapsed ? "none" : "flex")};
  flex-direction: column;
`;

const UserName = styled.div`
  font-size: 1.4rem;
  font-weight: 600;
  color: var(--color-grey-900);
`;

const UserEmail = styled.div`
  font-size: 1.2rem;
  color: var(--color-grey-600);
`;

function ProfileMenuItem() {
  const { isCollapsed } = useSidebar();
  return (
    <ProfileContainer>
      <Avatar isCollapsed={isCollapsed}>
        <PiUserCircleThin />
      </Avatar>
      {!isCollapsed && (
        <UserInfo>
          <UserName>Rudra Devi</UserName>
          <UserEmail>rudra.devi@gmail.com</UserEmail>
        </UserInfo>
      )}
    </ProfileContainer>
  );
}

export default ProfileMenuItem;