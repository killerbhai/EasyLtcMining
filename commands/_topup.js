/*CMD
  command: /topup
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

if (message == "/topup") {
  Bot.sendMessage("Invalid command!")
  return
}

if (message == "/topup " + params) {
  Bot.setProperty("umr", params, "params")
  Bot.sendMessage(
    "Use `/set [amount]` for give [" +
      params +
      "](tg://user?id=" +
      params +
      ") balance!"
  )
}

