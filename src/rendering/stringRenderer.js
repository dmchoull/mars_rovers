import { roverToString } from "../rover";

function renderToString({ rovers }) {
  return rovers.map(roverToString).join("\n");
}

export { renderToString };
