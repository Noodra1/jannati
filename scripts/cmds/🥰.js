module.exports = {
 config: {
	 name: "🥰",
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
 if (event.body && event.body.toLowerCase() === "🥰") {
 return message.reply({
 body: " 「 🥰❥︎----ღ᭄_কাউকে ভালবাসলে❞࿐.❤️..\n❥︎----ღ᭄_গাছের শিকড়ের মতো ভালোবাসা উচিত❞࿐.🌴🤎🙂.\n❥︎----ღ᭄_ফুলের মতো নয়❞࿐.🌹....\n❥︎---কারণ.༎༅..🤷‍♂️🍀.\n❥︎----ღ᭄_ফুল তো শুধু সুবাস দিয়েই ঝরে যায়❞࿐.🙂\n❥︎----ღ᭄_আর শিকড় সে তো মৃত্যু আগে পর্যন্ত থেকে যায় ❞࿐🥰🫠\n\n𝗕𝗢𝗧 𝗢𝗪𝗡𝗘𝗥\nBOSS~ASHIK」",
 attachment: await global.utils.getStreamFromURL("https://cdn.fbsbx.com/v/t59.3654-21/464899841_1189802655908336_6968213463501153870_n.mpga/6PHQtI10eq.mpga?_nc_cat=100&ccb=1-7&_nc_sid=d61c36&_nc_eui2=AeHq5zGhSc7Gh1aga9CKx-AMfaByfJr1CdN9oHJ8mvUJ03LerM0uNMQrzU9HYlpx7rqgP66NP0veNu2_tquL1PYK&_nc_ohc=SK96cLeKDskQ7kNvgFPnanl&_nc_zt=7&_nc_ht=cdn.fbsbx.com&_nc_gid=AANzp4x9bDCrKEBV7LNNohI&oh=03_Q7cD1QFe0h5l11MbEFMZplupsR0Onhdc7B_qvb00i_381qx_1Q&oe=67218F74&dl=1")
 });
 }
 }
}
