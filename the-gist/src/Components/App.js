import React from 'react';
import Form from './Form.js';
import Summary from './Summary.js';
import Footer from './Footer.js';
import Header from './Header.js';
// import 'bootstrap/dist/css/bootstrap.css';

class App extends React.Component {

  constructor() {
    super();
    this.state = {
      sentences: []
    }
    this.updateSentences = this.updateSentences.bind(this);
  }

  updateSentences(sentences) {
    this.setState({sentences: sentences});
  }

  render(){
    return (
      <div>
        <Header />
        <Form updateSentences={this.updateSentences}/>
        <Summary sentences={this.state.sentences}/>
      </div>
    )
  }
}

export default App;
