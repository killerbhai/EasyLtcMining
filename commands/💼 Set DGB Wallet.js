/*CMD
  command: 💼 Set DGB Wallet
  help: 
  need_reply: 
  auto_retry_time: 
  folder: 
  answer: 
  keyboard: 
  aliases: 
CMD*/

var dgbw = User.getProperty("dgbw")

if (!dgbw) {
  Bot.sendInlineKeyboard(
    [
      {
        title: "✏️ Change DGB Wallet (34-43 string)",
        command: "/setStringWallet"
      }
    ],
    "*Settings*\n_The system will automatically save your DGB address forever in subsequent transaction until you want to change it again_\n\n*Your DigiByte (DGB) wallet:*\n`not set`\n\nWhich type of length wallet do you want to set?"
  )
} else {
  Bot.sendInlineKeyboard(
    [
      {
        title: "✏️ Change DGB Wallet (34-43 string)",
        command: "/setStringWallet"
      }
    ],
    "*Settings*\n_The system will automatically save your DGB address forever in subsequent transaction until you want to change it again_\n\n*Your DigiByte (DGB) wallet:*\n`" +
      dgbw +
      "`\n\nWhich type of length wallet do you want to set?"
  )
}

