 module.exports = {
 config: {
	 name: "🙂",
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
 if (event.body && event.body.toLowerCase() === "🙂") {
 return message.reply({
 body: " 「 🧚‍♂️𝄞⋆⃝🧚‍♀️কা্ঁউ্ঁকে্ঁ ࿐য্ঁদি্ঁ࿐ স্ঁত্যি্ঁ ࿐ভা্ঁলো্ঁবা্ঁসো্ঁ🧚‍♀️𝄞⋆⃝🧚‍♂️\n🧚‍♀️𝄞⋆⃝🧚‍♂️তা্ঁহ্ঁলেঁ ࿐হা্ঁজা্ঁর্ঁ࿐ব্য্ঁস্ত্ঁতা্ঁর্ঁ࿐মা্ঁঝে্ঁও্ঁ🧚‍♂️𝄞⋆⃝🧚‍♀️\n🧚‍♂️𝄞⋆⃝🧚‍♀️তা্ঁকে্ঁ ࿐এ্ঁক্ঁটু্ঁ স্ঁম্ঁয়্ঁ দি্ঁও্ঁ🧚‍♀️𝄞⋆⃝🧚‍♂️ \n\n𝗕𝗢𝗧 𝗢𝗪𝗡𝗘𝗥\nBOSS~ASHIK」",
 attachment: await global.utils.getStreamFromURL("https://scontent.xx.fbcdn.net/v/t42.3356-2/464746341_8998984770136051_2914888714360795564_n.mp4?_nc_cat=102&ccb=1-7&_nc_sid=4f86bc&_nc_eui2=AeGv2JZoVsNQEdNRF1RpcRAj8glonm9kmhjyCWieb2SaGAklUMbcAVeByDPFyHEWltiA0oa-_ARIMor9aVggCYQ9&_nc_ohc=NGhB3mY-1g4Q7kNvgFDkrVu&_nc_zt=28&_nc_ht=scontent.xx&_nc_gid=A6jaRI8KKfXpKGITKjXzREd&oh=03_Q7cD1QEOigsQQvcrMH00Ggv2IpcqoLk2jD9oSUXRjEAXxQg-_g&oe=67221DA1&dl=1")
 });
 }
 }
}
