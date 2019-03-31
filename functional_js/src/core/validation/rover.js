import { Failure, Success } from "folktale/validation";

function isValidRover(roverLine) {
  return Success()
    .concat(hasValidCoordinates(roverLine))
    .concat(hasValidDirection(roverLine));
}

const roverCoordinatesRegExp = /^\d+\s+\d+/;

function hasValidCoordinates(roverLine) {
  return roverCoordinatesRegExp.test(roverLine) ? Success(roverLine) : Failure(["invalid coordinates"]);
}

const roverDirectionRegExp = /([NESW])$/;

function hasValidDirection(roverLine) {
  return roverDirectionRegExp.test(roverLine) ? Success(roverLine) : Failure(["invalid direction"]);
}

export { isValidRover };
