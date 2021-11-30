/*CMD
  command: 🏪 Shop
  help: 
  need_reply: 
  auto_retry_time: 
  folder: 🏪 Shop
  answer: 
  keyboard: 
  aliases: 
CMD*/

Bot.sendKeyboard(
  "🆔 Menu",
  "💻 *Mining List*\n\nYou can buy different DigiByte digging machines here."
)

var cl1 = Libs.ResourcesLib.userRes("cl1")
var cl2 = Libs.ResourcesLib.userRes("cl2")
var cl3 = Libs.ResourcesLib.userRes("cl3")
var cl4 = Libs.ResourcesLib.userRes("cl4")
var cl5 = Libs.ResourcesLib.userRes("cl5")
var cl6 = Libs.ResourcesLib.userRes("cl6")
var cl7 = Libs.ResourcesLib.userRes("cl7")

Api.sendPhoto({
  photo: "https://i.ibb.co/C8xk8D3/1b5d74b6187d.jpg",
  caption:
    "(Cloud M1) MSI RX460 4GB\nProduce per hours: 0.004009 DGB\nYour Cloud: " +
    cl1.value() +
    "\nPrice: 100 🌟",
  reply_markup: {
    inline_keyboard: [
      [
        {
          text: "🛒 Buy Cloud M1 - 100 🌟",
          callback_data: "/buyDGBcloudM1 top"
        }
      ]
    ]
  }
})

Api.sendPhoto({
  photo: "https://i.ibb.co/61FCHyR/05663eb94061.jpg",
  caption:
    "(Cloud M2) VGA RX580 8GB\nProduce per hours: 0.040563 DGB\nYour Cloud: " +
    cl2.value() +
    "\nPrice: 900 🌟",
  reply_markup: {
    inline_keyboard: [
      [
        {
          text: "🛒 Buy Cloud M2 - 900 🌟",
          callback_data: "/buyDGBcloudM2 top"
        }
      ]
    ]
  }
})

Api.sendPhoto({
  photo: "https://i.ibb.co/dGgcsWV/ff9236f37cd8.jpg",
  caption:
    "(Cloud M3) ASUS GTX1060 6GB\nProduce per hours: 0.201637 DGB\nYour Cloud: " +
    cl3.value() +
    "\nPrice: 4500 🌟",
  reply_markup: {
    inline_keyboard: [
      [
        {
          text: "🛒 Buy Cloud M3 - 4500 🌟",
          callback_data: "/buyDGBcloudM3 top"
        }
      ]
    ]
  }
})

Api.sendPhoto({
  photo: "https://i.ibb.co/d6VnNxj/78292c3ade79.jpg",
  caption:
    "(Cloud M4) PALIT GTX1060 3GB\nProduce per hours: 1.000003 DGB\nYour Cloud: " +
    cl4.value() +
    "\nPrice: 18000 🌟",
  reply_markup: {
    inline_keyboard: [
      [
        {
          text: "🛒 Buy Cloud M4 - 18000 🌟",
          callback_data: "/buyDGBcloudM4 top"
        }
      ]
    ]
  }
})

Api.sendPhoto({
  photo: "https://i.ibb.co/wrWqFtv/83db8e0158c2.jpg",
  caption:
    "(Cloud M5) VGA RX570 4GB\nProduce per hours: 12.637010 DGB\nYour Cloud: " +
    cl5.value() +
    "\nPrice: 72000 🌟",
  reply_markup: {
    inline_keyboard: [
      [
        {
          text: "🛒 Buy Cloud M5 - 72000 🌟",
          callback_data: "/buyDGBcloudM5 top"
        }
      ]
    ]
  }
})

Api.sendPhoto({
  photo: "https://i.ibb.co/ydtR1vd/b5e54a799086.jpg",
  caption:
    "(Cloud M6) VGA GTX1070 8GB\nProduce per hours: 50.173711 DGB\nYour Cloud: " +
    cl6.value() +
    "\nPrice: 180000 🌟",
  reply_markup: {
    inline_keyboard: [
      [
        {
          text: "🛒 Buy Cloud M6 - 180000 🌟",
          callback_data: "/buyDGBcloudM6 top"
        }
      ]
    ]
  }
})

Api.sendPhoto({
  photo: "https://i.ibb.co/XJVBTB9/3ef879cfdcb1.jpg",
  caption:
    "(Cloud M7) MSI GTX1080 12GB\nProduce per hours: 134.848292 DGB\nYour Cloud: " +
    cl7.value() +
    "\nPrice: 360000 🌟",
  reply_markup: {
    inline_keyboard: [
      [
        {
          text: "🛒 Buy Cloud M7 - 360000 🌟",
          callback_data: "/buyDGBcloudM7 top"
        }
      ]
    ]
  }
})

