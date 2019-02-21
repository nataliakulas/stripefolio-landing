import color from "../shared/colors";

export const BasicFont = `
  font-family: "Comfortaa", sans-serif;
  font-size: 15px;
  text-align: left;
  text-decoration: none;
`;

export const FlexCentered = `
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const NoBorder = `
  border: none;
  background-color: ${color.white};
`;

export const IconButton = `
  ${FlexCentered};
  ${BasicFont};
  ${NoBorder};
  
  width: 75px;
  height: 40px;

  position: absolute;
  top: 0;
  right: 0;
  z-index: 10;

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

    span {
      transform: translateX(20px);
    }
  }
`;

export const LinkButton = `
  width: 100%;
  height: 50px;
  position: relative;
  font-weight: 700;
  font-size: 14px;
  line-height: 20px;
  text-decoration: none;
  text-align: center;
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

export const Panel = `
  width: 100%;
  background-color: ${color.white};
  margin: 20px auto;
  overflow-x: hidden;
  overflow-y: scroll;
`;
