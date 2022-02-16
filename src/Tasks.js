import React from 'react';
import Task from './Task';

export default function Tasks({tasks, onCheckHandler, deleteHandler}) {
  return (
    <div className="todo-list">
        {
            tasks.length > 0 ? tasks.map(item => {    //if anything entered adding the task to the liat of tasks and calling oncheckhandler and deletehandler
                return (
                  <Task
                    key={item.id}
                    name={item.name}
                    done={item.done}
                    onCheckHandler={onCheckHandler}
                    deleteHandler={deleteHandler}
                    id={item.id}
                  />
                );
            }): <div>No Tasks to display</div>  //if no tasks are there
        }
    </div>
  )
}