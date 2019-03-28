import { turnLeft, turnRight } from "../turning";
import { rover } from "../../rover";
import { coordinates } from "../../coordinates";

test.each`
  initial | expected
  ${"N"}  | ${"E"}
  ${"E"}  | ${"S"}
  ${"S"}  | ${"W"}
  ${"W"}  | ${"N"}
`("turning right from $initial to $expected", ({ initial, expected }) => {
  const initialRover = rover(1, initial, coordinates(1, 2));
  const turnedRover = turnRight(initialRover);

  expect(turnedRover).toEqual(rover(1, expected, coordinates(1, 2)));
});

test.each`
  initial | expected
  ${"N"}  | ${"W"}
  ${"W"}  | ${"S"}
  ${"S"}  | ${"E"}
  ${"E"}  | ${"N"}
`("turning left from $initial to $expected", ({ initial, expected }) => {
  const initialRover = rover(1, initial, coordinates(1, 2));
  const turnedRover = turnLeft(initialRover);

  expect(turnedRover).toEqual(rover(1, expected, coordinates(1, 2)));
});
