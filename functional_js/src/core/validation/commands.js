import { Success, Failure } from "folktale/validation";

function isValidCommandSequence(commandLine) {
  return containsOnlyValidCommands(commandLine);
}

const validCommandsRegExp = /^[MLR]+$/;

function containsOnlyValidCommands(commandLine) {
  return validCommandsRegExp.test(commandLine) ? Success(commandLine) : Failure(["invalid command sequence"]);
}

export { isValidCommandSequence };
