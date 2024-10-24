import styled from "styled-components";
import { FiArrowUpRight, FiArrowDownRight } from "react-icons/fi";

import Heading from "../components/Heading";
import Row from "../components/Row";
import { useDarkMode } from "../context/DarkModeContext";
import BarChart from "../components/Chart";
import Carousel from "../components/NewsCarousel";
import Toolbar from "../components/Toolbar";
import AccordionEventTable from "../components/AccordionEventTable";

const Card = styled.div`
  background-color: var(--color-grey-0);
  border: ${({ isActive }) =>
    isActive ? "none" : ".1rem solid var(--color-grey-100)"};
  padding: 2.4rem;
  border-radius: 0.3rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  line-height: 1.5rem;
  transition: transform 0.3s ease, box-shadow 0.3s ease; // Add transition for smooth hover effect

  &:hover {
    transform: scale(1.05); // Slightly scale up on hover
    box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.1); // Add a subtle shadow on hover
  }
`;

const CardHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  // Media query for mobile view
  @media (max-width: 768px) {
    justify-content: flex-start;
    gap: 0.8rem;
  }
`;

const CardTitle = styled.h3`
  font-size: 1.2rem;
  font-weight: 500;
`;

const InfoIcon = styled.span`
  font-size: 1.2rem;
  cursor: pointer;
`;

const ValueWrapper = styled.div`
  display: flex;
  align-items: center;
  margin-top: 12px;
`;

const Value = styled.div`
  font-size: 2.2rem;
  font-weight: bold;
`;

const PercentageChange = styled.div`
  margin-top: 8px;
  display: flex;
  align-items: center;
  color: ${({ isIncrease }) => (isIncrease ? "var(--color-green-600)" : "var(--color-red-600)")};
  font-size: 1.2rem;
`;

const StatGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(20rem, 1fr));
  gap: 1.6rem;
  margin: 2.5rem 0;

  // Media query for mobile view
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const ChartAndCarouselWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 2rem;
  padding: 2rem 0;
  margin: 0;
  box-sizing: border-box;

  // Stacks on top of each other for smaller screens
  @media (max-width: 900px) {
    grid-template-columns: 1fr; // Stacks the items
  }

  // Ensure the chart scales properly on smaller screens
  @media (max-width: 768px) {
    padding: 1rem 0;
  }
`;

const StatCard = ({ title, value, percentage, isIncrease }) => {
  const { isDarkMode } = useDarkMode();
  return (
    <Card isActive={isDarkMode}>
      <CardHeader>
        <CardTitle>{title}</CardTitle>
        <InfoIcon>ⓘ</InfoIcon>
      </CardHeader>
      <ValueWrapper>
        <Value>{value}</Value>
        <PercentageChange isIncrease={isIncrease}>
          {isIncrease ? <FiArrowUpRight /> : <FiArrowDownRight />}
          <span style={{ marginLeft: "8px" }}>{percentage}</span>
        </PercentageChange>
      </ValueWrapper>
    </Card>
  );
};

function Dashboard() {
  return (
    <>
      <Row type="horizontal">
        <Heading as="h1">Welcome! here’s your summary</Heading>
      </Row>
      <StatGrid>
        <StatCard
          title="Total Events"
          value="100,000"
          percentage="+5.0%"
          isIncrease={true}
        />
        <StatCard
          title="Active Speakers"
          value="25"
          percentage="-5.0%"
          isIncrease={false}
        />
        <StatCard
          title="Total Registrations"
          value="300"
          percentage="+5.0%"
          isIncrease={true}
        />
        <StatCard
          title="Total Revenue"
          value="$500,000"
          percentage="+5.0%"
          isIncrease={true}
        />
      </StatGrid>
      <Row type="horizontal">
        <Heading as="h2">Event Registrations per month</Heading>
      </Row>
      <ChartAndCarouselWrapper>
        <BarChart />
        <Carousel />
      </ChartAndCarouselWrapper>
      <Row type="horizontal">
        <Heading as="h2">Events History</Heading>
      </Row>
      <Toolbar />
      <AccordionEventTable />
    </>
  );
}

export default Dashboard;