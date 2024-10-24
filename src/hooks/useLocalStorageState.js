/*
===============================================================================
  Project Name:    Alpha Twelve
  File:            useLocalStorageState.js
  Author:          Praise Abu
  Created on:      2024-10-24
  Last modified:   2024-10-24
===============================================================================
*/

import { useState, useEffect } from "react";

export function useLocalStorageState(initialState, key) {
  const [value, setValue] = useState(function () {
    const storedValue = localStorage.getItem(key);
    return storedValue ? JSON.parse(storedValue) : initialState;
  });

  useEffect(
    function () {
      localStorage.setItem(key, JSON.stringify(value));
    },
    [value, key]
  );

  return [value, setValue];
}