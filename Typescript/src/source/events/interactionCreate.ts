import { client } from "../../index";

import commands from "../commands";
import interactions from "../interactions";
import { commandFileProps, componentFileProps } from "../utilities/types";

client.on("interactionCreate", async (i) => {
  if (i.isChatInputCommand()) {
    const commandCheck = commands.commands.get(
      i.commandName
    ) as commandFileProps;

    if (!commandCheck) {
      return console.log(`Could not find slashCommand " '${i.commandName}'`);
    } else {
      await commandCheck.run(i);
    }
  } else if (i.isContextMenuCommand()) {
    const contextCheck = commands.contextMenu.get(
      i.commandName
    ) as commandFileProps;

    if (!contextCheck) {
      return console.log(
        `Could not find ContextMenuCommand " '${i.commandName}'`
      );
    } else {
      await contextCheck.run(i);
    }
  } else if (i.isButton()) {
    const buttonCheck = interactions.buttons.get(
      i.customId
    ) as componentFileProps;

    if (!buttonCheck) {
      return console.log(`Could not find Button " '${i.customId}'`);
    } else {
      await buttonCheck.run(i);
    }
  } else if (i.isModalSubmit()) {
    const checkModal = interactions.modals.get(
      i.customId
    ) as componentFileProps;

    if (!checkModal) {
      return console.log(`Could not find ModalSubmit " '${i.customId}'`);
    } else {
      await checkModal.run(i);
    }
  } else if (i.isAnySelectMenu()) {
    const checkMenu = interactions.menus.get(i.customId) as componentFileProps;

    if (!checkMenu) {
      return console.log(`Could not find SelectMenu " '${i.customId}'`);
    } else {
      await checkMenu.run(i);
    }
  }
});
