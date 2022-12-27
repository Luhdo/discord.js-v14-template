import {
  StringSelectMenuInteraction,
  ComponentType,
  TextInputStyle,
} from "discord.js";

export const data = { name: "select" };
export async function run(interaction: StringSelectMenuInteraction) {
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
              { type: ComponentType.MentionableSelect, customId: "selectM" },
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
}

export default { data, run };
