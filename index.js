const Discord = require("discord.js");
const client = new Discord.Client();
const KEY = "ODYyODM0NDAwODY1OTQzNTc0.YOeHJw.Kfx56Eo_sTHg05XGsNYNayfA5AQ";

client.on('ready',()=>{
    console.log("bot is ready");
})

client.on('message', message =>{
    if(message.content.includes('!bottest')){
        const msg = message.content.substring(9,message.content.length );
        const testChannel = client.channels.fetch
        console.log(testChannel);
        message.channel.send(`${msg}`);
        console.log(message);
    }
})

client.login(KEY);