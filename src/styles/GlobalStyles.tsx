import {createGlobalStyle} from "styled-components";
import {colors} from "./theme";


export const GlobalStyle = createGlobalStyle`
  *,
  *::after,
  *::before {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  li {
    list-style: none;
  }

  a {
    text-decoration: none;
  }

  //body {
  //  font-family: 'Josefin Sans', sans-serif;
  //}
  body {
    margin: 0;
    font-family: 'Poppins', -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
    sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    background-color: ${colors.primary};
    color: ${colors.font};
  }

  section {
    padding: 100px 0;

    &:nth-child(odd) {
      background-color: ${colors.secondary};
    }
  }


  a {
    color: white;
  }
`