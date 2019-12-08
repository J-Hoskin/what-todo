import React, {Component} from 'react';
import './Input.css';

class Input extends Component {
    handleKeyDown = (e) => {
        if (e.key === 'Enter') {
            this.props.addItem();
        }
    }

    render(){
        return (
            <div className = "Input">
                <input text="text" placeholder={this.props.placeHolderText} value={this.props.textInput} onChange={this.props.onChangeHandler} onKeyDown={this.handleKeyDown} ></input>
                <button type="button" onClick={this.props.addItem}>Add</button>
            </div>
        )
    }
}

export default Input;