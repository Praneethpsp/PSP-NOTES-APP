import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Note from './components/Note';
import CreateNote from './components/CreateNote';


function App() {
  const [notes, setNotes] = React.useState([]);

  function addNote(newNote) {
    setNotes(prevValue => {
      return [...prevValue, newNote];
    });
  }

  function deleteNote(id){
    setNotes(prevValue=>{
      return prevValue.filter((noteItem,index)=>{
        return index !== id;
      });
    });
  }
  

  return (
    <div>
      <Header />
      <CreateNote onAdd={addNote} />
      {notes.map((noteItem, index) => {
        return (
          <Note
            key={index}
            id={index}
            title={noteItem.title}
            content={noteItem.content}
            onDelete={deleteNote}
          />
        );
      })}
      <Footer />
    </div>
  );
}

export default App;
