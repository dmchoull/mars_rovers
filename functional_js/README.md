# Mars Rovers in FP style JavaScript

This is my attempt at implementing the Mars Rovers problem in a functional programming style using JavaScript.

## Goals

- [Simplicity](https://www.infoq.com/presentations/Simple-Made-Easy) (Making modular code that does one thing, with no interleaving of multiple concerns)
- Learning how to maintain abstractions and encapsulation outside of OOP
- Getting used to writing code as pure functions operating on data structures
- Practice with some FP concepts (Monads, currying, composition, declarative code, point-free style, etc)
- Write a non-trivial functional program

## Running

The default behaviour is to look for a file called `input.txt` in the current directory.

```bash
yarn start
```

To specify an input file use the `-f` argument:

```bash
yarn start -f ./fixtures/sample.txt
```

By default, output is logged to the console in the format given in the problem description. JSON output is also support via the `--format` argument:

```bash
yarn start -f ./fixtures/sample.txt --format json
```

## Testing

Run `yarn test`

TODO: add a script to perform end-to-end tests against the input files in the `fixtures` directory.
