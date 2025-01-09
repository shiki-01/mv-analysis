const { Client, GatewayIntentBits } = require('discord.js');
const client = new Client({
  intents: [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildMessages,
    GatewayIntentBits.MessageContent
  ]
});

require('dotenv').config();

client.once('ready', () => {
  console.log(`${client.user.tag} が起動しました`);
});

client.login(process.env.DISCORD_TOKEN);