const {
  SlashCommandBuilder,
  ComponentType,
  ButtonStyle,
} = require("discord.js");

module.exports = {
  data: new SlashCommandBuilder()
    .setName("slash")
    .setDescription("slash-handler Test Command"),
  run: async (interaction) => {
    await interaction.reply({
      content: "you should star [this](https://github.com/Luhdo)",
      embeds: [
        {
          title: `${interaction.client.user?.tag} slash-handler`,
          url: "https://github.com/enjoyablee/slash-handler",
          description:
            "Just trying out slash commands using [slash-handler](https://github.com/enjoyablee/slash-handler)!",
        },
      ],
      components: [
        {
          type: ComponentType.ActionRow,
          components: [
            {
              type: ComponentType.Button,
              label: undefined,
              customId: "btn",
              style: ButtonStyle.Secondary,
              emoji: "<:space:1033134191082217483>",
              disabled: false,
            },
          ],
        },
        {
          type: ComponentType.ActionRow,
          components: [
            {
              type: ComponentType.StringSelect,
              label: "select",
              customId: "select",
              emoji: "🚌",
              disabled: false,
              options: [
                { label: "Channel Select", value: "channel", emoji: "#️⃣" },
                { label: "Role Select", value: "role", emoji: "🎭" },
                { label: "User Select", value: "user", emoji: "👤" },
                { label: "Mentionable Select", value: "mention", emoji: "📎" },
                {
                  label: "Open Modal",
                  value: "modal",
                  emoji: "📱",
                  description: "opens a modal",
                },
              ],
            },
          ],
        },
      ],
    });
  },
};
