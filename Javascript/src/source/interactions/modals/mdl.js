module.exports = {
  data: { name: "mdl" },
  /**
   *
   *
   * @param {import("discord.js").ModalSubmitInteraction} interaction
   * @return {Promise<void>}
   */
  run: async (interaction) => {
    const value = interaction.fields.getTextInputValue("tst");
    await interaction.editReply({
      content: `this was a modal, value: ${value}`,
    });
  },
};
