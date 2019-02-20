import { Link } from "gatsby";
import styled from "styled-components";
import color from "../shared/colors";
import { makeSecondary } from "../shared/helpers";

export const Label = styled.span`
  min-width: 75px;
  font-weight: 700;
  line-height: 40px;
  color: ${({ theme }) => makeSecondary(theme)};
  letter-spacing: 0.55px;
  transform: translateX(-100px);
  transition: all 0.3s;
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

export const LinkOuter = styled.a`
  width: 200px;
  height: 50px;
  font-weight: 700;
  font-size: 15px;
  line-height: 20px;
  color: ${({ theme }) => makeSecondary(theme)};
  text-decoration: none;
  text-align: center;

  border: 2px solid ${({ theme }) => makeSecondary(theme)};
  background-color: ${color.white};
  padding: 15px 20px;

  cursor: pointer;
`;

export const LinkInner = styled(Link)`
  width: 200px;
  height: 50px;
  font-weight: 700;
  font-size: 15px;
  line-height: 20px;
  color: ${color.white};
  text-decoration: none;
  text-align: center;

  border: 2px solid ${({ theme }) => makeSecondary(theme)};
  background-color: ${({ theme }) => makeSecondary(theme)};
  padding: 15px 20px;

  cursor: pointer;
`;
