import { Failure, Success } from "folktale/validation";
import { areValidCoordinates } from "./coordinates";
import { coordinatesToString } from "../coordinates";

function isValidPlateau(plateau) {
  return hasValidCoordinates(plateau);
}

function hasValidCoordinates(plateau) {
  return areValidCoordinates(plateau.bounds.upper)
    ? Success(plateau)
    : Failure([`plateau upper right boundary coordinates "${coordinatesToString(plateau.bounds.upper)}" are invalid`]);
}

export { isValidPlateau };
