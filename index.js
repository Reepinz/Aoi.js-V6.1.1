const { setup } = require("aoi.parser");
const aoijs = require("aoi.js");
const {token, prefix} = require("./config.json")
const bot = new aoijs.AoiClient({
  token: 'MTA5MzcyMTgwODgwNjYwODk4OA.Gkf54E.w1lKn0NxWFIXZvdRinzFwq6bsRh1HFc4wVCZFE', // isi token 
  prefix: 'h',
  intents: ["MessageContent", "Guilds", "GuildMessages"],
  events: ["onMessage", "onInteractionCreate"]
});

//variable 
bot.variables(require("./handler/var.js"));

//command handler
const loader = new aoijs.LoadCommands(bot)
loader.load(bot.cmd,"./commands/")

//aoi.parser
const parser = aoijs.Util
setup(parser)
