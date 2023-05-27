import './App.css';
import StreamLink from './components/StreamLink.js'
import * as React from 'react';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
      
    };
  }
  render() {
    return (
      <div className="App">
        <StreamLink name='BUFFSTREAMS' link="https://streameast.top/match/f1/monaco-gp/203655"/>
        <StreamLink name='BEST SOLARIS' link="https://bestsolaris.com/solaris.php?postid=30876" iframe/>
  
      </div>
    );
  }

}

export default App;
