module.exports = {
  data: { name: "btn" },
  run: async (interaction) => {
    await interaction.reply({
      content: "you just pressed a button!",
      ephemeral: true,
    });
  },
};
