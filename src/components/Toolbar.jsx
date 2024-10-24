import styled from "styled-components";
import { FiSearch, FiChevronDown, FiDownload } from "react-icons/fi";
import { useDarkMode } from "../context/DarkModeContext";

const ToolbarContainer = styled.div`
  font-size: 1.4rem;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
  background-color: var(--color-grey-00);
  padding: 1rem 1rem 1rem 0;
  border-radius: 0.5rem;
  color: var(--color-grey-700);
  gap: 1rem;
  overflow-x: auto;
  white-space: nowrap;

  &::-webkit-scrollbar {
    display: none;
  }

  -ms-overflow-style: none; /* IE */
  scrollbar-width: none; /* Firefox */

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: flex-start;
  }
`;

const FlexDiv = styled.div`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  gap: 1rem;

  @media (max-width: 768px) {
    width: 100%;
    flex-direction: column;
  }
`;

const ResultTextDiv = styled.div`
  @media (max-width: 768px) {
    width: 100%;
  }
`;

const SortDiv = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  justify-content: flex-end;

  @media (max-width: 768px) {
    width: 100%;
    justify-content: space-between;
    gap: 10rem;
  }
`;

const OptionsDiv = styled.div`
  display: flex;
  align-items: center;

  @media (max-width: 768px) {
    width: 100%;
    justify-content: space-between;
  }
`;

const SearchContainer = styled.div`
  display: flex;
  align-items: center;
  background-color: var(--color-grey-0);
  padding: 0.8rem;
  border: ${({ isActive }) =>
    isActive ? "none" : ".1rem solid var(--color-grey-100)"};
  border-radius: 0.4rem;

  input {
    border: none;
    outline: none;
    background: transparent;
    color: var(--color-grey-700);
    margin-left: 0.8rem;
  }

  @media (max-width: 768px) {
    width: 100%;
  }
`;

const DropdownWrapper = styled.div`
  position: relative;
  width: auto;

  @media (max-width: 768px) {
    width: 100%;
  }
`;

const Dropdown = styled.select`
  appearance: none;
  background-color: var(--color-grey-0);
  color: var(--color-grey-700);
  padding: 0.8rem 2.5rem 0.8rem 0.8rem;
  border: ${({ isActive }) =>
    isActive ? "none" : ".1rem solid var(--color-grey-100)"};
  border-radius: 0.4rem;
  font-size: 1.4rem;
  width: 100%;
  text-align-last: center;

  @media (max-width: 768px) {
    margin-left: 0;
  }
`;

const ChevronIcon = styled(FiChevronDown)`
  position: absolute;
  right: 1rem;
  top: 50%;
  transform: translateY(-50%);
  pointer-events: none;
  color: var(--color-grey-700);

  @media (max-width: 768px) {
    right: 39%;
  }
`;

const ResultText = styled.span`
  margin-left: 1.6rem;

  @media (max-width: 768px) {
    margin-left: 0;
  }
`;

const MoreOptions = styled.div`
  background-color: var(--color-grey-0);
  border-radius: 0.4rem;
  padding: 0.2rem 0.8rem;
  margin-left: 0.8rem;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  border: ${({ isActive }) =>
    isActive ? "none" : ".1rem solid var(--color-grey-100)"};

  &::before {
    content: "⋮";
    font-size: 2.4rem;
    color: var(--color-grey-700);
  }
`;

const ExportButton = styled.button`
  background-color: var(--color-grey-0);
  color: var(--color-grey-700);
  padding: 1rem 0.8rem;
  border: ${({ isActive }) =>
    isActive ? "none" : ".1rem solid var(--color-grey-100)"};
  border-radius: 0.8rem;
  margin-left: 1.6rem;
  cursor: pointer;
  display: flex;
  align-items: center;
`;

const Toolbar = () => {
  const { isDarkMode } = useDarkMode();

  return (
    <ToolbarContainer>
      <FlexDiv>
        <SearchContainer isActive={isDarkMode}>
          <FiSearch />
          <input type="text" placeholder="Search..." />
        </SearchContainer>
        {["Date", "Status", "Name"].map((label) => (
          <DropdownWrapper key={label}>
            <Dropdown isActive={isDarkMode}>
              <option>{label}</option>
              <option>Option 1</option>
              <option>Option 2</option>
            </Dropdown>
            <ChevronIcon />
          </DropdownWrapper>
        ))}
      </FlexDiv>

      <ResultTextDiv>
        <ResultText>Displaying 100 results</ResultText>
      </ResultTextDiv>

      <SortDiv>
        <span>Sort:</span>
        <DropdownWrapper>
          <Dropdown isActive={isDarkMode}>
            <option>Most Recent</option>
            <option>Least Recent</option>
          </Dropdown>
          <ChevronIcon />
        </DropdownWrapper>
      </SortDiv>

      <OptionsDiv>
        <MoreOptions isActive={isDarkMode} />
        <ExportButton isActive={isDarkMode}>
          <FiDownload style={{ marginRight: "8px" }} />
          Export
        </ExportButton>
      </OptionsDiv>
    </ToolbarContainer>
  );
};

export default Toolbar;