const Discord = module.require("discord.js");
module.exports = {
name: "catsay",
    description: "Make The Cat say thing of your choice",
  cooldown: 5,
  userPermissions: "",
  botPermissions: "",
  ownerOnly: false,
  toggleOff: false,
    options: [
        {
            name: "text",
            description: "the text",
            type: "STRING",
            required: true
        }
    ],
async execute(client, interaction, args, ee) {
    const msg = args.join(" ");
    if (!msg) {
      return interaction.reply("What you want the cat to say?");
    }
    interaction.reply({
      files: [
        {
          attachment: `https://cataas.com/cat/cute/says/${msg}`,
          name: "catsay.png",
        },
      ],
    });
  },
};
