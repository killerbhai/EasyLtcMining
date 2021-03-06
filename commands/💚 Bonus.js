/*CMD
  command: đ Bonus
  help: 
  need_reply: 
  auto_retry_time: 
  folder: 
  answer: 
  keyboard: 
  aliases: 
CMD*/

function canRun() {
  var last_run_at = User.getProperty("last_run_at")
  if (!last_run_at) {
    return true
  }

  var minutes = (Date.now() - last_run_at) / 1000 / 60

  var minutes_in_day = 24 * 60
  var next = minutes_in_day - minutes
  var wait_hours = Math.floor(next / 60)
  next -= wait_hours * 60
  var wait_minutes = Math.floor(next)
  var seconds = Math.floor((next - wait_minutes) * 60)
  if (minutes < minutes_in_day) {
    Bot.sendKeyboard(
      "đ Menu",
      "âŞď¸ Bonus will be generated randomly from 1 to 100 đ\nâŞď¸ You can obtain the bonus ever 24 hours.\n\nđ *You have already received a bonus in the last 24 hours.*"
    )
    return
  }
  return true
}

if (!canRun()) {
  return
}
User.setProperty("last_run_at", Date.now(), "integer")

var bns = Libs.Random.randomFloat(1, 100)
var res = Libs.ResourcesLib.userRes("star")
res.add(bns)
Bot.sendKeyboard(
  "đ Menu",
  "âŞď¸ Bonus will be generated randomly from 1 to 100 đ\nâŞď¸ You can obtain the bonus ever 24 hours.\nâŞď¸ The amount you earn is automatically transferred to your account.\n\nâ *You received " +
    bns.toFixed(0) +
    " đ Come back in 24 hours!*"
)

