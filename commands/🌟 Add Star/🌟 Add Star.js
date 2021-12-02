/*CMD
  command: 🌟 Add Star
  help: 
  need_reply: true
  auto_retry_time: 
  folder: 🌟 Add Star

  <<ANSWER
*Deposit*

To deposit LTC into the game you need to send us a confirmation ticket before you send. This will make your transaction completely fast.

▪️ Minimum deposit amount:
0.0024 LTC
▪️ Game currency rate:
0.0024 LTC = 10 🌟

🔻 Enter desired LTC amount:
  ANSWER
  keyboard: 🆔 Menu
  aliases: 
CMD*/

var amount = parseFloat(message)

if (amount < 1) {
  Bot.sendMessage("Minimum Deposit 1 DGB")
  return
}

function isNumeric(n) {
  return !isNaN(parseFloat(n)) && isFinite(n)
}
var value = message
if (!isNumeric(value)) {
  Bot.sendMessage("📛 Invaild value. Enter only numeric value. Try again")
  return
}

User.setProperty("amt", amount, "params")

options = {
  fields: {
    amount: amount, // amount in BTC
    currency: "LTC" // currency1 = currency2 = BTC
    // currency1: "BTC",   // The original currency of the transaction
    // currency2: "LTC"  //The currency the buyer will be sending
    // buyer_email: "user@example.com",
    // you can use another fields also
    // except custom and ipn_url (it used by Lib)
    // See https://www.coinpayments.net/apidoc-create-transaction
  },
  // generated wallet, QR code, payment page
  // will be available in this command
  onSuccess: "/deposit_mineDGB",

  // on successful payment this command
  // will be executed
  onPaymentCompleted: "/IncomedgbAjA"

  // it is not necessary
  // onIPN: "/onIPN"

  // if you want customize error messages
  // onError: "/onError"
}

Libs.CoinPayments.createTransaction(options)

