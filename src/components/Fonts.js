import styled from "styled-components";
import { makeSecondary } from "../shared/helpers";

export const H1 = styled.h1`
  font-size: 30px;
  line-height: 30px;
  color: ${({ theme }) => makeSecondary(theme)};
  margin-top: 0;
`;

export const P = styled.p`
  margin: 0;

  strong {
    color: ${({ theme }) => makeSecondary(theme)};
  }
`;
