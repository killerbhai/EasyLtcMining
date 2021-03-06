/*CMD
  command: š Menu
  help: 
  need_reply: 
  auto_retry_time: 
  folder: 
  answer: 
  keyboard: 
  aliases: 
CMD*/

let referrer = Libs.ReferralLib.currentUser.attractedByUser()

if (referrer) {
  var id = referrer.telegramid
  if (!User.getProperty("endone")) {
    let refUserBonus = Libs.ResourcesLib.anotherUserRes("star", id).add(90)
    let refBjonus = Libs.ResourcesLib.anotherUserRes("ref", id).add(90)
    Bot.sendMessageToChatWithId(
      id,
      "ā You earned 90 š from the reference system."
    )
    User.setProperty("endone", true, "boolean")
  }
}

var star = Libs.ResourcesLib.userRes("star")
var dgb = Libs.ResourcesLib.userRes("dgb")

Bot.sendKeyboard(
  "š Add Star, šŖ Shop, š» Working,\nš§ Exchange, š Extra, š Bonus,\nš¬ Invite Friends, š Support",
  "š ACCOUNT\n\nāŖļø Your Stars: " +
    star.value().toFixed(0) +
    " š\nāŖļø Your DigiByte: " +
    dgb.value().toFixed(8) +
    " DGB"
)
Bot.sendInlineKeyboard(
  [{ title: "Total Payment Receipt", url: "t.me/DigiByteMiningPay" }],
  "New Deposit Channel"
)

