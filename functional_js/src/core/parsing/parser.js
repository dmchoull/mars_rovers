import { plateau } from "../plateau";
import { rover } from "../rover";
import { coordinates } from "../coordinates";
import { commandSequence } from "../commands";

function parse(input) {
  return parseInputLines(splitInput(input));
}

function splitInput(input) {
  const lines = input.split("\n").filter(Boolean);
  const [plateauLine, ...remainingLines] = lines;

  const roverLines = remainingLines.filter(isEvenNumberedLine);
  const commandLines = remainingLines.filter(isOddNumberedLine);

  return { plateauLine, roverLines, commandLines };
}

const isEvenNumberedLine = (_line, index) => index % 2 === 0;
const isOddNumberedLine = (_line, index) => index % 2 !== 0;

function parseInputLines({ plateauLine, roverLines, commandLines }) {
  const plateau = parsePlateau(plateauLine);
  const rovers = roverLines.map(parseRover);
  const commands = commandLines.map(parseCommandSequence);

  return {
    plateau,
    rovers,
    commands,
  };
}

function parsePlateau(input) {
  const data = input.split(" ");
  return plateau(coordinates(parseInt(data[0]), parseInt(data[1])));
}

function parseRover(input, index) {
  const data = input.split(" ");

  const id = index + 1;
  const coords = coordinates(parseInt(data[0]), parseInt(data[1]));
  const orientation = data[2];

  return rover(id, orientation, coords);
}

function parseCommandSequence(input, index) {
  const targetRoverId = index + 1;
  const commands = input.split("");

  return commandSequence(targetRoverId, commands);
}

export { parse };
