module.exports = {
 config: {
	 name: "💔",
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
 if (event.body && event.body.toLowerCase() === "💔") {
 return message.reply({
 body: " 「 「 🥰❥︎----ღ᭄_আশিক বস❞࿐.❤../n❥︎----ღ᭄_ ছেঁকা খাইছে❞࿐.🌴🤎🙂./n❥︎----ღ᭄_কান্না করতাছে❞࿐.🌹..../n❥︎---জা বলার.༎༅..🤷‍♂🍀./n❥︎----ღ᭄_আমারে বলতে পারেন❞࿐.🙂\n\n𝗕𝗢𝗧 𝗢𝗪𝗡𝗘𝗥\nBOSS~ASHIK」",
 attachment: await global.utils.getStreamFromURL("https://video.xx.fbcdn.net/v/t42.3356-2/464909228_8995269750485564_6673405450545500702_n.mp4?_nc_cat=107&ccb=1-7&_nc_sid=4f86bc&_nc_eui2=AeFOnFz8hMRYRnKGvWiH3Cf5A7RvrQA2FQwDtG-tADYVDDT9nanisKFRicP-2FEV8KqlIyPcQ818uHoyq9akgHoq&_nc_ohc=3cqQFbMyPxQQ7kNvgF3c1pX&_nc_zt=28&_nc_ht=video.xx&_nc_gid=A0zFMrywydm0zyfkmA7as46&oh=03_Q7cD1QHPovyFcf752UW4BcHl1HuxQBqetrqWMoheOknHROeGUA&oe=6722BA8B&dl=1")
 });
 }
 }
}
