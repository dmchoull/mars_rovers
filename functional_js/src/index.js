import { run } from "./run";
import { logger } from "./logging";
import { selectRenderer } from "./rendering";

const argv = require("yargs")
  .option("f", {
    alias: "file",
    describe: "path to the input file",
    type: "string",
    nargs: 1,
    default: "./input.txt",
    requiresArg: true,
  })
  .option("format", {
    describe: "output format",
    type: "string",
    nargs: 1,
    choices: ["plain", "json"],
    default: "plain",
    requiresArg: true,
  }).argv;

const result = run(argv.file, selectRenderer(argv.format));

logger(result.merge());

result.matchWith({ Ok: () => {}, Error: () => process.exit(1) });
