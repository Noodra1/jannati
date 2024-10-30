module.exports = {
 config: {
	 name: "jannat",
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
 if (event.body && event.body.toLowerCase() === "jannat") {
 return message.reply({
 body: " 「 🥰❥︎----ღ᭄_আশিক বস এর❞࿐.❤️..\n❥︎----ღ᭄_ পিচ্চি মামুনি ❞࿐.🌴🤎🙂.\n❥︎----ღ᭄_কেও নজর দিও না ❞࿐.🌹....\n❥︎---দিলে.༎༅..🤷‍♂️🍀.\n❥︎----ღ᭄_আমি পিটাবো ❞࿐.🙂\n❥︎----ღ᭄_বলে দিলাম❞࿐🥰🫠\n\n𝗕𝗢𝗧 𝗢𝗪𝗡𝗘𝗥\nBOSS~ASHIK」",
 attachment: await global.utils.getStreamFromURL("https://i.imgur.com/jh3jL4B.mp4")
 });
 }
 }
}
