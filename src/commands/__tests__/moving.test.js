import { move } from "../moving";
import { rover } from "../../rover";
import { coordinates } from "../../coordinates";

test.each`
  orientation | initialCoords         | finalCoords
  ${"N"}      | ${coordinates(10, 5)} | ${coordinates(10, 6)}
  ${"E"}      | ${coordinates(10, 5)} | ${coordinates(11, 5)}
  ${"S"}      | ${coordinates(10, 5)} | ${coordinates(10, 4)}
  ${"W"}      | ${coordinates(10, 5)} | ${coordinates(9, 5)}
`("moves forward heading $orientation", ({ orientation, initialCoords, finalCoords }) => {
  const initialRover = rover(1, orientation, initialCoords);

  const movedRover = move(initialRover);

  expect(movedRover).toEqual(rover(1, orientation, finalCoords));
});
