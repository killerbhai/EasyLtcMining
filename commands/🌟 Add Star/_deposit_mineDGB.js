/*CMD
  command: /deposit_mineDGB
  help: 
  need_reply: 
  auto_retry_time: 
  folder: š Add Star
  answer: 
  keyboard: 
  aliases: 
CMD*/

Bot.sendMessage(
  "*ā ļø Send " +
    options.result.amount +
    " LTC to the generated address of bot.\n\nš After 10 confirmation later your deposit will show into the bot.\n\nš„ Your Deposit Address:*\n`" +
    options.result.address +
    "`\n\nš *Status:* 00:59:59"
)

