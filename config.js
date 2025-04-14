const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });
function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}

module.exports = {
    // Add Your Api Key ( Contact https://wa.me//+1(917)243-9704?text=Api_Key to buy api Key (Low Price...❤️) )
    API_KEY: 'happy-new-year',
    // Put your bot's owner number.
    OWNER: '94701619816',
    // Set Bot's thumbnail image.
    THUMBNAIL: 'https://i.ibb.co/XZFdhy0/IMG-20250102-WA0065.jpg', 
    // Set Bot's SinhalaSub image.
    SINHALA_SUB: 'https://i.ibb.co/JWXQsM7p/images.png',
    // Set Bot's Cinesubz image.
    CINESUBZ: 'https://i.ibb.co/vxcWWrCD/99a8f519d0b1975a.jpg',
    // Set Bot's Baiscope image.
    BAISCOPE: 'https://i.ibb.co/7xqmWfDd/1679311670111.jpg',
    // Set Bot's SexMv image.
    SX_MV: 'https://i.ibb.co/QjC19tbW/parental-advisory-explicit-content-18-years-grunge-round-red-warning-stamp-isolated-on-white-vector.jpg',
    // Add Your Movie Group Jid
    JID: '120363321130602652@g.us',
    // Set Bot's Name. ( CHUTY_GIRL MDv14❤️)
    BOT_NAME: '𝐌𝐨𝐯𝐢𝐞-𝐌𝐃',
    // Define the bot's footer or signature. ( chuty_girl ..❤️)
    FOOTER: '©𝐌𝐑 𝐌𝐀𝐍𝐔𝐋 𝐎𝐅𝐂 💚'
};
