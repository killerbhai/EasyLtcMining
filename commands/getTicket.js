/*CMD
  command: getTicket
  help: 
  need_reply: true
  auto_retry_time: 
  folder: 
  answer: 
  keyboard: 
  aliases: 
CMD*/

if (message.length > 5) {
  Bot.sendMessage("*Message sent to the administrator:* " + message)
  Bot.sendMessageToChatWithId(
    "861947009",
    "Support message from [" +
      user.telegramid +
      "](tg://user?id=" +
      user.telegramid +
      ") *[" +
      message +
      "]*"
  )
  return
}
Bot.sendMessage(
  "⚠️ *Please, send a longer message!*\nTry to explain better what you need, as much as you can in a single message!"
)
Bot.runCommand("getTicket")

