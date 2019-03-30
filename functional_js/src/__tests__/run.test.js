import "@babel/polyfill";
import { run } from "../run";

test("returns rendered output using the given renderer", async () => {
  const output = await run("./fixtures/sample.txt", JSON.stringify);

  expect(output).toMatchInlineSnapshot(
    `"{\\"plateau\\":{\\"bounds\\":{\\"lower\\":{\\"x\\":0,\\"y\\":0},\\"upper\\":{\\"x\\":5,\\"y\\":5}}},\\"rovers\\":[{\\"id\\":1,\\"orientation\\":\\"N\\",\\"coordinates\\":{\\"x\\":1,\\"y\\":3}},{\\"id\\":2,\\"orientation\\":\\"E\\",\\"coordinates\\":{\\"x\\":5,\\"y\\":1}}]}"`
  );
});
