/*CMD
  command: 📋 Payment History
  help: 
  need_reply: 
  auto_retry_time: 
  folder: 🏪 Payment Order
  answer: 
  keyboard: 
  aliases: 
CMD*/

var dghisty = User.getProperty("dghisty")
if (!dghisty) {
  Bot.sendMessage("*Payment History*\n\n👋 Payment not found")
} else {
  Bot.sendMessage("*Payment History*\n" + dghisty)
}

