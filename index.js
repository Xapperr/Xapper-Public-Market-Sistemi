const Discord = require('discord.js');
const client = new Discord.Client({ ws: { intents: Discord.Intents.ALL } });
const fs = require('fs');
const db = require('quick.db');
const moment = require('moment')
require('moment-duration-format')
const main = require('./maindata.json')
const commands = client.commands = new Discord.Collection();

fs.readdirSync('./commands', {encoding: 'utf8'}).filter(file => file.endsWith(".js")).forEach((files) => {
  let command = require(`./commands/${files}`);
  if(!command.name) return console.log(`Hatalı Kod Dosyası => [/commands/${files}]`)
  commands.set(command.name, command);
})

let swisim = main.sunucuisim

client.on('ready',() => {
    console.log("Hazır!")
    client.user.setPresence({ activity: { name: ' Xapper ❤️ ${swisim}' }, status: 'idle' })
})

 client.on('message', async function(message){
    let prefix = "!";
    if(!message.guild || message.author.bot || !message.content.startsWith(prefix)) return;
    const args = message.content.slice(prefix.length).trim().split(/ +/g);
    var cmd = client.commands.get(args.shift()) 
    if(cmd) cmd.run(client, message, args);
})



client.on('message', async(message) => {
  
  
    db.add(`coin.${message.author.id}`, 1);
  
})

const Activites = new Map();

client.on('voiceStateUpdate', (oldState, newState) => {
  if((oldState.member && oldState.member.user.bot) || (newState.member && newState.member.user.bot)) return
  if(!oldState.channelID && newState.channelID) { 
    Activites.set(oldState.id, Date.now());
  }
      let data;
    if(!Activites.has(oldState.id)){
        data = Date.now();
        Activites.set(oldState.id, data); 
    } else data = Activites.get(oldState.id);
  
  
    if(oldState.channelID && !newState.channelID) { 
        
        


    db.add(`coinses.${oldState.id}`, 1)
      

    } else if(oldState.channelID && newState.channelID){
      
       
      

         db.add(`coinses.${oldState.id}`, 1)

   

    }
  
})


client.login(main.bottoken)
