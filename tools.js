const axios = require('axios');
const cheerio = require('cheerio');

const siteFetcher = async (site_url) => {
    const result = await axios.get(site_url);
    console.log(`Results => ${result.data}`);
    return cheerio.load(result.data);
}

module.exports = {
    siteFetcher: siteFetcher,
};
