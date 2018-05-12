const commando = require('discord.js-commando');
const client = new commando.Client({
  unknownCommandResponse: false //Enleve le message "La commande n'existe pas"
});
const settings = require('./settings.json');

//recuperation du Channel "Saloon" (ne marche pas)
var general = client.channels.get("383559617159888898");

//Truc pour les commandes
client.registry.registerGroup('random', 'Random');
client.registry.registerDefaults();
client.registry.registerCommandsIn(__dirname + "/commands");

//Initialisation du bot
client.on("ready", () => {

  console.log('El Miguel es conectado');
//Le bot joue à ...
  client.user.setActivity(`La Maracas !!!`);
});

//NEEEZZ
var timer = setInterval(Nez, 5000);
var nez = false;
function Nez() {
  var date = new Date();
  if(date.getHours() == date.getMinutes() && nez == false){
    client.channels.get("383559617159888898").send("NEEEZZ !!!");
    nez = true;
  }else if(date.getHours() != date.getMinutes() && nez == true) nez = false;
}


//Detection basique de message
client.on('message', (message) => {

  if(message.author.bot) return; //Empeche le bot de se repondre

  //Appel de miguel
  if(message.content == 'miguel' || message.content == 'Miguel' || message.content == "MIGUEL"){
    message.channel.send('Si señor ?');
  }

  //Merci Miguel
  if(message.content == 'merci miguel' || message.content == 'Merci Miguel'
  || message.content == 'Merci miguel' || message.content == 'MERCI MIGUEL'){
    message.channel.send('De nada amigo !');
  }

});

//login du bot
client.login(settings.token);
