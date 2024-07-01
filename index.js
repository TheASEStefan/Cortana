const {token} = require("./config.json");
const {Client, Events, SlashCommandBuilder} = require("discord.js");

const client = new Client({ intents : []});

const tips = ["Use fire", "Use guns", "Scavange for loot & structures", "Build your house with heavy materials!", "Modify the config, weakling!", 
    "Use the energy sword!", "Message John!", "Endure!", "Build up!", "Get some iron golems!", "Use ranged attacks!"];

client.once(Events.ClientReady, c => {
    console.log("Logged in as ${c.user.tag}");

    const youtube = new SlashCommandBuilder()
        .setName("youtube")
        .setDescription("Sends the YouTube channel.");

    const patreon = new SlashCommandBuilder()
        .setName("patreon")
        .setDescription("Sends the Patreon page.");

    const kofi = new SlashCommandBuilder()
        .setName("kofi")
        .setDescription("Sends the Ko-fi page.");

    const tip = new SlashCommandBuilder()
        .setName("tip")
        .setDescription("Sends a tip / help for Dawn of the Flood");

    const tag = "909029622111424543";
    
    const youtubeCommand = youtube.toJSON();
    client.application.commands.create(youtube, tag);

    const patreonCommand = patreon.toJSON();
    client.application.commands.create(patreon, tag);

    const kofiCommand = kofi.toJSON();
    client.application.commands.create(kofi, tag);

    const tipCommand = tip.toJSON();
    client.application.commands.create(tip, tag);

});

client.on(Events.InteractionCreate, interaction => {
    if (!interaction.isChatInputCommand()) return;


    if (interaction.commandName === "youtube") {
        interaction.reply("https://www.youtube.com/channel/UCsmmgXrquI0XdTY8r4p87RQ");
    }

    else if (interaction.commandName === "patreon") {
        interaction.reply("https://www.patreon.com/TeamAbyssalOfficial");
    }

    else if (interaction.commandName === "kofi") {
        interaction.reply("https://ko-fi.com/asestefan");
    }

    else if (interaction.commandName === "tip") {
        let randTip = Math.floor(Math.random() * tips.length);
        interaction.reply(tips[randTip]);
    }



});

client.login(token);