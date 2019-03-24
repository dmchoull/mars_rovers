import { move } from "./moving";
import { turnLeft, turnRight } from "./turning";

function commandSequence(targetRoverId, commands) {
  return {
    targetRoverId,
    commands: commands.map(commandFunction),
  };
}

function commandFunction(commandName) {
  switch (commandName) {
    case "M":
      return move;
    case "L":
      return turnLeft;
    case "R":
      return turnRight;
  }
}

export { commandSequence };
