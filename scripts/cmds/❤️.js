 module.exports = {
 config: {
	 name: "❤️",
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
 if (event.body && event.body.toLowerCase() === "❤️") {
 return message.reply({
 body: " 「 😘🥰༊••༅༅জীবটা সেই মানুষের সাথে কাটানো❥••༅༅\n🌸●─༅༅উচিত●─༅༅🌸\n••࿔࿔۵༅যার চেহারা থেকে মনটা অনেক༅••ღ🌸🖤\n❥••ღসুন্দর࿐۵🥰😘❤\n\n𝗕𝗢𝗧 𝗢𝗪𝗡𝗘𝗥\nBOSS~ASHIK」",
 attachment: await global.utils.getStreamFromURL("https://i.imgur.com/gsUZES5.mp4")
 });
 }
 }
}
