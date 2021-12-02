/*CMD
  command: 🔧 Exchange
  help: 
  need_reply: 
  auto_retry_time: 
  folder: 
  answer: 
  keyboard: 
  aliases: 
CMD*/

var dgb = Libs.ResourcesLib.userRes("dgb")

Bot.sendKeyboard(
  "🆔 Menu",
  "In this section, you can exchange LitCoin for Stars.\nAll Stars you will receive will be added to your account.\n\n🔻 *Game currency rate:*\n▪️ 0.0024 LitCoin = 10 🌟\n\n🔻 *Your LitCoin:*\n" +
    dgb.value().toFixed(8) +
    " LTC\n\n👇 Enter LitCoin amount you want to exchange:"
)
Bot.runCommand("onExc")

