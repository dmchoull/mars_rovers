import { Failure, Success } from "folktale/validation";
import { move } from "../commands/moving";
import { turnLeft, turnRight } from "../commands/turning";

function isValidCommandSequence(commandSequence) {
  return containsOnlyValidCommands(commandSequence);
}

function containsOnlyValidCommands(commandSequence) {
  return commandSequence.commands.every(isValidCommand)
    ? Success(commandSequence)
    : Failure(["command sequence contains an invalid command"]);
}

function isValidCommand(cmd) {
  return [move, turnLeft, turnRight].includes(cmd);
}

export { isValidCommandSequence };
