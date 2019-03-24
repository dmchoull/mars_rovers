import { renderToString } from "./stringRenderer";

function selectRenderer(format) {
  switch (format) {
    case "plain":
      return renderToString;
    case "json":
      return JSON.stringify;
    default:
      throw new Error(`Unsupported format "${format}"`);
  }
}

export { selectRenderer };
