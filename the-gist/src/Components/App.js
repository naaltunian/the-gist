import React from 'react';
import Form from './Form.js';
import Summary from './Summary.js';
import Footer from './Footer.js';
import Header from './Header.js';
// import 'bootstrap/dist/css/bootstrap.css';

class App extends React.Component {

  state = {
    summaryBox: ""
  }

  render(){
    return (
      <div>
        <Header />
        <Form />
        <Summary />
      </div>
    )
  }
}

export default App;
