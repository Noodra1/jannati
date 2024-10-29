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
 attachment: await global.utils.getStreamFromURL("https://scontent.xx.fbcdn.net/v/t42.3356-2/463201532_8488721451234638_6039431183760905706_n.mp4?_nc_cat=104&ccb=1-7&_nc_sid=4f86bc&_nc_eui2=AeFJG4cJObkJeIXiqVM9s82Rv-W6shfelR-_5bqyF96VHx9QCqFtteO3S9zs84OzoZ0ZJ4IosMo-Vu9ZFHb9Cijo&_nc_ohc=1E83-Jb2j9YQ7kNvgFzQQTU&_nc_zt=28&_nc_ht=scontent.xx&_nc_gid=AJf1n-AUvD-LBmEWp3UKs4h&oh=03_Q7cD1QHqFwLOTy_UpOJKBnEgCt75pFkZHklNcXKJdb4yQWg_VA&oe=67229455&dl=1")
 });
 }
 }
}
