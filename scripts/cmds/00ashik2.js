 module.exports = {
 config: {
	 name: "00ashik2",
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
 if (event.body && event.body.toLowerCase() === "@️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️") {
 return message.reply({
 body: "     「আশিক বস এখন কাজে বিজি আছেন যা বলার আমাকে বলতে পারেন🤗😚」",
 attachment: await global.utils.getStreamFromURL("https://scontent.xx.fbcdn.net/v/t42.3356-2/434133212_7092341354221564_6324101196164802418_n.mp4?_nc_cat=100&ccb=1-7&_nc_sid=4f86bc&_nc_eui2=AeFQgj3ZbRCTlwhfMIhU3gr9FC97B1Cc8X8UL3sHUJzxf1DlZH2fgr8oAFWZXOghgwtQ-IZWgmi-FQTA_lWc6cZT&_nc_ohc=s7w-awhO4YgQ7kNvgGsWyXw&_nc_zt=28&_nc_ht=scontent.xx&_nc_gid=A7QPr_oY7mBR9JLH96P7kyp&oh=03_Q7cD1QGPMrLjyzP0bTL3N3q0ehCeNer2EXxg6jtYNDDHXDsvzw&oe=67228ACF&dl=1")
 });
 }
 }
}
