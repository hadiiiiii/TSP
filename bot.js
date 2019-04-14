const Discord = require('discord.js');//????? ???
const client = new Discord.Client();// ????? ???????
const ms = require('ms');
const pms = require('pretty-ms');








var ServerID = "520335219258294273"; 
var ChannelID = "520335460300619779";//

var ChannelIID = "520335487345491981";//k???? ??? ???? ??????
var ChannelID2 = "520335460300619779";
 

//???????
//npm i discord.js
//npm install opusscript
//npm install node-opus
//npm install ffmpeg-binaries
//npm i ms : For Good Quality
//npm i pretty-ms : For Good Quality






const prefix = "&"

 client.on('message', message => {
  if (message.author.bot) return;
  if (!message.content.startsWith(prefix)) return;
 
  let command = message.content.split(" ")[0];
  command = command.slice(prefix.length);
 
let args = message.content.split(" ").slice(1);
if(!args) return message.channel.send('${prefix}say <words>'); 
 
if (command == "say") {
if(!message.guild.member(message.author).hasPermission("ADMINISTRATOR")) return message.reply("**You Can't Use This Command**");
 
message.channel.send(args.join("  "))
    message.delete();
  }
});
 










client.on('ready', () => {
  client.channels.find(ch => ch.id === "520335219258294278" && ch.type === 'voice').join();//
});//By Rie



client.on('Warn', console.warn);//

client.on('Error', console.error);//

client.on('Disconnect', () => console.log('Disconnected!'));//If The Bot Disconnected You Will See That In The Consol

client.on('Reconnecting', () => console.log('Reconnecting...'));//If The Bot Desconnected And He Comes Online Again Will Say That In The Console


function timerFunc() {
  
  
    client.on('message', msg => {//Rie
        client.guilds.get(ServerID).channels.get(ChannelID).send(Math.random().toString(36).substring(7)) // 


    });




    client.on('message', msg => {
        client.guilds.get(ServerID).channels.get(ChannelIID).send(Math.random().toString(36).substring(7)) // 


    });
}


//By Rie



var timer = setTimeout(timerFunc, 2000);//Good Speed : 870 Very Fast : 305

client.on('ready', () => console.log('ProBot Credits Miner v3'));//

client.on('ready', () => console.log('Lets Go'));//

client.on('ready', () => console.log('This Is A Beta Version And Maybe You Will Get Banned Quiqly Tip : Wait For The Official Release')); 

client.on('ready', () => console.log('By Rie (L)'));//


//ProBot Miner V3 
//Better Quality & Fast Mining & Better Minning = More Credits







client.login(process.env.BOT_TOKEN)
