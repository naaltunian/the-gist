import React from 'react';
import axios from 'axios';

class Form extends React.Component {

  async Fetchinfo(fetchUrl){
    let {data} = await axios.get('/summarize?url='+fetchUrl).catch(e => console.log(e));
    let instructions = document.getElementById('instructions');
    instructions.classList.add('display');
    let display = document.getElementById('display');
    display.classList.remove('display');
    this.props.updateSentences(data);
  }

  handleSubmit = (e) => {
    if(e) e.preventDefault();
    this.Fetchinfo(this.refs.url.value);
  }

  render(){
    return (
      <div className="form">
        <form onSubmit= {this.handleSubmit} >
          <input className="userinput" type="text" ref="url" placeholder="article url here" />
          <br />
            
          <input className="btn btn-md btn-primary m-2" type="Submit" />
        </form>
      </div>
    )
  }
}

export default Form;
