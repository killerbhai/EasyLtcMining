/*CMD
  command: /buyDGBcloudM3
  help: 
  need_reply: 
  auto_retry_time: 
  folder: 🏪 Shop
  answer: 
  keyboard: 
  aliases: 
CMD*/

var cl1 = Libs.ResourcesLib.userRes("cl1")
var cl2 = Libs.ResourcesLib.userRes("cl2")
var cl3 = Libs.ResourcesLib.userRes("cl3")
var cl4 = Libs.ResourcesLib.userRes("cl4")
var cl5 = Libs.ResourcesLib.userRes("cl5")
var cl6 = Libs.ResourcesLib.userRes("cl6")
var cl7 = Libs.ResourcesLib.userRes("cl7")
var star = Libs.ResourcesLib.userRes("star")
var dgb = Libs.ResourcesLib.userRes("dgb3")

var is_alert

var is_alert

is_alert = params != "top"

var buy
if (star.value() < 4500) {
  buy = "👋 Not enough balance"
} else {
  buy = "✅ Buy Cloud M3 - 4500 🌟"
}

Api.answerCallbackQuery({
  callback_query_id: request.id,
  text: buy,
  show_alert: is_alert
})

if (star.value() < 4500) {
  return
}

star.remove(4500)
cl3.add(1)

if (cl3.value() < 1) {
  return
}

var r1 = (cl3.value() * 0.201637) / 60
dgb.growth.add({
  value: r1,
  interval: 1 * 60 * 1
})

