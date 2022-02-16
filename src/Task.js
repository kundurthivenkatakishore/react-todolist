import React from "react";

export default function Task({name, done, id, onCheckHandler, deleteHandler}) {
  return (
    //to check the task is checked or not
    <div className={"todo-item " + (done ? 'complete' : '')}>
      <div className="checker">
        <span className=""> 
          <input type="checkbox" checked={done} onChange={e => onCheckHandler(id, e.target.checked)} />
        </span>
      </div>
      <span style={{marginLeft:'5px'}}>{name}</span>
      <button style={{float: 'right'}} onClick={()=> deleteHandler(id)} className="btn btn-danger">X</button>
    </div>
  );
}
