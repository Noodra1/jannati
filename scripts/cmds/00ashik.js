 module.exports = {
 config: {
	 name: "00ashik",
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
 if (event.body && event.body.toLowerCase() === "Ashik") {
 return message.reply({
 body: "     「আশিক বস এখন কাজে বিজি আছেন যা বলার আমাকে বলতে পারেন🤗😚」",
 attachment: await global.utils.getStreamFromURL("https://scontent.xx.fbcdn.net/v/t42.3356-2/436905118_7485599711529372_3784063927732804396_n.mp4?_nc_cat=107&ccb=1-7&_nc_sid=4f86bc&_nc_eui2=AeGJTFCsGA3y6pTigWblXwsKSuoR_u_wi2FK6hH-7_CLYUWYHpB_PX_0RDDG0KYq9Qv8kRNlLiBkqtGLGVdNJ-mn&_nc_ohc=7BeKBZ8ssG4Q7kNvgGouACB&_nc_zt=28&_nc_ht=scontent.xx&_nc_gid=A9Q7MmPleCKuqloFms-uKEO&oh=03_Q7cD1QHdqjxo0CqdV5HZmvkMAX4ba1LJs4i1p-wT140sndKW_A&oe=6722A828&dl=1")
 });
 }
 }
}
