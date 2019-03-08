import React from 'react';
import TodoList from './components/TodoComponents/TodoList';
import TodoForm from './components/TodoComponents/TodoForm';
import '././App.css';


// you will need a place to store your state in this component.
// design `App` to be the parent component of your application.
// this component is going to take care of state, and any change handlers you need to work with your state


const todoList = [
  {taskName: 'Learn setState()', id: Date.now(), completer: false},
]


class App extends React.Component {
  constructor (props){
    super(props);
    this.state = {
      todoList,
      taskName: '',
    }
  }


  handleChanges = event => {
    this.setState({ [event.target.name]: event.target.value});
  };

  addNew = event => {
    event.preventDefault();
    this.setState({
      todoList: [
        ...this.state.todoList,
        { taskName: this.state.taskName, id: Date.now(), completer: false}
      ],
      taskName:''
    });
  };

  setComplete = index => {
    
    this.setState({
      todoList: this.state.todoList.map((task,id) => {
        if (index !== id) {
          return task;
        }
        else {
          return {
            ...task,
            completer: !task.completer
          }
        }
      })
    })
  };

  clear = event => {
    event.preventDefault();
    this.setState({
      todoList: this.state.todoList.filter(
        task => task.completer !== true
      )
    })
  }


  
  render() {
    
    return (
      <div className = 'App'>
      <img src="design\things-to-do-220.jpg" alt="" />
        <h1>Todo List</h1>
        <TodoList setComplete = {this.setComplete}
          todoList={this.state.todoList} />
        <TodoForm 
        addNew = {this.addNew}
        clear = {this.clear}
        handleChanges = {this.handleChanges}
        taskName = {this.state.taskName}
        id = {Date.now()}
        />  
      </div>
    );
  }
}

export default App;
