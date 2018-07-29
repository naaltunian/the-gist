import React from 'react';

class Form extends React.Component {
  render(){
    return (
      <div class="form">

        <form>
          <input className="userinput" type="text" placeholder="article url here" />
          <br />

          <input type="submit" value="Submit" />
        </form>

      </div>
    )
  }
}

export default Form;
