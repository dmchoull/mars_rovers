const fs = require("fs");
const { promisify } = require("util");
const stat = promisify(fs.stat);
const readFile = promisify(fs.readFile);

const argv = require("yargs").option("f", {
  alias: "file",
  describe: "path to the input file",
  type: "string",
  nargs: 1,
  default: "./input.txt",
  requiresArg: true,
}).argv;

(async function run(inputFile) {
  try {
    await stat(inputFile);
  } catch (e) {
    throw new Error(`Problem reading input file from ${inputFile}`);
  }

  const data = await readFile(inputFile);
  console.log(data.toString());
})(argv.file);
