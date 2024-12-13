const { Client, Events, SlashCommandBuilder } = require('discord.js');
const { token } = require('./config.json');


const client = new Client({intents: []});

client.once(Events.ClientReady, c => {
    console.log(`Logged in as ${c.user.username}`);

});


client.login(token);
