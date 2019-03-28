import { add } from "../coordinates";
import { unitVector } from "../orientation";
import { contains } from "../plateau";

function move(rover, plateau) {
  const newCoordinates = add(rover.coordinates, unitVector(rover.orientation));

  if (contains(plateau, newCoordinates)) {
    return { ...rover, coordinates: newCoordinates };
  } else {
    return rover;
  }
}

export { move };
