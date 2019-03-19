const fs = require("fs");
const { promisify } = require("util");
const stat = promisify(fs.stat);

async function validateInputFile(inputFile) {
  if (!(typeof inputFile === "string")) {
    throw new Error(`Invalid value "${inputFile}" for input file. Please provide a path to an input file.`);
  }

  try {
    await stat(inputFile);
  } catch (e) {
    throw new Error(`Problem reading input file from ${inputFile}`);
  }
}

require("yargs").command(
  "run [file]",
  "execute with the given input file",
  yargs => {
    yargs.positional("file", {
      describe: "path to the input file",
      default: "./input.txt",
    });
  },
  argv => {
    const inputFile = argv.file;
    validateInputFile(inputFile).then(() => run(inputFile));
  },
).argv;


function run(inputFile) {
  console.log(`reading ${inputFile}`);

  fs.readFile(inputFile, (err, data) => {
    if (err) {
      console.error(`error happened: ${err.toString()}`);
    }
    console.log(`read: ${data}`);
  });
}
