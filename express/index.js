const express = require('express');
const axios = require('axios');
const textapi = require('./config');

const app = express();


// slide 20 from the first lecture
app.use(express.static(__dirname + '/the-gist/build'));

// partially done
app.get('/summarize', async (req, res) => {
  textapi.summarize({
    url: req.query.url,
    sentences_percentage: 40
  },
  function(error, response) {
    if(error === null) {
      res.json(response.sentences);
    }
  })
  res.send("error");
})

let PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log("Listening on port " + PORT));
