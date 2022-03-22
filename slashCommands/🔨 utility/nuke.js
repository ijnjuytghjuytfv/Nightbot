module.exports = {
    name: "nuke",
    description: "nuke the channel",
       cooldown: 5,
  userPermissions: "ADMINISTRATOR",
  botPermissions: "",
  ownerOnly: false,
  toggleOff: false,
   options: [
                {
                    name: 'channel',
                    description: 'channel to nuke',
                    type: "CHANNEL"
                }
            ],
 async execute(client, interaction, args, ee) {
      const channeltonuke = interaction.options.getChannel('channel') || interaction.channel;
			interaction.reply(`Nuking ${channeltonuke}`);
			const position = channeltonuke.position;
			const newChannel = await channeltonuke.clone();
			await channeltonuke.delete();
			newChannel.setPosition(position);
      newChannel.send(`Channel Nuked by ${interaction.member}`);
			return newChannel.send("https://media1.tenor.com/images/e275783c9a40b4551481a75a542cdc79/tenor.gif?itemid=3429833")
  }
}
