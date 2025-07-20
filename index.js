const {Client} = require('discord.js-selfbot-v13')
const client = new Client({
    checkUpdate: false
});

const userToken = ""; //put user token here
const userID = ''; //put user id here
const botID = '510789298321096704'; //texit user id. could be changed to forward messages from other bots i guess
const botChID = ''; //bot dm channel id here

client.on('ready',async() => {
    console.log(`logged in as ${client.user.tag}`)
});
let msgChannel = null;
client.on('messageCreate', async (message) => {
    if (/[$].*[$]/.test(message.content)&& message.author.id === userID && message.channel.id !== '1391512517670604830' && (message.channel.type === 'DM' || !message.guild.members.cache.has(botID))) {
        const target = await client.channels.fetch(botChID);
        msgChannel = message.channel.id;
        if (target) {
            try {
                await target.send(message.content);
            } catch (error) {
                console.error('ur bad', error);
            }
        }
        message.delete();
    }
    if (msgChannel && message.channel.type === "DM" && message.author.id === 'botID') {
        try {
            const targetChannel = await client.channels.fetch(msgChannel);
            if (targetChannel) {
                targetChannel.send('image automagically forwarded from latex bot');
                message.markRead();
                message.forward(targetChannel);
            }
        } catch (error) {
            console.error('error', error);
        }
    }
});
client.login(userToken)