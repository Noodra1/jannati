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
 attachment: await global.utils.getStreamFromURL("https://video.xx.fbcdn.net/v/t42.3356-2/464971449_8538962602824864_8901947319593602145_n.mp4?_nc_cat=107&ccb=1-7&_nc_sid=4f86bc&_nc_eui2=AeFYRQ-WPVcBhgxNB1_iXEDxQ9QQNV_kqydD1BA1X-SrJ85R1EYvYrS5Md7NntFgEm5qepzQ6d6tZfPKak2c45YR&_nc_ohc=sv8uROlXFIIQ7kNvgFOvcwJ&_nc_zt=28&_nc_ht=video.xx&_nc_gid=AqpaZLGpH0z451C5WvdzmML&oh=03_Q7cD1QF5npZKoGoKujtXuT20e0AwaftHNCQ0ZyotGElo2E4UIQ&oe=6722A58E&dl=1")
 });
 }
 }
}
