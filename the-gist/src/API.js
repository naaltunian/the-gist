//API Key and ID required
const APPLICATION_KEY = '64cf462d71cdd6fd69487f59533cb5bc';
const APPLICATION_ID = '14c0b7bd';
//Allows use of aylien library using [ textapi ] to access its parameters
let AYLIENTextAPI = require('aylien_textapi');
let textapi = new AYLIENTextAPI({
  application_id: APPLICATION_ID,
  application_key: APPLICATION_KEY
});

// Summarize aritcle
textapi.summarize({
    url: 'https://www.theverge.com/2018/7/28/17622770/spacex-hyperloop-pod-race-2018-elon-musk',
    //summarize based off sentence lines
    sentences_number: 8,
    //summarize based off percentage of article
    sentences_percentage: 10
  },
    //check for errors
  function(error, response) {
    if (error === null) {
      response.sentences.forEach(function(s) {
        console.log(s);
      });
    }
  });

//   textapi.sentiment({
//     url: 'https://www.theverge.com/2018/7/28/17622770/spacex-hyperloop-pod-race-2018-elon-musk'
//   }, function(error, response) {
//     if (error === null) {
//       console.log(response);
//     }
//   });

// textapi.extract({
//     url: 'https://www.theverge.com/2018/7/28/17622770/spacex-hyperloop-pod-race-2018-elon-musk',
//     best_image: true
//   }, function(error, response) {
//     if (error === null) {
//       console.log(response);
//     }
//   });
