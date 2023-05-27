import * as React from 'react';

class StreamLink extends React.Component {

    constructor(props) {
        super(props);
        this.state = { 
            open: false,
        };

        this.handleOpen = this.handleOpen.bind(this);

      }
      
    handleOpen = () => {
        this.setState({open: !this.state.open})
    }

    render() {
        return (
            <div>
                <div class="dropdown-container">
                    <button onClick={this.handleOpen} class="dropdown-trigger">{this.props.name}</button>
                        {this.state.open ?
                            <div class="dropdown-content" id="dropdown-content">
                                { this.props.iframe ?
                                <iframe title='stream' frameborder='0' height='100%' width='100%' src="https://bestsolaris.com/solaris.php?postid=30876" allowfullscreen allowtransparency>
                                </iframe>
                                : 
    
                                <div class="watch-here">
                                    <a href={this.props.link} target="blank">watch here</a>    
                                </div>
                                }
                            </div>
                        : <span/> }
                </div >
            </div>
        )
      }
    
        
}

export default StreamLink;
