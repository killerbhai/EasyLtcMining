/*CMD
  command: /setStringWallet
  help: 
  need_reply: false
  auto_retry_time: 
  folder: 
  answer: 

  <<KEYBOARD

  KEYBOARD
  aliases: 
CMD*/

if (request.data) {
  var cht = request.message.chat.id
  var msg = request.message.message_id

  Api.deleteMessage({
    chat_id: cht,
    message_id: msg
  })
}

Bot.sendKeyboard("🆔 Menu", "🔻 Input DGB wallet for paying out:")
Bot.runCommand("onSet")

