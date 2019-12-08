import React from 'react';
import './Task.css';
import deleteIcon from '../../images/icons8-trash.svg';

const task = (props) => {
    return (
        <div className = "Task"  style={props.style}>
            <div className = "TaskName" onClick={props.clicked} >
                {props.name}
            </div>
            <img width="20px" src={deleteIcon} alt="Logo" onClick={props.deleteTask}/>
        </div>
    )
}

export default task;