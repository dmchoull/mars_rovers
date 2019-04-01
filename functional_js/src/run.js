import { readFileSync } from "fs";
import Result from "folktale/result";
import { parse } from "./core/parsing/parser";
import { validateMissionData } from "./core/validation";
import { executeMission } from "./core/mission-control";

function run(inputFilePath, renderer) {
  return readInputFile(inputFilePath)
    .chain(parseInput)
    .chain(validate)
    .chain(execute)
    .map(renderer)
    .mapError(displayErrors);
}

function readInputFile(path) {
  return Result.try(() => readFileSync(path)).mapError(e => [e]);
}

function parseInput(fileContent) {
  return Result.of(parse(fileContent.toString()));
}

function validate(missionData) {
  return Result.fromValidation(validateMissionData(missionData));
}

function execute(missionData) {
  return Result.of(executeMission(missionData));
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
