const axios = require('axios');
const cheerio = require('cheerio');

const siteFetcher = async (site_url) => {
    await axios.get(site_url)
    .then(res => {
        return cheerio.load(res.data);
    })
    .catch(error => {
        console.log('error occured ', error)
        return 'error occured';
    })
    
}

module.exports = {
    siteFetcher: siteFetcher,
};
