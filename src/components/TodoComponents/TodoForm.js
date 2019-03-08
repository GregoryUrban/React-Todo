import React from 'react';

const TodoForm = props => {
console.log('Forms!');
    return (
        <form onSubmit={props.addNew}>
            {}
            <input 
                value = {props.taskName}
                type = 'text'
                name = 'taskName'
                onChange = {props.handleChanges}
                placeholder = '...enter here'
            />
            <button type = 'submit'>Add Todo</button>
            <button onClick={props.clear}>Clear Completed</button>

        </form>
    )
}



export default TodoForm;