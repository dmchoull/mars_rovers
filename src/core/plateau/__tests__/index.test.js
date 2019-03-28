import { plateau, contains } from "..";
import { coordinates } from "../../coordinates";

test("creates a plateau", () => {
  expect(plateau(coordinates(5, 6))).toEqual({
    bounds: {
      lower: coordinates(0, 0),
      upper: coordinates(5, 6),
    },
  });
});

test("returns true if the coordinates are within the plateau bounds", () => {
  const p = plateau(coordinates(2, 3));

  expect(contains(p, coordinates(1, 1))).toEqual(true);
});

test("returns false if the coordinates are outside of the plateau bounds", () => {
  const p = plateau(coordinates(2, 3));

  expect(contains(p, coordinates(2, 4))).toEqual(false);
});
