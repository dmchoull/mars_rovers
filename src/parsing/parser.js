function parse(input) {
  // TODO: input validation
  const { plateauLine, roverLines, commandLines } = splitInput(input);

  const rovers = roverLines.map(rover);
  const commands = commandLines.map(commandSequence);

  return {
    plateau: plateau(plateauLine),
    rovers,
    commands,
  };
}

function splitInput(input) {
  const lines = input.split("\n").filter(Boolean);
  const [plateauLine, ...remainingLines] = lines;
  
  const roverLines = remainingLines.filter((_line, index) => index % 2 === 0);
  const commandLines = remainingLines.filter((_line, index) => index % 2 !== 0);

  return { plateauLine, roverLines, commandLines };
}

function plateau(input) {
  const data = input.split(" ");
  return { width: parseInt(data[0]), height: parseInt(data[1]) };
}

function rover(input, index) {
  const data = input.split(" ");
  return { id: index + 1, orientation: data[2], coordinates: { x: parseInt(data[0]), y: parseInt(data[1]) } };
}

function commandSequence(input, index) {
  const data = input.split("");
  return { targetRover: index + 1, commands: data };
}

export { parse };
