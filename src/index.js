import { logger, run } from "./cli";

const argv = require("yargs").option("f", {
  alias: "file",
  describe: "path to the input file",
  type: "string",
  nargs: 1,
  default: "./input.txt",
  requiresArg: true,
}).argv;

run(argv.file).then(logger);
