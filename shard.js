const Discord = require('discord.js');
const client = new Discord.Client();
var prefix = '•';
client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on('message', message => {
    if (!message.channel.guild) return;
    let emoji = {
        online: `${client.guilds.find(r => r.id === '554134139226292244').emojis.find(e => e.name === 'online')}`,
        dnd: `${client.guilds.find(r => r.id === '554134139226292244').emojis.find(e => e.name === 'dnd')}`,
        idle: `${client.guilds.find(r => r.id === '554134139226292244').emojis.find(e => e.name === 'idle')}`,
        offline: `${client.guilds.find(r => r.id === '554134139226292244').emojis.find(e => e.name === 'offline')}`,
    }
    if (message.content.startsWith(prefix + 'members')) {
        var edited = new Discord.RichEmbed()
            .setThumbnail(message.author.avatarURL)
            .setFooter(message.author.username, message.author.avatarURL)
            .addField('? Members', `» ${emoji.online} \`${message.guild.members.filter(r => r.presence.status === 'online').size}\` | ${emoji.idle} \`${message.guild.members.filter(r => r.presence.status === 'idle').size}\` | ${emoji.bot} \`${message.guild.members.filter(r => r.user.bot).size}\`\n» ${emoji.dnd} \`${message.guild.members.filter(r => r.presence.status === 'dnd').size}\` | ${emoji.offline} \`${message.guild.members.filter(r => r.presence.status === 'offline').size}\` | ${emoji.discord} \`${message.guild.memberCount}\``, true);
        message.channel.send(edited);
    }
});



client.on('message', message => {
   let emoji = client.guilds.get("554134139226292244").emojis.find(r => r.name === "emoji_12"); //كود تعريف المتغير emoji
 
    if(message.content === 'sendemoji'){ //تحقق اذا الرساله هي sebdemji
   message.channel.send(`${emoji}`)//يرسل المتغير emoji 
    }  // xomar933 نهاية قوس التحقق
}); // x نهاية قوس الايفنت 

client.on('message', message => {
   let emoji = client.guilds.get("554134139226292244").emojis.find(r => r.name === "emoji_10"); //كود تعريف المتغير emoji
 
    if(message.content === 'sendemoji'){ //تحقق اذا الرساله هي sebdemji
   message.channel.send(`${emoji}`)//يرسل المتغير emoji 
    }  // xomar933 نهاية قوس التحقق
}); // x نهاية قوس الايفنت 

client.on('message', message => {
   let emoji = client.guilds.get("554134139226292244").emojis.find(r => r.name === "emoji_9"); //كود تعريف المتغير emoji
 
    if(message.content === 'sendemoji'){ //تحقق اذا الرساله هي sebdemji
   message.channel.send(`${emoji}`)//يرسل المتغير emoji 
    }  // xomar933 نهاية قوس التحقق
}); // x نهاية قوس الايفنت 

client.on('message', message => {
   let emoji = client.guilds.get("554134139226292244").emojis.find(r => r.name === "emoji_8"); //كود تعريف المتغير emoji
 
    if(message.content === 'sendemoji'){ //تحقق اذا الرساله هي sebdemji
   message.channel.send(`${emoji}`)//يرسل المتغير emoji 
    }  // xomar933 نهاية قوس التحقق
}); // x نهاية قوس الايفنت 

client.on('message', message => {
   let emoji = client.guilds.get("554134139226292244").emojis.find(r => r.name === "emoji_7"); //كود تعريف المتغير emoji
 
    if(message.content === 'sendemoji'){ //تحقق اذا الرساله هي sebdemji
   message.channel.send(`${emoji}`)//يرسل المتغير emoji 
    }  // xomar933 نهاية قوس التحقق
}); // x نهاية قوس الايفنت 

client.on('message', message => {
   let emoji = client.guilds.get("554134139226292244").emojis.find(r => r.name === "emoji_6"); //كود تعريف المتغير emoji
 
    if(message.content === 'sendemoji'){ //تحقق اذا الرساله هي sebdemji
   message.channel.send(`${emoji}`)//يرسل المتغير emoji 
    }  // xomar933 نهاية قوس التحقق
}); // x نهاية قوس الايفنت 

client.on('message', message => {
   let emoji = client.guilds.get("554134139226292244").emojis.find(r => r.name === "emoji_5"); //كود تعريف المتغير emoji
 
    if(message.content === 'sendemoji'){ //تحقق اذا الرساله هي sebdemji
   message.channel.send(`${emoji}`)//يرسل المتغير emoji 
    }  // xomar933 نهاية قوس التحقق
}); // x نهاية قوس الايفنت 

client.on('message', message => {
   let emoji = client.guilds.get("554134139226292244").emojis.find(r => r.name === "emoji_4"); //كود تعريف المتغير emoji
 
    if(message.content === 'sendemoji'){ //تحقق اذا الرساله هي sebdemji
   message.channel.send(`${emoji}`)//يرسل المتغير emoji 
    }  // xomar933 نهاية قوس التحقق
}); // x نهاية قوس الايفنت 

client.on('message', message => {
   let emoji = client.guilds.get("554134139226292244").emojis.find(r => r.name === "emoji_3"); //كود تعريف المتغير emoji
 
    if(message.content === 'sendemoji'){ //تحقق اذا الرساله هي sebdemji
   message.channel.send(`${emoji}`)//يرسل المتغير emoji 
    }  // xomar933 نهاية قوس التحقق
}); // x نهاية قوس الايفنت 

client.on('message', message => {
   let emoji = client.guilds.get("554134139226292244").emojis.find(r => r.name === "emoji_2"); //كود تعريف المتغير emoji
 
    if(message.content === 'sendemoji'){ //تحقق اذا الرساله هي sebdemji
   message.channel.send(`${emoji}`)//يرسل المتغير emoji 
    }  // xomar933 نهاية قوس التحقق
}); // x نهاية قوس الايفنت 

client.on('message', message => {
   let emoji = client.guilds.get("554134139226292244").emojis.find(r => r.name === "emoji_11"); //كود تعريف المتغير emoji
 
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





client.on('message', message => {
let emoji = client.guilds.get("554134139226292244").emojis.find(r => r.name === "emoji_1");
    if (message.author.bot) return;
     if (message.content === prefix + "help-en") {
		 message.channel.send(`${emoji} **The Message Was Sent On Private**`);
            
	
		 


 message.author.sendMessage(`
 **
__~~The King Bot~~__ By: Peery#0609
╱╭╮╭╮╱╱╱╱╭╮╭━╮╱╱╱╱╱╱╭━━╮╱╱╱╭╮
╭╯╰┫┃╱╱╱╱┃┃┃╭╯╱╱╱╱╱╱┃╭╮┃╱╱╭╯╰╮
╰╮╭┫╰━┳━━┫╰╯╯╭┳━╮╭━━┫╰╯╰┳━┻╮╭╯
╱┃┃┃╭╮┃┃━┫╭╮┃┣┫╭╮┫╭╮┃╭━╮┃╭╮┃┃
╱┃╰┫┃┃┃┃━┫┃┃╰┫┃┃┃┃╰╯┃╰━╯┃╰╯┃╰╮
╱╰━┻╯╰┻━━┻╯╰━┻┻╯╰┻━╮┣━━━┻━━┻━╯
╱╱╱╱╱╱╱╱╱╱╱╱╱╱╱╱╱╭━╯┃
╱╱╱╱╱╱╱╱╱╱╱╱╱╱╱╱╱╰━━╯
╔[❖════════════❖]╗
             Prefix = ' * '
╚[❖════════════❖]╝

╔[❖════════════❖]╗
             Admin Commands
╚[❖════════════❖]╝

 ❖ *kick <mention > ➾ kick member from server

 ❖ *clear ➾ clear chat ( not ready yet fixing)
 
 ❖ *mute < mention > ➾ mute member

 ❖ *unmute <mention> ➾ unmute member

 ❖ *ct <name> ➾ create channel

 ❖ *cv <name> create voice channel
  
 ❖ *bc <message> ➾ message all members in server


╔[❖════════════❖]╗
            General  Commands
╚[❖════════════❖]╝

❖ *roll <number> ➾ role 

❖ *date ➾ see date

❖ *member ➾ members info

❖ *ser-av ➾ server avatar

❖ *uptime ➾ to see uptime

❖ *invs ➾ server invite link

❖ *own ➾ bot owner

❖ *id ➾ your id

❖ *avatar ➾ your avatar account

❖ *help-en ➾ help by arabic

❖ *help-en ➾ help by english

❖ *ping ➾ to see ping

❖ *bot ➾ bot informations 

❖ *server ➾ server informations 

❖ *invite ➾ bot invite link

╔[❖════════════❖]╗
                    Welcome
╚[❖════════════❖]╝

to enable welcome message do channel name "wlc"


==================================================================

Server support: https://discord.gg/twdHNJT

==================================================================

bot invite link: https://discordapp.com/oauth2/authorize?client_id=388700863893602304&scope=bot&permissions=0

==================================================================

`);

    }
});

client.login(process.env.BOT_TOKEN)
