const db = require('quick.db');
const { MessageEmbed } = require('discord.js')
const main = require('../maindata.json')
const moment = require('moment')
require('moment-duration-format')
moment.locale('tr')
module.exports = {
        name: 'me',
        aliases: ['stat'],
        run: async(client, message, args) => {


                let member = message.mentions.users.first() || message.guild.members.cache.get(args[0]) || message.author

    let para = db.fetch(`coin.${member.id}`)
    if(para == para) {var enginar = para}
    if(para == undefined) {var enginar = "0"}

    let parases = db.fetch(`coinses.${member.id}`)
       if(parases == parases) {var enginars = parases}
    if(parases == undefined) {var enginars = "0"}

let maviyildiz = main.yildiz3
let coin = main.coinemoji
let sariyildiz = main.yildiz2
let tik = main.tik
 let total = para + parases
       if(total == total) {var enginars1 = total}  
 if(total == undefined) {var enginars1 = total}
    if(total == NaN) {var enginars1 = "0"}
               const embed = new MessageEmbed()
                    .setColor('BLACK')
                    .setThumbnail(member.avatarURL({ dynamic: true }))
                    .setDescription(`${maviyildiz} | ${member} ** Kullancısının Sahip Olduğu Coinler** 
                    
                    ${maviyildiz} | **Kullanıcın Mesaj Coinleri**

                   ${sariyildiz} ❯ ${coin} ${enginar}
                    
                   ${maviyildiz} | **Kullanıcın Ses Coinleri**

                  ${sariyildiz} ❯ ${coin} ${enginars}

                    ${maviyildiz} | **Kullanıcın Toplam Coinleri**

                  ${sariyildiz} ❯ ${coin} ${enginars1}                    `)
    .setFooter(client.user.username, client.user.avatarURL())
    .setTimestamp()
    message.channel.send(embed)
    message.react(`${tik}`)
  }
}

