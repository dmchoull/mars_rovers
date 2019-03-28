function executeMission({ plateau, rovers, commands }) {
  const executeCommandSequenceWithRovers = executeCommandSequence(rovers, plateau);
  const finalRovers = commands.map(executeCommandSequenceWithRovers);

  return {
    rovers: finalRovers,
  };
}

function executeCommandSequence(rovers, plateau) {
  return function(commandSequence) {
    const targetRover = findRoverById(rovers, commandSequence.targetRoverId);
    return commandSequence.commands.reduce((rov, cmd) => cmd(rov, plateau), targetRover);
  };
}

function findRoverById(rovers, id) {
  return rovers.find(rover => rover.id === id);
}

export { executeMission };
