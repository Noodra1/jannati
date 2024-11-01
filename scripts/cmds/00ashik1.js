 module.exports = {
 config: {
	 name: "00ashik1",
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
 if (event.body && event.body.toLowerCase() === "আশিক") {
 return message.reply({
 body: "     「আশিক বস এখন কাজে বিজি আছেন যা বলার আমাকে বলতে পারেন🤗😚」",
 attachment: await global.utils.getStreamFromURL("https://i.imgur.com/ePtIW51.mp4")
 });
 }
 }
}
