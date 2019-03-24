import { promisify } from "util";
import fs from "fs";
import { parse } from "../parsing/parser";
import { executeMission } from "../mission-control";
import { renderToString } from "../rendering/stringRenderer";

const stat = promisify(fs.stat);
const readFile = promisify(fs.readFile);

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

function logger(...args) {
  console.log(...args);
}

export { run, logger };
