import React, { useState } from 'react';
import AddIcon from '@material-ui/icons/Add';
import Fab from '@material-ui/core/Fab';
import Zoom from '@material-ui/core/Zoom';

function CreateNote(props) {
  const [isExpanded , setExpanded] = useState(false)
  const [note, setNote] = useState({
    title: '',
    content: ''
  });

  function handleChange(event) {
    const { name, value } = event.target;

    setNote(prevNote => {
      return {
        ...prevNote,
        [name]: value
      }
    });
  }

  function submit(event) {
    props.onAdd(note);
    setNote({
      title: '',
      content: ''
    });
    event.preventDefault();
  }

  function expand(){
    setExpanded(true);
  }

  return (
    <div>
      <form className='create-note'>
       {isExpanded ? <input name='title' onChange={handleChange} value={note.title} placeholder='Enter a title' /> : null }
        <textarea name='content' onClick={expand} onChange={handleChange} value={note.content} placeholder='Write a note here' rows={isExpanded ? 3 : 1} />
        <Zoom in={isExpanded}>
          <Fab>
            <button onClick={submit}>
              <AddIcon />
            </button>
          </Fab>
        </Zoom>
      </form>
    </div>
  )
}

export default CreateNote;