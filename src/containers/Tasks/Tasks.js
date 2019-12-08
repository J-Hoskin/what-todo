import React, {Component} from 'react';
import Task from '../../components/Task/Task';
import './Tasks.css';
import Input from '../Input/Input';

class Tasks extends Component {
    componentDidMount () {
        this.props.updatePageTitle(this.props.list.listName);
    }

    render(){
        const completedTask = {
            opacity: '0.5'
        }
        const listIndex = this.props.match.params.listName;
        
        return(
            <>
                <div className="TasksContent">
                    <h4>Todo ({this.props.list.inprogressTasks.length})</h4>
                    {this.props.list.inprogressTasks.map((item, key) => {
                        return(<Task
                            style={{opacity: '1'}}
                            key={key}
                            name={item}
                            clicked={() => this.props.completeTask(key, listIndex)}
                            deleteTask={() => this.props.deleteTask(key, true, listIndex)}
                        />);
                    })}
                    <Input addItem={()=>this.props.addTask(listIndex)} onChangeHandler={this.props.onChangeHandler} textInput={this.props.textInput} placeHolderText={this.props.inputPlaceHolderText}/>

                    <br />
                    <br />

                    <h4>Completed ({this.props.list.completedTasks.length})</h4>
                    {this.props.list.completedTasks.map((item, key) => {
                        return(<Task
                            style={completedTask}
                            key={key} 
                            name={item} 
                            clicked={() => this.props.incompleteTask(key, listIndex)}
                            deleteTask={() => this.props.deleteTask(key, false, listIndex)}
                        />);
                    })}
                </div>
            </>
        )
    }
}

export default Tasks;