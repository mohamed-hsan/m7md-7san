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
client.on('message', message => {
if (message.content.startsWith(prefix + 'help')) { 
    let pages = [`
  ►الاوامر العامة ◄
$avatar [user] : لعرض صورتك او صوره شخص
$image : لعرض صورة السيرفر 
$owner : لإرسال رسالة لاونر سيرفر 
$id : معلومات عنك
$server  : لعرض معلومات عن السيرفر
▁ ▂ ▃ ▄ ▅ ▆ ▇ █   █ ▇ ▆ ▅ ▄ ▃ ▂ ▁
►الاوامر الادارية ◄
$ban : لتبنيد شخص من السيرفر
$kick : لطرد شخص من السيرفر
$mute : اعطاء ميوت لشخص معين
$unmute : لفك الميوت عن شخص معين
$clear : لمسح الشات مع عدد او بدون
$role  : لأعطاء رتبة لشخص معين
$role- : لأزالة رتبة من شخص معين
▁ ▂ ▃ ▄ ▅ ▆ ▇ █   █ ▇ ▆ ▅ ▄ ▃ ▂ ▁
►أشياء اخرى◄
$invite  : لدعوة البوت الى سيرفرك
$support  : سيرفر الدعم الفني
▁ ▂ ▃ ▄ ▅ ▆ ▇ █   █ ▇ ▆ ▅ ▄ ▃ ▂ ▁
   
`]
    let page = ;
 
    let embed = new Discord.RichEmbed()
    .setColor('RANDOM')
    .setFooter(`Page ${page} of ${pages.length}`)
    .setDescription(pages[page-1])
 
    message.author.sendEmbed(embed).then(msg => {
 
        msg.react('').then( r => {
            msg.react('')
 
 
        const backwardsFilter = (reaction, user) => reaction.emoji.name === '◀' && user.id === message.author.id;
        const forwardsFilter = (reaction, user) => reaction.emoji.name === '▶' && user.id === message.author.id;
 
 
        const backwards = msg.createReactionCollector(backwardsFilter, { time: 2000000});
        const forwards = msg.createReactionCollector(forwardsFilter, { time: 2000000});
 
 
 
        backwards.on('collect', r => {
            if (page === ) return;
            page--;
            embed.setDescription(pages[page-1]);
            embed.setFooter(`Page ${page} of ${pages.length}`);
            msg.edit(embed)
        })
        forwards.on('collect', r => {
            if (page === pages.length) return;
     
      page++;
            embed.setDescription(pages[page-1]);
            embed.setFooter(`Page ${page} of ${pages.length}`);
            msg.edit(embed)
        })
        })
    })
    }
});
client.on('message', message => {
    if(message.content === '$help') {
        message.reply('تم ارساله بالخاص :white_check_mark: ');
    }
});
client.login(process.env.BOT_TOKEN);
