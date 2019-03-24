import { add } from "../coordinates";
import { unitVector } from "../orientation";

function move(rover) {
  return { ...rover, coordinates: add(rover.coordinates, unitVector(rover.orientation)) };
}

export { move };
