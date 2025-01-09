module.exports = {
    name: 'ping',
    description: 'Ping確認用コマンド',
    execute(message) {
        message.reply('Pong!');
    }
};