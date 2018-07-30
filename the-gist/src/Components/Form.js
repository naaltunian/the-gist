import React from 'react';
import axios from 'axios';
// import axios from 'axios';

// const APPLICATION_KEY = '64cf462d71cdd6fd69487f59533cb5bc';
// const APPLICATION_ID = '14c0b7bd';
//
// let AYLIENTextAPI = require('aylien_textapi');
// let textapi = new AYLIENTextAPI({
//   application_id: APPLICATION_ID,
//   application_key: APPLICATION_KEY,
//   mode: 'no-cors'
// });

class Form extends React.Component {

  constructor(){
    super();
    this.state = {
      sentences: []
    }
  }


  async fetchInfo(){
    let fetchUrl = this.refs.url.value;
    let {data} = await axios.get(`/summarize?url=${fetchUrl}`)
    this.setState({sentences: data})
  }


  testAPI(){

  }

// handleSubmit = (e) => {
//   if(e) e.preventDefault();
//   const name = this.fetchInfo(this.refs.url.value);
//   name;
// }

  render(){
    return (
      <div className="form">
        <form onSubmit={(ev) => {
            ev.preventDefault();
            this.fetchInfo();
          }
        }>
          <input className="userinput" type="text" ref="url" placeholder="article url here" />
          <br />
            {this.state.sentences}
          <input type="Submit" />
        </form>

      </div>
    )
  }
}

export default Form;
