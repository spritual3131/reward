const Discord = require("discord.js");
const database = require("croxydb");
exports.run = async (client, message, args) => {
  const kisi = database.fetch(`afkid_${message.author.id}_${message.guild.id}`);
  if (kisi) return;
  const sebep = args[0];
  if (!args[0]) {
    let kullanıcı = message.guild.members.cache.get(message.author.id);
    const b = kullanıcı.displayName;

    await database.set(
      `afkSebep_${message.author.id}_${message.guild.id}`,
      "Sebep Girilmemiş"
    );
    await database.set(
      `afkid_${message.author.id}_${message.guild.id}`,
      message.author.id
    );
    await database.set(`afkAd_${message.author.id}_${message.guild.id}`, b);

    const a = await database.fetch(
      `afkSebep_${message.author.id}_${message.guild.id}`
    );

    message.channel.send(`Başarıyla Afk Oldunuz \n Sebep: ${a}`);

    message.member.setNickname(`[AFK] ` + b);
  }
  if (args[0]) {
    let sebep = args.join(" ");
    let kullanıcı = message.guild.members.cache.get(message.author.id);
    const b = kullanıcı.displayName;
    await database.set(`afkSebep_${message.author.id}_${message.guild.id}`, sebep);
    await database.set(
      `afkid_${message.author.id}_${message.guild.id}`,
      message.author.id
    );
    await database.set(`afkAd_${message.author.id}_${message.guild.id}`, b);
    const a = await database.fetch(
      `afkSebep_${message.author.id}_${message.guild.id}`
    );

    message.channel.send(`Başarıyla Afk Oldunuz \n Sebep: ${a}`);

    message.member.setNickname(`[AFK] ` + b);
  }
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: "afk",
  description: "Afk Olmanızı Sağlar.",
  usage: "afk / afk "
};
