import { coordinatesToString } from "../coordinates";
import { orientationToString } from "../orientation";

function rover(id, orientation, coordinates) {
  return { id, orientation, coordinates };
}

function roverToString({ coordinates, orientation }) {
  return `${coordinatesToString(coordinates)} ${orientationToString(orientation)}`;
}

export { rover, roverToString };
