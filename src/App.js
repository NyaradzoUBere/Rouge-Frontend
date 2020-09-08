import React from 'react';
import Card from './components/Card'

import './App.css';

class App extends React.Component {
  state = {
    products: []
  }

  render() {
    return (
      <div className="App">
        <Card />
      </div>
    );
  }
}

export default App;
