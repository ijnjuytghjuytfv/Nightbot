const config = require(`${process.cwd()}/structures/botconfig/config.json`);
const {
  Client,
  Message,
  MessageEmbed
} = require('discord.js');
const ms = require('pretty-ms');
const glob = require('glob');

module.exports = {
  name: 'top-servers',
  aliases: [],
  usage: '',
  description: 'Shutdown the bot',
  category: "ownerOnly",
  cooldown: 0,
  userPermissions: "",
  botPermissions: "",
  ownerOnly: true,
  toggleOff: false,



  async execute(client, interaction, args, ee) {
    try {
      const guilds = client.guilds.cache.sort((a, b) => b.memberCount - a.memberCount).first(20);
  let invite = client.guilds
      const descriptions = guilds.map((guild, index) => {
    
          return `${index + 1}) ${guild.name}-> ${guild.memberCount} members `;
      }).join("\n");

      interaction.channel.send({ embeds: [new MessageEmbed()
        .setTitle(`${client.allEmojis.y} Top Guilds`)
          .setFooter(`NightBot`, `https://cdn.discordapp.com/avatars/952986604010610698/2bd7e12dd63015d9472232644ec9eaa6.png`).setThumbnail(client.user.displayAvatarURL())
        .setDescription(descriptions)
        .setColor("GREEN")]})
    } catch (e) {
      console.log(e)
    }
  },
};