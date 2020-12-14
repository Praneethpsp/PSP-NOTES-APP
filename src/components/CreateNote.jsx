import React from 'react';

export default function CreateNote(props){

    const [note, setNote] = React.useState({
      title: "",
      content: "",
    });

    function handleChange(event){
        const inputName=event.target.name;
        const inputValue=event.target.value;

        setNote(prevValue=>{
            return{
            ...prevValue,
            [inputName]:inputValue
            }
        })
    }

    function updateChanges(event){
        props.onAdd(note);
    }

return (
  <div> 
  <p className="headerCopyright">
        Made with ❤ by{" "}
        <a
          href="https://praneethpsp.github.io/Praneeth-s-Portfolio/"
          target="_blank"
          rel="noreferrer"
        >
          Praneeth
        </a>
      </p>
    <form>
     
      <input
        onChange={handleChange}
        name="title"
        value={note.title}
        placeholder="Title of Note"
        autoComplete="off"
      />
      <textarea
        onChange={handleChange}
        name="content"
        value={note.content}
        placeholder="Make a note..."
        rows="3"
        spellCheck="false"
      />
      <button onClick={updateChanges}>+</button>
    </form>
  </div>
);
}

