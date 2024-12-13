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

    const play = new SlashCommandBuilder()
        .setName("play")
        .setDescription("Plays a song");

    client.application.commands.create(ping);
    client.application.commands.create(help);
    client.application.commands.create(playlist);
    client.application.commands.create(play);
});

client.on(Events.InteractionCreate, interaction => {
    if(interaction.commandName === "ping") {
        interaction.reply("Pong!");
    }

    if(interaction.commandName === "help") {
        interaction.reply("Fucking dumbass 🤣");
    }

    if(interaction.commandName === "playlist") {
        interaction.reply("Playing playlist");
    }

    if(interaction.commandName === "play") {
        interaction.reply("Playing a song");
    }
});


client.login(token);
