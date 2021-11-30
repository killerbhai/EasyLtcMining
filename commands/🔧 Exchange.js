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
  "In this section, you can exchange DigiByte for Stars.\nAll Stars you will receive will be added to your account.\n\n🔻 *Game currency rate:*\n▪️ 1 DigiByte = 10 🌟\n\n🔻 *Your DigiByte:*\n" +
    dgb.value().toFixed(8) +
    " DGB\n\n👇 Enter DigiByte amount you want to exchange:"
)
Bot.runCommand("onExc")

