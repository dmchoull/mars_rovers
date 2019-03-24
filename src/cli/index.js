import { promisify } from "util";
import fs from "fs";
import { parse } from "../parsing/parser";
import { executeMission } from "../mission-control";

const stat = promisify(fs.stat);
const readFile = promisify(fs.readFile);

async function run(inputFile, renderer) {
  await verifyFileExists(inputFile);

  const fileContent = await readFile(inputFile);
  const data = parse(fileContent.toString());

  const output = executeMission(data);
  return renderer(output);
}

async function verifyFileExists(inputFile) {
  try {
    await stat(inputFile);
  } catch (e) {
    throw new Error(`Problem reading input file from ${inputFile}`);
  }
}

export { run };
