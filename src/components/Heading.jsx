/*
===============================================================================
  Project Name:    Alpha Twelve
  File:            Heading.jsx
  Author:          Praise Abu
  Created on:      2024-10-24
  Last modified:   2024-10-24
===============================================================================
*/

import styled, { css } from "styled-components";

const Heading = styled.h1`
  font-family: "Inter", sans-serif;
  ${(props) =>
    props.as === "h1" &&
    css`
      font-size: 3rem;
      font-weight: 400;
    `}

  ${(props) =>
    props.as === "h2" &&
    css`
      font-size: 2rem;
      font-weight: 400;
    `}
    
    ${(props) =>
    props.as === "h3" &&
    css`
      font-size: 2rem;
      font-weight: 400;
    `}
    
  line-height: 1.4;
`;

export default Heading;