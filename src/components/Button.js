import { Link } from "gatsby";
import styled, { css } from "styled-components";
import color from "../shared/colors";
import { makeSecondary } from "../shared/helpers";

export const Label = styled.span`
  min-width: 75px;
  position: relative;
  font-weight: 700;
  line-height: 40px;
  color: ${({ theme }) => makeSecondary(theme)};
  letter-spacing: 0.55px;
  transform: translateX(-75px);
  transition: all 0.3s;

  ${({ link }) =>
    link &&
    css`
      &:after {
        content: "";
        width: 100%;
        height: 2px;
        position: absolute;
        left: 0;
        background-color: ${color.turquoise};
      }

      &:after {
        bottom: 10px;
      }
    `}
`;

export const Button = styled.button`
  width: 75px;
  height: 40px;
  position: absolute;
  top: 0;
  right: 0;
  z-index: 10;
  display: flex;
  justify-content: center;
  align-items: center;
  text-decoration: none;

  font-family: "Comfortaa", sans-serif;
  font-size: 15px;
  text-align: left;
  border: none;
  background-color: ${color.white};

  padding: 0;
  margin: 5px;
  cursor: pointer;
  overflow: hidden;

  svg {
    min-width: 24px;
    margin-right: 10px;
    transform: translateX(-15px);
  }

  &:hover {
    svg {
      transform: translateX(25px);
    }

    ${Label} {
      transform: translateX(20px);
    }
  }
`;

export const LinkButton = styled.a`
  width: 75px;
  height: 40px;
  position: absolute;
  top: ${({ top }) => top || 0}px;
  right: 0;
  z-index: 10;
  display: flex;
  justify-content: center;
  align-items: center;
  text-decoration: none;

  font-family: "Comfortaa", sans-serif;
  font-size: 15px;
  text-align: left;
  border: none;
  background-color: ${color.white};

  padding: 0;
  margin: 5px;
  cursor: pointer;
  overflow: hidden;

  svg {
    min-width: 24px;
    margin-right: 10px;
    transform: translateX(-15px);
  }

  &:hover {
    svg {
      transform: translateX(25px);
    }

    ${Label} {
      transform: translateX(20px);
    }
  }
`;

export const LinkOuter = styled.a`
  width: 100%;
  height: 50px;
  position: relative;
  font-weight: 700;
  font-size: 14px;
  line-height: 20px;
  color: ${({ theme }) => makeSecondary(theme)};
  text-decoration: none;
  text-align: center;

  border: 2px solid ${({ theme }) => makeSecondary(theme)};
  background-color: ${color.white};
  padding: 5px 10px;

  cursor: pointer;

  &:before,
  &:after {
    display: none;
    content: "";
    width: calc(100% - 4px);
    height: 2px;
    position: absolute;
    left: 2px;
    background-color: ${({ theme }) => makeSecondary(theme)};
  }

  &:before {
    top: 2px;
  }

  &:after {
    bottom: 2px;
  }

  &:hover:before,
  &:hover:after {
    display: block;
  }

  @media (min-width: 375px) {
    padding: 15px 10px;
  }

  @media (min-width: 568px) {
    width: 260px;
    height: 70px;
  }

  @media (min-width: 768px) {
    width: 220px;
    font-size: 15px;
    padding: 15px 20px;
  }
`;

export const LinkInner = styled(Link)`
  width: 100%;
  height: 50px;
  position: relative;

  font-weight: 700;
  font-size: 14px;
  line-height: 20px;
  color: ${color.white};
  text-decoration: none;
  text-align: center;

  border: 2px solid ${({ theme }) => makeSecondary(theme)};
  background-color: ${({ theme }) => makeSecondary(theme)};

  padding: 5px 10px;
  margin-bottom: 10px;

  cursor: pointer;

  &:before,
  &:after {
    display: none;
    content: "";
    width: calc(100% - 4px);
    height: 2px;
    position: absolute;
    left: 2px;
    background-color: ${color.white};
  }

  &:before {
    top: 2px;
  }

  &:after {
    bottom: 2px;
  }

  &:hover:before,
  &:hover:after {
    display: block;
  }

  @media (min-width: 375px) {
    padding: 15px 10px;
  }

  @media (min-width: 568px) {
    width: 260px;
    height: 70px;
    margin-bottom: 0;
  }

  @media (min-width: 768px) {
    width: 220px;
    font-size: 15px;

    padding: 15px 20px;
  }
`;
