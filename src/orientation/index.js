import { coordinates } from "../coordinates";

const orientationToDegrees = {
  N: 0,
  E: 90,
  S: 180,
  W: 270,
};

const degreesToOrientation = {
  0: "N",
  90: "E",
  180: "S",
  270: "W",
};

function rotate(fromOrientation, degrees) {
  const fromDegrees = orientationToDegrees[fromOrientation];

  const toDegrees = (fromDegrees + degrees + 360) % 360;

  return degreesToOrientation[toDegrees];
}

const orientationUnitVectors = {
  N: coordinates(0, 1),
  E: coordinates(1, 0),
  S: coordinates(0, -1),
  W: coordinates(-1, 0),
};

function unitVector(orientation) {
  return orientationUnitVectors[orientation];
}

function orientationToString(orientation) {
  return orientation;
}

export { rotate, unitVector, orientationToString };
