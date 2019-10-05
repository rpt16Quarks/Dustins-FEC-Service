import React from 'react';
import reactDOM from 'react-dom';
import axios from 'axios';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    axios.get('/product').then((response) => {
      console.log('response', response);
    }).catch( (error) => {
      console.log('error', error);
    }).finally( () => {
      console.log('We\'re done');
    });
  }

  render() {
    return (
      <h1>React is Working!</h1>
    );
  }
}

reactDOM.render(<App/>, document.getElementById('app'));