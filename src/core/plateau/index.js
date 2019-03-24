import { coordinates } from "../coordinates";

function plateau(topRightCoordinate) {
  return {
    bounds: {
      lower: coordinates(0, 0),
      upper: topRightCoordinate,
    },
  };
}

export { plateau };
