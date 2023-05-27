import * as React from 'react';


function StreamLink(props) {
    const [open, setOpen] = React.useState(false);
    const [iframe, setIframe] = React.useState(false);


    const handleOpen = () => {
        setOpen(!open);
    }

    return (
        <div>
            <div class="dropdown-container">
                <button onClick={handleOpen} class="dropdown-trigger">{props.name}</button>
                    { open ?
                        <div class="dropdown-content" id="dropdown-content">
                            { iframe?
                            <iframe frameborder='0' height='100%' width='100%' src="https://bestsolaris.com/solaris.php?postid=30876" allowfullscreen allowtransparency>
                            </iframe>
                            : 
                            <div class="watch-here">
                                <a href={props.link} target="blank">watch here</a>    
                            </div>
                            }
                        </div>
                    : <span/> }
            </div >
        </div>
        
    )
}

export default StreamLink;
