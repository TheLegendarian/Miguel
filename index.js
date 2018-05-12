const commando = require('discord.js-commando');
const client = new commando.Client({
  unknownCommandResponse: false
});
const settings = require('./settings.json');

var general = client.channels.get("383559617159888898");


client.registry.registerGroup('random', 'Random');
client.registry.registerDefaults();
client.registry.registerCommandsIn(__dirname + "/commands");

client.on("ready", () => {

  console.log('El Miguel es conectado');

  client.user.setActivity(`La Maracas !!!`);

});

//NEEEZZ
var timer = setInterval(Nez, 5000);
var nez = false;
function Nez() {
  var date = new Date();
  if(date.getHours() == date.getMinutes() && nez == false){
    client.channels.get("383559617159888898").send("NEEEZZ !!! Caramba !");
    nez = true;
  }else if(date.getHours() != date.getMinutes() && nez == true) nez = false;
}



client.on('message', (message) => {
  if(message.author.bot) return;

  if(message.content == 'miguel' || message.content == 'Miguel' || message.content == "MIGUEL"){
    message.channel.send('Si señor ?');
  }

  if(message.content == 'merci miguel' || message.content == 'Merci Miguel'
  || message.content == 'Merci miguel' || message.content == 'MERCI MIGUEL'){
    message.channel.send('De nada amigo !');
  }

});

client.login(settings.token);
