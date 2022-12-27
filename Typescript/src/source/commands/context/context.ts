import { ContextMenuCommandBuilder, ApplicationCommandType } from "discord.js";

import type { ContextMenuCommandInteraction } from "discord.js";

export const data = new ContextMenuCommandBuilder()
  .setName("context")
  .setType(ApplicationCommandType.Message);

export async function run(interaction: ContextMenuCommandInteraction) {
  await interaction.reply({
    content: "This is a context menu interaction.",
    ephemeral: true,
  });
}

export default { data, run };
