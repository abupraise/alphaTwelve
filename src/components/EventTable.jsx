/*
===============================================================================
  Project Name:    Alpha Twelve
  File:            EventTable.jsx
  Author:          Praise Abu
  Created on:      2024-10-24
  Last modified:   2024-10-24
===============================================================================
*/

import { useState } from "react";
import styled from "styled-components";
import { events } from "../data";
import { useDarkMode } from "../context/DarkModeContext";
import Popup from "./Modal";

const AccordionContainer = styled.div`
  display: flex;
  flex-direction: column;
  background-color: var(--color-grey-00);
  padding: 0 0 2rem;
  border-radius: 0.8rem;
  color: var(--color-grey-700);
  max-width: 120rem;
  margin: 0 auto;
  font-size: 1.4rem;
`;

const HeaderRow = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 1rem;
  background-color: var(--color-grey-100);
  font-weight: bold;
  color: var(--color-grey-700);
`;

const HeaderColumn = styled.div`
  flex: 1;
  text-align: left;
  padding-left: 1rem;

  &:nth-child(4) {
    padding: 0 2rem;
  }

  &:nth-child(2),
  &:nth-child(3),
  &:last-child {
    @media (max-width: 768px) {
      display: none;

      &:last-child {
        display: block;
        text-align: right;
        margin-right: 5rem;
      }
    }
  }
`;

const AccordionItem = styled.div`
  background-color: var(--color-grey-0);
  padding: 1rem;
  cursor: pointer;

  &:hover {
    background-color: var(--color-grey-100);
  }
`;

const AccordionContent = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const MobileRow = styled.div`
  display: none;
  flex-direction: row;
  justify-content: space-between;
  padding: 1rem;
  margin: 0;
  background-color: var(--color-grey-00);
  width: 100%;

  @media (max-width: 768px) {
    display: flex;
  }

  p {
    margin: 0;
    flex: 1;
    text-align: left;
    &:last-child {
      text-align: right;
      margin-right: 4rem;
    }
  }
`;

const StatusWrapper = styled.div`
  display: inline-flex;
  align-items: center;
  padding: 0.5rem 1rem;
  border: ${({ status, isActive }) => {
    if (isActive) {
      return status === "Completed"
        ? ".1rem solid var(--color-green-600)"
        : ".1rem solid var(--color-purple-500)";
    }
    return status === "Completed"
      ? ".1rem solid var(--color-green-400)"
      : ".1rem solid var(--color-blue-100)";
  }};
  border-radius: 2rem;
  background-color: ${({ status }) =>
    status === "Completed"
      ? "var(--color-green-400)"
      : "var(--color-blue-100)"};

  ${({ isActive }) =>
    isActive &&
    `
      background-color: var(--color-grey-0);
  `}
`;

const Column = styled.div`
  flex: 1;
  text-align: left;
  padding-left: 1rem;

  &:nth-child(1) {
    @media (max-width: 768px) {
      position: relative;
      padding-left: 3rem;

      &::before {
        content: "${({ isOpen }) => (isOpen ? "v" : ">")}";
        position: absolute;
        left: 0;
        top: 50%;
        transform: translateY(-50%);
        font-size: 1.1rem;
        color: var(--color-grey-700);
        padding-right: 6rem;
      }
    }
  }

  &.last-child {
    padding: 0 2rem;

    @media (max-width: 768px) {
      text-align: right;
    }
  }

  &:nth-child(2),
  &:nth-child(3) {
    @media (max-width: 768px) {
      display: none;
    }
  }
`;

const StatusDot = styled.span`
  width: 0.5rem;
  height: 0.5rem;
  border-radius: 50%;
  margin-right: 0.5rem;
  background-color: ${({ status }) =>
    status === "Completed"
      ? "var(--color-green-600)"
      : "var(--color-purple-500)"};
`;

const StatusText = styled.div`
  color: ${({ status }) =>
    status === "Completed"
      ? "var(--color-green-600)"
      : "var(--color-purple-500)"};
`;

const PaginationContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 1.5rem;
`;

const ButtonContainer = styled.div`
  display: flex;
  align-items: center;

  span {
    margin: 0 0.7rem;
    background-color: var(--color-purple-500);
    padding: 0 0.6rem;
    border-radius: 50%;
    font-size: 1.3rem;
    color: var(--theme-btn-color);

    &.active {
      background-color: var(--color-purple-500);
    }

    &.inactive {
      background-color: var(--color-grey-600);
    }
  }
`;

const DropdownContainer = styled.div`
  display: flex;
  align-items: center;

  span {
    padding-right: 1rem;

    @media (max-width: 768px) {
      display: none;
    }
  }
`;

const PageButton = styled.button`
  background-color: ${({ disabled }) =>
    disabled ? "var(--color-grey-100)" : "var(--color-grey-600)"};
  color: var(--theme-btn-color);
  padding: 0.5rem 1rem;
  border: none;
  border-radius: 0.5rem;
  cursor: ${({ disabled }) => (disabled ? "not-allowed" : "pointer")};

  &:hover {
    background-color: ${({ disabled }) =>
      disabled ? "var(--color-grey-100)" : "var(--color-grey-600)"};
  }
`;

const RowsDropdown = styled.select`
  background-color: var(--color-grey-0);
  color: var(--color-grey-700);
  padding: 0.5rem;
  border: ${({ isActive }) =>
    isActive ? "none" : ".1rem solid var(--color-grey-100)"};
  border-radius: 0.5rem;
  cursor: pointer;
`;

const AccordionEventTable = () => {
  const { isDarkMode } = useDarkMode();
  const [currentPage, setCurrentPage] = useState(1);
  const [openIndex, setOpenIndex] = useState(null);
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [popupEvent, setPopupEvent] = useState(null);
  const [rowsPerPage, setRowsPerPage] = useState(5);

  const totalPages = Math.ceil(events.length / rowsPerPage);
  const currentData = events.slice(
    (currentPage - 1) * rowsPerPage,
    currentPage * rowsPerPage
  );

  const handlePageChange = (newPage) => {
    if (newPage > 0 && newPage <= totalPages) {
      setCurrentPage(newPage);
    }
  };

  const handlePopupOpen = (event) => {
    setPopupEvent(event);
    setIsPopupOpen(true);
  };

  const handlePopupClose = () => {
    setIsPopupOpen(false);
    setPopupEvent(null);
  };

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const handleRowsChange = (e) => {
    setRowsPerPage(Number(e.target.value));
    setCurrentPage(1);
  };

  return (
    <AccordionContainer>
      <HeaderRow>
        <HeaderColumn>Event Name</HeaderColumn>
        <HeaderColumn>Speaker</HeaderColumn>
        <HeaderColumn>Date</HeaderColumn>
        <HeaderColumn>Status</HeaderColumn>
      </HeaderRow>

      {currentData.map((event, index) => (
        <div key={index}>
          <AccordionItem onClick={() => handlePopupOpen(event)}>
          <AccordionContent>
              <Column isOpen={openIndex === index}>{event.name}</Column>
              <Column>{event.speaker}</Column>
              <Column>{event.date}</Column>
              <Column className="last-child">
                <StatusWrapper status={event.status} isActive={isDarkMode}>
                  <StatusDot status={event.status} />
                  <StatusText status={event.status}>{event.status}</StatusText>
                </StatusWrapper>
              </Column>
            </AccordionContent>

            {openIndex === index && (
              <MobileRow>
                <p>{event.speaker}</p>
                <p>{event.date}</p>
              </MobileRow>
            )}
          </AccordionItem>
        </div>
      ))}

      <PaginationContainer>
        <ButtonContainer>
          <PageButton
            disabled={currentPage === 1}
            onClick={() => handlePageChange(currentPage - 1)}
          >
            &lt;
          </PageButton>
          {Array.from({ length: totalPages }, (_, index) => {
            const pageNumber = index + 1;
            return (
              <span
                key={pageNumber}
                className={pageNumber === currentPage ? "active" : "inactive"}
                onClick={() => handlePageChange(pageNumber)}
              >
                {pageNumber}
              </span>
            );
          })}
          <PageButton
            disabled={currentPage === totalPages}
            onClick={() => handlePageChange(currentPage + 1)}
          >
            &gt;
          </PageButton>
        </ButtonContainer>

        <DropdownContainer>
          <span>Show:</span>
          <RowsDropdown
            value={rowsPerPage}
            onChange={handleRowsChange}
            isActive={isDarkMode}
          >
            <option value="5">5 rows</option>
            <option value="10">10 rows</option>
            <option value="15">15 rows</option>
          </RowsDropdown>
        </DropdownContainer>
      </PaginationContainer>
      {isPopupOpen && popupEvent && (
        <Popup event={popupEvent} onClose={handlePopupClose} />
      )}
    </AccordionContainer>
  );
};

export default AccordionEventTable;
