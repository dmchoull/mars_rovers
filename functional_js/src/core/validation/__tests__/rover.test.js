import { Success, Failure } from "folktale/validation";
import { rover } from "../../rover";
import { coordinates } from "../../coordinates";
import { isValidRover } from "../rover";

test("returns success for a valid rover", () => {
  const validRover = rover(1, "N", coordinates(1, 2));
  expect(isValidRover(validRover)).toEqual(Success(validRover));
});

test.each`
  invalidCoordinates
  ${coordinates(NaN, 2)}
  ${coordinates(1, null)}
  ${coordinates(1, -2)}
  ${coordinates(-1, 2)}
  ${undefined}
`("identifies rover with coordinates $invalidCoordinates as invalid", ({ invalidCoordinates }) => {
  expect(isValidRover(rover(1, "N", invalidCoordinates))).toEqual(Failure(["invalid coordinates"]));
});

test.each`
  invalidDirection
  ${"X"}
  ${90}
  ${undefined}
`("identifies rover with direction $invalidDirection as invalid", ({ invalidDirection }) => {
  expect(isValidRover(rover(1, invalidDirection, coordinates(1, 2)))).toEqual(Failure(["invalid direction"]));
});

test("returns multiple failures", () => {
  const invalidRover = rover(1, "X", coordinates(1, -2));
  expect(isValidRover(invalidRover)).toEqual(Failure(["invalid coordinates", "invalid direction"]));
});
