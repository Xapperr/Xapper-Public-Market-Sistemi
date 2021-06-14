const db = require('quick.db');
const main = require('../maindata.json')
const { MessageEmbed } = require('discord.js')

const moment = require('moment')
require('moment-duration-format')
moment.locale('tr')
module.exports = {
        name: 'market',
        aliases: ['market'],
        run: async(client, message, args) => {

                let member = message.member


     let yildiz = main.yildiz1
    let yildiz2 = main.yildiz2
    let rol1 = main.ürün1
        let rol2 = main.ürün2
    let rol3 = main.ürün3
    let rol4 = main.ürün4
    let rol5 = main.ürün5

   let i1 = main.ürünisim1
 let i2 = main.ürünisim2
 let i3 = main.ürünisim3
 let i4 = main.ürünisim4
 let i5 = main.ürünisim5

let coin = main.coinemoji

let coinism = main.coinismi

               const embed1 = new MessageEmbed()
     .setColor("GREEN")
     .setAuthor(message.author.username, message.author.avatarURL())
     .setTimestamp().setDescription(`**Satın Almak İstedğiniz Eşyayı Belirtiniz**


${yildiz} | <@&${rol1}> **${i1}**
${yildiz} | <@&${rol2}> **${i2}**
${yildiz} | <@&${rol3}> **${i3}**
${yildiz} | <@&${rol4}> **${i4}**
${yildiz} | <@&${rol5}> **${i5}**
     
     `)
if(!args[0]) return message.channel.send(embed1)







if(args[0] == `${i1}`) {
    let para = db.fetch(`coin.${message.author.id}`)
    if(para == para) {var enginar = para}
    if(para == undefined) {var enginar = "0"}
  const karpuz = new MessageEmbed().setColor("RED")    .setAuthor(message.author.username, message.author.avatarURL())
     .setTimestamp().setDescription(`${yildiz} | ${message.author} ** <@&${rol1}> Rolü İçin 100 ${coin} \`${coinism}\` Gerekmekdedir** `)
     
if(para < 100) return message.channel.send(karpuz)  
 if(para > 100) {
   member.roles.add(rol1)
        db.add(`coin.${member.id}`, -100)  
const karpuz1 = new MessageEmbed().setColor("RED")    .setAuthor(message.author.username, message.author.avatarURL())
     .setTimestamp().setDescription(`${yildiz} | ${message.author} ** <@&${rol1}> Rolü Başarıyla Satın Alındı**`)

  message.channel.send(karpuz1)
   message.react(`${yildiz2}`)
 
 }
}
 




if(args[0] == `${i2}`) {
    let para = db.fetch(`coin.${message.author.id}`)
    if(para == para) {var enginar = para}
    if(para == undefined) {var enginar = "0"}
  const elma = new MessageEmbed().setColor("RED")    .setAuthor(message.author.username, message.author.avatarURL())
     .setTimestamp().setDescription(`${yildiz} | ${message.author} ** <@&${rol2}> Rolü İçin 150 ${coin} \`${coinism}\` Gerekmekdedir** `)
     

if(para < 150) return message.channel.send(elma)  
 if(para > 150) {
   member.roles.add(rol2)
        db.add(`coin.${member.id}`, -150)
const elma1 = new MessageEmbed().setColor("RED")    .setAuthor(message.author.username, message.author.avatarURL())
     .setTimestamp().setDescription(`${yildiz} | ${message.author} ** <@&${rol2}> Rolü Başarıyla Satın Alındı**`)

   message.channel.send(elma1)
   message.react(`${yildiz2}`)
 }
}


 
if(args[0] == `${i3}`) {
    let para = db.fetch(`coin.${message.author.id}`)
  const karpuz = new MessageEmbed().setColor("RED")    .setAuthor(message.author.username, message.author.avatarURL())
     .setTimestamp().setDescription(`${yildiz} | ${message.author} ** <@&${rol3}> Rolü İçin 200 ${coin} \`${coinism}\` Gerekmekdedir** `)
     
if(para < 200) return message.channel.send(karpuz)  
 if(para > 200) {
   member.roles.add(rol3)
        db.add(`coin.${member.id}`, -200)  
const karpuz1 = new MessageEmbed().setColor("RED")    .setAuthor(message.author.username, message.author.avatarURL())
     .setTimestamp().setDescription(`${yildiz} | ${message.author} ** <@&${rol3}> Rolü Başarıyla Satın Alındı**`)

  message.channel.send(karpuz1)
   message.react(`${yildiz2}`)
 
 }
}
 

 
 

 
if(args[0] == `${i4}`) {
    let para = db.fetch(`coin.${message.author.id}`)
  const karpuz = new MessageEmbed().setColor("RED")    .setAuthor(message.author.username, message.author.avatarURL())
     .setTimestamp().setDescription(`${yildiz} | ${message.author} ** <@&${rol4}> Rolü İçin 250 ${coin} \`${coinism}\` Gerekmekdedir** `)
     
if(para < 250) return message.channel.send(karpuz)  
 if(para > 250) {
   member.roles.add(rol4)
        db.add(`coin.${member.id}`, -250)  
const karpuz1 = new MessageEmbed().setColor("RED")    .setAuthor(message.author.username, message.author.avatarURL())
     .setTimestamp().setDescription(`${yildiz} | ${message.author} ** <@&${rol4}> Rolü Başarıyla Satın Alındı**`)

  message.channel.send(karpuz1)
   message.react(`${yildiz2}`)
 
 }
}
 

 
if(args[0] == `${i5}`) {
    let para = db.fetch(`coin.${message.author.id}`)
  const karpuz = new MessageEmbed().setColor("RED")    .setAuthor(message.author.username, message.author.avatarURL())
     .setTimestamp().setDescription(`${yildiz} | ${message.author} ** <@&${rol5}> Rolü İçin 300 ${coin} \`${coinism}\` Gerekmekdedir** `)
     
if(para < 300) return message.channel.send(karpuz)  
 if(para > 300) {
   member.roles.add(rol5)
        db.add(`coin.${member.id}`, -300)  
const karpuz1 = new MessageEmbed().setColor("RED")    .setAuthor(message.author.username, message.author.avatarURL())
     .setTimestamp().setDescription(`${yildiz} | ${message.author} ** <@&${rol5}> Rolü Başarıyla Satın Alındı**`)

  message.channel.send(karpuz1)
   message.react(`${yildiz2}`)
 
 }
}
 

 
 






        }
}

        
