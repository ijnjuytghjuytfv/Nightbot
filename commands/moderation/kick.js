const { MessageEmbed } = require("discord.js")
const moment = require('moment')

module.exports = {
name: "kick",
category: "moderation",
description: "kick a user",
  cooldown: 0,
  userPermissions: "KICK_MEMBERS",
  botPermissions: "",
  ownerOnly: false,
  toggleOff: false,
   async execute(client, message, args, ee) {
const mentionedMember = message.mentions.members.first() || message.guild.members.cache.get(args[0])
const reason = args.slice(1).join(" ")
          if (!args[0]) return message.channel.send(":x:**Specify someone to kick.**")
        if (!mentionedMember) return message.channel.send(":x: **I can't find that member.**")
        if (mentionedMember.id === message.author.id) return message.channel.send(":x: You can't kick yourself.")
        if (mentionedMember.roles.highest.position >= message.member.roles.highest.position && message.author.id !== message.guild.owner) {
            return message.channel.send(":x: | **You can\'t kick this member due to your role being lower than that member role.**")
        }
        if (mentionedMember.kickable) {
            const KICK = new MessageEmbed()
             .setTitle(`${message.author.tag} - Kicked ${mentionedMember.user.tag}`, message.author.displayAvatarURL({dynamic: true}))
            .setThumbnail(mentionedMember.user.displayAvatarURL({dynamic: true}))
            .setColor(`RANDOM`)
            .setDescription(`
**Member:** ${mentionedMember.user.tag}
**Reason:** ${reason || "None"}`)
.setFooter(`kicked ${mentionedMember.user.tag}`)
 mentionedMember.kick()
        return message.channel.send({ embeds: [KICK]})}
        
    }
}
