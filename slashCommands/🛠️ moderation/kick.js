
module.exports = {
    name: "kick",
    description: "kicks a member.",
      cooldown: 0,
    userPermissions: "KICK_MEMBERS",
    botPermissions: "KICK_MEMBERS",
    ownerOnly: false,
    toggleOff: false,
    options: [
        {
            name: "user",
            description: "user to kick",
            type: 6,
            required: true
        },
        {
            name: "reason",
            description: "reason for kick",
            type: 3,
        }
    ],
    timeout: 3000,
    category: "mod",
    run: async (client, interaction, options) => {
   
      

        const member = interaction.options.getMember('user');
        const reason = interaction.options.getString('reason') || '';
        if (member.id === interaction.user.id) {
            return interaction.followUp({ content: `:x: You can\'t ban yourself!` })
        }
        if (member.id === client.user.id) {
            return interaction.followUp({ content: `:x: You can\'t kick me!` })
        }
        const botRole = interaction.guild.me.roles.highest.position;
        const role = member.roles.highest.position;
        const authorRole = interaction.member.roles.highest.position;
        if (authorRole <= role) {
            return interaction.followUp("I can't kick this member because that member has role position is higher than my role or same as you!")
        }
        if (botRole <= role) {
            return interaction.followUp("I can't kick this member because that member has role position is higher than my role or same as you!")
        }
        try {
            await member.kick(reason);
            interaction.followUp({ content: `✅ **${member} has been kicked for ${reason}**` })
await member.send(`U have been Kicked for ${reason}`)          
        } catch (e) {
            console.error(e);
            return interaction.followUp({ content: `Error: ${e}` })
        }
    }
}