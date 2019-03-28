import "@babel/polyfill";
import { run } from "../run";

test("returns rendered output using the given renderer", async () => {
  const output = await run("./fixtures/sample-input.txt", JSON.stringify);

  expect(output).toMatchInlineSnapshot(
    `"{\\"rovers\\":[{\\"id\\":1,\\"orientation\\":\\"N\\",\\"coordinates\\":{\\"x\\":1,\\"y\\":3}},{\\"id\\":2,\\"orientation\\":\\"E\\",\\"coordinates\\":{\\"x\\":5,\\"y\\":1}}]}"`
  );
});
