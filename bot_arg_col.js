// requerimientos
const Discord = require('discord.js');

//agregar keep_alive
const keep_alive = require ('./keep_alive.js');
require ('./keep_alive.js');

//definir cliente
const Client = new Discord.Client({ intents: [33539]});

// contenido
Client.on('ready', async ( client ) => {
    console.log(`Estoy listo!!! Hola Mundo, yo soy: ${client.user.tag}`)
    console.log(`Me presento: ${client.user.username}`)
});

Client.on('message', msg => {
    if(msg.author == client.user){
        return;
    }
    if (message.content === '!Hola!'){
        console.log('saludemos...')
        message.reply('¡Hola!, ¿Como te encuentras?');
        console.log('¡Hola!, ¿Como te encuentras?')
    }
    if (message.content === '!Repetir!'){
        console.log('Retornando...')
        message.reply('Retornando Respuesta: ' + message.content);
        console.log('Retornando Respuesta: ' + message.content)
    }
    if(message.content === '!Stiven!'){
        message.reply('El señor Stiven o SNARZ es un boludito calenton, lo afirmo!!!')
        console.log('El señor Stiven o SNARZ es un boludito calenton, lo afirmo!!!')
    }
    if(message.content === '!Leandro!'){
        message.reply('El señor Leandro es un especialista en sistemas, lo afirmo!!!')
        console.log('El señor Leandro es un especialista en sistemas, lo afirmo!!!')
    }
    
    if(message.content === '!SNARZ!'){
        message.reply('Mr SNARZ es un boludito calenton, y callado... lo afirmo!!!')
        console.log('Mr SNARZ es un boludito calenton, y callado... lo afirmo!!!')
    }
    
    if(message.content === '!SlipKnot!'){
        message.reply('Mr SlipKnot es una persona misteriosa, con grandes conocimientos, sabiduria y demas yerbas... CONOCELO...lo afirmo!!!')
        console.log('Mr SlipKnot es una persona misteriosa, con grandes conocimientos, sabiduria y demas yerbas... CONOCELO...lo afirmo!!!')
    }

    if(message.content === '!hora!'){
        const date = new Date()
        const dia = date.getDay()
        const hora = date.getHours()
        const minutos = date.getMinutes()
        message.reply('La Hora es: ' + hora + ':' + minutos + ' hs.')
        console.log('La Hora es: ' + dia + ' ' + hora + ':' + minutos + ' hs.')
    }
    if(message.content === '!fecha!'){
        console.log('moments' , moment.tz.guess(message.createdTimestamp.toLocaleString()))
        const meses = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre']
        const dias = ['Lunes', 'Martes', 'Miercoles', 'Jueves', 'Viernes', 'Sabado', 'Domingo']
        const date = new Date()
        const region = message.createdTimestamp
        const anio = date.getFullYear()
        const mes = meses[date.getMonth()]
        const diaN = date.getDate()
        const dia = dias[date.getDay()]
        const hora = date.getHours()
        const minutos =  date.getMinutes().toString().length == 1 ? '0' + date.getMinutes() :  date.getMinutes()
        message.reply('La fecha y hora es: ' + dia + ', ' + diaN + ' de ' + mes + ' del ' + anio + ' y son las ' + hora + ':' + minutos + ' hs.')
        console.log('La Hora es: ' + dia + ' ' + hora + ':' + minutos + ' hs.')
    }
    if(message.content === '!comandos!'){
        message.reply('Los comandos a invocar son: ["!Hola!","!Repetir!","!Stiven!","!SNARZ!","!Leandro!","!SlipKnot!","!hora!","!fecha!"]')
        console.log('Los comandos a invocar son: ["!Hola!","!Repetir!","!Stiven!","!SNARZ!","!Leandro!","!SlipKnot!","!hora!","!fecha!"]')
    }
    if(message.content === '!commands!'){
        message.reply('Los comandos a invocar son: ' + '\n' + '\n' + "!Hola!" + '\n' + "!Repetir!" + '\n' + "!Stiven!" + '\n' + "!SNARZ!" + '\n' + "!Leandro!" + '\n' + "!SlipKnot!" + '\n' + "!hora!" + '\n' + "!fecha!")
        console.log('Los comandos a invocar son: ' + '\n' + '\n' + "!Hola!" + '\n' + "!Repetir!" + '\n' + "!Stiven!" + '\n' + "!SNARZ!" + '\n' + "!Leandro!" + '\n' + "!SlipKnot!" + '\n' + "!hora!" + '\n' + "!fecha!")
    }
    if(message.content !==''){
        console.log('Mostrando message: ' + message.content)
    } else {
        console.log('mostrando message vacio por error: ' + message.content)
    }
    console.log(`(Username => ${message.author.tag}): ${message.content}`)
    console.log(`(Nickname => ${message.author.globalName}): ${message.content}`)
})

// conectar
Client.login(process.env.token_bot_arg_col);