import React from 'react';
import {Link, withRouter} from 'react-router-dom';
import './List.css';

const list = (props) => {
    return (
        <Link to={"/lists/" + props.listId} className="Link">
            <div className = "List">
                <h5>{props.list.listName}</h5>
                <p>{props.list.inprogressTasks.length} tasks left to complete</p>
            </div>
        </Link>
    )
}

export default withRouter(list);