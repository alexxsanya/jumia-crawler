# jumia_crawler
This is an educational nodejs app which crawlers jumia.ug and then creates endpoints for various data on it.

## Endpoints Implemented
- /weekly-deals : returns weekly deals on jumia.ug website

## usage
- git clone this project.
- create a .env file in the project folder and set it with

```
JUMIA_URL=https://www.jumia.ug/
PORT=ANY_PORT_NUMBER
NODE_ENV=development
```

- run `$ npm install` to install project dependencies
- run `$ npm run start_local` to run the server

## Sample Response Data

### /weekly-deal
```JSON
{
    "count": 40,
    "items": [
        {
            "name": "item title",
            "price": "item price",
            "image": "http://img.url",
            "item_link":"http link to the product"
        },
    ]
}

```