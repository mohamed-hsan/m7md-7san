const Discord = require('discord.js');
const client = new Discord.Client();
const prefix = '.'

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
client.user.setGame(`Nothing`,"http://twitch.tv/S-F")
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
client.on("message", message => {
	var prefix = "$";
 if (message.content === "$general") {
  const embed = new Discord.RichEmbed()  
      .setColor("#000000") 
      .setDescription(`

                               ►الاوامر العامة ◄
$server - معلومات عن سيرفرك
$id - معلومات عنك
$avatar [user] - لعرض صورتك او صوره شخص
$image - لعرض صورة السيرفر 
$owner - لإرسال رسالة لاونر سيرفر 
$user - معلومات عن حسابك
$color   : لتغيير لونك في السيرفر
$colors  : قائمة الألوان
$credits  : التحويل ومعرفة الرصيد
$short  : أختصار الروابط
	  `)
   message.channel.sendEmbed(embed)
    
   }
   }); 
client.login(process.env.BOT_TOKEN);
