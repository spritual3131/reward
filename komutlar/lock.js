const Discord = require('discord.js');
 
exports.run = (client, message, args) => {// can#0002
if(!message.guild) {
return
}
if(!message.member.hasPermission('MANAGE_CHANNELS')) return;

let channel = message.mentions.channels.first() || message.channel;

let reason;
if(!message.mentions.channels.first()) {
if(args[0]) reason = args.slice(0).join(' ');
};
if(message.mentions.channels.first()) {
if(args[1]) reason = args.slice(1).join(' ');
};

let reasonn;
if(!reason) reasonn = '. No reason given.';
if(reason) reasonn = ` for ${reason} reason.`;
message.channel.send(`:lock: ${channel} **has been locked.**`).then();

let everyone = message.guild.roles.cache.find(a => a.name === '@everyone');
channel.updateOverwrite(everyone, { 'SEND_MESSAGES': false }, 'Locked by '+message.author.tag);


};
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};
 
exports.help = {
  name: 'lock'
};// codare ♥