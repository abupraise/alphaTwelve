import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
:root {
  &, &.light-mode {
  --color-nav-0: #8576FF;
  --color-grey-0: #fff;
  --color-grey-00: #fff;
  --color-grey-50: #F8FAFC;
  --color-grey-100: #F1F5F9;
  --color-grey-700: #334155;

  --color-highlight-1: #FCF7FF;
  --color-highlight-2: #8576FF;
  --color-bg-success-1: #D1FAE5;
  --color-bg-inprogress-1: #DBEAFE;
  --color-outline-100: #F1F5F9;

  --backdrop-color: rgba(255, 255, 255, 0.1);

  --shadow-lg: 0px 1.6rem 2.4rem 0px #00000026;
  

  --image-grayscale: 0;
  --image-opacity: 100%;
  }
  
  &.dark-mode {
    --color-nav-0: #FFF;
    --color-grey-00: #303030;
    --color-grey-0: #484554;
    --color-grey-50: #ADA9BB;
    --color-grey-100: #6A6676;
    --color-grey-700: #FCF7FF;

    --color-highlight-1: #8576FF;
    --color-highlight-2: #FCF7FF;
    --color-bg-success-1: #484554;
    --color-bg-inprogress-1: #484554;
    --color-outline-100: #6A6676;

    --backdrop-color: rgba(0, 0, 0, 0.3);

    --shadow-lg: 0px 1.6rem 2.4rem 0px #00000026;

    --image-grayscale: 10%;
    --image-opacity: 90%;
  }

  --color-grey-600: #ADA9BB;
  --color-grey-650: #484554;

  --color-blue-100: #DBEAFE;
  --color-blue-600: #62c1e5;

  --color-blue-700: #2563EB;

  --color-green-400: #D1FAE5;
  --color-green-600: #10B981;
  --color-purple-500: #8576FF;

  --color-red-600: #F43F5E;

  --theme-btn-bg-light: #E2E8F0;
  --theme-btn-bg-dark: #8576FF;
  --theme-btn-color: #fff;
  
  --border-radius-tiny: 3px;
  --border-radius-sm: 5px;
  --border-radius-md: 7px;
  --border-radius-lg: 9px;


}

*,
*::before,
*::after {
  box-sizing: border-box;
  padding: 0;
  margin: 0;
  transition: background-color 0.3s, border 0.3s;
}

html {
  font-size: 62.5%;
}

body {
  font-family: "Inter", sans-serif;
  color: var(--color-grey-700);

  transition: color 0.3s, background-color 0.3s;
  min-height: 100vh;
  line-height: 1.5;
  font-size: 1.6rem;
}

input,
button,
textarea,
select {
  font: inherit;
  color: inherit;
}

button {
  cursor: pointer;
}

*:disabled {
  cursor: not-allowed;
}

select:disabled,
input:disabled {
  background-color: var(--color-grey-100);
  color: var(--color-grey-700);
}

input:focus,
button:focus,
textarea:focus,
select:focus {
  outline: 2px solid var(--color-blue-600);
  outline-offset: -1px;
}

button:has(svg) {
  line-height: 0;
}

a {
  color: inherit;
  text-decoration: none;
}

ul {
  list-style: none;
}

p,
h1,
h2,
h3,
h4,
h5,
h6 {
  overflow-wrap: break-word;
  hyphens: auto;
}

img {
  max-width: 100%;

  filter: grayscale(var(--image-grayscale)) opacity(var(--image-opacity));
}

`;

export default GlobalStyles;