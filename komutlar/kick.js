const Discord = require("discord.js");
exports.run = async(client, message, args) => {
if(!message.guild) {
return
}
  if (!message.member.hasPermission("KICK_MEMBERS")) {
    const embed = new Discord.MessageEmbed()
      .setDescription("```bu komutu kullanmaya yetkin yok.```")
      .setColor("BLACK");
 
    message.channel.send(embed);
    return;
  }
 
  let u = message.mentions.users.first();
  if (!u) {
    return message.channel.send(
      new Discord.MessageEmbed()
        .setDescription("**Lütfen atılacak kişiyi etiketleyiniz!**  ")
        .setColor("BLACK")
        .setFooter(message.guild.name, message.guild.iconURL())
    );
  }
 

       
        message.guild.member(u).kick();
      }

 
module.exports.conf = {
  aliases: [],
  permLevel: 2,
  enabled: true,
  guildOnly: true,
  kategori: "moderasyon"
};
 
module.exports.help = {
  name: "kick",
  description: "kick",
  usage: "kick"
};  