function executeMission({ plateau, rovers, commands }) {
  const executeCommandSequenceWithRovers = commandSequence => executeCommandSequence(rovers, commandSequence);
  const finalRovers = commands.map(executeCommandSequenceWithRovers);

  return {
    rovers: finalRovers,
  };
}

function executeCommandSequence(rovers, commandSequence) {
  const targetRover = findRoverById(rovers, commandSequence.targetRoverId);
  return commandSequence.commands.reduce((rov, cmd) => cmd(rov), targetRover);
}

function findRoverById(rovers, id) {
  return rovers.find(rover => rover.id === id);
}

export { executeMission };
