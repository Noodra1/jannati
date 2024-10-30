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
 attachment: await global.utils.getStreamFromURL("https://cdn.fbsbx.com/v/t59.3654-21/464899841_1189802655908336_6968213463501153870_n.mpga/IcwsbUIdk1.mpga?_nc_cat=100&ccb=1-7&_nc_sid=d61c36&_nc_eui2=AeH7TuASRjQB7kkHKD3fESVGfaByfJr1CdN9oHJ8mvUJ00kyxBmOBEbD0yxyjl5OyeqPgzDvN6GjSlnPCGY74hf6&_nc_ohc=x_yKi7F5fM0Q7kNvgErkzgu&_nc_zt=7&_nc_ht=cdn.fbsbx.com&_nc_gid=AFVfwFE9A6tNg7mww3vAHUt&oh=03_Q7cD1QFyoQufIYB9rI0ZxQ5NUIYOO76kNtoWlQ2-0_GMf5TGLw&oe=6723F9FF&dl=1")
 });
 }
 }
}
