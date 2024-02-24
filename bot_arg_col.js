// requerimientos
const Discord = require('discord.js');

//agregar keep_alive
const keep_alive = require ('./keep_alive.js');

//definir cliente
const Client = new Discord.Client({
    intents: 33027
});

// contenido
Client.on('ready', async ( client ) => {
    console.log(`Estoy listo!!! Hola Mundo, yo soy: ${client.user.tag}`)
});

Client.on('message', msg => {
    if(msg.author == client.user){
        return;
    }
    else if (msg.content === 'Hola'.toLowerCase){
        msg.reply('¡Hola!, ¿Como te encuentras?');
    }
    else {
        msg.reply('Retornando Respuesta: ' + msg.content);
    }
})

// conectar
Client.login(process.env.token_bot_arg_col);