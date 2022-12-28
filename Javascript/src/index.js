const ora = require("ora");
const fs = require("fs");
const config = require("./config");

const { Client, Collection } = require("discord.js");
const _slash = require("./source/utilities/slash");

const intentsLoader = ora("Registering Intents").start();

// Checks for the intents
let finalIntents = [];
if (!Array.isArray(config.bot.intents)) {
  intentsLoader.warn(
    "Intents in config file must be in an array, default intents will be used"
  );
} else {
  finalIntents = config.bot.intents;
  intentsLoader.succeed("Loaded intents successfully from the config file");
}

const client = new Client({
  intents: finalIntents,
  ws: { properties: { browser: "Discord iOS" } },
});

module.exports.client = client;
module.exports.config = config;

// Collections
client.slash = new Collection();
client.context = new Collection();
client.menus = new Collection();
client.buttons = new Collection();
client.modals = new Collection();

const events = fs
  .readdirSync("./src/source/events")
  .filter((file) => file.endsWith(".js"));

events.forEach((event) => {
  const eventFile = require(`./source/events/${event}`);
  if (eventFile.oneTime) {
    client.once(eventFile.event, (...args) => eventFile.run(...args));
  } else {
    client.on(eventFile.event, (...args) => eventFile.run(...args));
  }
});

client.login(config.bot.token);
