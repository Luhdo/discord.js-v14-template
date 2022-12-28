const {
  ContextMenuCommandBuilder,
  ApplicationCommandType,
} = require("discord.js");

module.exports = {
  data: new ContextMenuCommandBuilder()
    .setName("context")
    .setType(ApplicationCommandType.Message),
  run: async (interaction) => {
    await interaction.reply({
      content: "This is a context menu interaction.",
      ephemeral: true,
    });
  },
};
