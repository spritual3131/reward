const Discord = require("discord.js")

exports.run = async (client, message, args) => {
if(!message.guild) {
return
}
if(!message.member.hasPermission("MANAGE_MESSAGES")) return message.reply("**Bu komutu kullanmak için ``Mesajları Yönet`` yetkisine sahip olmanız gerekiyor.**").then(m => m.delete({timeout: 7000}));

      message.channel.clone({position: message.channel.position});
      message.channel.delete();
		

};

exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: [],
  permLevel: 3,
  kategori: "sunucu"
};

exports.help = { 
	name: 'nuke', 
  description: "Bot bulunduğunuz kanalı siler ve yeniden oluşturur.",
  usage: 'nuke'
}
