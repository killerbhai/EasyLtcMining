/*CMD
  command: š¬ Invite Friends
  help: 
  need_reply: 
  auto_retry_time: 
  folder: 
  answer: 
  keyboard: 
  aliases: 
CMD*/

var ref = Libs.ResourcesLib.userRes("ref")
var reflist = Libs.ReferralLib.currentUser.refList.get()
var rel
if (reflist.length > 0) {
  rel = reflist.length
} else {
  rel = "0"
}

Bot.sendKeyboard("š Menu", "*Partnership*")
Bot.sendInlineKeyboard(
  [{ title: "Get Referral Link", command: "/dgbRefLinkOnGet" }],
  "Invite your friends and receive *90* š as a bonus and *30%* from every deposit of your friend. Your income is unlimited!\n\nāŖļø *Referrals:* " +
    rel +
    "\nāŖļø *Your Income:* " +
    ref.value().toFixed(0) +
    " š"
)

