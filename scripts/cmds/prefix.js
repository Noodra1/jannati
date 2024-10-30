module.exports = {
 config: {
	 name: "prefix",
	 version: "1.0",
	 author: "Tokodori_Frtiz",//remodified by cliff
	 countDown: 5,
	 role: 0,
	 shortDescription: "no prefix",
	 longDescription: "no prefix",
	 category: "auto 🪐",
 },

 onStart: async function(){}, 
 onChat: async function({ event, message, getLang }) {
 if (event.body && event.body.toLowerCase() === "prefix") {
 return message.reply({
 body: `
𝗠𝗬 𝗣𝗥𝗘𝗙𝗜𝗫 [/]\n
𝗦𝗢𝗠𝗘 𝗖𝗢𝗠𝗠𝗔𝗡𝗗𝗦 𝗧𝗛𝗔𝗧 𝗠𝗔𝗬 𝗛𝗘𝗟𝗣 𝗬𝗢𝗨:
➥. help [number of page] -> see commands
➥. sim [message] -> talk to bot
➥. callad [message] -> report any problem encountered
➥. help [command] -> information and usage of command\n\n𝗛𝗮𝘃𝗲 𝗳𝘂𝗻 𝘂𝘀𝗶𝗻𝗴 𝗶𝘁!❤️\n𝗕𝗢𝗧 𝗢𝗪𝗡𝗘𝗥 BOSS~ASHIK\n𝗪𝗛𝗔𝗧𝗦 𝗔𝗣𝗣: 01647711001\n\n𝗙𝗔𝗖𝗘𝗕𝗢𝗢𝗞: https://www.facebook.com/profile.php?id=100095089282395&mibextid=ZbWKwL`,
 attachment: await global.utils.getStreamFromURL("https://i.imgur.com/GHUCOQ2.mp4")
 });
 }
 }
}
