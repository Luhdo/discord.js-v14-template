import type { ButtonInteraction } from "discord.js";

export const data = { name: "btn" };
export async function run(interaction: ButtonInteraction) {
  await interaction.reply({
    content: "you just pressed a button!",
    ephemeral: true,
  });
}

export default { data, run };
