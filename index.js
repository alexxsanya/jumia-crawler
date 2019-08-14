const express = require('express');

const { JUMIA_URL, PORT} = require('./config');
const { siteFetcher } = require('./tools');

const app = express();

app.get('/', (req, res) => {
    console.log(JUMIA_URL)
    res.send('Welcome to Make (<b>Educational</b>) Jumia Crawler APIs!')
});


app.get('/weekly-deal', (req, res) => {
    const url = `${JUMIA_URL}deals-of-the-week/`;
    res.send(`weekly-deal url -> ${url}`);
    
    const data = siteFetcher(url)
    console.log('Fetching the Data');
});

app.listen(PORT)

exports = module.exports = app;