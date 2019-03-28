import { coordinates, within } from "../coordinates";

function plateau(topRightCoordinates) {
  return {
    bounds: {
      lower: coordinates(0, 0),
      upper: topRightCoordinates,
    },
  };
}

function contains(plateau, coordinates) {
  return within(plateau.bounds, coordinates);
}

export { plateau, contains };
