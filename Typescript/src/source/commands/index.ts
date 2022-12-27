import { commands, contextMenu } from "../../index";
import { RESTPostAPItoJSONData } from "../utilities/types";

const commandsArray: RESTPostAPItoJSONData[] = [];

import slash from "./slash/slash";
import context from "./context/context";

const COMMANDS = [slash];
const CONTEXT = [context];

COMMANDS.forEach((cmd) => {
  commands.set(cmd.data.name, cmd);
  commandsArray.push(cmd.data.toJSON());
});
CONTEXT.forEach((ctx) => {
  contextMenu.set(ctx.data.name, ctx);
  commandsArray.push(ctx.data.toJSON());
});

export default { commands, contextMenu, commandsArray };
