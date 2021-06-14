const db = require('quick.db');
const { MessageEmbed } = require('discord.js')
const main = require('../maindata.json')
const moment = require('moment')
require('moment-duration-format')
moment.locale('tr')
module.exports = {
        name: 'eklec',
        aliases: ['eklec'],
        run: async(client, message, args) => {
          let sahip = main.sahipid
          let tik = main.tik
    if(message.author.id !== `${sahip}`) return;

                let member = message.mentions.users.first() || message.guild.members.cache.get(args[0]) || message.author
                
                db.add(`coin.${member.id}`, 100)
                    message.react(`${tik}`)

                }
}