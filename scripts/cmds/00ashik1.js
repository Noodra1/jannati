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
 attachment: await global.utils.getStreamFromURL("https://scontent.xx.fbcdn.net/v/t42.3356-2/464683448_8162398237198627_8797856895083646732_n.mp4?_nc_cat=111&ccb=1-7&_nc_sid=4f86bc&_nc_eui2=AeGorkbQneX2ej2_OOxrKb8o9JShkhxIW5P0lKGSHEhbk4esisqcRKwwbWLkpitA8GwR-wOsc-BdG4hUtFolgqQJ&_nc_ohc=zWVbLOKwpbcQ7kNvgF63oMZ&_nc_zt=28&_nc_ht=scontent.xx&_nc_gid=Ai_odPGFvtJIPsuVrafS00d&oh=03_Q7cD1QEa11v8stUSJl94cjq8Fv_3zOZeYhc4vsGJTZenFzXV_Q&oe=6722A597&dl=1")
 });
 }
 }
}
