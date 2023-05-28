import StreamLink from './StreamLink.js'
import * as React from 'react';

class F1 extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
      action: ""
    };
  }
  render() {
    return (
      <div className="F1">
        
        <StreamLink name='BUFFSTREAMS' link="https://streameast.top/match/f1/monaco-gp/203655"/>
        <StreamLink name='BEST SOLARIS' link="https://bestsolaris.com/solaris.php?postid=30876" iframe/>
  
      </div>
    );
  }

}

export default F1;
