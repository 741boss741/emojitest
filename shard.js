const Discord = require('discord.js');
const client = new Discord.Client();
client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});
client.on('message', message => {
   let emoji = client.guilds.get("511225819415183360").emojis.find(r => r.name === "right"); //كود تعريف المتغير emoji
 
    if(message.content === 'sendemoji'){ //تحقق اذا الرساله هي sebdemji
   message.channel.send(`${emoji}`)//يرسل المتغير emoji 
    }  // xomar933 نهاية قوس التحقق
}); // x نهاية قوس الايفنت 


client.on('message', message => {
   let emoji = client.guilds.get("511225819415183360").emojis.find(r => r.name === "left"); //كود تعريف المتغير emoji
 
    if(message.content === 'sendemoji'){ //تحقق اذا الرساله هي sebdemji
   message.channel.send(`${emoji}`)//يرسل المتغير emoji 
    }  // xomar933 نهاية قوس التحقق
}); // x نهاية قوس الايفنت 


client.on('message', message => {
   let emoji = client.guilds.get("511225819415183360").emojis.find(r => r.name === "rly"); //كود تعريف المتغير emoji
 
    if(message.content === 'sendemoji'){ //تحقق اذا الرساله هي sebdemji
   message.channel.send(`${emoji}`)//يرسل المتغير emoji 
    }  // xomar933 نهاية قوس التحقق
}); // x نهاية قوس الايفنت 


client.on('message', message => {
	let emoji = client.guilds.get("511225819415183360").emojis.find(r => r.name === "rly");
if (message.content === '*help') {
         let embed = new Discord.RichEmbed()
.setThumbnail(message.author.avatarURL)    
      .addField("**:globe_with_meridians: الأوامر العامه**","** **")
      .addField("***ping :stopwatch:**","**لـ سرعة إتصالك**")
      .addField("***id :chart_with_downwards_trend:**","**عرض سرعه اتصال البوت**")
      .addField("***avatar :camping:**","**لـ صور الشخص المختار**")
      .addField("***roll :1234:**","**لـ القرعه من 1 - 100**")
      .addField("***server :recycle:**","**لـ معلومات السيرفر**")
      .addField("***roles :medal: **","**لـــ معرفة رولات السيرفر**")
      .addField("***say :arrows_counterclockwise:**","**لـ يكرر الكلام اللى تقوله**")
      .addField("***time :alarm_clock:**","**لـ معرفة الساعة**")
      .addField("***date **","**لـ معرفة التاريخ**")
	   .addField("***invites**","**لـــ معرفة دعواتك في السيرفر**")
	   .addField("***bot**","**لـــ معرفة معلومات البوت**")
	   .addField("***قوانين**","**لـــ معرفة قوانين السيرفر**")
	    .addField("***جديد**","**لـــ معرفة الجديد في البوت :)**")
        .addField("***tag**","**لـــ زخرفة الكلام**")
        .addField("***رابط **","**لـــا عطاك رابط السيرفر**")
	    .addField("***sug **","**لاقتراح اي اقتراح تريد ملزوم سبب طويل**")
		.addField("Test", "${emoji}")


.setColor('RANDOM')
message.channel.send(`${emoji} تم ارسالك في الخاص`);
  message.author.sendEmbed(embed);
    }
});

client.login(process.env.BOT_TOKEN)
