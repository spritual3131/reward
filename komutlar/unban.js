const { MessageEmbed } = require('discord.js');

exports.run = async (client, message, args) => {
if(!message.guild) {
return
}
    if (!message.member.hasPermission("BAN_MEMBERS")) return message.channel.send(new MessageEmbed().setDescription(`:x: Yetkin yeterli değil!`))
    let user = args[0];
    const banList = await message.guild.fetchBans();
    if (!user || isNaN(user) || !banList.has(user)) {
        return message.channel.send((`<a:frolitycarpi:996426105735094464> **Kullanıcı id hatalı veya kullanıcı yasaklı değil!**`))
    }
    message.guild.members.unban(user);
    message.channel.send(new MessageEmbed().setDescription(`<a:frolitytik:996422767803105291> **Kullanıcının banı açıldı!**`))
};

exports.conf = {
    aliases: ["un-ban"]
};

exports.help = {
    name: 'unban'
};