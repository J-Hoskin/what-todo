import React, {Component} from 'react';
import './Lists.css';
import List from '../../components/List/List';
import Input from '../Input/Input';

class Lists extends Component {
    render(){
        return (
            <div className = "Lists">
                <h4>Get to work!</h4>
                {this.props.lists.map((list, key) => {
                    return (<List list={list} listId={key} />)
                })}
                
                <Input type="list" addItem={this.props.addList} onChangeHandler={this.props.onChangeHandler} textInput={this.props.textInput} placeHolderText={this.props.inputPlaceHolderText}/>
            </div>
        )
    }
}

export default Lists;