/*
===============================================================================
  Project Name:    Alpha Twelve
  File:            vite.config.js
  Author:          Praise Abu
  Created on:      2024-10-24
  Last modified:   2024-10-24
===============================================================================
*/

import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
})
