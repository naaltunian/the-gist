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
    sentences_number: 8
    },
    (error, response) => {
      if (error === null) {
        let display = document.getElementById('display');
        display.classList.remove('display');
        this.props.updateSentences(response.sentences);
      }
    });
  }

  handleSubmit = (e) => {
    if(e) e.preventDefault();
    this.Fetchinfo(this.refs.url.value);
    // const name = this.Fetchinfo(this.refs.url.value);
    // return this.Fetchinfo();
  }

  render(){
    return (
      <div className="form">
        <form onSubmit= {this.handleSubmit} >
          <input className="userinput" type="text" ref="url" placeholder="article url here" />
          <br />
            {/* {this.Fetchinfo()} */}
          <input className="btn btn-md btn-primary m-2" type="Submit" />
        </form>
      </div>
    )
  }
}

export default Form;
