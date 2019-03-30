import { curry } from "folktale/core/lambda";

function executeMission({ plateau, rovers, commands }) {
  return executeEachCommandSequence({ plateau, rovers }, commands);
}

function executeEachCommandSequence({ plateau, rovers }, [commandSequence, ...remainingCommands]) {
  if (!commandSequence) {
    return { plateau, rovers };
  }

  const executeIfTargetRover = executeCommandSequence(plateau, commandSequence);
  const updatedRovers = rovers.map(executeIfTargetRover);

  return executeEachCommandSequence({ plateau, rovers: updatedRovers }, remainingCommands);
}

const executeCommandSequence = curry(3, (plateau, commandSequence, rover) => {
  if (rover.id === commandSequence.targetRoverId) {
    return executeCommandsOnRover(plateau, commandSequence, rover);
  } else {
    return rover;
  }
});

function executeCommandsOnRover(plateau, commandSequence, rover) {
  return commandSequence.commands.reduce(executeCommand(plateau), rover);
}

const executeCommand = curry(3, (plateau, rover, command) => command(rover, plateau));

export { executeMission };
