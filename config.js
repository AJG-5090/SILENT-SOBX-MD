const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}

module.exports = {
    SESSION_ID: process.env.SESSION_ID || "3QBUCTYL#e06Qx-iFXCsmLAml906qsofbOxSRKonJ7vwyxIwsMw4",
    CAPTION: process.env.CAPTION || "POWERED BY SILENTLOVER432",
    AUTO_READ_STATUS: process.env.AUTO_READ_STATUS || "false",
    READ_MESSAGE: process.env.READ_MESSAGE || "false", // Added auto-read configuration
    MODE: process.env.MODE || "private",
    AUTO_VOICE: process.env.AUTO_VOICE || "true",
    AUTO_STICKER: process.env.AUTO_STICKER || "true",
    AUTO_REPLY: process.env.AUTO_REPLY || "false",
    ALIVE_IMG: process.env.ALIVE_IMG || "https://i.pinimg.com/736x/ab/3c/8f/ab3c8f0939dd3b0df456d1959ce4994f.jpg",
    ALIVE_MSG: process.env.ALIVE_MSG || "Hii mother fucker senku i'm Alive my king 😊♻️",
    ANTI_LINK: process.env.ANTI_LINK || "true",
    ANTI_BAD: process.env.ANTI_BAD || "true",
    PREFIX: process.env.PREFIX || ".",
    FAKE_RECORDING: process.env.FAKE_RECORDING || "false",
    AUTO_REACT: process.env.AUTO_REACT || "fasle",
    HEART_REACT: process.env.HEART_REACT || "fasle",
    OWNER_REACT: process.env.OWNER_REACT || "fasle",
    BOT_NAME: process.env.BOT_NAME || "Senku ishigami࿐",
    OMDB_API_KEY: process.env.OMDB_API_KEY || "76cb7f39", // omdbapi.com
};
