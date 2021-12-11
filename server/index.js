const express = require ('express');
const app = express();
const port = 3092;
const cors = require('cors')
const axios = require('axios');

app.use(cors());
app.use('/', express.static('/Users/ashleyreischman/HackReactor/revengeMVP/client/dist'));




app.get('/mashMe', (req, res) => {
  console.log('received at /mashMe')
  let cocktailRequest = axios.get('http://www.thecocktaildb.com/api/json/v1/1/random.php');
  let universityRequest = axios.get('http://universities.hipolabs.com/search', {params: { country: req.query.country}});
  let breweryRequest = axios.get('https://api.openbrewerydb.org/breweries', {params: { by_type: req.query.brewery}});
  let jokeRequest = axios.get('https://v2.jokeapi.dev/joke/Any', {params: { blacklistFlags: 'nsfw,racist,sexist,explicit,religious,political', type: 'single'}});

  Promise.all([cocktailRequest, universityRequest, breweryRequest, jokeRequest])
  .then((results) => {
    let cocktail = results[0].data.drinks[0].strDrink;
    let university = results[1].data[Math.floor((Math.random() * results[1].data.length/parseInt(req.query.luckyNum)))].name;
    let brewery = results[2].data[Math.floor((Math.random() * results[2].data.length/parseInt(req.query.luckyNum)))].name;
    let joke = results[3].data.joke;
    let houseOptions = ['house','shack','townhouse', 'condo', 'mansion', 'farm/ranch', 'island']
    let houseRes = houseOptions[Math.floor(Math.random() * houseOptions.length)]
    console.log('houseRes = ' + houseRes)
    let allData = {
      cocktail: cocktail,
      university: university,
      brewery: brewery,
      joke: joke,
      houseRes: houseRes
    }
    res.status(200).send(allData);
  })
  .catch((err) => {
    console.log(err);
    res.status(500).send(err);
  })

})

app.listen(port, () => {
  console.log(`Server is up and listening on port: ${port}`)
})
