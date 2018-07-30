const express = require('express');
const axios = require('axios');

const app = express();

// slide 20 from the first lecture
app.use(express.static(__dirname + '/the-gist/build'));

app.get('/character/:characterId', async (req, res) => {
 let {data} = await axios.get('http://swapi.co/api/people/'+req.params.characterId).catch((err) => console.log(err));
 res.json(data);
})
let PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log("Listening on port " + PORT));
