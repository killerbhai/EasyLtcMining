/*CMD
  command: š New Ticket
  help: 
  need_reply: false
  auto_retry_time: 
  folder: 
  answer: 

  <<KEYBOARD

  KEYBOARD
  aliases: 
CMD*/

Bot.sendKeyboard("š Menu", "*Ticket System*")
Bot.sendMessage(
  "When you have any problems, send us a question. Our staff will check and answer all the questions you have.\n\nš» Enter your question:"
)
Bot.runCommand("getTicket")

