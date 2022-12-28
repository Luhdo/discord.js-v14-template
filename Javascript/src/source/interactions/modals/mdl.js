module.exports = {
  data: { name: "mdl" },
  run: async (interaction) => {
    const value = interaction.fields.getTextInputValue("tst");
    await interaction.editReply({
      content: `this was a modal, value: ${value}`,
    });
  },
};
