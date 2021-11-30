/*CMD
  command: 🏧 Payments
  help: 
  need_reply: 
  auto_retry_time: 
  folder: 🏪 Payment Order
  answer: 
  keyboard: 
  aliases: 
CMD*/

var dgbw = User.getProperty("dgbw")
if (!dgbw) {
  Bot.sendKeyboard("🆔 Menu", "🔻 Input DGB wallet for paying out:")
  Bot.runCommand("onSet")
  return
}

Bot.sendKeyboard(
  "🏪 Payment Order, 📋 Payment History,\n🆔 Menu",
  "*Your DGB Wallet:*\n" + dgbw
)

