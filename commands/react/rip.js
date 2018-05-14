// Commande du RIP

const commando = require("discord.js-commando");

class RipCommand extends commando.Command {

  constructor(client){
    super(client, {
      name: 'rip',
      group: 'react',
      memberName: 'rip',
      description: 'Miguel montre son respect'
    });
  }

  async run(message, args) {
    switch(Math.floor(Math.random()*10)){
      case 0:
      message.channel.send("Riperoni, Amigo");
      break;
      case 1:
      message.channel.send("Rest in pieces :cry: ");
      break;
      case 2:
      message.channel.send("Rest in Pasta :cry: ");
      break;
      case 3:
      message.channel.send("Rip");
      break;
      case 4:
      message.channel.send("Why are we still here ?... Just to suffer...");
      message.channel.send("Every night... I can feel my leg, the camrades I lost...");
      break;
      case 5:
      message.channel.send("Press F to pay respect");
      message.channel.send("F");
      message.channel.send("F");
      message.channel.send("F");
      break;
      case 6:
      message.channel.send("Rest in Peperoni :cry: ");
      break;
      case 7:
      message.channel.send("Adios, amigo ! :cry: ");
      break;
      case 8:
      message.channel.send("So long, old friend...");
      break;
      case 9:
      message.channel.send("Rest in Pista Cyclable :cry: ");
      break;
      default:
      message.channel.send("descansa en paz");
    }
  }
}

module.exports = RipCommand;
