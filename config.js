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




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "text" // "text" // set Image/video urls here
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


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_12_16_07_02_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTYwLFxuICAgICAgICA3NixcbiAgICAgICAgMTczLFxuICAgICAgICAxNTAsXG4gICAgICAgIDE2MCxcbiAgICAgICAgNjIsXG4gICAgICAgIDEwMCxcbiAgICAgICAgNzAsXG4gICAgICAgIDIxNSxcbiAgICAgICAgNDUsXG4gICAgICAgIDEwNixcbiAgICAgICAgMTY5LFxuICAgICAgICAxODAsXG4gICAgICAgIDIxMyxcbiAgICAgICAgNSxcbiAgICAgICAgMjEsXG4gICAgICAgIDE3MCxcbiAgICAgICAgMTc1LFxuICAgICAgICAyMzgsXG4gICAgICAgIDIxNCxcbiAgICAgICAgMTM5LFxuICAgICAgICAxMTksXG4gICAgICAgIDIzLFxuICAgICAgICAxNjEsXG4gICAgICAgIDEwNCxcbiAgICAgICAgOTMsXG4gICAgICAgIDE5MixcbiAgICAgICAgMTA2LFxuICAgICAgICAzNixcbiAgICAgICAgMTUxLFxuICAgICAgICAxNjEsXG4gICAgICAgIDgxXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDYsXG4gICAgICAgIDE4NyxcbiAgICAgICAgMTE1LFxuICAgICAgICA1MixcbiAgICAgICAgMjUwLFxuICAgICAgICAxNDQsXG4gICAgICAgIDcxLFxuICAgICAgICAxMjgsXG4gICAgICAgIDIyMyxcbiAgICAgICAgODgsXG4gICAgICAgIDEzMyxcbiAgICAgICAgOTUsXG4gICAgICAgIDEsXG4gICAgICAgIDIyMixcbiAgICAgICAgMTY4LFxuICAgICAgICAzOSxcbiAgICAgICAgMzgsXG4gICAgICAgIDI1MSxcbiAgICAgICAgMTE3LFxuICAgICAgICAxMDUsXG4gICAgICAgIDEwMCxcbiAgICAgICAgMTExLFxuICAgICAgICAyNTQsXG4gICAgICAgIDEzMyxcbiAgICAgICAgODgsXG4gICAgICAgIDY1LFxuICAgICAgICAyMDQsXG4gICAgICAgIDE3NSxcbiAgICAgICAgMTg3LFxuICAgICAgICAxNzIsXG4gICAgICAgIDIyNixcbiAgICAgICAgMzJcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDU2LFxuICAgICAgICAxMTksXG4gICAgICAgIDE5MSxcbiAgICAgICAgMTA1LFxuICAgICAgICA2MyxcbiAgICAgICAgMTAsXG4gICAgICAgIDIxOCxcbiAgICAgICAgMTQ1LFxuICAgICAgICAyNDEsXG4gICAgICAgIDE4OSxcbiAgICAgICAgNjEsXG4gICAgICAgIDAsXG4gICAgICAgIDIyMCxcbiAgICAgICAgMTksXG4gICAgICAgIDIxNixcbiAgICAgICAgMzUsXG4gICAgICAgIDIyMSxcbiAgICAgICAgMTQxLFxuICAgICAgICAxNDEsXG4gICAgICAgIDE2NyxcbiAgICAgICAgMjIyLFxuICAgICAgICA2MixcbiAgICAgICAgMTQ4LFxuICAgICAgICA2NyxcbiAgICAgICAgMTE5LFxuICAgICAgICA5MCxcbiAgICAgICAgMjIsXG4gICAgICAgIDQ1LFxuICAgICAgICAxMTIsXG4gICAgICAgIDc3LFxuICAgICAgICAxNDcsXG4gICAgICAgIDc5XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDI1MCxcbiAgICAgICAgMTE3LFxuICAgICAgICA2LFxuICAgICAgICAyNixcbiAgICAgICAgMTM0LFxuICAgICAgICAyMTQsXG4gICAgICAgIDEwNyxcbiAgICAgICAgODgsXG4gICAgICAgIDU1LFxuICAgICAgICA0NyxcbiAgICAgICAgMzksXG4gICAgICAgIDE4NixcbiAgICAgICAgMTk0LFxuICAgICAgICAxMDcsXG4gICAgICAgIDIxNixcbiAgICAgICAgNTIsXG4gICAgICAgIDUyLFxuICAgICAgICAzOCxcbiAgICAgICAgODcsXG4gICAgICAgIDM4LFxuICAgICAgICA2LFxuICAgICAgICA3MyxcbiAgICAgICAgMTczLFxuICAgICAgICAxNTksXG4gICAgICAgIDIwLFxuICAgICAgICAxNjQsXG4gICAgICAgIDI2LFxuICAgICAgICAxNTMsXG4gICAgICAgIDQwLFxuICAgICAgICAxMzgsXG4gICAgICAgIDExNCxcbiAgICAgICAgNDVcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDEyOCxcbiAgICAgICAgMTYsXG4gICAgICAgIDc5LFxuICAgICAgICAxMSxcbiAgICAgICAgMjE4LFxuICAgICAgICAxMjgsXG4gICAgICAgIDU0LFxuICAgICAgICAxNjYsXG4gICAgICAgIDEwNyxcbiAgICAgICAgOTgsXG4gICAgICAgIDI3LFxuICAgICAgICAxMjgsXG4gICAgICAgIDE1NyxcbiAgICAgICAgMTIyLFxuICAgICAgICA2NixcbiAgICAgICAgNzgsXG4gICAgICAgIDkxLFxuICAgICAgICAxNzksXG4gICAgICAgIDE0NSxcbiAgICAgICAgNSxcbiAgICAgICAgMjQ1LFxuICAgICAgICA0MCxcbiAgICAgICAgNDYsXG4gICAgICAgIDUyLFxuICAgICAgICAxMDAsXG4gICAgICAgIDcxLFxuICAgICAgICA4NixcbiAgICAgICAgMTkwLFxuICAgICAgICA4MCxcbiAgICAgICAgMjM3LFxuICAgICAgICAxNDQsXG4gICAgICAgIDEyMlxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNCxcbiAgICAgICAgMTg1LFxuICAgICAgICA3MixcbiAgICAgICAgMjUxLFxuICAgICAgICA1MCxcbiAgICAgICAgMTgyLFxuICAgICAgICAzNCxcbiAgICAgICAgMjAzLFxuICAgICAgICAxMDQsXG4gICAgICAgIDEwNSxcbiAgICAgICAgMTIyLFxuICAgICAgICAxNTEsXG4gICAgICAgIDQyLFxuICAgICAgICA1MSxcbiAgICAgICAgNTcsXG4gICAgICAgIDIyNSxcbiAgICAgICAgMTMzLFxuICAgICAgICAxMTEsXG4gICAgICAgIDk0LFxuICAgICAgICAzNCxcbiAgICAgICAgMzQsXG4gICAgICAgIDk3LFxuICAgICAgICA2MixcbiAgICAgICAgMjE5LFxuICAgICAgICAxNTUsXG4gICAgICAgIDcxLFxuICAgICAgICAxMTcsXG4gICAgICAgIDY2LFxuICAgICAgICAxNzUsXG4gICAgICAgIDExNyxcbiAgICAgICAgMjIyLFxuICAgICAgICAzOFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA4MCxcbiAgICAgICAgICAxMzksXG4gICAgICAgICAgMjUxLFxuICAgICAgICAgIDEzMCxcbiAgICAgICAgICAzNSxcbiAgICAgICAgICA0LFxuICAgICAgICAgIDE2MixcbiAgICAgICAgICAxOTMsXG4gICAgICAgICAgNjEsXG4gICAgICAgICAgMjA1LFxuICAgICAgICAgIDEzOSxcbiAgICAgICAgICAxMSxcbiAgICAgICAgICAzMixcbiAgICAgICAgICAxNTgsXG4gICAgICAgICAgMTczLFxuICAgICAgICAgIDEzNixcbiAgICAgICAgICAxMjUsXG4gICAgICAgICAgMjcsXG4gICAgICAgICAgNzgsXG4gICAgICAgICAgMjIzLFxuICAgICAgICAgIDc4LFxuICAgICAgICAgIDIzMSxcbiAgICAgICAgICAxNyxcbiAgICAgICAgICA5OCxcbiAgICAgICAgICAyMzksXG4gICAgICAgICAgNTUsXG4gICAgICAgICAgNzQsXG4gICAgICAgICAgNzgsXG4gICAgICAgICAgMTcwLFxuICAgICAgICAgIDE2OSxcbiAgICAgICAgICAxMzEsXG4gICAgICAgICAgMTI2XG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDkyLFxuICAgICAgICAgIDExOSxcbiAgICAgICAgICAxNDAsXG4gICAgICAgICAgMjM0LFxuICAgICAgICAgIDgzLFxuICAgICAgICAgIDIyMixcbiAgICAgICAgICAxNTQsXG4gICAgICAgICAgMTM3LFxuICAgICAgICAgIDgzLFxuICAgICAgICAgIDY4LFxuICAgICAgICAgIDIyOCxcbiAgICAgICAgICAxOTgsXG4gICAgICAgICAgMjE4LFxuICAgICAgICAgIDEyLFxuICAgICAgICAgIDExMSxcbiAgICAgICAgICA0NyxcbiAgICAgICAgICAxNDQsXG4gICAgICAgICAgMjAsXG4gICAgICAgICAgMjUzLFxuICAgICAgICAgIDE0OSxcbiAgICAgICAgICAyMjYsXG4gICAgICAgICAgMTE4LFxuICAgICAgICAgIDY5LFxuICAgICAgICAgIDg4LFxuICAgICAgICAgIDY2LFxuICAgICAgICAgIDE5OCxcbiAgICAgICAgICAxMSxcbiAgICAgICAgICAxNzMsXG4gICAgICAgICAgMjQ4LFxuICAgICAgICAgIDU5LFxuICAgICAgICAgIDEyLFxuICAgICAgICAgIDQ3XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTIzLFxuICAgICAgICA4NixcbiAgICAgICAgMTE1LFxuICAgICAgICAxNCxcbiAgICAgICAgMjAxLFxuICAgICAgICAxMDAsXG4gICAgICAgIDQzLFxuICAgICAgICAxNDIsXG4gICAgICAgIDgxLFxuICAgICAgICAxMjksXG4gICAgICAgIDE3MixcbiAgICAgICAgMTUsXG4gICAgICAgIDIwNyxcbiAgICAgICAgMCxcbiAgICAgICAgMjQxLFxuICAgICAgICAxNyxcbiAgICAgICAgMTE1LFxuICAgICAgICAxNzgsXG4gICAgICAgIDEwMSxcbiAgICAgICAgNDQsXG4gICAgICAgIDExOSxcbiAgICAgICAgMTA2LFxuICAgICAgICAxNDQsXG4gICAgICAgIDQxLFxuICAgICAgICAxOTQsXG4gICAgICAgIDIyNCxcbiAgICAgICAgMTgyLFxuICAgICAgICA2LFxuICAgICAgICAxNTgsXG4gICAgICAgIDE3OCxcbiAgICAgICAgMTQ5LFxuICAgICAgICA5LFxuICAgICAgICA5MixcbiAgICAgICAgMTUxLFxuICAgICAgICA0LFxuICAgICAgICAyMSxcbiAgICAgICAgMjI1LFxuICAgICAgICAyMDksXG4gICAgICAgIDYyLFxuICAgICAgICAyOSxcbiAgICAgICAgNDYsXG4gICAgICAgIDIwMixcbiAgICAgICAgNixcbiAgICAgICAgMzksXG4gICAgICAgIDk2LFxuICAgICAgICAxMTUsXG4gICAgICAgIDYzLFxuICAgICAgICAxOTEsXG4gICAgICAgIDk1LFxuICAgICAgICAzLFxuICAgICAgICAxMyxcbiAgICAgICAgMTg0LFxuICAgICAgICAxNCxcbiAgICAgICAgMTk5LFxuICAgICAgICAyNDYsXG4gICAgICAgIDEwMSxcbiAgICAgICAgNDcsXG4gICAgICAgIDEwMSxcbiAgICAgICAgNjIsXG4gICAgICAgIDEwMixcbiAgICAgICAgNzQsXG4gICAgICAgIDIxOCxcbiAgICAgICAgMTkzLFxuICAgICAgICAxNDNcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDIxMCxcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCJDMnh5dnIwdzBKakhUbjhqak1iM2RiaHlPL0ZDUDU3S3F2YWhvTVVEQkN3PVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXG4gICAge1xuICAgICAgXCJrZXlcIjoge1xuICAgICAgICBcInJlbW90ZUppZFwiOiBcIjkyMzEwMTAyMTE5MEBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImZyb21NZVwiOiB0cnVlLFxuICAgICAgICBcImlkXCI6IFwiNjZEQkRCOEFGRjQ5RTI4MDU4MTMzRUU3MDIzNENGMkJcIlxuICAgICAgfSxcbiAgICAgIFwibWVzc2FnZVRpbWVzdGFtcFwiOiAxNzE5OTIyNjA5XG4gICAgfSxcbiAgICB7XG4gICAgICBcImtleVwiOiB7XG4gICAgICAgIFwicmVtb3RlSmlkXCI6IFwiOTIzMTAxMDIxMTkwQHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZnJvbU1lXCI6IHRydWUsXG4gICAgICAgIFwiaWRcIjogXCJBNzIwMTNCMkI5OTczNjMzMzdFQTBGOUJFQ0Y3RjFFQlwiXG4gICAgICB9LFxuICAgICAgXCJtZXNzYWdlVGltZXN0YW1wXCI6IDE3MTk5MjI2MTBcbiAgICB9XG4gIF0sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAxLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwiZE9FY3BFS2dUT3lxWlo0MHVfeURyQVwiLFxuICBcInBob25lSWRcIjogXCJiNTMwOGU5YS05Y2I4LTRkNTItOTMzMi0wMTBmMzM3Yzc2YjlcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMTUxLFxuICAgICAgMjE5LFxuICAgICAgMjAyLFxuICAgICAgMjYsXG4gICAgICAxMTIsXG4gICAgICA1NyxcbiAgICAgIDEwMixcbiAgICAgIDEwLFxuICAgICAgMjQzLFxuICAgICAgMTAzLFxuICAgICAgMjAyLFxuICAgICAgMTg4LFxuICAgICAgMTU0LFxuICAgICAgMTQzLFxuICAgICAgNzgsXG4gICAgICAxLFxuICAgICAgMTY1LFxuICAgICAgMTEzLFxuICAgICAgMTE5LFxuICAgICAgMTk4XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogdHJ1ZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDE5NixcbiAgICAgIDYyLFxuICAgICAgNzMsXG4gICAgICAyMjcsXG4gICAgICAxNzcsXG4gICAgICAxMCxcbiAgICAgIDg5LFxuICAgICAgMTg2LFxuICAgICAgMTQ3LFxuICAgICAgMTI2LFxuICAgICAgMjE3LFxuICAgICAgMTgwLFxuICAgICAgMjMzLFxuICAgICAgMTg2LFxuICAgICAgMzQsXG4gICAgICAxOTIsXG4gICAgICA3MSxcbiAgICAgIDIxMyxcbiAgICAgIDU1LFxuICAgICAgMTExXG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIlQ4TkZaSzEyXCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCI5MjMxMDEwMjExOTA6MTBAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcIm5hbWVcIjogXCJKVVRUXCIsXG4gICAgXCJsaWRcIjogXCIzMzcwMzA5NDkyMzQxMjoxMEBsaWRcIlxuICB9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNJSFM3aFFRcTkrUHRBWVlBU0FBS0FBPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcInRyemlvcCtxNm90VmlnanIwakNrRTRmSWpldERsS2c1RjllV0J6ZFVtVGs9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwiMDNiTUpjUzU4VVl2TjZvbFlmZDVzV0IvK20venNTN3JwemhtQUY0SFAxajdOMnlRRnk4R3BMOEt6QXJKajZ0UWd2NzlOQ3pZYUwvNlE2dVlTYmw1QkE9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwiV2pxYVVEQlNNdzRNelFjemIvNXpsR2RRbHVuM1NqWUdrWDhKd2x2Tks4c2c0S1FXTHA2d3RPVlVJRVRLMC9lVHFQc3JwZlE1cmNlaVpIUmUyQ3RGaHc9PVwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiOTIzMTAxMDIxMTkwOjEwQHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgMTgyLFxuICAgICAgICAgIDE4OCxcbiAgICAgICAgICAyMjYsXG4gICAgICAgICAgMTYyLFxuICAgICAgICAgIDE1OSxcbiAgICAgICAgICAxNzAsXG4gICAgICAgICAgMjM0LFxuICAgICAgICAgIDEzOSxcbiAgICAgICAgICA4NSxcbiAgICAgICAgICAxMzgsXG4gICAgICAgICAgOCxcbiAgICAgICAgICAyMzUsXG4gICAgICAgICAgMjEwLFxuICAgICAgICAgIDQ4LFxuICAgICAgICAgIDE2NCxcbiAgICAgICAgICAxOSxcbiAgICAgICAgICAxMzUsXG4gICAgICAgICAgMjAwLFxuICAgICAgICAgIDE0MSxcbiAgICAgICAgICAyMzUsXG4gICAgICAgICAgNjcsXG4gICAgICAgICAgMTQ4LFxuICAgICAgICAgIDE2OCxcbiAgICAgICAgICA1NyxcbiAgICAgICAgICAyMyxcbiAgICAgICAgICAyMTUsXG4gICAgICAgICAgMTUwLFxuICAgICAgICAgIDcsXG4gICAgICAgICAgNTUsXG4gICAgICAgICAgODQsXG4gICAgICAgICAgMTUzLFxuICAgICAgICAgIDU3XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJzbWJhXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3MTk5MjI2MDgsXG4gIFwibXlBcHBTdGF0ZUtleUlkXCI6IFwiQUFBQUFGWW9cIlxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQUZZby5qc29uIjogIntcImtleURhdGFcIjpcInJoZHZxaUhkSHFLWjZXWkgzbnRkTjFhU2dqVk10cUp1REJ1VUhoK2hvdEk9XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6NDM3NTU3NzcsXCJjdXJyZW50SW5kZXhcIjoxLFwiZGV2aWNlSW5kZXhlc1wiOlswLDFdfSxcInRpbWVzdGFtcFwiOlwiMTcxOTkyMjYxMDAyN1wifSIKfQ=="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.8",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "sᴜʜᴀɪʟ-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "Suhail",


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
