/*CMD
  command: 🏪 Payment Order
  help: 
  need_reply: 
  auto_retry_time: 
  folder: 🏪 Payment Order
  answer: 
  keyboard: 
  aliases: 
CMD*/

var dgb = Libs.ResourcesLib.userRes("dgb")
var dgbw = User.getProperty("dgbw")

Bot.sendKeyboard(
  "🆔 Menu",
  "⚠️ Transaction fee: (est. 0.00300000 DGB)\n\n▪️ Minimum payment: *10.000000 DGB*\n▪️ Your DigiByte: *" +
    dgb.value().toFixed(8) +
    " DGB*\n▪️ DigiByte will be sent to the wallet:\n*" +
    dgbw +
    "*\n\n🔻 Enter DigiByte want to withdraw:"
)
Bot.runCommand("amountWDDGB1on")

