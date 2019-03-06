import React from 'react';
import TodoList from './components/TodoComponents/TodoList';
import TodoForm from './components/TodoComponents/TodoForm';

// you will need a place to store your state in this component.
// design `App` to be the parent component of your application.
// this component is going to take care of state, and any change handlers you need to work with your state


const todoList = [
  {taskName: 'Learn setState()', id: Date.now(), complete: false},
]


class App extends React.Component {
  constructor (props){
    super(props);
    this.state = {
      todoList: todoList,
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
        { taskName: this.state.taskName, id: Date.now(), complete: false}
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
            complete: !task.complete
          }
        }
      })
    })
  };

  clear = event => {
    event.preventDefault();
    this.setState({
      todoList: this.state.todoList.filter(
        task => task.complete !== true
      )
    })
  }


  
  render() {
    
    return (
      <div className = 'App'>
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
