function coordinates(x, y) {
  return { x, y };
}

function add(coord1, coord2) {
  return { x: coord1.x + coord2.x, y: coord1.y + coord2.y };
}

function coordinatesToString({ x, y }) {
  return `${x} ${y}`;
}

export { coordinates, add, coordinatesToString };
