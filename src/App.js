import './App.css';
import F1 from './components/F1.js'
import * as React from 'react';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
      action: ""
    };
  }
  render() {
    return (
      <div className="App">
        <F1 />
      </div>
    );
  }

}

export default App;
