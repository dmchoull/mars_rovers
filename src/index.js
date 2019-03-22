import fs from "fs";
import { promisify } from "util";
import { parse } from "./parsing/parser";
import { executeMission } from "./mission-control";
import { renderToString } from "./rendering/stringRenderer";

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

async function run(inputFile) {
  await verifyFileExists(inputFile);

  const fileContent = await readFile(inputFile);
  const data = parse(fileContent.toString());

  const output = executeMission(data);
  return renderToString(output);
}

async function verifyFileExists(inputFile) {
  try {
    await stat(inputFile);
  } catch (e) {
    throw new Error(`Problem reading input file from ${inputFile}`);
  }
}

run(argv.file).then(console.log);

export { run };
