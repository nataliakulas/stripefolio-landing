import { createGlobalStyle } from "styled-components";
import color from "../shared/colors";

export default createGlobalStyle`
* {
  box-sizing: border-box;
  -webkit-tap-highlight-color: transparent;
}

body {
  font-family: "Comfortaa", sans-serif;
  font-size: 15px;
  line-height: 25px;
  color: ${color.black};
  margin: 0;
  padding: 0;
}

::selection {
  background-color: ${color.black};
  color: ${color.white};
}

:focus {
  outline: none;
}
`;
