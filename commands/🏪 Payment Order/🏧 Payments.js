/*CMD
  command: š§ Payments
  help: 
  need_reply: 
  auto_retry_time: 
  folder: šŖ Payment Order
  answer: 
  keyboard: 
  aliases: 
CMD*/

var dgbw = User.getProperty("dgbw")
if (!dgbw) {
  Bot.sendKeyboard("š Menu", "š» Input DGB wallet for paying out:")
  Bot.runCommand("onSet")
  return
}

Bot.sendKeyboard(
  "šŖ Payment Order, š Payment History,\nš Menu",
  "*Your DGB Wallet:*\n" + dgbw
)

