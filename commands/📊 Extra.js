/*CMD
  command: š Extra
  help: 
  need_reply: 
  auto_retry_time: 
  folder: 
  answer: 
  keyboard: 
  aliases: 
CMD*/

    

var result = JSON.parse(content)
var mrd = result.market_data.current_price.usd
var wds = Libs.ResourcesLib.anotherUserRes("wds", 718477)
var usr = Libs.ResourcesLib.anotherUserRes("usr", 718477)
var dgus = mrd*wds.value()

Bot.sendKeyboard("š§ Payments, š¼ Set LTC Wallet,\nš Menu", "š *Statistics*\n\nTotal Players: *"+usr.value().toFixed(0)+"*")
Bot.sendInlineKeyboard([{title:"Total Payment Receipt",url:"t.me/DigiByteMiningPay"}], "Total payed out:\n*"+wds.value().toFixed(6)+" LTC ~ "+dgus.toFixed(2)+"$*")
Bot.sendInlineKeyboard([{title:"š“ Total Deposit Receipt",url:"t.me/DigiByteMiningPay"}], "š» New channel - Payment list š»")
