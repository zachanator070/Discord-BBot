const CommandParser = require('./commandParser');
const cmdParser = new CommandParser();
//load in command files
cmdParser.registerCommand('help',require('./commands/help'));
cmdParser.registerCommand('test',require('./commands/test'));
cmdParser.registerCommand('compliment',require('./commands/compliment'));
cmdParser.registerCommand('insult',require('./commands/insult'));
cmdParser.registerCommand('bincero',require('./commands/bincero'));
cmdParser.registerCommand('joinVoice',require('./commands/joinVoice'));
cmdParser.registerCommand('leaveVoice',require('./commands/leaveVoice'));
cmdParser.registerCommand('sb',require('./commands/sb'));
cmdParser.registerCommand('sbList',require('./commands/sbList'));
module.exports = cmdParser;