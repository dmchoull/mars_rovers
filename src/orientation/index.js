const orientationToDegrees = {
  "N": 0,
  "E": 90,
  "S": 180,
  "W": 270,
}

const degreesToOrientation = {
  0: "N",
  90: "E",
  180: "S",
  270: "W",
}

function rotate(fromOrientation, degrees) {
  const fromDegrees = orientationToDegrees[fromOrientation]

  const toDegrees = (fromDegrees + degrees + 360) % 360;

  return degreesToOrientation[toDegrees]
}

export { rotate }
