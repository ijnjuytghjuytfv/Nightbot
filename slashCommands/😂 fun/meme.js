const config = require(`${process.cwd()}/structures/botconfig/config.json`);
const {
  Client,
  Message,
  MessageEmbed
} = require('discord.js');
const axios = require('axios');

module.exports = {
  name: 'meme',
  aliases: [],
  usage: 'memes',
  description: 'Get some cool memes :)',
  category: "fun",
  cooldown: 0,
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
    try {
      const url = 'https://some-random-api.ml/meme';

    let data, response;
    try {
      response = await axios.get(url);
      data = response.data;
    } catch (e) {
      return interaction.channel.send({ embeds: [new MessageEmbed()
      .setColor(ee.wrongcolor)
      .setTitle(`${client.allEmojis.x} **An error has occured, try again!**`)]})
    }

      await interaction.reply({ embeds:[new MessageEmbed()
      .setTitle(`${client.allEmojis.y} Random Meme:`)
      .setDescription(data.caption)
      .setColor("GREEN")
      .setImage(data.image)]});
    } catch (e) {
      console.log(String(e.stack).bgRed)
      const errorLogsChannel = client.channels.cache.get(config.botlogs.errorLogsChannel);
      }
    }
  }