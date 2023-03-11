const {
  ContextMenuCommandBuilder,
  ApplicationCommandType,
} = require("discord.js");

module.exports = {
  data: new ContextMenuCommandBuilder()
    .setName("context")
    .setType(ApplicationCommandType.Message),
  /**
   *
   *
   * @param {import("discord.js").ContextMenuCommandInteraction} interaction
   * @return {Promise<void>}
   */
  run: async (interaction) => {
    await interaction.reply({
      content: "This is a context menu interaction.",
      ephemeral: true,
    });
  },
};
