import { curry } from "folktale/core/lambda";
import { rotate } from "../orientation";

const turn = curry(2, (rotation, rover) => {
  const newOrientation = rotate(rover.orientation, rotation);
  return { ...rover, orientation: newOrientation };
});

const turnRight = turn(90);

const turnLeft = turn(-90);

export { turnRight, turnLeft };
