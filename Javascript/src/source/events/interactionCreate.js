module.exports = {
  event: "interactionCreate",
  oneTime: false,
  run: async (i) => {
    if (i.isChatInputCommand()) {
      const commandCheck = i.client.slash.get(i.commandName);
      await Run(commandCheck, i, "SlashCommand");
    } else if (i.isContextMenuCommand()) {
      const contextCheck = i.client.context.get(i.commandName);
      await Run(contextCheck, i, "ContextMenuCommand");
    } else if (i.isButton()) {
      const buttonCheck = i.client.buttons.get(i.customId);
      await Run(buttonCheck, i, "Button");
    } else if (i.isModalSubmit()) {
      const checkModal = i.client.modals.get(i.customId);
      await Run(checkModal, i, "ModalSubmit");
    } else if (i.isAnySelectMenu()) {
      const checkMenu = i.client.menus.get(i.customId);
      await Run(checkMenu, i, "SelectMenu");
    }
  },
};

async function Run(interactionFile, i, type) {
  interactionFile
    ? await interactionFile.run(i)
    : console.error(
        `Could not find ${type} " '${i.customId || i.commandName}'`
      );
}
