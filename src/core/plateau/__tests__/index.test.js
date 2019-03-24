import { plateau } from "..";
import { coordinates } from "../../coordinates";

test("creates a plateau", () => {
  expect(plateau(coordinates(5, 6))).toEqual({
    bounds: {
      lower: coordinates(0, 0),
      upper: coordinates(5, 6),
    },
  });
});
