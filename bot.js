const Discord = require('discord.js');
const client = new Discord.Client();
const prefix = '$'

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
client.user.setGame(``,"http://twitch.tv/S-F")
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
 if (message.content === "$help") {
      .setDescription(►الاوامر العامة ◄
$avatar [user] - لعرض صورتك او صوره شخص
$image - لعرض صورة السيرفر 
$owner - لإرسال رسالة لاونر سيرفر 
$id - معلومات عنك
$server  : لعرض معلومات عن السيرفر
▁ ▂ ▃ ▄ ▅ ▆ ▇ █   █ ▇ ▆ ▅ ▄ ▃ ▂ ▁
►الاوامر الادارية ◄
$ban : لتبنيد شخص من السيرفر
$kick - لطرد شخص من السيرفر
$mute : اعطاء ميوت لشخص معين
$unmute : لفك الميوت عن شخص معين
$clear : لمسح الشات مع عدد او بدون
$role  : لأعطاء رتبة لشخص معين
▁ ▂ ▃ ▄ ▅ ▆ ▇ █   █ ▇ ▆ ▅ ▄ ▃ ▂ ▁
►أشياء اخرى◄
$invite  : لدعوة البوت الى سيرفرك
$support  : سيرفر الدعم الفني
▁ ▂ ▃ ▄ ▅ ▆ ▇ █   █ ▇ ▆ ▅ ▄ ▃ ▂ ▁
)
   message.channel.sendEmbed(embed)

   }
   });
client.login(process.env.BOT_TOKEN);
