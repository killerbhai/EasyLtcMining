/*CMD
  command: /dgbRefLinkOnGet
  help: 
  need_reply: 
  auto_retry_time: 
  folder: 
  answer: 
  keyboard: 
  aliases: 
CMD*/

if (!User.getProperty("link")) {
  var rli = Libs.Random.randomInt(100, 999)
  User.setProperty("flic", rli, "params")
  User.setProperty("link", true, "boolean")
}

var fl = User.getProperty("flic")
var reflink = Libs.ReferralLib.currentUser.getRefLink(bot.name, fl)

Bot.sendMessage("*Invite Friends Link:\n" + reflink + "*")

