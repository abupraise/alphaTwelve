/*
===============================================================================
  Project Name:    Alpha Twelve
  File:            useMoveBack.js
  Author:          Praise Abu
  Created on:      2024-10-24
  Last modified:   2024-10-24
===============================================================================
*/

import { useNavigate } from 'react-router-dom';

export function useMoveBack() {
  const navigate = useNavigate();
  return () => navigate(-1);
}