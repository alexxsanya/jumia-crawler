const express = require('express');
const $ = require('cheerio');

const { JUMIA_URL, PORT} = require('./config');
const { siteFetcher } = require('./tools');

const app = express();

app.get('/', (req, res) => {
    console.log(JUMIA_URL)
    res.send('Welcome to Make (<b>Educational</b>) Jumia Crawler APIs!')
});


app.get('/weekly-deal', async (req, res) => {
    const url = `${JUMIA_URL}deals-of-the-week/`;
    const WEEKLY_DEAL = [];
    let RESPONSE = {};
    let TOTAL_ITEMS = 0;

    console.log(`fetching data of weekly-deal -> ${url}`);

    const data = await siteFetcher(url);
    
    $("div.sku.-gallery", data).each((index, element) => {
        const img_url = $("img", element).prop('data-src');
        const item_name =  $("span.name", element).text();
        const item_price =  $("span.price-box.ri", element).text();
        const item_link = $("a.link", element).prop('href');
        if( item_name.length > 0 ){ // added this condition to elimate null values

            WEEKLY_DEAL.push({
                'name': item_name,
                'price': item_price,
                'image': img_url,
                'item_link': item_link,
            }) 

            TOTAL_ITEMS += 1;
        }
    });

    RESPONSE = {
        count: TOTAL_ITEMS,
        items: WEEKLY_DEAL,
    }
    res.send(RESPONSE);
});

app.listen(PORT)

exports = module.exports = app;