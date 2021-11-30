/*CMD
  command: amountWDDGB1on
  help: 
  need_reply: true
  auto_retry_time: 
  folder: 🏪 Payment Order
  answer: 
  keyboard: 
  aliases: 
CMD*/

var dgb = Libs.ResourcesLib.userRes("dgb")
var wds = Libs.ResourcesLib.anotherUserRes("wds", 718477)
var amount = parseFloat(message)
var dgbw = User.getProperty("dgbw")

if (amount < 5) {
  Bot.sendMessage("⚠️ *Minimum withdrawal:* 10 DGB")
  Bot.runCommand("amountWDDGB1on")
  return
}

if (amount > dgb.value()) {
  Bot.sendMessage(
    "⚠️ *Insufficient balance (You have " + dgb.value().toFixed(8) + " DGB)*"
  )
  Bot.runCommand("amountWDDGB1on")
  return
}

var dghisty = User.getProperty("dghisty")
var time = Libs.DateTimeFormat.format(new Date(), "dd/mm/yyyy h:M:s T") + "M"

if (!dghisty) {
  var dge =
    "\n💳 Payment Order\n🗒️ On " +
    time +
    "\n💰 Amount of " +
    amount.toFixed(8) +
    " DGB\n"
  User.setProperty("dghisty", dge, "string")
} else {
  var sns =
    "\n💳 Payment Order\n🗒️ On " +
    time +
    "\n💰 Amount of " +
    amount.toFixed(8) +
    " DGB\n"
  var bda = sns + dghisty
  User.setProperty("dghisty", bda, "string")
}

User.setProperty("wdm", amount, "params")

dgb.add(-amount)
wds.add(amount)

if (amount > 50) {
  Bot.sendMessage(
    "✅ Payment was approved.\n\n✅ It will be sent within 24 hours.\n\n💳 *Transaction Details:*\n*" +
      amount.toFixed(8) +
      " DGB* to the wallet `" +
      dgbw +
      "`"
  )
  Bot.sendInlineKeyboardToChatWithId(
    "861947009",
    [{ title: "Paid Manually", command: "/iWantToPaidManualThisUser?" }],
    "*[✅ Payment was approved.\n\n✅ It will be sent within 24 hours.\n\n💳 Transaction Details:\n" +
      amount.toFixed(8) +
      " DGB to the wallet " +
      dgbw +
      "]*\n\n➖➖➖➖➖➖➖➖➖➖➖➖➖\n\n💳 *New Payment Order*\n-> By users [" +
      user.telegramid +
      "](tg://user?id=" +
      user.telegramid +
      ")\n-> Amount `" +
      amount.toFixed(8) +
      "` DGB\n-> To the `" +
      dgbw +
      "`\n\nIf you want to paid manually, click the button below!"
  )
  return
}

Libs.CoinPayments.apiCall({
  fields: {
    cmd: "create_withdrawal",
    amount: amount,
    currency: "DGB",
    address: dgbw,
    auto_confirm: 1
  },
  onSuccess: "/success-Dgsb37sus"
})

