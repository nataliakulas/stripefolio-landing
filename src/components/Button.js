import { Link } from "gatsby";
import styled from "styled-components";
import color from "../shared/colors";

export const Label = styled.span`
  min-width: 80px;
  font-weight: 700;
  line-height: 40px;
  color: ${({ color }) => color};
  letter-spacing: 0.55px;
  transform: translateX(-100px);
  transition: all 0.3s;
`;

export const Button = styled.button`
  width: 100px;
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
  width: 100px;
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
  color: ${color.turquoise};
  text-decoration: none;
  text-align: center;

  border: 2px solid ${color.turquoise};
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

  border: 2px solid ${color.turquoise};
  background-color: ${color.turquoise};
  padding: 15px 20px;

  cursor: pointer;
`;
