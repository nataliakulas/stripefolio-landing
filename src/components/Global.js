import { createGlobalStyle } from "styled-components";
import { setConfiguration } from "react-grid-system";
import color from "../shared/colors";

// sm,md,lg,xl
setConfiguration({
  breakpoints: [768, 992, 1200, 1540],
  containerWidths: [750, 960, 1140, 1140]
});

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

 ::-webkit-scrollbar {
    width: 5px;
    height: 5px;
  }

  ::-webkit-scrollbar-button {
    width: 0;
    height: 0;
  }

  ::-webkit-scrollbar-thumb {
    background: ${color.grey};
    border: 0 none ${color.grey};
    border-radius: 0;
  }

  ::-webkit-scrollbar-track {
    background: ${color.white};
    border: 0 none ${color.white};
    border-radius: 2px;
  }

  ::-webkit-scrollbar-corner {
    background: transparent;
  }
`;
