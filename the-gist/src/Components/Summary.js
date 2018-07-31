import React from 'react';
import Form from './Form';

class Summary extends React.Component {
  render() {
    return (
      <div>
        <div className="form-group">
          <label htmlFor="exampleFormControlTextarea1">Here's the Gist</label>

          <section
            className="form-control"
            id="exampleFormControlTextarea1"
            rows="3"
          >
            {this.props.sentences}
          </section>
        </div>

        <div className="summary" />
      </div>
    );
  }
}

export default Summary;
