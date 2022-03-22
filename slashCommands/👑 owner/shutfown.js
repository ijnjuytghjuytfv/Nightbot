const config = require(`${process.cwd()}/structures/botconfig/config.json`);
const {
  Client,
  Message,
  MessageEmbed
} = require('discord.js');
const glob = require('glob');

module.exports = {
  name: 'shutdown-bot',
  aliases: [],
  usage: '',
  description: 'Shutdown the bot',
  category: "ownerOnly",
  cooldown: 0,
  userPermissions: "",
  botPermissions: "",
  ownerOnly: true,
  toggleOff: false,

 /**
   * @param {Client} client 
   * @param {CommandInteraction} interaction
   * @param {String[]} args
   */

  async execute(client, interaction, args, ee) {
    try {
      await interaction.reply({ embeds:[new MessageEmbed()
        .setColor("RED")
        .setTitle(`Bot is shuttingdown!...`)]});
        process.exit();
    } catch (e) {
      interaction.channel.send({content: `Error: ${e.message}`})
    }
  },
};