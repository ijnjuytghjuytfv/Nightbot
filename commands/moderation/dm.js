const Discord = module.require("discord.js");
const { MessageEmbed } = require("discord.js");

module.exports = {
    name: "dm",
    category: "test",
     cooldown: 0,
  userPermissions: "MANAGE_MEMBERS",
  botPermissions: "",
  ownerOnly: false,
  toggleOff: false,
  async execute(client, message, args, ee) {
  
     
    message.delete();
      if (!args[0]) {
      
      let Embed89 = new MessageEmbed()
      .setDescription('your msg')
      .setTitle("**bot Helper - Command**")
      .setColor("#FBD570")
      .setFooter('your footer msg')
      return message.channel.send({ embeds: [Embed89] })}

      

      const user = message.mentions.users.first();
      const text = args.slice(1).join(" ");

      
      
    if (!user) {let Embed172 = new MessageEmbed()
        .setDescription("Please mention a **Valid** user.")
        .setTitle("**Error - Impossible Action**")
        .setColor("#FF073A")
        .setFooter('Please Make Sure that the User Has Dm`s on or @tag a Valid User!')
        return message.channel.send({ embeds: [Embed172] })}

        
    

    if (!text){let Embed172 = new MessageEmbed()
        .setDescription("Please enter a **Message**.")
        .setTitle("**Error - Impossible Action**")
        .setColor("#FBD570")
        .setFooter('your footer msg')
        return message.channel.send({ embeds: [Embed172] })}

       
      

   
     
    
      let embed = new MessageEmbed()
      .setTitle(`**Dear ${user.tag} **`)
      .setDescription(`${text}`)
      .setColor("#FBD570")
      .setFooter(`Direct Message from ${message.author.username}`)
      user.send({ embeds: [embed] })

    let Embed = new MessageEmbed()
   .setDescription("Sended a Message To The user")
        .setTitle("Sended Dm succesfully")
        .setColor("#FBD570")
        return message.channel.send({ embeds: [Embed] })},


  }