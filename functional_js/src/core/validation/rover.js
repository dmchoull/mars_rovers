import { Failure, Success } from "folktale/validation";

function isValidRover(rover) {
  return Success()
    .concat(hasValidCoordinates(rover))
    .concat(hasValidDirection(rover));
}

function hasValidCoordinates(rover) {
  const { x, y } = rover.coordinates || {};
  const validCoordinates = x && y && x >= 0 && y >= 0;
  return validCoordinates ? Success(rover) : Failure(["invalid coordinates"]);
}

const roverDirectionRegExp = /[NESW]$/;

function hasValidDirection(rover) {
  return roverDirectionRegExp.test(rover.orientation) ? Success(rover) : Failure(["invalid direction"]);
}

export { isValidRover };
