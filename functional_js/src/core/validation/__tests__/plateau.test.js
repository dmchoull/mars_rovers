import { Success } from "folktale/validation";
import { coordinates } from "../../coordinates";
import { plateau } from "../../plateau";
import { isValidPlateau } from "../plateau";
import { expectFailure } from "../../../../test/utils";

test("returns success for valid plateau line", () => {
  const validPlateau = plateau(coordinates(5, 5));
  expect(isValidPlateau(validPlateau)).toEqual(Success(validPlateau));
});

test.each`
  invalidCoordinates
  ${coordinates(NaN, 2)}
  ${coordinates(1, null)}
  ${coordinates(1, -2)}
  ${coordinates(-1, 2)}
  ${undefined}
`("identifies plateau with coordinates $invalidCoordinates as invalid", ({ invalidCoordinates }) => {
  const validation = isValidPlateau(plateau(invalidCoordinates));

  expectFailure(validation, /plateau upper right boundary coordinates ".+" are invalid/);
});

test("considers 0, 0 coordinates to be valid", () => {
  const validPlateau = plateau(coordinates(0, 0));
  expect(isValidPlateau(validPlateau)).toEqual(Success(validPlateau));
});
