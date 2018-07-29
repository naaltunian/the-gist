import React from 'react';

const APPLICATION_KEY = '64cf462d71cdd6fd69487f59533cb5bc';
const APPLICATION_ID = '14c0b7bd';
//Allows use of aylien library using [ textapi ] to access its parameters
let AYLIENTextAPI = require('aylien_textapi');
let textapi = new AYLIENTextAPI({
  application_id: APPLICATION_ID,
  application_key: APPLICATION_KEY,
  mode: 'no-cors'
});

class Form extends React.Component {
  Fetchinfo(){
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
  
  }
  
  render(){
    return (
      <div className="form">

        <form>
          <input className="userinput" type="text" placeholder="article url here" />
          <br />
            {this.Fetchinfo()}
          <input type="submit" value="Submit" />
        </form>

      </div>
    )
  }
}

export default Form;
