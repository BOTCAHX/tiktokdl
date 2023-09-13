const axios = require('axios')

async function tiktokdl (url) {
  try {
  const response = await axios.request(`https://tools.revesery.com/tiktok/revesery.php?url=${url}`, {
    method: "POST",
    headers: {
      "content-type": "application/x-www-form-urlencoded; charset=UTF-8",
      "user-agent": "Mozilla/5.0 (Windows NT 6.3; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/100.0.4896.88 Safari/537.36",
    }
  });  
  const $ = cheerio.load(response.data);  
  const result = {
    status: true,
    title: $('p').text().replace("Here's the result:", ''),
    thumbnail: $('img').attr('src'),
    video: $('a.btn.btn-primary').attr('href')   
  }; 
  return result;
} catch (error) {
  return { status: false };
   }
}
module.exports.tiktokdl = tiktokdl
