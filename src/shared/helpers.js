import color from "./colors";
import type from "./consts";

export function makePrimary(theme) {
  switch (theme) {
    case type.GREY:
      return color.grey;
    case type.BLACK:
      return color.black;
    case type.ORANGE:
      return color.orange;
    default:
      return null;
  }
}

export function makeSecondary(theme) {
  switch (theme) {
    case type.GREY:
      return color.turquoise;
    case type.BLACK:
      return color.red;
    case type.ORANGE:
      return color.navy;
    default:
      return null;
  }
}
