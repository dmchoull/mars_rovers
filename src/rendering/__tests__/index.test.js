import { selectRenderer } from "../index";
import { renderToString } from "../stringRenderer";

test("selects renderer for plain text", () => {
  const renderer = selectRenderer("plain");
  expect(renderer).toEqual(renderToString);
});

test("selects renderer for JSON", () => {
  const renderer = selectRenderer("json");
  expect(renderer).toEqual(JSON.stringify);
});

test("throws an error for unsupported formats", () => {
  expect(() => {
    selectRenderer("csv");
  }).toThrow(/Unsupported format/);
});
