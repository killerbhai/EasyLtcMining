/*CMD
  command: /deposit_mineDGB
  help: 
  need_reply: 
  auto_retry_time: 
  folder: 🌟 Add Star
  answer: 
  keyboard: 
  aliases: 
CMD*/

Bot.sendMessage(
  "*⚠️ Send " +
    options.result.amount +
    " DGB to the generated address of bot.\n\n🌐 After 10 confirmation later your deposit will show into the bot.\n\n📥 Your Deposit Address:*\n`" +
    options.result.address +
    "`\n\n🕑 *Status:* 00:59:59"
)

