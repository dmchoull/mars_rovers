import { coordinates, within } from "..";

test("creates x,y coordinates", () => {
  expect(coordinates(1, 2)).toEqual({ x: 1, y: 2 });
});

test("determines that coordinates are contained within a rectangular boundary", () => {
  const bounds = { lower: coordinates(0, 0), upper: coordinates(2, 3) };

  expect(within(bounds, coordinates(0, 0))).toEqual(true);
  expect(within(bounds, coordinates(2, 0))).toEqual(true);
  expect(within(bounds, coordinates(2, 3))).toEqual(true);
  expect(within(bounds, coordinates(0, 3))).toEqual(true);
});

test("determines that coordinates are outside of a rectangular boundary", () => {
  const bounds = { lower: coordinates(0, 0), upper: coordinates(2, 3) };

  expect(within(bounds, coordinates(-1, 0))).toEqual(false);
  expect(within(bounds, coordinates(3, 0))).toEqual(false);
  expect(within(bounds, coordinates(0, -1))).toEqual(false);
  expect(within(bounds, coordinates(0, 4))).toEqual(false);
});
