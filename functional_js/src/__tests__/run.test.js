import { run } from "../run";

test("returns rendered output using the given renderer", () => {
  const result = run("./fixtures/sample.txt", JSON.stringify);

  expect(result.merge()).toMatchInlineSnapshot(
    `"{\\"plateau\\":{\\"bounds\\":{\\"lower\\":{\\"x\\":0,\\"y\\":0},\\"upper\\":{\\"x\\":5,\\"y\\":5}}},\\"rovers\\":[{\\"id\\":1,\\"orientation\\":\\"N\\",\\"coordinates\\":{\\"x\\":1,\\"y\\":3}},{\\"id\\":2,\\"orientation\\":\\"E\\",\\"coordinates\\":{\\"x\\":5,\\"y\\":1}}]}"`
  );
});

test("returns formatted errors if input is invalid", () => {
  const result = run("./fixtures/invalid_input.txt", JSON.stringify);

  expect(result.merge()).toMatchInlineSnapshot(`
"Unable to execute the mission. The following issues were detected:

 ⚠️  plateau upper right boundary coordinates are invalid
 ⚠️  command sequence contains an invalid command
"
`);
});
