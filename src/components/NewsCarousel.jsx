/*
===============================================================================
  Project Name:    Alpha Twelve
  File:            NewsCarousel.jsx
  Author:          Praise Abu
  Created on:      2024-10-24
  Last modified:   2024-10-24
===============================================================================
*/

import { useState, useEffect } from "react";
import styled from "styled-components";
import { RxCaretLeft, RxCaretRight } from "react-icons/rx";
import { slides } from "../data";

const Overlay = styled.div`
  position: absolute;
  top: -0.1rem;
  left: 0;
  right: 0;
  bottom: 0.6rem;
  background-color: rgba(0, 0, 0, 0.3);
  z-index: 1;
  border-radius: 1rem;
`;

const CarouselWrapper = styled.div`
  position: relative;
  width: 99%;
  max-width: 1000px;
  margin: 0 auto;
  overflow: hidden;
`;

const SlidesContainer = styled.div`
  display: flex;
  transition: transform 0.5s ease;
  transform: translateX(${(props) => props.translate}%);
`;

const Slide = styled.div`
  flex: 0 0 100%;
  position: relative;
`;

const Content = styled.div`
  position: absolute;
  bottom: 3rem;
  left: 3rem;
  font-size: 1.6rem;
  max-width: 90%;
  white-space: normal;
  color: var(--theme-btn-color);

  @media (max-width: 768px) {
    bottom: 2rem;
    left: 1rem;
  }
`;

const SlideImage = styled.img`
  width: 100%;
  height: auto;
  object-fit: cover;
  border-radius: 1rem;
`;

const SlideContent = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-top: 1rem;
  position: absolute;
  bottom: 0;
  left: 0;
  padding: 1rem;
  width: 100%;
  box-sizing: border-box;
  z-index: 1;
`;

const SlideTextTitle = styled.p`
  font-size: 1.4rem;
  font-weight: 500;
  margin: 0;
  padding-bottom: 1rem;
`;

const SlideTextDescription = styled.p`
  font-size: 1.2rem;
  font-weight: 400;
  margin: 0;

  @media (max-width: 768px) {
    display: inline-block;
    overflow: hidden;
    white-space: ${(props) => (props.expanded ? "normal" : "nowrap")};
    text-overflow: ${(props) => (props.expanded ? "unset" : "ellipsis")};
    max-width: ${(props) => (props.expanded ? "100%" : "75%")};
  }
`;

const SeeMore = styled.span`
  color: var(--theme-btn-color);
  font-size: 1rem;
  cursor: pointer;
  margin-left: 0.5rem;
  text-decoration: underline;

  @media (min-width: 768px) {
    display: none; // Hide the 'See More' on larger screens
  }
`;

const NavigationButton = styled.button`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  background-color: var(--theme-btn-color);
  border: none;
  border-radius: 50%;
  color: var(--color-grey-650);
  font-size: 2rem;
  cursor: pointer;
  z-index: 2;
  padding: 0.5rem;

  &:hover {
    color: var(--color-purple-500);
  }
`;

const DotsWrapper = styled.div`
  position: absolute;
  bottom: 1.5rem;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  gap: 0.5rem;
  z-index: 3;
`;

const Dot = styled.span`
  height: 0.5rem;
  width: 1.2rem;
  margin: 0 0.2rem;
  background-color: ${(props) =>
    props.active ? "var(--color-grey-650)" : "var(--theme-btn-color)"};
  border-radius: 1rem;
  cursor: pointer;
`;

const Carousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [expandedSlide, setExpandedSlide] = useState(null); // Track expanded slide for "See More"

  useEffect(() => {
    const slideInterval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);

    return () => clearInterval(slideInterval);
  }, []);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const setSlide = (index) => {
    setCurrentSlide(index);
  };

  const toggleSeeMore = (index) => {
    setExpandedSlide(expandedSlide === index ? null : index); // Toggle between showing more or less
  };

  return (
    <CarouselWrapper>
      <SlidesContainer translate={-currentSlide * 100}>
        {slides.map((slide, index) => (
          <Slide key={index}>
            <SlideImage src={slide.image} alt={slide.text} />
            <Overlay />
            <SlideContent>
              <Content>
                <SlideTextTitle>{slide.text}</SlideTextTitle>
                <SlideTextDescription expanded={expandedSlide === index}>
                  {slide.description}
                  {expandedSlide !== index && (
                    <SeeMore onClick={() => toggleSeeMore(index)}>
                      See More
                    </SeeMore>
                  )}
                </SlideTextDescription>
              </Content>
            </SlideContent>
          </Slide>
        ))}
      </SlidesContainer>

      <NavigationButton style={{ left: "2rem" }} onClick={prevSlide}>
        <RxCaretLeft />
      </NavigationButton>
      <NavigationButton style={{ right: "2rem" }} onClick={nextSlide}>
        <RxCaretRight />
      </NavigationButton>

      <DotsWrapper>
        {slides.map((_, index) => (
          <Dot
            key={index}
            active={index === currentSlide}
            onClick={() => setSlide(index)}
          />
        ))}
      </DotsWrapper>
    </CarouselWrapper>
  );
};

export default Carousel;
