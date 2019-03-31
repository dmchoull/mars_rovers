import { Success, Failure } from "folktale/validation";

function isValidPlateau(plateau) {
  return hasValidCoordinates(plateau);
}

function hasValidCoordinates(plateau) {
  const { x, y } = plateau.bounds.upper || {};
  const validCoordinates = x && y && x >= 0 && y >= 0;

  return validCoordinates ? Success(plateau) : Failure(["plateau upper right boundary coordinates are invalid"]);
}

export { isValidPlateau };
