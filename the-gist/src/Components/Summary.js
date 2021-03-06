import React from 'react';


class Summary extends React.Component {
  render() {
    return (
      <div>
        <div id="instructions">
          <h4>Hi, I am Gist, an easy way to summarize a news article or blog post into a few key sentences. Let me get <em>The Gist</em> for you!</h4>
        </div>
        <div id="display" className="display form-group">
          <label htmlFor="exampleFormControlTextarea1">Here's the Gist</label>
          <section
            className="form-control"
            id="instructions"
            rows="3"
          >
            {this.props.summary}
          </section>
        </div>
        <div className="summary" />
      </div>
    );
  }
}

export default Summary;
