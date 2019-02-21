import { Link } from "gatsby";
import styled, { css } from "styled-components";
import color from "../shared/colors";
import { makeSecondary } from "../shared/helpers";
import { LinkButton, IconButton, Bar } from "./Mixins";

export const Label = styled.span`
  min-width: 75px;
  position: relative;
  font-weight: 700;
  line-height: 40px;
  color: ${({ theme }) => makeSecondary(theme)};

  transform: translateX(-75px);
  transition: all 0.3s;

  ${({ link }) =>
    link &&
    css`
      &:after {
        ${Bar};
        bottom: 10px;
      }
    `}
`;

export const IconNormalButton = styled.button`
  ${IconButton};
  width: 80px;

  span {
    min-width: 80px;
    line-height: 35px;
    text-align: center;
    color: ${color.white};
    background-color: ${color.turquoise};
  }

  &:hover {
    span {
      transform: translateX(15px);
    }
  }
`;

export const IconLinkButton = styled.a`
  ${IconButton};
  top: ${({ top }) => top || 0}px;
`;

export const LinkButtonInner = styled(Link)`
  ${LinkButton};

  color: ${color.white};
  border: 2px solid ${({ theme }) => makeSecondary(theme)};
  background-color: ${({ theme }) => makeSecondary(theme)};

  margin-bottom: 10px;

  &:before,
  &:after {
    background-color: ${color.white};
  }

  @media (min-width: 568px) {
    margin-bottom: 0;
  }
`;

export const LinkButtonOuter = styled.a`
  ${LinkButton};

  color: ${({ theme }) => makeSecondary(theme)};
  border: 2px solid ${({ theme }) => makeSecondary(theme)};
  background-color: ${color.white};

  &:before,
  &:after {
    background-color: ${({ theme }) => makeSecondary(theme)};
  }
`;
