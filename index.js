const keepAlive = require('./server.js')
require('dotenv')
const { Client,Util, Collection,MessageEmbed,Structures } = require("discord.js");
async function errorEmbed(text,message){
      const newembed = new Discord.MessageEmbed()
      .setColor("#FF7676")      
      .setDescription(`**❌ | ${text} **`)       
      return message.channel.send(newembed);
}
const Discord = require('discord.js')
const client = new Client({
    disableEveryone: true
})
const axios = require("axios")


//=============================================
const channel_id = "978492210280542208"
//=============================================


client.on('message', async (message) => {
  if (!message.guild) return;
  if (message.author.bot) return;
  try {
  if (message.channel.id != channel_id) return
  let res = await axios.get(`http://api.brainshop.ai/get?bid=166711&key=BMyG5H9WLbwVj7U2&uid=[uid]&msg=${encodeURIcomponent(message.content)}`);
  message.reply(res.data.cnt);
  } catch {
   errorEmbed(`Hmmm, something went wronge. Try again in a few seconds.`,message)
   }
})

client.on('ready', async () => {
    console.clear()
    console.log(`${client.user.tag} is online!`)
})

client.login(process.env.TOKEN);

keepAlive()
