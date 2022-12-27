import { ModalSubmitInteraction } from "discord.js";

export const data = { name: "mdl" };
export async function run(interaction: ModalSubmitInteraction) {
  const value = interaction.fields.getTextInputValue("tst");
  await interaction.editReply({
    content: `this was a modal, value: ${value}`,
  });
}

export default { data, run };
