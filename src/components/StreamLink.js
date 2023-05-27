import * as React from 'react';


function StreamLink(props) {
    const [open, setOpen] = React.useState(false);

    const handleOpen = () => {
        setOpen(!open);
    }

    return (
        <div>
            <div class="dropdown-container">
                <button onClick={handleOpen} class="dropdown-trigger">{props.name}</button>
                { open ?
                <div class="dropdown-content" id="dropdown-content" onclick="openDropdown()">
                    <div class="watch-here">
                        <a href="https://streameast.top/match/f1/monaco-gp/203655" target="blank">watch here</a> 
                       
                    </div>
                </div>
                 : <span/> }
            </div>
            <script>



    </script>
        </div >
        
    )
}

export default StreamLink;
