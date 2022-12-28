const { REST, Routes } = require("discord.js");
const ora = require("ora");

const config = require("../../config");

module.exports = {
  register: async (clientId, commands) => {
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
  },
};
