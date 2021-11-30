/*CMD
  command: hiCollect
  help: 
  need_reply: false
  auto_retry_time: 
  folder: 💻 Working
  answer: 
  keyboard: 
  aliases: 
CMD*/

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
Bot.sendInlineKeyboard(
  [{ title: "Collect DigiByte", command: "/gocollectDGB top" }],
  "The machines produced DigiByte:\n\n💻 *Cloud M1:* " +
    dgb1.value().toFixed(6) +
    " DGB\n💻 *Cloud M2:* " +
    dgb2.value().toFixed(6) +
    " DGB\n💻 *Cloud M3:* " +
    dgb3.value().toFixed(6) +
    " DGB\n💻 *Cloud M4:* " +
    dgb4.value().toFixed(6) +
    " DGB\n💻 *Cloud M5:* " +
    dgb5.value().toFixed(6) +
    " DGB\n💻 *Cloud M6:* " +
    dgb6.value().toFixed(6) +
    " DGB\n💻 *Cloud M7:* " +
    dgb7.value().toFixed(6) +
    " DGB\n\nTotally produced: *" +
    total.toFixed(6) +
    " DGB*"
)

