import Header from './components/Header.jsx';
import Footer from './components/Footer.jsx';
import Notes from './components/Notes.jsx';
import CreateNote from './components/CreateNote.jsx';
import { useState } from 'react';

function App() {
  const [notes, setNotes] = useState([]);

  function addNote(newNote){
    setNotes(prevNotes => {
      return [...prevNotes, newNote]
    });
  }

  function deleteNote(id) {
    setNotes( prevNotes => {
      return prevNotes.filter( (noteItem, index) => {
        return index !== id;
      });
    });
  }

  return (
    <div>
      <Header/>
      <CreateNote
        onAdd={addNote}
      />

      { notes.map( (noteItems, index) => {
        return <Notes
          key={index}
          id={index}
          title={noteItems.title}
          content={noteItems.content}
          onDelete={deleteNote}
        />
      }) }

      <Footer/>
    </div>
  );
}

export default App;
