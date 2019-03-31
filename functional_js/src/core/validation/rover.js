import { curry } from "folktale/core/lambda";
import { Failure, Success } from "folktale/validation";
import { areValidCoordinates } from "./coordinates";
import { contains } from "../plateau";

const isValidRover = curry(2, (plateau, rover) =>
  Success()
    .concat(hasValidCoordinates(rover, plateau))
    .concat(hasValidDirection(rover))
);

function hasValidCoordinates(rover, plateau) {
  if (!areValidCoordinates(rover.coordinates)) {
    return Failure(["invalid coordinates"]);
  }

  return isWithinPlateauBounds(rover, plateau);
}

function isWithinPlateauBounds(rover, plateau) {
  return !areValidCoordinates(plateau.bounds.upper) || contains(plateau, rover.coordinates)
    ? Success(rover)
    : Failure(["rover position is outside of the plateau bounds"]);
}

const roverDirectionRegExp = /[NESW]$/;

function hasValidDirection(rover) {
  return roverDirectionRegExp.test(rover.orientation) ? Success(rover) : Failure(["invalid direction"]);
}

export { isValidRover };
