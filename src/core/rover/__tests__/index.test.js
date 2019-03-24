import { rover } from "../index";

test("creates a rover", () => {
  const r = rover(100, "N", { x: 1, y: 2 });

  expect(r).toEqual({
    id: 100,
    orientation: "N",
    coordinates: { x: 1, y: 2 },
  });
});
