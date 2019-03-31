function areValidCoordinates({ x, y } = {}) {
  return x && y && x >= 0 && y >= 0;
}

export { areValidCoordinates };
