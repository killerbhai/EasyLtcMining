/*CMD
  command: /IncomedgbAjA
  help: 
  need_reply: 
  auto_retry_time: 
  folder: š Add Star
  answer: 
  keyboard: 
  aliases: 
CMD*/

       

if (!options) {
return
}

var result = JSON.parse(content)
var dgs = result.market_data.current_price.usd
var amount = options.amount1
var hash = options.txn_id
var coin = options.currency
var usddgb = amount*dgs

if (coin !== "LTC") {
return
}

if (amount < 1) {
return
}

var star = Libs.ResourcesLib.userRes("star")
star.add(amount*10)
var for_in = (amount/0.0024)*10
var in_ref = for_in*0.3

Bot.sendMessage("ā *Your Deposit Confirmed*\n\nš„ *Deposited Amount:* "+amount+" *LTC*\n\n*Your deposit has been converted to STARS š.*\n\nā *Total Stars Received:* "+amount*10+" š")

Api.sendMessage({
  chat_id: "@DigiByteMiningPay",
  text: "š *Add Star*\n\nš¤ By users: *"+user.first_name+"*\nā *"+amount.toFixed(8)+" LTC = "+amount*10+"* š - $"+usddgb.toFixed(2)+"\n\n["+hash+"](https://digibyteblockexplorer.com/tx/"+hash+")",
  parse_mode: "Markdown",
  disable_web_page_preview: true
})

var ref = Libs.ReferralLib.currentUser.attractedByUser()
if (ref) {
var ref = Libs.ResourcesLib.anotherUserRes("ref", ref.telegramid).add(in_ref)
var starrn = Libs.ResourcesLib.anotherUserRes("star", ref.telegramid).add(in_ref)
Bot.sendMessageToChatWithId(ref.telegramid, "ā *Referral Deposit:* +"+in_ref.toFixed(0)+" š")
}


