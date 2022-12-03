import Discord from 'discord.js';

export function TemplatedMessageEmbed() {
  return new Discord.MessageEmbed()
    .setTimestamp()
    
    // .attachFiles(["./assets/logo.png"])
    .setAuthor('DoseBot Plus', 'attachment://logo.png')
    .setThumbnail('attachment://logo.png')
    .setColor('#747474')
    .setURL("https://github.com/dosebotredux")
    .setFooter('Please use drugs responsibly', 'attachment://logo.png')
}
