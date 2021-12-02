/*CMD
  command: /set
  help: 
  need_reply: 
  auto_retry_time: 
  folder: 
  answer: 
  keyboard: 
  aliases: 
CMD*/

if (user.telegramid !== 861947009) {
  return
}

if (message == "/set") {
  Bot.sendMessage("Invalid command!")
  return
}

var amount = parseFloat(params)
if (message == "/set " + params) {
  var umr = Bot.getProperty("umr")
  var dgb = Libs.ResourcesLib.anotherUserRes("dgb", umr).add(amount)
  Bot.sendMessage(
    "💵 give [" + umr + "](tg://user?id=" + umr + ") *" + amount + " LTC*"
  )
  Bot.sendMessageToChatWithId(
    umr,
    "➕ *Top Up*\n\nYour Top Up of *" +
      amount +
      " LTC* succesfull!\n\n✨ *Transaction Proof:*\nNo Have Transaction Proof"
  )
}

