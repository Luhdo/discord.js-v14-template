import ora from "ora";

import { client } from "../../index";
import commands from "../commands";
import slash from "../utilities/slash";

const Loader = ora("Starting Discord.js Client").start();

client.on("ready", async () => {
  Loader.succeed(`${client.user?.tag} Started`);

  await slash(client.user?.id!, commands.commandsArray);
});
