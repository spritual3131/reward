const discord = require("discord.js");
exports.run = (client, message, args) => {



    
  var guild = message.guild;
  var banlayan = message.author.tag;
  let banxx = message.guild.fetchBans();
   var kisi = message.mentions.members.first() || client.users.resolve(args[0]) || client.users.cache.find(u => u.username === args[0]) || client.users.cache.get(args[0]); 
     var sebeb = args.slice(1).join(" ");
    
    
     if (!message.member.hasPermission("BAN_MEMBERS")) {
        const yetkinyok = new discord.MessageEmbed()
          .setDescription("**<a:frolitycarpi:996426105735094464> Bir kişi banlamak için `Üyeleri Engelle` iznine sahip olmalısın.**")
          .setColor("RED")
          return message.channel.send(yetkinyok)
     }


       
      if(!kisi) {
    const embedbruh = new discord.MessageEmbed()
    .setDescription("**<a:frolitycarpi:996426105735094464> Belirttiğiniz kişi sunucuda yok veya etiketlemedin.**")
    .setColor("RED")
    return message.channel.send(embedbruh)
            
  }
      


     if(kisi.id == message.guild.ownerID) {
        const arkadaşownermış = new discord.MessageEmbed()
   .setDescription("**<a:frolitycarpi:996426105735094464> Sunucu Sahibini Banlayamazsın.**")
   .setColor("RED")
   return message.channel.send(arkadaşownermış) 
      }
                    
          if (!message.guild.me.permissions.has("BAN_MEMBERS")) {
       const yetkimyok = new discord.MessageEmbed()
       .setDescription("**<a:frolitycarpi:996426105735094464> Banlamak için `Üyeleri Engelle` iznine sahip olmalıyım.**")
       .setColor("RED")
       return message.channel.send(yetkimyok)
     }
          
      
          if(!kisi.bannable) {
      const notbannable = new discord.MessageEmbed()
 .setDescription("**<a:frolitycarpi:996426105735094464> Bu kişiyi banlayamam.**")
 .setColor("RED")
 return message.channel.send(notbannable)
    }

          
          
         var now = new Date()
 var sebepp = null
 
 if(!sebeb) {
   sebepp = "Sebep Belirtilmemiş."
 }    
 if(sebeb) {
   sebepp = sebeb
 }   
         try {
           const sucembeddm = new discord.MessageEmbed()
           .setDescription(`${kisi} **${guild}** Adlı sunucudan banlandın.` + "\r\n" + `**Sebep: ${sebepp}**`)
           .setColor("RED")
          kisi.send(sucembeddm)
           const sucembed = new discord.MessageEmbed()
           .setDescription(`<a:frolitytik:996422767803105291> ${kisi} **Adlı Kullanıcı ${sebepp} Sebebi İle Banlandı.**`)
           .setColor("RANDOM")
          message.channel.send(sucembed)
          return guild.members.ban(kisi, { reason: sebepp });
        } catch (error) {
          message.reply("**HATA :x:**")
          console.log(error)
        }  
          
          
          




}
  
exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ["ban"],
  permLevel: 0
};
exports.help = {
  name: "ban",
  description: "Belirttiğiniz Kişiyi Sunucudan Banlar",
  usage: "ban <Etiket> <Sebep Varsa Sebep>"
};