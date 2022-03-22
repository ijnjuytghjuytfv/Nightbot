const { MessageEmbed } = require('discord.js');
const moment = require('moment');
const { mem, cpu, os } = require('node-os-utils');
const { stripIndent } = require('common-tags');
module.exports = {
  name: "status",
  usage: '',
  description: "Gives you information on how fast the Bot can respond to you",
  category: "info",
  cooldown: 5,
  userPermissions: "",
  botPermissions: "",
  ownerOnly: false,
  toggleOff: false,

  /**
   * @param {Client} client 
   * @param {CommandInteraction} interaction
   * @param {String[]} args
   */

  async execute(client, interaction, args, ee) {
        
    const d = moment.duration(client.uptime);
    const days = (d.days() == 1) ? `${d.days()} day` : `${d.days()} days`;
    const hours = (d.hours() == 1) ? `${d.hours()} hour` : `${d.hours()} hours`;
    const seconds = (d.seconds() == 1) ? `${d.seconds()} seconds` : `${d.seconds()} seconds`;
    const minutes = (d.minutes() == 1) ? `${d.minutes()} minutes` : `${d.minutes()} minutes`;
    const { totalMemMb, usedMemMb } = await mem.info();
    const clientStats = stripIndent`
      Servers   :: ${client.guilds.cache.size}
      Users     :: ${client.guilds.cache.reduce(
    (prev, guild) => prev + guild.memberCount, 0)}
      Channels  :: ${client.channels.cache.size}
      WS Ping   :: ${Math.round(client.ws.ping)}ms
      Uptime    :: ${days} and ${hours} and ${minutes} and ${seconds}
      RAM       :: ${totalMemMb} MB
      RAM USAGE :: ${usedMemMb} MB
    `;
    
    const embed = new MessageEmbed()
      .setTitle('NIghtBot Bot\'s Statistics')
      .setDescription(`\`\`\`asciidoc\n${clientStats}\`\`\``)
     .setFooter(`NightBot`, `https://cdn.discordapp.com/avatars/952986604010610698/2bd7e12dd63015d9472232644ec9eaa6.png`).setThumbnail(client.user.displayAvatarURL())
      .setTimestamp()
      .setColor(interaction.guild.me.displayHexColor);
     return interaction.reply({ embeds: [embed]});
    }
}
