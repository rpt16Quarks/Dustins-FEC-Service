import React from 'react';
import reactDOM from 'react-dom';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <h1>React is Working!</h1>
    );
  }
}

reactDOM.render(<App/>, document.getElementById('app'));