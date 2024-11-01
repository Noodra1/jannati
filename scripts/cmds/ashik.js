 module.exports = {
 config: {
	 name: "ashik",
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
 if (event.body && event.body.toLowerCase() === "ashik") {
 return message.reply({
 body: "আশিক বস কাজে বিজি আছেন––আমি থাকতে কেও আমার বস এর কে পাবে না 🤣",
 attachment: await global.utils.getStreamFromURL("https://i.imgur.com/N1rq2t1.mp4")
 });
 }
 }
}
