const { Client, Events, SlashCommandBuilder } = require('discord.js');
const { token } = require('./config.json');


const client = new Client({intents: []});

client.once(Events.ClientReady, c => {
    console.log(`Logged in as ${c.user.username}`);
    
    const ping = new SlashCommandBuilder()
        .setName("ping")
        .setDescription("Replies with ping!");

    const help = new SlashCommandBuilder()
        .setName("help")
        .setDescription("Replies with list of commands");

    const playlist = new SlashCommandBuilder()
        .setName("playlist")
        .setDescription("Plays a designated playlist from the link");

    client.application.commands.create(ping);
    client.application.commands.create(help);
    client.application.commands.create(playlist);
});

client.on(Events.InteractionCreate, interaction => {
    if(interaction.commandName === "ping") {
        interaction.reply("Pong!");
    }

    if(interaction.commandName === "help") {
        interaction.reply("Fucking dumbass 🤣");
    }

    if(interaction.commandName === "help") {
        interaction.reply("Playing playlist");
    }
});


client.login(token);
