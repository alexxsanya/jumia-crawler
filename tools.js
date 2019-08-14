const axios = require('axios');

const siteFetcher = async (site_url) => {
    const result = await axios.get(site_url)
    .then(res => {
        return res.data;
    })
    .catch(error => {
        console.log('error occured ', error)
        return 'error occured';
    })
    
    return result;
}

module.exports = {
    siteFetcher: siteFetcher,
};
