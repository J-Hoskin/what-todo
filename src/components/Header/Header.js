import React from 'react';
import {Link} from 'react-router-dom';
import './Header.css';

const header = (props) => {
    return (
        <div className = "Header">
            {props.pageTitle !== "Lists" ? 
                <Link className="ReturnLink" to="/lists" onClick={() => props.clicked("Lists")}>{"< Lists"}</Link> 
                : null}
                
            <h3>{props.pageTitle}</h3>
        </div>
    )
}

export default header;