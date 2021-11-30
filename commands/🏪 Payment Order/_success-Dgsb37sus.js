/*CMD
  command: /success-Dgsb37sus
  help: 
  need_reply: 
  auto_retry_time: 
  folder: 🏪 Payment Order
  answer: 
  keyboard: 
  aliases: 
CMD*/

var result = options.body.result
var error = options.body.error
var amount = result.amount
var id = result.id
var dgbw = User.getProperty("dgbw")
var wdm = User.getProperty("wdm")

if (error == "ok") {
  Bot.run({
    command: "kdjejSuccess837e",
    run_after: 1 * 60 * 5,
    options: { id: id }
  })
  Bot.sendMessage(
    "✅ Payment was approved.\n\n✅ It will be sent within 24 hours.\n\n💳 *Transaction Details:*\n*" +
      amount +
      " DGB* to the wallet `" +
      dgbw +
      "`"
  )
  Bot.sendMessage(
    "🔄 *Payment in progress*\n\n💳 *Transaction Details:*\n*" +
      amount +
      " DGB* to the wallet `" +
      dgbw +
      "`\n\nSecured Payment ID:\n*" +
      id +
      "*\n_You will receive TXID soon_"
  )
} else {
  Bot.sendMessage(
    "✅ Payment was approved.\n\n✅ It will be sent within 24 hours.\n\n💳 *Transaction Details:*\n*" +
      amount +
      " DGB* to the wallet `" +
      dgbw +
      "`"
  )
  Bot.sendInlineKeyboardToChatWithId(
    "861947009",
    [{ title: "Paid Manually", command: "/iWantToPaidManualThisUser?" }],
    "*[✅ Payment was approved.\n\n✅ It will be sent within 24 hours.\n\n💳 Transaction Details:\n" +
      amount +
      " DGB to the wallet " +
      dgbw +
      "]*\n\n➖➖➖➖➖➖➖➖➖➖➖➖➖\n\n💳 *New Payment Order*\n-> By users [" +
      user.telegramid +
      "](tg://user?id=" +
      user.telegramid +
      ")\n-> Amount `" +
      amount +
      "` DGB\n-> To the `" +
      dgbw +
      "`\n\nIf you want to paid manually, click the button below!"
  )
}

