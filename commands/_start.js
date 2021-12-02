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
  Bot.sendMessage("✅ Welcome Bonus earned 100 🌟")
  User.setProperty("start", true, "boolean")
}

Bot.sendKeyboard(
  "🆔 Menu",
  "Welcome to *LTC Mining Bot*\nIn this game you can play and earn real money at the same time!"
)
Bot.sendInlineKeyboard(
  [{ title: "🔴 All Payment Receipts 🔴", url: "t.me/BttMiningPay" }],
  "🔻 New channel - Payment list 🔻"
)
Bot.sendInlineKeyboard(
  [{ title: "🔴 All Updates & News🔴", url: "t.me/BttMiningNews" }],
  "🔻 New channel - Deposit list 🔻"
)

