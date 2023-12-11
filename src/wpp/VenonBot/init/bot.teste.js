const venom = require('venom-bot');

venom.create({
    session: 'session-name' //name of session
})
    .then((client) => {
        bot_settings(client)
    })
    .catch((erro) => {
        console.log(erro);
    });
/**
 * 
 * @param {venom.Whatsapp} client 
 */
function bot_settings(client) {
    client.onMessage(message => {
        client.sendText(message.from, "teste")
    })
}