module.exports = {
    name: "purge",
    description: "purge",
            cooldown: 5,
  userPermissions: "MANAGE_MESSAGES",
  botPermissions: "",
  ownerOnly: false,
  toggleOff: false,
   options: [
                {
                    name: 'number',
                    description: '1-100',
                    type: "INTEGER"
                }
            ],
 async execute(client, interaction, args, ee) {
       const msgnum = interaction.options.getInteger('number')
       interaction.reply('Purging...');
       interaction.channel.bulkDelete(msgnum);
    interaction.channel.send("Done,If you wish you can delete this");
  }
}
