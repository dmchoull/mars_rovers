import { rotate } from "../orientation";

function turn(rotation, rover) {
  const newOrientation = rotate(rover.orientation, rotation);
  return { ...rover, orientation: newOrientation };
}

const turnRight = (rover) => turn(90, rover)

const turnLeft = (rover) => turn(-90, rover)

export { turnRight, turnLeft }
