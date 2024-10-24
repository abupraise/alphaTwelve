import { useEffect, useRef } from "react";
import styled from "styled-components";
import { IoIosClose } from "react-icons/io";

import { useDarkMode } from "../context/DarkModeContext";

const PopupOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.6);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
`;

const PopupCard = styled.div`
  background: var(--color-grey-0);
  border-radius: 0.2rem;
  width: 55rem;
  box-shadow: 0px .4rem 1.5rem rgba(0, 0, 0, 0.1);

  @media (max-width: 768px) {
    width: 40rem;
  }
`;

const PopupHeader = styled.div`
  display: flex;
  justify-content: space-between;
  background-color: var(--color-grey-0);
  padding: 2.5rem;
  color: var(--color-grey-700);
`;

const PopupContent = styled.div`
  padding: 1rem;
  background-color: var(--color-grey-100);
`;

const CloseButton = styled(IoIosClose)`
  cursor: pointer;
  background-color: ${({ isActive }) =>
    isActive ? "var(--color-grey-100)" : ""};
  border: ${({ isActive }) =>
    isActive ? "none" : ".1rem solid var(--color-grey-100)"};
  border-radius: 50%;
  font-weight: 600;
  width: 3rem;
  height: 2.8rem;
  color: var(--color-grey-600);
`;

const AvatarGroup = styled.div`
  display: flex;
  margin: 1rem 0 0 1rem;

  img {
    width: 3.5rem;
    height: 3.5rem;
    border-radius: 50%;
    margin-left: -1rem;
    border: 0.1rem solid var(--theme-btn-color);
  }
`;

const PopupActions = styled.div`
  display: flex;
  justify-content: space-between;
  background-color: var(--color-grey-100);
  padding: 1rem;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: stretch; /* Makes buttons take full width in column */
    gap: 1rem; /* Adds space between the buttons */
  }
`;

const StyledButton = styled.button`
  border: none;
  padding: 0.9rem 0.6rem;
  border-radius: 0.5rem;
  cursor: pointer;
  flex: 1;
  font-size: 1.3rem;

  &:first-child {
    background-color: var(--theme-btn-color);
    color: var(--color-grey-650);
    border: ${({ isActive }) =>
      isActive ? "none" : ".1rem solid var(--color-grey-600)"};
    margin-right: 7rem;

    @media (max-width: 768px) {
      margin: 0;
    }
  }

  &:nth-child(2) {
    background-color: var(--color-red-600);
    color: var(--theme-btn-color);
    margin: 0 1.3rem;

    @media (max-width: 768px) {
      margin: 0;
    }
  }

  &:last-child {
    background-color: var(--theme-btn-bg-dark);
    color: var(--theme-btn-color);

    @media (max-width: 768px) {
      margin-top: 0;
    }
  }
`;

const EventTitle = styled.h4`
  margin: 0;
  font-size: 1.8rem;
  font-weight: 600;
`;

const EventDate = styled.p`
  padding: .9rem 0 2.5rem;
  font-size: 1.4rem;
`;

const EventDescription = styled.p`
  padding: 0 0 3rem;
  font-size: 1.6rem;
`;

const GuestSpeakers = styled.p`
  padding: 0.6rem 0 0;
  font-size: 1.5rem;
`;

const Attendees = styled.p`
  padding: 0.2rem 0 0.1rem;
  font-size: 1.5rem;
`;

const Popup = ({ event, onClose }) => {
  const { isDarkMode } = useDarkMode();
  const popupCardRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        popupCardRef.current &&
        !popupCardRef.current.contains(event.target)
      ) {
        onClose();
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [onClose]);

  return (
    <PopupOverlay>
      <PopupCard ref={popupCardRef}>
        <PopupHeader>
          <div>
            <EventTitle>{event.name}</EventTitle>
            <EventDate>{event.date}</EventDate>
            <EventDescription>{event.description}</EventDescription>
            <AvatarGroup>
              {event.avatar.map((src, index) => (
                <img key={index} src={src} alt={`Speaker ${index + 1}`} />
              ))}
            </AvatarGroup>
            <GuestSpeakers>{event.guestSpeakers}</GuestSpeakers>
            <Attendees>{event.attendees}</Attendees>
          </div>
          <CloseButton onClick={onClose} />
        </PopupHeader>

        <PopupContent>
          <PopupActions>
            <StyledButton isActive={isDarkMode}>Edit</StyledButton>
            <StyledButton isActive={isDarkMode}>Delete</StyledButton>
            <StyledButton isActive={isDarkMode}>Mark as completed</StyledButton>
          </PopupActions>
        </PopupContent>
      </PopupCard>
    </PopupOverlay>
  );
};

export default Popup;