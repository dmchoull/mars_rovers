function expectFailure(validation, messageRegExp) {
  validation.matchWith({
    Success: () => fail(`expected Failure, actual: ${validation.toString()}`),
    Failure: ({ value }) => expect(value.join(",")).toMatch(messageRegExp),
  });
}

export { expectFailure };
