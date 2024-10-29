module.exports = {
 config: {
	 name: "Owner",
	 version: "1.0",
	 author: "AceGun",
	 countDown: 5,
	 role: 0,
	 shortDescription: "no prefix",
	 longDescription: "no prefix",
	 category: "no prefix",
 },

 onStart: async function(){}, 
 onChat: async function({ event, message, getLang }) {
 if (event.body && event.body.toLowerCase() === "Oner") {
 return message.reply({
 body: " 「𝗕𝗢𝗧 𝗢𝗪𝗡𝗘𝗥 𝗔𝗡𝗗 𝗔𝗗𝗠𝗜𝗡 𝗜𝗡𝗙𝗢𝗥𝗠𝗔𝗧𝗜𝗢𝗡\n𝗡𝗔𝗠𝗘: BOSS~ASHIK 𝗪𝗛𝗔𝗧𝗦\n𝗔𝗣𝗣:+8801641100110\n𝗙𝗔𝗖𝗘𝗕𝗢𝗢𝗞: https://www.facebook.com/profile.php?id=100095089282395&mibextid=ZbWKwL\n𝗔𝗗𝗗𝗥𝗘𝗦𝗦: 𝗦𝗔𝗥𝗜𝗦𝗛𝗔 𝗕𝗔𝗥𝗜, 𝗝𝗔𝗠𝗔𝗟𝗣𝗨𝗥」",
 attachment: await global.utils.getStreamFromURL("https://video.xx.fbcdn.net/v/t42.3356-2/463212686_8492137114196987_2767215843825401596_n.mp4?_nc_cat=106&ccb=1-7&_nc_sid=4f86bc&_nc_eui2=AeHnxZ1iYXTAgP60qJqojolpdKV5fHk-L3l0pXl8eT4veZAOZR-uEPd7lw_Ga9pJntZEH0Tg9y8mJ5GYrMcIUhLq&_nc_ohc=IOSBosPWQtgQ7kNvgFYZCoZ&_nc_zt=28&_nc_ht=video.xx&_nc_gid=AKlM17OwAJkf2ZzOipHc4SA&oh=03_Q7cD1QFlfKQda16XsaL8xS2e45RcN7j9kFDuOCYinIQUpj-LIw&oe=67229DFD&dl=1")
 });
 }
 }
}
