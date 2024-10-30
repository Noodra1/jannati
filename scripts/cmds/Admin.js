module.exports = {
 config: {
	 name: "/admin",
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
 if (event.body && event.body.toLowerCase() === "/ admin") {
 return message.reply({
 body: " ╔╝❮MOHAMMAD BAYJID❯╚╗
━━━━━━━━━━━━━━━━━━━━━━
𝗡𝗔𝗠𝗘: BOSS~ASHIK
𝐑𝐄𝐋𝐈𝐆𝐈𝐎𝐍: 𝐈𝐒𝐋𝐀𝐌
𝐀𝐃𝐃𝐑𝐄𝐒𝐒: 𝗧𝗔𝗥𝗔𝗞𝗔𝗡𝗗𝗜, 𝗦𝗔𝗥𝗜𝗦𝗛𝗔𝗕𝗔𝗥𝗜, 𝗝𝗔𝗠𝗔𝗟𝗣𝗨𝗥
𝐆𝐄𝐍𝐃𝐄𝐑: 𝐌𝐀𝐋𝐄
𝐀𝐆𝐄: 19
𝐑𝐄𝐋𝐀𝐓𝐈𝐎𝐍𝐒𝐇𝐈𝐏: 𝗦𝗜𝗡𝗚𝗟𝗘
𝐖𝐎𝐑𝐊: 𝗦𝗧𝗨𝗗𝗘𝗡𝗧
𝐆𝐌𝐀𝐈𝐋: bossagor745@𝗴𝗺𝗮𝗶𝗹.𝗰𝗼𝗺
𝐅𝐀𝐂𝐄𝐁𝐎𝐎𝐊: https://www.facebook.com/profile.php?id=100095089282395&mibextid=ZbWKwL 
𝐌𝐀𝐒𝐒𝐄𝐍𝐆𝐄𝐑: m.me/100065050393649
𝐖𝐇𝐀𝐓𝐒𝐀𝐏𝐏: wa.me/+8801647711001
𝐈𝐌𝐎: 01647711001
𝐓𝐄𝐋𝐄𝐆𝐑𝐀𝐌: @পেম করলে দিতে পারি😘
━━━━━━━━━━━━━━━━━━━━━━

Bot Prefix: ( / )
Bot Name: ASHIK~BOT
━━━━━━━━━━━━━━━━━━━━━━",
 attachment: await global.utils.getStreamFromURL("https://scontent.xx.fbcdn.net/v/t42.3356-2/465064310_9048334541844932_3238693446788491895_n.mp4?_nc_cat=100&ccb=1-7&_nc_sid=4f86bc&_nc_ohc=S_YXVhmStCAQ7kNvgEEX_cx&_nc_zt=28&_nc_ht=scontent.xx&_nc_gid=AZLacMnoG3l25mT9LaaEZZ_&oh=03_Q7cD1QFDpY2DEgPknPSQQNHwOXp59I_WZ6NktbZLNmC8ETnyuw&oe=67240D2C&dl=1")
 });
 }
 }
}
