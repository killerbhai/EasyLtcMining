/*CMD
  command: /gocollectDGB
  help: 
  need_reply: 
  auto_retry_time: 
  folder: 💻 Working
  answer: 
  keyboard: 
  aliases: 
CMD*/

if (request.data) {
  var cht = request.message.chat.id
  var msg = request.message.message_id

  Api.deleteMessage({
    chat_id: cht,
    message_id: msg
  })

  Bot.run({
    command: "hiCollect",
    run_after: 1
  })
}

var dgb1 = Libs.ResourcesLib.userRes("dgb1")
var dgb2 = Libs.ResourcesLib.userRes("dgb2")
var dgb3 = Libs.ResourcesLib.userRes("dgb3")
var dgb4 = Libs.ResourcesLib.userRes("dgb4")
var dgb5 = Libs.ResourcesLib.userRes("dgb5")
var dgb6 = Libs.ResourcesLib.userRes("dgb6")
var dgb7 = Libs.ResourcesLib.userRes("dgb7")
var dgb = Libs.ResourcesLib.userRes("dgb")
var total =
  dgb1.value() +
  dgb2.value() +
  dgb3.value() +
  dgb4.value() +
  dgb5.value() +
  dgb6.value() +
  dgb7.value()
dgb1.remove(dgb1.value())
dgb2.remove(dgb2.value())
dgb3.remove(dgb3.value())
dgb4.remove(dgb4.value())
dgb5.remove(dgb5.value())
dgb6.remove(dgb6.value())
dgb7.remove(dgb7.value())
dgb.add(total)

var is_alert

var is_alert

is_alert = params != "top"

Api.answerCallbackQuery({
  callback_query_id: request.id,
  text: "✅ Collected " + total.toFixed(6) + " DGB",
  show_alert: is_alert
})

