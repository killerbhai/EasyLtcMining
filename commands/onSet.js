/*CMD
  command: onSet
  help: 
  need_reply: true
  auto_retry_time: 
  folder: 
  answer: 
  keyboard: 
  aliases: 
CMD*/

if (message.length < 34) {
  Bot.sendMessage("š» Input LTC wallet for paying out:")
  Bot.sendMessage(
    "ā Error! Your LTC wallet invalid please set your LTC correct address...\n\nā ļø _Your wallet should contained 34-43 string!_"
  )
  Bot.runCommand("onSet")
  return
}

if (message.length > 43) {
  Bot.sendMessage("š» Input LTC wallet for paying out:")
  Bot.sendMessage(
    "ā Error! Your LTC wallet invalid please set your LTC corect address...\n\nā ļø _Your wallet should contained 34-43 string!_"
  )
  Bot.runCommand("onSet")
  return
}

User.setProperty("dgbw", message, "params")
Bot.sendMessage(
  "ā *Update wallet succesfully.*\nYour LitCoin (LTC) wallet:\n`" +
    message +
    "`"
)

