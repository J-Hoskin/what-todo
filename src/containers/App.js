import React, {Component} from 'react';
import {Route, Switch, Redirect} from 'react-router-dom';
import './App.css';
import Footer from '../components/Footer/Footer';
import Header from '../components/Header/Header';
import Tasks from './Tasks/Tasks';
import Lists from './Lists/Lists';

class App extends Component {
  state = {
    lists: [
      {
        listName: "Dailys",
        inprogressTasks: [
          "Do Math questions",
          "Leet code problem"
        ],
        completedTasks: [
          "Add lists to React project"
        ]
      },
      {
        listName: "Fitness",
        inprogressTasks: [
          "Eat hype pre meal",
          "Go to Gym",
          "Destroy post workout meal",
          "Sleep 9 hours"
        ],
        completedTasks: [
          "Wake up"
        ]
      }
    ],
    taskInput: "",
    listInput: "",
    currentPageTitle: "Lists"
  }

  updatePageTitle = (title) => {
    this.setState({currentPageTitle: title});
  }

  onChangeTaskInputHandler = (event) => {
    const updatedTaskInput = event.target.value;
    this.setState({taskInput: updatedTaskInput})
  }

  onChangeListInputHandler = (event) => {
    const updatedListInput = event.target.value;
    this.setState({listInput: updatedListInput})
  }

  completeTask = (taskIndex, listIndex) => {
    const updatedLists = this.state.lists;
    updatedLists[listIndex].completedTasks.push(updatedLists[listIndex].inprogressTasks[taskIndex])
    updatedLists[listIndex].inprogressTasks.splice(taskIndex, 1);
    this.setState({lists: updatedLists})
  }

  addTask = (listIndex) => {
    if(/\S/.test(this.state.taskInput)){
      const updatedLists = this.state.lists;
      updatedLists[listIndex].inprogressTasks.push(this.state.taskInput);
      this.setState({lists: updatedLists});
      this.setState({taskInput: ""});
    }
  }

  incompleteTask = (taskIndex, listIndex) => {
    const updatedLists = this.state.lists;
    updatedLists[listIndex].inprogressTasks.push(updatedLists[listIndex].completedTasks[taskIndex])
    updatedLists[listIndex].completedTasks.splice(taskIndex, 1);
    this.setState({lists: updatedLists})
  }

  deleteTask = (taskIndex, inprogress, listIndex) => {
    const updatedLists = this.state.lists;
    if(inprogress){
      updatedLists[listIndex].inprogressTasks.splice(taskIndex, 1);
    }
    else {
      updatedLists[listIndex].completedTasks.splice(taskIndex, 1);
    }
    
    this.setState({lists: updatedLists})
  }


  addList = () => {
    if(/\S/.test(this.state.listInput)){
      const updatedLists = this.state.lists;
      const newList = {
        listName: this.state.listInput,
        inprogressTasks: [],
        completedTasks: []
      }
      updatedLists.push(newList)

      this.setState({lists: updatedLists});
      this.setState({listInput: ""});
    }
  }

  deleteList = (listIndex) => {
    const updatedLists = this.state.lists;
    updatedLists.splice(listIndex, 1);
    
    this.setState({lists: updatedLists})
  }

  render(){
    return (
        <div className="App">
            <Header clicked={this.updatePageTitle} pageTitle={this.state.currentPageTitle}/>
            <div className="PageContent">
              <Switch>

              <Route path="/lists/:listName" render={(props) => 
                <Tasks
                  {...props}
                  list={this.state.lists[props.match.params.listName]}
                  addTask={this.addTask}
                  completeTask={this.completeTask}
                  incompleteTask={this.incompleteTask}
                  deleteTask={this.deleteTask}
                  onChangeHandler={this.onChangeTaskInputHandler}
                  textInput={this.state.taskInput}
                  inputPlaceHolderText="Add a new task..."
                  updatePageTitle={this.updatePageTitle}
                />}
              />

              <Route path="/lists" exact render={(props) =>
                <Lists
                  {...props}
                  lists={this.state.lists}
                  addList={this.addList}
                  deleteList={this.deleteList}
                  onChangeHandler={this.onChangeListInputHandler}
                  textInput={this.state.listInput}
                  inputPlaceHolderText="Add a new list..."
                  updatePageTitle={this.updatePageTitle}
                />}
              />

              <Redirect from="/" to="/lists" />
              <Route render={()=> <p>404 Not Found :(</p>} />

              </Switch>
            </div>
            
            <Footer />
        </div>
    );
  }
}

export default App;
