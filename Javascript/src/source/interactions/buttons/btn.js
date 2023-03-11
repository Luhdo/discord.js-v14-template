module.exports = {
  data: { name: "btn" },
  /**
   *
   *
   * @param {import("discord.js").ButtonInteraction} interaction
   * @return {Promise<void>}
   */
  run: async (interaction) => {
    await interaction.reply({
      content: "you just pressed a button!",
      ephemeral: true,
    });
  },
};
