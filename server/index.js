const express = require ('express');
const app = express();
const port = 3092;
const bodyParser = require('body-parser');
const axios = require('axios');

app.use(bodyParser.json());
app.use(express.static('/Users/ashleyreischman/HackReactor/revengeMVP/client/dist'));
console.log(__dirname);

app.post('/mashMe', (req, res) => {
  console.log('received at /mashMe')
  // let cocktailRequest = axios.get('http://www.thecocktaildb.com/api/json/v1/1/random.php')
  // let cocktail = res.data.drinks[0].strDrink;
  // let universityRequest =   axios.get('http://universities.hipolabs.com/search', {param: { country: req.body.country}})
  // let university = res.data[req.body.luckyNum].name;
  // let breweryRequest =   axios.get('https://api.openbrewerydb.org/breweries', {param: { by_type: req.body.brewery}})
  //let brewery =     res.data[req.body.luckyNum].name
 //let jokeRequest =   axios.get('https://v2.jokeapi.dev/joke/Any', {params: { blacklistFlags: 'nsfw,racist,sexist,explicit,religious,political', type: 'single'}})
 //let joke = res.data.joke
  axios.get('https://v2.jokeapi.dev/joke/Any', {params: { blacklistFlags: 'nsfw,racist,sexist,explicit,religious,political', type: 'single'}})
  .then((res) => {
    console.log(res.data.joke);
  })
  .catch((err) => {
    console.log(err);
  })

})

app.listen(port, () => {
  console.log(`Server is up and listening on port: ${port}`)
})
//'nsfw','racist','sexist','explicit','religious','political'