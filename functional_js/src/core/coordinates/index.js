function coordinates(x, y) {
  return { x, y };
}

function add(coord1, coord2) {
  return { x: coord1.x + coord2.x, y: coord1.y + coord2.y };
}

function coordinatesToString({ x, y } = {}) {
  return `${x} ${y}`;
}

function within({ upper, lower }, { x, y }) {
  return x >= lower.x && y >= lower.y && x <= upper.x && y <= upper.y;
}

export { coordinates, add, coordinatesToString, within };
