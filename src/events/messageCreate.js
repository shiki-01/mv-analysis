module.exports = {
    name: 'messageCreate',
    execute(message, client) {
        if (message.author.bot) return;
    }
};