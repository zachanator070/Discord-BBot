const CommandParser = require('./commandParser');
const cmdParser = new CommandParser();
//load in command files
cmdParser.registerCommand('test',require('./commands/test'));
cmdParser.registerCommand('compliment',require('./commands/compliment'));
cmdParser.registerCommand('insult',require('./commands/insult'));
cmdParser.registerCommand('bincero',require('./commands/bincero'));
module.exports = cmdParser;