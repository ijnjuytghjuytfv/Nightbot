const {Client, CommandInteraction , MessageActionRow, MessageButton} = require("discord.js");
const Discord = require('discord.js');
var ee = require(`${process.cwd()}/structures/botconfig/embed.json`);

module.exports = {
    name: "invite",
    description: "Returns Bot's Invite Link.",
   cooldown: 5,
  userPermissions: "",
  botPermissions: "",
  ownerOnly: false,
  toggleOff: false,

   async execute(client, interaction, args, ee) {
          
         
        let embed = new Discord.MessageEmbed()
          
        .setAuthor(`${client.user.username} - Invite`)
        .setDescription(`**Invite The Bot**\n[Click Here](https://discord.com/api/oauth2/authorize?client_id=${client.user.id}&permissions=8&scope=bot%20applications.commands).\n**Support Server**\n[Click Here](https://discord.gg/Ft4uzJKhhG).`)
        .setColor("GREEN")
.setFooter(`NightBot`, `https://cdn.discordapp.com/avatars/952986604010610698/2bd7e12dd63015d9472232644ec9eaa6.png`).setThumbnail(client.user.displayAvatarURL())

        const row = new MessageActionRow()
        .addComponents(
            new MessageButton()
            .setLabel("Support Server")
            .setStyle("LINK")
        .setURL('https://discord.gg/Ft4uzJKhhG'),
            new MessageButton()
            .setLabel("Invite Link")
            .setStyle("LINK")        .setURL(`https://discord.com/oauth2/authorize?client_id=${client.user.id}&permissions=8&scope=bot%20applications.commands`)
        )

        return interaction.reply({embeds: [embed], components : [row], ephemeral: true});
    }
};