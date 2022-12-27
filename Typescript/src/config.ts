import { GatewayIntentBits } from "discord.js";

export default {
  bot: {
    token: process.env.DISCORD_BOT_TOKEN!,
    intents: [GatewayIntentBits.Guilds, GatewayIntentBits.GuildMembers], //* https://ziad87.net/intents/
    guildId: "854044193811202108",
    version: "0.0.0",
  },
};
