/*CMD
  command: /IncomedgbAjA
  help: 
  need_reply: 
  auto_retry_time: 
  folder: 🌟 Add Star
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

if (coin !== "DGB") {
return
}

if (amount < 1) {
return
}

var star = Libs.ResourcesLib.userRes("star")
star.add(amount*10)
var for_in = amount*10
var in_ref = for_in*0.3

Bot.sendMessage("✅ *Your Deposit Confirmed*\n\n📥 *Deposited Amount:* "+amount+" *DGB*\n\n*Your deposit has been converted to STARS 🌟.*\n\n➕ *Total Stars Received:* "+amount*10+" 🌟")

Api.sendMessage({
  chat_id: "@DigiByteMiningPay",
  text: "🌟 *Add Star*\n\n👤 By users: *"+user.first_name+"*\n✅ *"+amount.toFixed(8)+" DGB = "+amount*10+"* 🌟 - $"+usddgb.toFixed(2)+"\n\n["+hash+"](https://digibyteblockexplorer.com/tx/"+hash+")",
  parse_mode: "Markdown",
  disable_web_page_preview: true
})

var ref = Libs.ReferralLib.currentUser.attractedByUser()
if (ref) {
var ref = Libs.ResourcesLib.anotherUserRes("ref", ref.telegramid).add(in_ref)
var starrn = Libs.ResourcesLib.anotherUserRes("star", ref.telegramid).add(in_ref)
Bot.sendMessageToChatWithId(ref.telegramid, "➕ *Referral Deposit:* +"+in_ref.toFixed(0)+" 🌟")
}


