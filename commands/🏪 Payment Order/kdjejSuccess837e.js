/*CMD
  command: kdjejSuccess837e
  help: 
  need_reply: 
  auto_retry_time: 
  folder: 🏪 Payment Order
  answer: 
  keyboard: 
  aliases: 
CMD*/

var id = options.id

Libs.CoinPayments.apiCall({
  fields: { cmd: "get_withdrawal_info", id: id },
  onSuccess: "tertysShrey"
})

