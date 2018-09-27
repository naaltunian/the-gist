const axios = require('axios');
const APPLICATION_KEY = '64cf462d71cdd6fd69487f59533cb5bc';
const APPLICATION_ID = '14c0b7bd';

let AYLIENTextAPI = require('aylien_textapi');
let textapi = new AYLIENTextAPI({
  application_id: APPLICATION_ID,
  application_key: APPLICATION_KEY,
  mode: 'no-cors'
});

// Require express and create an instance of it
let express = require('express');
let app = express();


app.use((req, res, next) => {
  console.log("Received a request");
  next();
})

// on the request to root (localhost:3000/)
app.get('/', function (req, res) {
    res.send('<b>My</b> first express http server');
});

app.get('/summarize', (req, res) => {
  textapi.summarize({
    url: req.query.url,
    sentences_number: 3
  }, function(error, response) {
    if (error === null) {
      res.json(response.sentences);
    } else {
      res.send("There was an error");
    }
  });

})

// Change the 404 message modifing the middleware
app.use(function(req, res, next) {
    res.status(404).send("Sorry, that route doesn't exist. Have a nice day :)");
});

let PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log("Listening on port " + PORT));
