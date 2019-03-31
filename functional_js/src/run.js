import fs from "fs";
import { promisify } from "util";
import { parse } from "./core/parsing/parser";
import { validateMissionData } from "./core/validation";
import { executeMission } from "./core/mission-control";

const stat = promisify(fs.stat);
const readFile = promisify(fs.readFile);

async function run(inputFile, renderer) {
  await verifyFileExists(inputFile);

  const fileContent = await readFile(inputFile);
  const data = parse(fileContent.toString());

  return validateMissionData(data).matchWith({
    Success: ({ value: data }) => renderer(executeMission(data)),
    Failure: ({ value: errors }) => displayErrors(errors),
  });
}

async function verifyFileExists(inputFile) {
  try {
    await stat(inputFile);
  } catch (e) {
    throw new Error(`Problem reading input file from ${inputFile}`);
  }
}

function displayErrors(errors) {
  const title = "Unable to execute the mission. The following issues were detected:\n";
  const errorMessages = errors.map(formatError).join("\n");
  return `${title}\n${errorMessages}\n`;
}

function formatError(e) {
  return ` ⚠️  ${e}`;
}

export { run };
