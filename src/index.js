import fs from "fs";
import { promisify } from "util";
import { parse } from "./parsing/parser";
import { executeMission } from "./mission-control";

const stat = promisify(fs.stat);
const readFile = promisify(fs.readFile);

const argv = require("yargs").option("f", {
  alias: "file",
  describe: "path to the input file",
  type: "string",
  nargs: 1,
  default: "./input.txt",
  requiresArg: true,
}).argv;

(async function run(inputFile) {
  try {
    await stat(inputFile);
  } catch (e) {
    throw new Error(`Problem reading input file from ${inputFile}`);
  }

  const fileContent = await readFile(inputFile);

  const data = parse(fileContent.toString());

  const { rovers } = executeMission(data);

  const report = rovers.map(roverToString).join("\n");
  console.log(report);
})(argv.file);

function roverToString(rover) {
  return `${rover.coordinates.x} ${rover.coordinates.y} ${rover.orientation}`;
}
