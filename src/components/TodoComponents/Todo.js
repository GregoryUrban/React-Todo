import React from 'react';
import './Todo.css';

const Todo = props =>{
    return <div
            className={props.task.completer ? 'completer' : null}
            onClick={() => props.setComplete(props.index)}>
                {props.task.taskName}
    </div>
}



export default Todo;