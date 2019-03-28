import { renderToString } from "../stringRenderer";
import { rover } from "../../core/rover";
import { coordinates } from "../../core/coordinates";

test("returns a line for each rover with its string representation", () => {
  const rovers = [rover(1, "N", coordinates(1, 3)), rover(2, "E", coordinates(5, 1))];
  const log = renderToString({ rovers });

  expect(log).toEqual("1 3 N\n5 1 E");
});
