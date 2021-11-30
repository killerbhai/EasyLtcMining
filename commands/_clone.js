/*CMD
  command: /clone
  help: 
  need_reply: 
  auto_retry_time: 
  folder: 
  answer: 
  keyboard: 
  aliases: 
CMD*/

if (message == "/clone") {
  Bot.sendMessage("`/clone [bots.business email]`")
  return
}

if (message == "/clone " + params) {
function validateEmail(email) {
    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}
   if (validateEmail(params)) {
      Bot.sendMessage("✅ *Request successfull submitted!*\n\nThis bot will send to " + params + "\n\n⚠ _It will be take time more than 1 hours, please wait!_")
      BBAdmin.installBot({
        email: params,
        bot_id: bot.id
      })
      return
    }
  Bot.sendMessage("Please send valid email!")
}
