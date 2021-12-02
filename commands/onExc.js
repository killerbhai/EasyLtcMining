/*CMD
  command: onExc
  help: 
  need_reply: true
  auto_retry_time: 
  folder: 
  answer: 
  keyboard: 
  aliases: 
CMD*/

var dgb = Libs.ResourcesLib.userRes("dgb")
var star = Libs.ResourcesLib.userRes("star")
var amount = parseFloat(message)

function isNumeric(n) {
  return !isNaN(parseFloat(n)) && isFinite(n)
}
var value = message
if (!isNumeric(value)) {
  Bot.sendMessage("📛 Invaild value. Enter only numeric value. Try again")
  Bot.runCommand("onExc")
  return
}

if (amount < 1) {
  Bot.sendMessage("👋 Your LTC amount is too small. please re-enter:")
  Bot.runCommand("onExc")
  return
}

if (amount > dgb.value()) {
  Bot.sendMessage("👋 Your LTC amount is too big. please re-enter:")
  Bot.runCommand("onExc")
  return
}

dgb.remove(amount)
star.add(amount * 10)
Bot.sendMessage("✅ *Your stars:* +" + amount * 10 + " 🌟")

