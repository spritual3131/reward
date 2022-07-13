const Discord = require('discord.js');
exports.run = function(client, message, args) {
if(!message.guild) {
return
}
if(!message.member.hasPermission("MANAGE_MESSAGES")) return message.reply("<a:frolitycarpi:996426105735094464> Bu Komutu Kullanmak İçin İzniniz Yok!").then(m => m.delete(8000))
if(!args[0]) return message.channel.send("<a:frolitycarpi:996426105735094464> Lütfen Silinicek Mesaj Miktarını Yazın.!").then(m => m.delete(8000))
message.channel.bulkDelete(args[0]).then(() => {
  const embed = new Discord.MessageEmbed()
       .setDescription(`<a:frolitytik:996422767803105291> Mesajlar Silindi.`)
        .setColor("RANDOM")
        .setTimestamp()
message.channel.send({ embed }).then(m => m.delete(3000))
})
}

exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ['patlat','sil'],
  permLevel: 2
};

exports.help = {
  name: 'temizle',
  description: 'Belirlenen miktarda mesajı siler.',
  usage: 'patlat '
};
