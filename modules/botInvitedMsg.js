const config = require(`${process.cwd()}/structures/botconfig/config.json`);
const ee = require(`${process.cwd()}/structures/botconfig/embed.json`);
const {
    MessageEmbed,
    MessageButton,
    MessageActionRow
} = require("discord.js");

module.exports = async (client) => {
    const description = {
        name: "Bot Invited Msg",
    }
    client.logger(`〢 Module: Loaded ${description.name}`.bold.green);

    client.on("guildCreate", async (guild) => {
        const channel = guild.channels.cache.find(channel => channel.type === 'GUILD_TEXT' && channel.permissionsFor(guild.me).has('SEND_MESSAGES'));

    let msgembed = new MessageEmbed()
        .setTitle(`Thanks For Adding Me!`)
        .setDescription(`> Hey, Thanks For Adding Me To **${guild.name}**\n> My Default Prefix Is \`${process.env.PREFIX}\`\n\n> To Get Started Type \`${process.env.PREFIX}help\` or \`/help\`if u dont like the prefix do ${process.env.PREFIX}set-prefix to change it. if u dont remember just do ${client.user} and u see the guild prefix!`)
        .setColor(ee.color)
        .setFooter('Thanks For Inviting Me!')
        .setImage(ee.gif)
        .setTimestamp()


    let invitebutton = new MessageButton()
            .setStyle("LINK")
            .setLabel("Invite Me!")
            // .setEmoji('✅')
            .setURL(`https://discord.com/api/oauth2/authorize?client_id=${client.user.id}&permissions=8&scope=bot%20applications.commands`)

 

    const row = new MessageActionRow()
        .addComponents(invitebutton);

    if (!channel) return;
    await channel.send({
        embeds: [msgembed],
        components: [row]
    }).catch(err => console.log('I was unable to send guildCreate message.'));
    });
    
};