const Discord = require('discord.js');
exports.run = (client, message, args) => {
if(!message.guild) {
return
}
  if (message.author.id != "947515203959009380") return message.reply('Bunu Sadece Sahibim Kullanabilir');
      
  if (!message.guild) {
  const ozelmesajuyari = new Discord.MessageEmbed()
  .setColor(0xFF0000)
  .setTimestamp()
  .setAuthor(message.author.username, message.author.avatarURL())
  .addField('⚠ Uyarı ⚠', 'Bu  komutu özel mesajlarda kullanamazsın.');
  return message.author.sendEmbed(ozelmesajuyari); }
  let guild = message.guild;
  let reason = args.slice(1).join(' ');
  let user = message.mentions.users.first();
  if (reason.length < 1) return message.reply('**Kime mesaj atmamı istersin?**');
  if (message.mentions.users.size < 1) return message.reply('**Kime mesaj atmamı istersin?**').catch(console.error);
  message.delete();
  message.reply('Mesajını Gönderdim.').then(m => m.delete({timeout: 2000}));
  var embed = new Discord.MessageEmbed()
  .setColor('RANDOM')
  .setTitle(`**Sahibimden Bir Mesajın Var!**`)
  .setTimestamp()
  .setDescription(reason);
  return user.send(embed);
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['pm','öm'],
  permlevel: 4
};

exports.help = {
  name: 'mesajat',
  description: 'Bir kullanıcıya özelden mesaj atar.',
  usage: 'mesajat'
};