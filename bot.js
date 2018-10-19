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
client.on("message", message => {
    let args = message.content.split(" ").slice(1);
  if (message.content.startsWith(prefix + 'owner')) {
        let user = message.mentions.users.first();
        let reason = args.slice(1).join(' ');
        let modlog = client.channels.find('name', 'call-owner');
        if (!reason) return message.reply('**ضع سبباً مقنعاً**');
   
    if (!modlog) return message.reply('**لا يوجد روم بأسم call-owner**');
    const embed = new Discord.RichEmbed()
      .setColor(0x00AE86)
      .setTimestamp()
      .addField('نوع الرسالة:', 'call-owner')
      .addField('المراد قوله :', reason);
      message.delete()
      return client.channels.get(modlog.id).sendEmbed(embed).catch(console.error);
      console.log('[call owner] Send By: ' + message.author.username)
  }
  });
client.login(process.env.BOT_TOKEN);
