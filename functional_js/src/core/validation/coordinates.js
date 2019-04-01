function areValidCoordinates({ x, y } = {}) {
  return isDefined(x) && isDefined(y) && x >= 0 && y >= 0;
}

function isDefined(o) {
  return o !== undefined && o !== null;
}

export { areValidCoordinates };
