import React from "react";

function Note(props) {

  function handleDelete(){
    props.onDelete(props.id);
  }

  return (
    <div className="noteDiv">
      <div className="note">
        <h1>{props.title}</h1>
        <p>{props.content}</p>
        <button onClick={handleDelete}>-</button>
      </div>
    </div>
  );
}

export default Note;


