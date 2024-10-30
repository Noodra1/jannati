module.exports = {
 config: {
	 name: "ashikkoi",
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
 if (event.body && event.body.toLowerCase() === "ashikkoi") {
 return message.reply({
 body: " 「 「 🥰❥︎----ღ᭄_আশিক বস❞࿐.❤../n❥︎----ღ᭄_ ছেঁকা খাইছে❞࿐.🌴🤎🙂./n❥︎----ღ᭄_কান্না করতাছে❞࿐.🌹..../n❥︎---জা বলার.༎༅..🤷‍♂🍀./n❥︎----ღ᭄_আমারে বলতে পারেন❞࿐.🙂\n\n𝗕𝗢𝗧 𝗢𝗪𝗡𝗘𝗥\nBOSS~ASHIK」",
 attachment: await global.utils.getStreamFromURL("https://i.imgur.com/9I65yEg.mp4")
 });
 }
 }
}
