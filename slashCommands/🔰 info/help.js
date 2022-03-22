const { Client, ContextMenuInteraction, MessageEmbed } = require("discord.js");
const { readdirSync } = require("fs");


module.exports = {
  name: "help",
  description: "Show All Commands",
    cooldown: 0,
    userPermissions: "",
    botPermissions: "",
  ownerOnly: false,
  toggleOff: false,
  /**
   * @param {Client} client
   * @param {ContextMenuInteraction} interaction
   * @param {String[]} args
   */
 async execute(client, interaction, args, ee) {
     
    const roleColor =
    interaction.guild.me.displayHexColor === "#000000"
        ? "#ffffff"
        : interaction.guild.me.displayHexColor;

    if (!args[0]) {
      let categories = [];

      readdirSync("./slashCommands/").forEach((dir) => {
        const commands = readdirSync(`./slashCommands/${dir}/`).filter((file) =>
          file.endsWith(".js")
        );

        const cmds = commands.map((command) => {
          let file = require(`../../slashCommands/${dir}/${command}`);

          if (!file.name) return "No command name.";

          let name = file.name.replace(".js", "");
          let description = file.description;

          return `\`${name}\` : ${description} \n`;
        });

        let data = new Object();

        data = {
          name: dir.toUpperCase(),
          value: cmds.length === 0 ? "In progress." : cmds.join(" "),
        };

        categories.push(data);
      });

      const embed = new MessageEmbed()
           .setAuthor(`${client.user.username} Help Menu`, client.user.displayAvatarURL())
        .addFields(categories)
        .setDescription(
          `Use \`/help\` ${client.user.username} is a new Discord bot made by \`dani.cool#0001\` make sure to Report bugs/errors to me!`
        )
       .setFooter(`${client.user.username} has right now ${client.slashCommands.size} Slash commands!`, client.user.displayAvatarURL())
        .setTimestamp()
         .setColor("#FBD570")
      return interaction.reply({ embeds: [embed], ephemeral: true });
    } else {
      const command =
        client.commands.get(args[0].toLowerCase()) ||
        client.commands.find(
          (c) => c.aliases && c.aliases.includes(args[0].toLowerCase())
        );

      if (!command) {
        const embed = new MessageEmbed()
          .setTitle(
            `Invalid command! Use \`/help\` for all of my commands!`
          )
          .setColor("FF0000");
        return interaction.reply({ embeds: [embed], ephemeral: true });
      }

      const embed = new MessageEmbed()
        .setTitle("Command Details:")
        .addField("PREFIX:", `\`/\``)
        .addField(
          "COMMAND:",
          command.name ? `\`${command.name}\`` : "No name for this command."
        )
        .addField(
          "ALIASES:",
          command.aliases
            ? `\`${command.aliases.join("` `")}\``
            : "No aliases for this command."
        )
        .addField(
          "USAGE:",
          command.usage
            ? `\`/${command.name} ${command.usage}\``
            : `\`/${command.name}\``
        )
        .addField(
          "DESCRIPTION:",
          command.description
            ? command.description
            : "No description for this command."
        )
        .setFooter(
            `Requested by ${interaction.user.tag}`,
          )
        .setTimestamp()
        .setColor(roleColor);
      return interaction.reply({ embeds: [embed], ephemeral: true});
    }
  },
};