const request = require('request')
const catName = process.argv[2]

 const domain = "https://api.thecatapi.com/v1/breeds/search?q=" + catName;
 request(domain, (error, response, body) => {
   const data = JSON.parse(body);
   console.log(data)
   if (error) {
     console.log('error:', error);
   } 
    if (data.length === 0) {
     console.log(`There is no ${catName} `);
   } else {
     console.log(data[0].description);
   }
 }); 