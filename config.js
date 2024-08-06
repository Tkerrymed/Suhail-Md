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
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "2349029145997";




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


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_10_57_08_06_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTI4LFxuICAgICAgICA4NyxcbiAgICAgICAgNTAsXG4gICAgICAgIDIxNyxcbiAgICAgICAgNzYsXG4gICAgICAgIDE5LFxuICAgICAgICA0LFxuICAgICAgICAzMyxcbiAgICAgICAgNzYsXG4gICAgICAgIDExNixcbiAgICAgICAgMyxcbiAgICAgICAgMTk5LFxuICAgICAgICA0OCxcbiAgICAgICAgMjA1LFxuICAgICAgICAxNDYsXG4gICAgICAgIDIwOSxcbiAgICAgICAgNzMsXG4gICAgICAgIDI1LFxuICAgICAgICAyMjksXG4gICAgICAgIDE4MyxcbiAgICAgICAgMjUsXG4gICAgICAgIDE5MyxcbiAgICAgICAgMzMsXG4gICAgICAgIDIyNCxcbiAgICAgICAgMTAyLFxuICAgICAgICAxNyxcbiAgICAgICAgNzEsXG4gICAgICAgIDI0OSxcbiAgICAgICAgMTE3LFxuICAgICAgICAzLFxuICAgICAgICA5NSxcbiAgICAgICAgMTIwXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDEyOCxcbiAgICAgICAgMTE1LFxuICAgICAgICAzNCxcbiAgICAgICAgMTE1LFxuICAgICAgICAxOTUsXG4gICAgICAgIDUyLFxuICAgICAgICAxMjAsXG4gICAgICAgIDE4MCxcbiAgICAgICAgNDcsXG4gICAgICAgIDc1LFxuICAgICAgICAyNSxcbiAgICAgICAgMjMxLFxuICAgICAgICAxODYsXG4gICAgICAgIDI0LFxuICAgICAgICA4MCxcbiAgICAgICAgMjExLFxuICAgICAgICAxNjUsXG4gICAgICAgIDEyNixcbiAgICAgICAgMzAsXG4gICAgICAgIDEzNSxcbiAgICAgICAgMTU0LFxuICAgICAgICAxMzAsXG4gICAgICAgIDE0NSxcbiAgICAgICAgMjcsXG4gICAgICAgIDEyOSxcbiAgICAgICAgNzEsXG4gICAgICAgIDExNCxcbiAgICAgICAgMjEyLFxuICAgICAgICAyMjksXG4gICAgICAgIDIzMixcbiAgICAgICAgMTksXG4gICAgICAgIDk0XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyNDgsXG4gICAgICAgIDEyMyxcbiAgICAgICAgMTEyLFxuICAgICAgICAxODMsXG4gICAgICAgIDE0NCxcbiAgICAgICAgOTUsXG4gICAgICAgIDczLFxuICAgICAgICAxMjYsXG4gICAgICAgIDE2LFxuICAgICAgICA4NSxcbiAgICAgICAgMTM4LFxuICAgICAgICA1NCxcbiAgICAgICAgMjA3LFxuICAgICAgICAzNyxcbiAgICAgICAgMjYsXG4gICAgICAgIDE1NCxcbiAgICAgICAgMjI4LFxuICAgICAgICA4NixcbiAgICAgICAgMTk3LFxuICAgICAgICAxMTAsXG4gICAgICAgIDEzLFxuICAgICAgICAxMyxcbiAgICAgICAgMTY5LFxuICAgICAgICAyMTEsXG4gICAgICAgIDIwNCxcbiAgICAgICAgMTI5LFxuICAgICAgICAxMjEsXG4gICAgICAgIDIxMixcbiAgICAgICAgMTM3LFxuICAgICAgICAzOSxcbiAgICAgICAgMTUsXG4gICAgICAgIDEyNlxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA5OSxcbiAgICAgICAgNzEsXG4gICAgICAgIDExMixcbiAgICAgICAgMTE2LFxuICAgICAgICAxMzksXG4gICAgICAgIDE1OSxcbiAgICAgICAgMjQ4LFxuICAgICAgICAxNjYsXG4gICAgICAgIDk0LFxuICAgICAgICAxNyxcbiAgICAgICAgMTQ4LFxuICAgICAgICA5LFxuICAgICAgICAxOCxcbiAgICAgICAgMTQ1LFxuICAgICAgICAxNCxcbiAgICAgICAgMTI0LFxuICAgICAgICAxMDIsXG4gICAgICAgIDkzLFxuICAgICAgICAzNixcbiAgICAgICAgMTAsXG4gICAgICAgIDE2NCxcbiAgICAgICAgMjQzLFxuICAgICAgICAxNDksXG4gICAgICAgIDcxLFxuICAgICAgICAyMixcbiAgICAgICAgMTgzLFxuICAgICAgICA2NSxcbiAgICAgICAgMTE4LFxuICAgICAgICAyMTQsXG4gICAgICAgIDI5LFxuICAgICAgICA4MCxcbiAgICAgICAgODNcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE2OCxcbiAgICAgICAgMTk1LFxuICAgICAgICAxMzYsXG4gICAgICAgIDI0NCxcbiAgICAgICAgMTg3LFxuICAgICAgICAyNixcbiAgICAgICAgNSxcbiAgICAgICAgNTMsXG4gICAgICAgIDk0LFxuICAgICAgICAyMzYsXG4gICAgICAgIDEzNCxcbiAgICAgICAgMCxcbiAgICAgICAgMjU0LFxuICAgICAgICAyMjUsXG4gICAgICAgIDAsXG4gICAgICAgIDE3MSxcbiAgICAgICAgMTE4LFxuICAgICAgICAyMzAsXG4gICAgICAgIDExMSxcbiAgICAgICAgMjI3LFxuICAgICAgICAxNjYsXG4gICAgICAgIDIxLFxuICAgICAgICAyMDksXG4gICAgICAgIDcxLFxuICAgICAgICA0NSxcbiAgICAgICAgMjQxLFxuICAgICAgICA3MCxcbiAgICAgICAgNjIsXG4gICAgICAgIDU0LFxuICAgICAgICAxNDEsXG4gICAgICAgIDE5NSxcbiAgICAgICAgMTIzXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDExMSxcbiAgICAgICAgMTAzLFxuICAgICAgICAxMzIsXG4gICAgICAgIDIyNixcbiAgICAgICAgMjQzLFxuICAgICAgICAxMTcsXG4gICAgICAgIDczLFxuICAgICAgICAxMzYsXG4gICAgICAgIDI1MCxcbiAgICAgICAgMTU4LFxuICAgICAgICAxNTUsXG4gICAgICAgIDE4MSxcbiAgICAgICAgMTQ1LFxuICAgICAgICAzNixcbiAgICAgICAgMjE4LFxuICAgICAgICAxMCxcbiAgICAgICAgMTkzLFxuICAgICAgICAxOCxcbiAgICAgICAgMTc4LFxuICAgICAgICAxODcsXG4gICAgICAgIDUsXG4gICAgICAgIDE4NyxcbiAgICAgICAgMTI1LFxuICAgICAgICA5LFxuICAgICAgICAxNDYsXG4gICAgICAgIDI1NCxcbiAgICAgICAgMjEsXG4gICAgICAgIDE1NixcbiAgICAgICAgMixcbiAgICAgICAgMTgsXG4gICAgICAgIDk2LFxuICAgICAgICAzMFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAxMDQsXG4gICAgICAgICAgMjIwLFxuICAgICAgICAgIDEwNSxcbiAgICAgICAgICAxMDksXG4gICAgICAgICAgNDcsXG4gICAgICAgICAgNDEsXG4gICAgICAgICAgMjE0LFxuICAgICAgICAgIDE0NixcbiAgICAgICAgICA1NyxcbiAgICAgICAgICAyLFxuICAgICAgICAgIDE0LFxuICAgICAgICAgIDI0NyxcbiAgICAgICAgICAxNjAsXG4gICAgICAgICAgMTExLFxuICAgICAgICAgIDM2LFxuICAgICAgICAgIDE3MixcbiAgICAgICAgICA3OCxcbiAgICAgICAgICAxNCxcbiAgICAgICAgICA3MCxcbiAgICAgICAgICAyMDgsXG4gICAgICAgICAgODMsXG4gICAgICAgICAgMTYyLFxuICAgICAgICAgIDI0MCxcbiAgICAgICAgICAyMTIsXG4gICAgICAgICAgMjE2LFxuICAgICAgICAgIDE2OSxcbiAgICAgICAgICAxMixcbiAgICAgICAgICAxOCxcbiAgICAgICAgICAxMTcsXG4gICAgICAgICAgMTI5LFxuICAgICAgICAgIDEyMCxcbiAgICAgICAgICA3NVxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAyOSxcbiAgICAgICAgICAxMDcsXG4gICAgICAgICAgMjIxLFxuICAgICAgICAgIDE2NCxcbiAgICAgICAgICAxNjksXG4gICAgICAgICAgMjExLFxuICAgICAgICAgIDE2MixcbiAgICAgICAgICAxMjksXG4gICAgICAgICAgOSxcbiAgICAgICAgICAxNTksXG4gICAgICAgICAgMjgsXG4gICAgICAgICAgMTMwLFxuICAgICAgICAgIDQwLFxuICAgICAgICAgIDQwLFxuICAgICAgICAgIDI1MSxcbiAgICAgICAgICAxNzgsXG4gICAgICAgICAgMTM2LFxuICAgICAgICAgIDEyOCxcbiAgICAgICAgICA4NixcbiAgICAgICAgICAzNyxcbiAgICAgICAgICA4NixcbiAgICAgICAgICA4NyxcbiAgICAgICAgICA3MyxcbiAgICAgICAgICAxNDUsXG4gICAgICAgICAgMTE4LFxuICAgICAgICAgIDE5MixcbiAgICAgICAgICAxNTUsXG4gICAgICAgICAgMjM3LFxuICAgICAgICAgIDU1LFxuICAgICAgICAgIDE5MCxcbiAgICAgICAgICA3MyxcbiAgICAgICAgICAyNlxuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIwMyxcbiAgICAgICAgMjEzLFxuICAgICAgICAxNTksXG4gICAgICAgIDEwNCxcbiAgICAgICAgNTUsXG4gICAgICAgIDQ4LFxuICAgICAgICAyMTAsXG4gICAgICAgIDE5NSxcbiAgICAgICAgMTcyLFxuICAgICAgICAxNzMsXG4gICAgICAgIDYxLFxuICAgICAgICAyMDUsXG4gICAgICAgIDExMyxcbiAgICAgICAgMTc0LFxuICAgICAgICAxMDYsXG4gICAgICAgIDExMyxcbiAgICAgICAgMzAsXG4gICAgICAgIDYxLFxuICAgICAgICAyNDIsXG4gICAgICAgIDI0NyxcbiAgICAgICAgMTkwLFxuICAgICAgICAxNCxcbiAgICAgICAgOTAsXG4gICAgICAgIDYwLFxuICAgICAgICAyMjcsXG4gICAgICAgIDE4NyxcbiAgICAgICAgMjMxLFxuICAgICAgICAyOCxcbiAgICAgICAgMzgsXG4gICAgICAgIDIyLFxuICAgICAgICAxOTMsXG4gICAgICAgIDExNSxcbiAgICAgICAgNTQsXG4gICAgICAgIDIwNixcbiAgICAgICAgNTYsXG4gICAgICAgIDI0NSxcbiAgICAgICAgNixcbiAgICAgICAgMTg3LFxuICAgICAgICA0MCxcbiAgICAgICAgMTEwLFxuICAgICAgICAxMTAsXG4gICAgICAgIDI0NSxcbiAgICAgICAgMTk3LFxuICAgICAgICAxNjQsXG4gICAgICAgIDE5MixcbiAgICAgICAgMjEsXG4gICAgICAgIDEyLFxuICAgICAgICAxMzQsXG4gICAgICAgIDYsXG4gICAgICAgIDE3MSxcbiAgICAgICAgMjQ5LFxuICAgICAgICAxOTIsXG4gICAgICAgIDEwMSxcbiAgICAgICAgODYsXG4gICAgICAgIDk2LFxuICAgICAgICAxNzAsXG4gICAgICAgIDI0MyxcbiAgICAgICAgMjIsXG4gICAgICAgIDgwLFxuICAgICAgICA3MyxcbiAgICAgICAgMTQ1LFxuICAgICAgICAxNDMsXG4gICAgICAgIDkzLFxuICAgICAgICAxMVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogNDgsXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwiREdwUmo3bFF1WDZObTdsbS9mRE4xZ1A5dldpcWI2ZmN6TnhIRDJXOTJnYz1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW10sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAwLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwiUExvSmprQnJTVS1NeUlMcnVsdjh3Z1wiLFxuICBcInBob25lSWRcIjogXCI4YmNiYmRiMC00Y2ZlLTQ0MDgtYmY4OS03ZTVhZTJhNGFkNmRcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMTAzLFxuICAgICAgNDYsXG4gICAgICA2NSxcbiAgICAgIDI0MSxcbiAgICAgIDE4MixcbiAgICAgIDEyNyxcbiAgICAgIDE1NixcbiAgICAgIDQyLFxuICAgICAgODYsXG4gICAgICAxMTEsXG4gICAgICAxNTAsXG4gICAgICAyNTEsXG4gICAgICAxNzAsXG4gICAgICAxNzYsXG4gICAgICAxNjMsXG4gICAgICAyMDgsXG4gICAgICAyNDYsXG4gICAgICAxMTgsXG4gICAgICA4LFxuICAgICAgMTEzXG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogdHJ1ZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDI1NSxcbiAgICAgIDE0OCxcbiAgICAgIDc0LFxuICAgICAgNDMsXG4gICAgICA0LFxuICAgICAgODYsXG4gICAgICAyMDIsXG4gICAgICAxNjAsXG4gICAgICAxMDIsXG4gICAgICAxMzMsXG4gICAgICAxNjgsXG4gICAgICAxMTksXG4gICAgICAwLFxuICAgICAgODQsXG4gICAgICAxNTMsXG4gICAgICA2MSxcbiAgICAgIDI0NCxcbiAgICAgIDExMSxcbiAgICAgIDc0LFxuICAgICAgMTQ2XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIkZERlo2V0pCXCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCIyMzQ5MDI5MTQ1OTk3OjdAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcImxpZFwiOiBcIjEwNDg3NDY2MjQ5MDMyMTo3QGxpZFwiXG4gIH0sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ0xYN3E3Y0VFSmFEeUxVR0dBTWdBQ2dBXCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwiZFpHTkN4N1FKSFdTV25WU1Y2algvYzE0S2FxSEEvUUM3R3hkQjJpSGt4Yz1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCJpczdlY2llek5hKytjcE9QR2szRGE0SWZOV1FXSDhDZUwwY0lXWVIvM0pEVmpjaTRocTZMbFdJdlJWbFJtYmF3WEp3U01oSTdKZlI1N3duakhjbTFCdz09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCJkVlNjdEF5MG5GbTJ1eldEL3NLVHFyV2NMdGpZamd4OHUwNE1qWGdYRW9TWDBLRkw0TUJGTlFoenJCZmx1Mnl6TnFTRWF2QjA2eFQ0dnRGYjlQYzNCdz09XCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCIyMzQ5MDI5MTQ1OTk3OjdAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICAxMTcsXG4gICAgICAgICAgMTQ1LFxuICAgICAgICAgIDE0MSxcbiAgICAgICAgICAxMSxcbiAgICAgICAgICAzMCxcbiAgICAgICAgICAyMDgsXG4gICAgICAgICAgMzYsXG4gICAgICAgICAgMTE3LFxuICAgICAgICAgIDE0NixcbiAgICAgICAgICA5MCxcbiAgICAgICAgICAxMTcsXG4gICAgICAgICAgODIsXG4gICAgICAgICAgODcsXG4gICAgICAgICAgMTY4LFxuICAgICAgICAgIDIxNSxcbiAgICAgICAgICAyNTMsXG4gICAgICAgICAgMjA1LFxuICAgICAgICAgIDEyMCxcbiAgICAgICAgICA0MSxcbiAgICAgICAgICAxNzAsXG4gICAgICAgICAgMTM1LFxuICAgICAgICAgIDMsXG4gICAgICAgICAgMjQ0LFxuICAgICAgICAgIDIsXG4gICAgICAgICAgMjM2LFxuICAgICAgICAgIDEwOCxcbiAgICAgICAgICA5MyxcbiAgICAgICAgICA3LFxuICAgICAgICAgIDEwNCxcbiAgICAgICAgICAxMzUsXG4gICAgICAgICAgMTQ3LFxuICAgICAgICAgIDIzXG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJhbmRyb2lkXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3MjI5NDE4NDksXG4gIFwibXlBcHBTdGF0ZUtleUlkXCI6IFwiQUFBQUFPVVhcIlxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQU9VWC5qc29uIjogIntcImtleURhdGFcIjpcIkJCQjhwbTF2bHFxZHhPdzlVNjZ0WTBuSUcvL0VvcGQ4ekRWeW5LTUJvaE09XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6MTE4OTgwNTQ5MyxcImN1cnJlbnRJbmRleFwiOjEsXCJkZXZpY2VJbmRleGVzXCI6WzAsMV19LFwidGltZXN0YW1wXCI6XCIwXCJ9Igp9"  // PUT your SESSION_ID 


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
