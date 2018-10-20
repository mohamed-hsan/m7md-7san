const Discord = require('discord.js');
const client = new Discord.Client();
const prefix = '$'

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
client.user.setGame(`Noting`,"http://twitch.tv/S-F")
  console.log('')
  console.log('')
  console.log('╔[═════════════════════════════════════════════════════════════════]╗')
  console.log(`[Start] ${new Date()}`);
  console.log('╚[═════════════════════════════════════════════════════════════════]╝')
  console.log('')
  console.log('╔[════════════════════════════════════]╗');
  console.log(`Logged in as * [ " ${client.user.username} " ]`);
  console.log('')
  console.log('Informations :')
  console.log('')
  console.log(`servers! [ " ${client.guilds.size} " ]`);
  console.log(`Users! [ " ${client.users.size} " ]`);
  console.log(`channels! [ " ${client.channels.size} " ]`);
  console.log('╚[════════════════════════════════════]╝')
  console.log('')
  console.log('╔[════════════]╗')
  console.log(' Bot Is Online')
  console.log('╚[════════════]╝')
  console.log('')
  console.log('')
});
const shorten = require('isgd');
client.on('message', message => {
        var prefix = "#";

 if (message.content.startsWith(prefix + 'short')) {
    let args = message.content.split(" ").slice(1);
  if (!args[0]) return message.channel.send('**Usage**: '+ prefix +'short <رابط>')
  if (!args[1]) { 
    shorten.shorten(args[0], function(res) {
      if (res.startsWith('Error:')) return message.channel.send('**Usage**: '+ prefix +'short <link>');
      message.channel.send(`اختصار الرابط:**<${res}>**`); 
    })
  } else { 
    shorten.custom(args[0], args[1], function(res) { 
      if (res.startsWith('Error:')) return message.channel.send(`اختصار الرابط:**${res}**`); 
      message.channel.send(`اختصار الرابط:**<${res}>**`); 
 })}}});
client.login(process.env.BOT_TOKEN);
