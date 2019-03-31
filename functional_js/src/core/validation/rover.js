import { Failure, Success } from "folktale/validation";
import { areValidCoordinates } from "./coordinates";

function isValidRover(rover) {
  return Success()
    .concat(hasValidCoordinates(rover))
    .concat(hasValidDirection(rover));
}

function hasValidCoordinates(rover) {
  return areValidCoordinates(rover.coordinates) ? Success(rover) : Failure(["invalid coordinates"]);
}

const roverDirectionRegExp = /[NESW]$/;

function hasValidDirection(rover) {
  return roverDirectionRegExp.test(rover.orientation) ? Success(rover) : Failure(["invalid direction"]);
}

export { isValidRover };
