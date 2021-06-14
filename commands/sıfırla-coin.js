const db = require('quick.db');
const { MessageEmbed } = require('discord.js')
const main = require('../maindata.json')

const moment = require('moment')
require('moment-duration-format')
moment.locale('tr')
module.exports = {
        name: 'sıfırlacoin',
        aliases: ['sıfırlacoin'],
        run: async(client, message, args) => {
let sahip = main.sahipid 
let coin = main.coinemoji
let tik = main.tik
let x = main.carpi
    if(message.author.id !== `${sahip}`) return;

                let member = message.mentions.users.first() || message.guild.members.cache.get(args[0]) || message.author

  

  
                const embed = new MessageEmbed()
                    .setColor('BLACK')
                    .setThumbnail(member.avatarURL({ dynamic: true }))
                    .setDescription(`${member} ** Kullancısının Başarıyla Coinleri Sıfırlandı** \n \n  ❯ ${coin} Kullanıcın Başarıyla Bütün Coinleri Silindi`) .setFooter(client.user.username, client.user.avatarURL())
    .setTimestamp()
   if(args[0] == "yazıc"){
     db.delete(`coin.${member.id}`);
         message.react(`${tik}`)
     return message.channel.send(embed)
   } else if(args[0] == "sesc") {
      db.delete(`coinses.${member.id}`);
          message.react(`${tik}`)
      return message.channel.send(embed)
   } else if(args[0] == "hepsic") {
      db.delete(`coinses.${member.id}`);
       db.delete(`coin.${member.id}`);
           message.react(`${tik}`)
     return message.channel.send(embed)
   }
   message.react(`${x}`)
     const embed1 = new MessageEmbed()
     .setColor("GREEN")
     .setAuthor(message.author.username, message.author.avatarURL())
     .addField("Tüm Coinleri Sıfırlamak İçin;", "\`!sıfırlacoin hepsic\`")
     .addField("Ses Coinlerini Sıfırlamak İçin;", "\`!sıfırlacoin sesc\`")
     .addField("Yazı Coinleri Sıfırlamak İçin İçin;", "`\`!sıfırlacoin yazıc`\`")
     .setTimestamp()
     return message.channel.send(embed1)
         



  }
}