import { Success } from "folktale/validation";
import { rover } from "../../rover";
import { plateau } from "../../plateau";
import { coordinates } from "../../coordinates";
import { isValidRover } from "../rover";
import { expectFailure } from "../../../../test/utils";

const validPlateau = plateau(coordinates(3, 4));

test("returns success for a valid rover", () => {
  const validRover = rover(1, "N", coordinates(1, 2));

  const validation = isValidRover(validPlateau, validRover);

  expect(validation).toEqual(Success(validRover));
});

test.each`
  invalidCoordinates
  ${coordinates(NaN, 2)}
  ${coordinates(1, null)}
  ${coordinates(1, -2)}
  ${coordinates(-1, 2)}
  ${undefined}
`("identifies rover with coordinates $invalidCoordinates as invalid", ({ invalidCoordinates }) => {
  const validation = isValidRover(validPlateau, rover(1, "N", invalidCoordinates));

  expectFailure(validation, /invalid coordinates/);
});

test.each`
  invalidDirection
  ${"X"}
  ${90}
  ${undefined}
`("identifies rover with direction $invalidDirection as invalid", ({ invalidDirection }) => {
  const validation = isValidRover(validPlateau, rover(1, invalidDirection, coordinates(1, 2)));

  expectFailure(validation, /invalid direction/);
});

test("considers 0, 0 coordinates to be valid", () => {
  const validRover = rover(1, "N", coordinates(0, 0));
  const validation = isValidRover(validPlateau, validRover);

  expect(validation).toEqual(Success(validRover));
});

test("returns a failure if the rover is outside of the plateau bounds", () => {
  const validation = isValidRover(validPlateau, rover(1, "N", coordinates(3, 5)));

  expectFailure(validation, /rover position "3 5" is outside of the plateau bounds/);
});

test("returns success for the rover if the plateau has invalid coordinates", () => {
  const invalidPlateau = plateau(coordinates(5, NaN));

  const validRover = rover(1, "N", coordinates(3, 5));
  const validation = isValidRover(invalidPlateau, validRover);

  expect(validation).toEqual(Success(validRover));
});

test("returns multiple failures", () => {
  const invalidRover = rover(1, "X", coordinates(1, -2));

  const validation = isValidRover(validPlateau, invalidRover);

  expectFailure(validation, /invalid coordinates.+,invalid direction/);
});
