const commando = require('discord.js-commando');

class RandomCommand extends commando.Command {

  constructor(client){
    super(client, {
      name: "rand",
      group: "random",
      memberName: "rand",
      description: "Donne un nombre random entre les deux entiers donnés",
      args: [
        {
          key: 'min',
          prompt: 'quel est el minimum ?',
          type: 'integer'
        },
        {
          key: 'max',
          prompt: 'quel est el maximum ?',
          type:'integer'
        }
      ]
    });
  }

  async run(message, { min, max }) {
    message.reply(Math.floor(Math.random() * (max - min + 1) ) + min);
  }

}

module.exports = RandomCommand;
