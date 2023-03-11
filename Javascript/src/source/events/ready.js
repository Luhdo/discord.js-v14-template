const ora = require("ora");
const fs = require("fs");
const { config } = require("../../index.js");

const slash = require("../utilities/slash");

const botLoader = ora("Starting Discord.js Client").start();

module.exports = {
  event: "ready",
  oneTime: true,
  /**
   *
   *
   * @param {import("discord.js").Client} client
   * @return {Promise<void>}
   */
  run: async (client) => {
    botLoader.succeed(`${client.user.tag} Started`);

    // SLASH COMMANDS
    const commandFiles = fs
      .readdirSync("./src/source/commands/slash")
      .filter((file) => file.endsWith(".js"));

    // CONTEXT
    const contextFiles = fs
      .readdirSync("./src/source/commands/context")
      .filter((file) => file.endsWith(".js"));

    let commandsArray = [];
    commandFiles.forEach((file) => {
      const command = require(`../commands/slash/${file}`);
      client.slash.set(command.data.name, command);

      commandsArray.push(command);
    });
    contextFiles.forEach((file) => {
      const context = require(`../commands/context/${file}`);
      client.context.set(context.data.name, context);

      commandsArray.push(context);
    });

    let finalArray = commandsArray.map((e) => e.data.toJSON());
    slash.register(client.user.id, finalArray);

    // MENUS
    const menuFiles = fs
      .readdirSync("./src/source/interactions/menus")
      .filter((f) => f.endsWith(".js"));
    menuFiles.forEach((file) => {
      const menu = require(`../interactions/menus/${file}`);
      client.menus.set(menu.data.name, menu);
    });

    // BUTTONS
    const buttonFiles = fs
      .readdirSync("./src/source/interactions/buttons")
      .filter((f) => f.endsWith(".js"));
    buttonFiles.forEach((file) => {
      const button = require(`../interactions/buttons/${file}`);
      client.buttons.set(button.data.name, button);
    });

    // MODALS
    const modalFiles = fs
      .readdirSync("./src/source/interactions/modals")
      .filter((f) => f.endsWith(".js"));
    modalFiles.forEach((file) => {
      const modal = require(`../interactions/modals/${file}`);
      client.modals.set(modal.data.name, modal);
    });
  },
};
