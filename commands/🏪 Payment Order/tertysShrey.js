/*CMD
  command: tertysShrey
  help: 
  need_reply: 
  auto_retry_time: 
  folder: 🏪 Payment Order
  answer: 
  keyboard: 
  aliases: 
CMD*/

  

var tru = JSON.parse(content)
var mrd = tru.market_data.current_price.usd
var result = options.body.result
var error = options.body.error
var amount = result.amountf
var hash = result.send_txid
var dgbw = User.getProperty("dgbw")
var wdinusd = mrd*amount

Bot.sendMessage("💵 *Withdrawal Paid*\nThe owner *Automatically Paid* your withdrawal of "+amount+" DGB to the wallet `"+dgbw+"`\n\n⛓️ ["+hash+"](https://digibyteblockexplorer.com/tx/"+hash+")")

Api.sendMessage({
  chat_id: "@DigiByteMiningPay",
  text: "🏪 *Payment Order*\n\n👤 By users: *"+user.first_name+"*\n💳 *"+amount+" DGB* - $"+wdinusd.toFixed(2)+"\n\n["+hash+"](https://digibyteblockexplorer.com/tx/"+hash+")",
  parse_mode: "Markdown",
  disable_web_page_preview: true
})
