import { REST, Routes } from "discord.js";
import ora from "ora";

import config from "../../config";
import { RESTPostAPItoJSONData } from "./types";

export default async function slash(
  clientId: string,
  commands: RESTPostAPItoJSONData[]
) {
  const Loader = ora("Registering slash commands");

  const rest = new REST({ version: "10" }).setToken(config.bot.token);

  try {
    const guildId = config.bot?.guildId;
    if (guildId) {
      await rest
        .put(Routes.applicationGuildCommands(clientId, guildId), {
          body: commands,
        })
        .then(() => Loader.succeed(`Loaded Guild Slash Commands`));
    } else {
      await rest
        .put(Routes.applicationCommands(clientId), { body: commands })
        .then(() => Loader.succeed(`Loaded Slash Commands`));
    }
  } catch (error) {
    Loader.fail("Could not register slash commands");
    console.error(error);
  }
}
