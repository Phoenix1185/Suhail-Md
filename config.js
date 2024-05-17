const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://github.com/SuhailTechInfo/Suhail-Md/blob/main/lib/assets/suhail.jpg?raw=true" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ" 


global.devs = "923184474176" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "923184474176";




//========================= [ BOT SETTINGS ] =========================\\
global.style = process.env.STYLE   || '5'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_19_24_05_17_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgOTYsXG4gICAgICAgIDIxOCxcbiAgICAgICAgMjE5LFxuICAgICAgICAxNDcsXG4gICAgICAgIDE2MSxcbiAgICAgICAgMTExLFxuICAgICAgICA0NSxcbiAgICAgICAgMTcyLFxuICAgICAgICAzOCxcbiAgICAgICAgMjQ1LFxuICAgICAgICAxNjIsXG4gICAgICAgIDIzMCxcbiAgICAgICAgNDAsXG4gICAgICAgIDk3LFxuICAgICAgICAyNCxcbiAgICAgICAgNzQsXG4gICAgICAgIDIxMCxcbiAgICAgICAgMTczLFxuICAgICAgICA2MSxcbiAgICAgICAgOTAsXG4gICAgICAgIDE5NyxcbiAgICAgICAgMjAwLFxuICAgICAgICAxNDEsXG4gICAgICAgIDM3LFxuICAgICAgICAyMTgsXG4gICAgICAgIDE4OCxcbiAgICAgICAgOTcsXG4gICAgICAgIDE5MSxcbiAgICAgICAgMTI2LFxuICAgICAgICAxOTcsXG4gICAgICAgIDI0LFxuICAgICAgICAxMDZcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjA5LFxuICAgICAgICAyMzUsXG4gICAgICAgIDE3MyxcbiAgICAgICAgNTEsXG4gICAgICAgIDIwOSxcbiAgICAgICAgMTM4LFxuICAgICAgICAxODksXG4gICAgICAgIDI3LFxuICAgICAgICA1OCxcbiAgICAgICAgMTExLFxuICAgICAgICAyMjMsXG4gICAgICAgIDIyMCxcbiAgICAgICAgMSxcbiAgICAgICAgMjE3LFxuICAgICAgICAxODYsXG4gICAgICAgIDExNCxcbiAgICAgICAgMTQ2LFxuICAgICAgICA0MSxcbiAgICAgICAgMTExLFxuICAgICAgICA2MixcbiAgICAgICAgMSxcbiAgICAgICAgMTczLFxuICAgICAgICAxNTMsXG4gICAgICAgIDc0LFxuICAgICAgICAxNyxcbiAgICAgICAgMjI3LFxuICAgICAgICAyMTQsXG4gICAgICAgIDE3LFxuICAgICAgICAxOTQsXG4gICAgICAgIDE2NixcbiAgICAgICAgMTY4LFxuICAgICAgICAzXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyNDAsXG4gICAgICAgIDE0MCxcbiAgICAgICAgMTMsXG4gICAgICAgIDEyMixcbiAgICAgICAgMTYsXG4gICAgICAgIDExMyxcbiAgICAgICAgMTU5LFxuICAgICAgICA2MixcbiAgICAgICAgMTk5LFxuICAgICAgICAxOTIsXG4gICAgICAgIDM5LFxuICAgICAgICAyOCxcbiAgICAgICAgMTU4LFxuICAgICAgICAyNDAsXG4gICAgICAgIDM3LFxuICAgICAgICAyMzIsXG4gICAgICAgIDE2MixcbiAgICAgICAgMjM0LFxuICAgICAgICAyOSxcbiAgICAgICAgODksXG4gICAgICAgIDExOSxcbiAgICAgICAgNTcsXG4gICAgICAgIDExNixcbiAgICAgICAgMjEzLFxuICAgICAgICAxOSxcbiAgICAgICAgMTgwLFxuICAgICAgICAxNjgsXG4gICAgICAgIDEwNSxcbiAgICAgICAgMTE1LFxuICAgICAgICAyNCxcbiAgICAgICAgMjQsXG4gICAgICAgIDExMFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxOSxcbiAgICAgICAgMTM2LFxuICAgICAgICAyMjgsXG4gICAgICAgIDE5NSxcbiAgICAgICAgMjIyLFxuICAgICAgICAyMzYsXG4gICAgICAgIDc0LFxuICAgICAgICAxNTYsXG4gICAgICAgIDIzMixcbiAgICAgICAgMzAsXG4gICAgICAgIDIxMSxcbiAgICAgICAgNzksXG4gICAgICAgIDQsXG4gICAgICAgIDIzMCxcbiAgICAgICAgMjUyLFxuICAgICAgICAxMTAsXG4gICAgICAgIDIxMixcbiAgICAgICAgMTc2LFxuICAgICAgICAxNzAsXG4gICAgICAgIDEyMSxcbiAgICAgICAgNzksXG4gICAgICAgIDIzNyxcbiAgICAgICAgMjM5LFxuICAgICAgICA5LFxuICAgICAgICAxLFxuICAgICAgICAyMDQsXG4gICAgICAgIDQsXG4gICAgICAgIDQyLFxuICAgICAgICAxNixcbiAgICAgICAgMzAsXG4gICAgICAgIDIxMSxcbiAgICAgICAgOTJcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDEzNixcbiAgICAgICAgMTgwLFxuICAgICAgICA3NCxcbiAgICAgICAgMTEwLFxuICAgICAgICAyNDcsXG4gICAgICAgIDE1MCxcbiAgICAgICAgNzUsXG4gICAgICAgIDE5OCxcbiAgICAgICAgMTA5LFxuICAgICAgICAxMTUsXG4gICAgICAgIDEzNixcbiAgICAgICAgMTc3LFxuICAgICAgICAxNzAsXG4gICAgICAgIDIwOSxcbiAgICAgICAgMTYwLFxuICAgICAgICA4NixcbiAgICAgICAgMixcbiAgICAgICAgNjUsXG4gICAgICAgIDY2LFxuICAgICAgICAyMjMsXG4gICAgICAgIDkwLFxuICAgICAgICAxNzksXG4gICAgICAgIDE4OCxcbiAgICAgICAgMTA2LFxuICAgICAgICAxNTIsXG4gICAgICAgIDU0LFxuICAgICAgICAyMzUsXG4gICAgICAgIDI1LFxuICAgICAgICAxMDQsXG4gICAgICAgIDE2MCxcbiAgICAgICAgMTE4LFxuICAgICAgICA5N1xuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNjcsXG4gICAgICAgIDExOSxcbiAgICAgICAgMjQzLFxuICAgICAgICAyMzQsXG4gICAgICAgIDg2LFxuICAgICAgICAyNSxcbiAgICAgICAgMjM5LFxuICAgICAgICA0MixcbiAgICAgICAgMjYsXG4gICAgICAgIDY1LFxuICAgICAgICAyNSxcbiAgICAgICAgNDksXG4gICAgICAgIDY1LFxuICAgICAgICA2MixcbiAgICAgICAgMTA1LFxuICAgICAgICAyMzEsXG4gICAgICAgIDM1LFxuICAgICAgICAyMjcsXG4gICAgICAgIDE5MixcbiAgICAgICAgMzcsXG4gICAgICAgIDEwOSxcbiAgICAgICAgMCxcbiAgICAgICAgMjA0LFxuICAgICAgICA5MCxcbiAgICAgICAgMTA0LFxuICAgICAgICAxNSxcbiAgICAgICAgMTc1LFxuICAgICAgICA4NixcbiAgICAgICAgMzMsXG4gICAgICAgIDg2LFxuICAgICAgICA5LFxuICAgICAgICAxNlxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA0MCxcbiAgICAgICAgICAyNixcbiAgICAgICAgICAyMjcsXG4gICAgICAgICAgMTYwLFxuICAgICAgICAgIDI0OCxcbiAgICAgICAgICA2NixcbiAgICAgICAgICA4OCxcbiAgICAgICAgICA2LFxuICAgICAgICAgIDExNSxcbiAgICAgICAgICAzMyxcbiAgICAgICAgICAxMzAsXG4gICAgICAgICAgMTMxLFxuICAgICAgICAgIDk5LFxuICAgICAgICAgIDEwOSxcbiAgICAgICAgICAyLFxuICAgICAgICAgIDEyMCxcbiAgICAgICAgICAxNDAsXG4gICAgICAgICAgMjQ0LFxuICAgICAgICAgIDkyLFxuICAgICAgICAgIDE4NCxcbiAgICAgICAgICAyNDMsXG4gICAgICAgICAgNDMsXG4gICAgICAgICAgNTMsXG4gICAgICAgICAgMjM2LFxuICAgICAgICAgIDEyNCxcbiAgICAgICAgICAxMDksXG4gICAgICAgICAgMTQ2LFxuICAgICAgICAgIDc2LFxuICAgICAgICAgIDI1MSxcbiAgICAgICAgICA1MyxcbiAgICAgICAgICAxNDIsXG4gICAgICAgICAgOTFcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNjAsXG4gICAgICAgICAgOSxcbiAgICAgICAgICAyMzEsXG4gICAgICAgICAgMzIsXG4gICAgICAgICAgMjM0LFxuICAgICAgICAgIDEyNixcbiAgICAgICAgICAyMjgsXG4gICAgICAgICAgMTYxLFxuICAgICAgICAgIDE4NyxcbiAgICAgICAgICAzMixcbiAgICAgICAgICAxNTcsXG4gICAgICAgICAgMTI5LFxuICAgICAgICAgIDIyMSxcbiAgICAgICAgICAxNDYsXG4gICAgICAgICAgMTQxLFxuICAgICAgICAgIDEwMyxcbiAgICAgICAgICAxMjksXG4gICAgICAgICAgMjI2LFxuICAgICAgICAgIDE3NSxcbiAgICAgICAgICAxMzQsXG4gICAgICAgICAgMjQ5LFxuICAgICAgICAgIDgwLFxuICAgICAgICAgIDMsXG4gICAgICAgICAgMTQyLFxuICAgICAgICAgIDI3LFxuICAgICAgICAgIDc2LFxuICAgICAgICAgIDIwNSxcbiAgICAgICAgICA1NixcbiAgICAgICAgICAyMDAsXG4gICAgICAgICAgMjcsXG4gICAgICAgICAgMjYsXG4gICAgICAgICAgMTZcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyNixcbiAgICAgICAgOTEsXG4gICAgICAgIDIxMCxcbiAgICAgICAgMjU1LFxuICAgICAgICAxNTMsXG4gICAgICAgIDIwMCxcbiAgICAgICAgMTU5LFxuICAgICAgICAxNzgsXG4gICAgICAgIDE5NyxcbiAgICAgICAgMTkwLFxuICAgICAgICAxNzQsXG4gICAgICAgIDI0MCxcbiAgICAgICAgMTEzLFxuICAgICAgICAxNjIsXG4gICAgICAgIDIxMyxcbiAgICAgICAgOTEsXG4gICAgICAgIDQyLFxuICAgICAgICAyNTAsXG4gICAgICAgIDk1LFxuICAgICAgICA2MCxcbiAgICAgICAgMjA4LFxuICAgICAgICAyMDEsXG4gICAgICAgIDEyNyxcbiAgICAgICAgMjUxLFxuICAgICAgICAyNDEsXG4gICAgICAgIDgxLFxuICAgICAgICAxMTAsXG4gICAgICAgIDE2NyxcbiAgICAgICAgMTQwLFxuICAgICAgICA4MyxcbiAgICAgICAgMTA5LFxuICAgICAgICAxMjMsXG4gICAgICAgIDIwMyxcbiAgICAgICAgNDMsXG4gICAgICAgIDEyMyxcbiAgICAgICAgMTEyLFxuICAgICAgICAxOTEsXG4gICAgICAgIDExOSxcbiAgICAgICAgMzMsXG4gICAgICAgIDM0LFxuICAgICAgICA3MCxcbiAgICAgICAgNixcbiAgICAgICAgNDcsXG4gICAgICAgIDczLFxuICAgICAgICA4OCxcbiAgICAgICAgMTA4LFxuICAgICAgICAxNzUsXG4gICAgICAgIDg3LFxuICAgICAgICAyMDAsXG4gICAgICAgIDI0NixcbiAgICAgICAgNDgsXG4gICAgICAgIDE5NyxcbiAgICAgICAgNTMsXG4gICAgICAgIDgzLFxuICAgICAgICAyMixcbiAgICAgICAgMTQ0LFxuICAgICAgICAxOTYsXG4gICAgICAgIDExNixcbiAgICAgICAgMTk5LFxuICAgICAgICAyMzksXG4gICAgICAgIDcxLFxuICAgICAgICAxNjgsXG4gICAgICAgIDMxLFxuICAgICAgICAxNVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogMTUxLFxuICBcImFkdlNlY3JldEtleVwiOiBcImFtWjE5YmpjdmtZd2tGbkM4b0xEb2VUdHFMeFpVcXNRQjJ5V3BvRUQ0RlU9XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtcbiAgICB7XG4gICAgICBcImtleVwiOiB7XG4gICAgICAgIFwicmVtb3RlSmlkXCI6IFwiMjM0OTA3MTQxOTI0NUBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImZyb21NZVwiOiB0cnVlLFxuICAgICAgICBcImlkXCI6IFwiNUVGMzIwMkNEMUYwQTNFMDAyNThBNDEyMkNEQUUzMjFcIlxuICAgICAgfSxcbiAgICAgIFwibWVzc2FnZVRpbWVzdGFtcFwiOiAxNzE1OTczODc3XG4gICAgfSxcbiAgICB7XG4gICAgICBcImtleVwiOiB7XG4gICAgICAgIFwicmVtb3RlSmlkXCI6IFwiMjM0OTA3MTQxOTI0NUBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImZyb21NZVwiOiB0cnVlLFxuICAgICAgICBcImlkXCI6IFwiMkVCRkI0NUE0Q0FERERGQjRCN0IxRUFCODhGMjA5QjNcIlxuICAgICAgfSxcbiAgICAgIFwibWVzc2FnZVRpbWVzdGFtcFwiOiAxNzE1OTczODgwXG4gICAgfVxuICBdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMSxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcInpweEV6LXNwVE5hcFh6LUJhdUhlcEFcIixcbiAgXCJwaG9uZUlkXCI6IFwiNGIzNDNkNzEtYzA4YS00MjgwLWE4YmQtZTRjNDY5MzBkNTZlXCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDM0LFxuICAgICAgNDksXG4gICAgICA0OCxcbiAgICAgIDk4LFxuICAgICAgMTgzLFxuICAgICAgMTI0LFxuICAgICAgMTUwLFxuICAgICAgMTA1LFxuICAgICAgMTQ4LFxuICAgICAgNzYsXG4gICAgICAxODEsXG4gICAgICAxODIsXG4gICAgICA1MCxcbiAgICAgIDExOSxcbiAgICAgIDk1LFxuICAgICAgMixcbiAgICAgIDI5LFxuICAgICAgNTksXG4gICAgICAxMTIsXG4gICAgICA3NVxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IHRydWUsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICA2MyxcbiAgICAgIDk0LFxuICAgICAgMTUsXG4gICAgICAxNTIsXG4gICAgICAyMzgsXG4gICAgICAyMDYsXG4gICAgICAzNyxcbiAgICAgIDIwMyxcbiAgICAgIDIxOCxcbiAgICAgIDg5LFxuICAgICAgMTU5LFxuICAgICAgMTU1LFxuICAgICAgOTQsXG4gICAgICAyNDIsXG4gICAgICA3OCxcbiAgICAgIDIxNyxcbiAgICAgIDU4LFxuICAgICAgMTM3LFxuICAgICAgMjA1LFxuICAgICAgMjQ5XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIktLQjFQNVgzXCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCIyMzQ5MDcxNDE5MjQ1OjExQHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJuYW1lXCI6IFwiSXlhbnVvbHV3YSBEYW1pbG9sYSBBbmpvcmluXCIsXG4gICAgXCJsaWRcIjogXCIxOTcwOTIxNzM2ODA2NTM6MTFAbGlkXCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDT0MrVFJEdTNaNnlCaGdCSUFBb0FBPT1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCJmMEYzRHVwTTNVVlBURzIzZGVwbUMyYVRqa25wQlZrMDFabXpHc3RVc3dvPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcInNRaDY2MFZZWmdKUVVQUXl5dldKSktjOCtzUEZBeWNVbWxoWWdOMUlyVmlJcm1mcytWazRXejRXRGw5YStkdzlZb1pQKzRieWRTc3VoZlNZeDMwZkRBPT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcIlppb1hCTE5BdHJyMGZsYjNsTFMwa3dDVTFITkpEaGg2WjIwYXE3R3VaTmNQaVpPN25YMVB1NWdkeWhMcldBZ3JqRzU0ekExMitpWlJuWWxPS3VBZkNnPT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjIzNDkwNzE0MTkyNDU6MTFAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICAxMjcsXG4gICAgICAgICAgNjUsXG4gICAgICAgICAgMTE5LFxuICAgICAgICAgIDE0LFxuICAgICAgICAgIDIzNCxcbiAgICAgICAgICA3NixcbiAgICAgICAgICAyMjEsXG4gICAgICAgICAgNjksXG4gICAgICAgICAgNzksXG4gICAgICAgICAgNzYsXG4gICAgICAgICAgMTA5LFxuICAgICAgICAgIDE4MyxcbiAgICAgICAgICAxMTcsXG4gICAgICAgICAgMjM0LFxuICAgICAgICAgIDEwMixcbiAgICAgICAgICAxMSxcbiAgICAgICAgICAxMDIsXG4gICAgICAgICAgMTQ3LFxuICAgICAgICAgIDE0MixcbiAgICAgICAgICA3MyxcbiAgICAgICAgICAyMzMsXG4gICAgICAgICAgNSxcbiAgICAgICAgICA4OSxcbiAgICAgICAgICA1MixcbiAgICAgICAgICAyMTMsXG4gICAgICAgICAgMTUzLFxuICAgICAgICAgIDE3OSxcbiAgICAgICAgICAyNixcbiAgICAgICAgICAyMDMsXG4gICAgICAgICAgODQsXG4gICAgICAgICAgMTc5LFxuICAgICAgICAgIDEwXG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJzbWJhXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3MTU5NzM4NzQsXG4gIFwibXlBcHBTdGF0ZUtleUlkXCI6IFwiQUFBQUFNa2hcIlxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQU1raC5qc29uIjogIntcImtleURhdGFcIjpcIldNS3FrRFhoTUROQk9USkFhR0RVdmJFK3lqb0RmbW9JRmY4OGpIYkU1b2s9XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6MTI2OTYwMCxcImN1cnJlbnRJbmRleFwiOjEsXCJkZXZpY2VJbmRleGVzXCI6WzAsMV19LFwidGltZXN0YW1wXCI6XCIxNzE1OTczODc1ODg1XCJ9Igp9"  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.4",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "sᴜʜᴀɪʟ-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "It'x Suhail",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
