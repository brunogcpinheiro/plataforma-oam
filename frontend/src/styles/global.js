import { injectGlobal } from "styled-components";

injectGlobal`
  * {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    font-family: "Raleway", sans-serif;
  }

  button, a {
    cursor: pointer;
  }
  
  a {
    text-decoration: none;
  }
  
  input {
    outline: none;
  }
`;
