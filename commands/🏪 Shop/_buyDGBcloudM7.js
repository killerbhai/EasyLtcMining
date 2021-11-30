/*CMD
  command: /buyDGBcloudM7
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
var dgb = Libs.ResourcesLib.userRes("dgb7")

var is_alert

var is_alert

is_alert = params != "top"

var buy
if (star.value() < 360000) {
  buy = "👋 Not enough balance"
} else {
  buy = "✅ Buy Cloud M5 - 360000 🌟"
}

Api.answerCallbackQuery({
  callback_query_id: request.id,
  text: buy,
  show_alert: is_alert
})

if (star.value() < 360000) {
  return
}

star.remove(360000)
cl7.add(1)

if (cl7.value() < 1) {
  return
}

var r1 = (cl7.value() * 134.848292) / 60
dgb.growth.add({
  value: r1,
  interval: 1 * 60 * 1
})

