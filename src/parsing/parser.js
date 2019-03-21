import { rover } from "../rover";
import { coordinates } from "../coordinates";

function parse(input) {
  // TODO: input validation
  const { plateauLine, roverLines, commandLines } = splitInput(input);

  const plateau = parsePlateau(plateauLine);
  const rovers = roverLines.map(parseRover);
  const commands = commandLines.map(parseCommandSequence);

  return {
    plateau,
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

function parsePlateau(input) {
  const data = input.split(" ");
  return { width: parseInt(data[0]), height: parseInt(data[1]) };
}

function parseRover(input, index) {
  const data = input.split(" ");

  const id = index
  const coords = coordinates(parseInt(data[0]), parseInt(data[1]));
  const orientation = data[2];

  return rover(id, orientation, coords)
}

function parseCommandSequence(input, index) {
  const data = input.split("");
  return { targetRover: index + 1, commands: data };
}

export { parse };
