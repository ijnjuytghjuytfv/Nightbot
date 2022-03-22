const Discord = require('discord.js')

module.exports = {
    name: 'nuke',
  async execute(client, message, args, ee) {
      

        message.channel.clone().then(msg => msg.send('channel nuked :joy:\nhttps://media.giphy.com/media/HhTXt43pk1I1W/giphy.gif'))
        message.channel.delete()
        
    },
};