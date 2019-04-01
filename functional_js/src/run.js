import { readFileSync } from "fs";
import Result from "folktale/result";
import { parse } from "./core/parsing/parser";
import { validateMissionData } from "./core/validation";
import { executeMission } from "./core/mission-control";

function run(inputFilePath, renderer) {
  return readInputFile(inputFilePath).matchWith({
    Ok: ({ value: fileContent }) => runMission(fileContent, renderer),
    Error: ({ value: error }) => displayInputFileError(error),
  });
}

function readInputFile(path) {
  return Result.try(() => readFileSync(path));
}

function runMission(fileContent, renderer) {
  const data = parse(fileContent.toString());

  return validateMissionData(data).matchWith({
    Success: ({ value: data }) => renderer(executeMission(data)),
    Failure: ({ value: errors }) => displayErrors(errors),
  });
}

function displayErrors(errors) {
  const title = "Unable to execute the mission. The following issues were detected:\n";
  const errorMessages = errors.map(formatError).join("\n");
  return `${title}\n${errorMessages}\n`;
}

function formatError(e) {
  return ` ⚠️  ${e}`;
}

function displayInputFileError(error) {
  return `Problem reading input file: ${error.message}`;
}

export { run };
