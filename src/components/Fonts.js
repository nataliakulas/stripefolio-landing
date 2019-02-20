import styled from "styled-components";
import color from "../shared/colors";

export const H1 = styled.h1`
  color: ${color.turquoise};
`;

export const P = styled.p`
  margin: ${({ margin }) => margin || 0};

  span {
    position: relative;
    color: ${color.turquoise};
  }
`;
