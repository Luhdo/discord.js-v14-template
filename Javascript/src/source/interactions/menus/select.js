const {
  StringSelectMenuInteraction,
  ComponentType,
  TextInputStyle,
} = require("discord.js");

module.exports = {
  data: { name: "select" },
  /**
   *
   *
   * @param {import("discord.js").AnySelectMenuInteraction} interaction
   * @return {Promise<void>}
   */
  run: async (interaction) => {
    const value = interaction.values[0];
    await interaction.deferReply({ ephemeral: true });

    switch (value) {
      case "channel":
        await interaction.editReply({
          components: [
            {
              type: ComponentType.ActionRow,
              components: [
                { type: ComponentType.ChannelSelect, customId: "selectCh" },
              ],
            },
          ],
        });
        break;
      case "role":
        await interaction.editReply({
          components: [
            {
              type: ComponentType.ActionRow,
              components: [
                { type: ComponentType.RoleSelect, customId: "selectR" },
              ],
            },
          ],
        });
        break;

      case "user":
        await interaction.editReply({
          components: [
            {
              type: ComponentType.ActionRow,
              components: [
                { type: ComponentType.UserSelect, customId: "selectU" },
              ],
            },
          ],
        });
        break;

      case "mention":
        await interaction.editReply({
          components: [
            {
              type: ComponentType.ActionRow,
              components: [
                {
                  type: ComponentType.MentionableSelect,
                  customId: "selectM",
                },
              ],
            },
          ],
        });
        break;

      case "text":
        interaction.showModal({
          customId: "mdl",
          title: "Show Modal!",
          components: [
            {
              type: ComponentType.TextInput,
              components: [
                {
                  customId: "tst",
                  label: "tst",
                  type: ComponentType.TextInput,
                  style: TextInputStyle.Short,
                },
              ],
            },
          ],
        });
        break;

      default:
        break;
    }
  },
};
