import React from 'react';

const APPLICATION_KEY = '64cf462d71cdd6fd69487f59533cb5bc';
const APPLICATION_ID = '14c0b7bd';

let AYLIENTextAPI = require('aylien_textapi');
let textapi = new AYLIENTextAPI({
  application_id: APPLICATION_ID,
  application_key: APPLICATION_KEY,
  mode: 'no-cors'
});

class Form extends React.Component {
  Fetchinfo(fetchUrl){
    textapi.summarize({
      url: fetchUrl,

    sentences_percentage: 10
    },
    function(error, response) {
      if (error === null) {
        response.sentences.forEach(function(s) {
          console.log(s);
        });
      }
    });
  }
handleSubmit = (e) => {
  if(e) e.preventDefault();
  const name = this.Fetchinfo(this.refs.url.value);
  name;
}

  render(){
    return (
      <div className="form">

        <form onSubmit= {this.Fetchinfo.bind(this)} >
          <input className="userinput" type="text" ref="url" placeholder="article url here" />
          <br />
            {this.Fetchinfo()}
          <input onClick={this.handleSubmit} type="Submit" />
        </form>

      </div>
    )
  }
}

export default Form;
