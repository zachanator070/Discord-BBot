const CommandParser = require('./commandParser');
const cmdParser = new CommandParser();
//load in command files
cmdParser.registerCommand('test',require('./commands/test'));
cmdParser.registerCommand('compliment',require('./commands/compliment'));
module.exports = cmdParser;