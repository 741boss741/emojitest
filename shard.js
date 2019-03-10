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
   let emoji = client.guilds.get("554134139226292244").emojis.find(r => r.name === "emoji_1"); //كود تعريف المتغير emoji
 
    if(message.content === 'sendemoji'){ //تحقق اذا الرساله هي sebdemji
   message.channel.send(`${emoji}`)//يرسل المتغير emoji 
    }  // xomar933 نهاية قوس التحقق
}); // x نهاية قوس الايفنت 

client.login(process.env.BOT_TOKEN)
