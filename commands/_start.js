/*CMD
  command: /start
  help: 
  need_reply: 
  auto_retry_time: 
  folder: 
  answer: 
  keyboard: 
  aliases: 
CMD*/

function onAttracted(refUser) {
  var refchat = refUser.telegramid
}

Libs.ReferralLib.currentUser.track({
  onAtractedByUser: onAttracted
})

if (!User.getProperty("start")) {
  var usr = Libs.ResourcesLib.anotherUserRes("usr", 718477).add(1)
  var star = Libs.ResourcesLib.userRes("star").add(100)
  Bot.sendMessage("β Welcome Bonus earned 100 π")
  User.setProperty("start", true, "boolean")
}

Bot.sendKeyboard(
  "π Menu",
  "Welcome to *LTC Mining Bot*\nIn this game you can play and earn real money at the same time!"
)
Bot.sendInlineKeyboard(
  [{ title: "π΄ All Payment Receipts π΄", url: "t.me/BttMiningPay" }],
  "π» New channel - Payment list π»"
)
Bot.sendInlineKeyboard(
  [{ title: "π΄ All Updates & Newsπ΄", url: "t.me/BttMiningNews" }],
  "π» New channel - Deposit list π»"
)

