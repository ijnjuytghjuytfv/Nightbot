module.exports = {
  name: "ban",
  description: "This command ban's someone",
  category: "moderation",
  example: ["!ban @member"],
   cooldown: 0,
  userPermissions: "BAN_MEMBERS",
  botPermissions: "",
  ownerOnly: false,
  toggleOff: false,

   async execute(client, message, args, ee) {
      

    if (!args[0]) return message.reply(`❌ | Please specify someone`);

    if (!member) return message.reply(`💤 | Cannot find that member...`);

    if (member.id === message.author.id)
      return message.reply(`❌ | You cannot ban yourself!`);

    if (message.member.roles.highest.position < member.roles.highest.position)
      return message.reply(
        `❌ | You cannot ban user who have higher role than you...`
      );

    if (!member.bannable) return message.reply(`❌ | I cannot ban that member`);

    return (
      (await member.ban()) +
      message
        .reply({
          content: `:anger: | User ${member} has been banned`,
        })
        .then((msg) => {
          setTimeout(() => msg.delete(), 5000);
        })
    );
      } catch(err) {
        message.reply(`awww there was an ${err}`)
      }
  },
};
