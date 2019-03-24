import { coordinates } from "..";

test("creates x,y coordinates", () => {
  expect(coordinates(1, 2)).toEqual({ x: 1, y: 2 });
});
