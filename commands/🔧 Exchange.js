/*CMD
  command: š§ Exchange
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
  "š Menu",
  "In this section, you can exchange LitCoin for Stars.\nAll Stars you will receive will be added to your account.\n\nš» *Game currency rate:*\nāŖļø 0.0024 LitCoin = 10 š\n\nš» *Your LitCoin:*\n" +
    dgb.value().toFixed(8) +
    " LTC\n\nš Enter LitCoin amount you want to exchange:"
)
Bot.runCommand("onExc")

