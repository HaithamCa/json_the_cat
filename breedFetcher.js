const request = require('request');

const fetchBreedDescription = function(breedName, callback) {
  const domain = "https://api.thecatapi.com/v1/breeds/search?q=" + breedName;
  //   console.log(domain)
  request(domain, (error, response, body) => {
      
    if (error) {
      return callback(error, null);
    }
    const data = JSON.parse(body);
    // console.log(data[0])
    if (data[0]) {
      //   console.log(data[0])
      // error = `There is no ${breedName}`;
    //    callback(null , "There is no breed exist");
    //   console.log(`There is no ${breedName}`);
      console.log(data[0].description);
      callback(null, data[0].description);
    } else  {
      callback('This breed is not found');
    }
  });
};

module.exports = { fetchBreedDescription };

 