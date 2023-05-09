import { useState, useEffect } from "react";
import shortid from "shortid";
import OptionBox from "./components/OptionBox/OptionBox";
import Sidebar from "./components/Sidebar/Sidebar";
import Workspace from "./components/Workspace/Workspace";

function App() {
  const [notes, setNotes] = useState([]);

  const [filter, setFilter] = useState("");
  const [disabled, setDisabled] = useState(true);

  const savedNotes = localStorage.getItem("notes");
  const parsedNotes = JSON.parse(savedNotes);

  useEffect(() => {
    console.log("use effect 1");
    if (parsedNotes !== null) {
      const disActive = parsedNotes.map((note) => {
        return { ...note, isActive: false, isNew: false };
      });
      setNotes([...disActive]);
    }

    // eslint-disable-next-line
  }, []);

  useEffect(() => {
    console.log("use effect 2");
    localStorage.setItem("notes", JSON.stringify(notes));
  }, [notes]);

  const addNote = () => {
    const newNote = {
      id: shortid.generate(),
      content: "",
      created: Date.now(),
      isActive: true,
      isNew: true,
    };

    if (notes.length > 0) {
      const disActive = notes.map((note) => {
        return { ...note, isActive: false, isNew: false };
      });
      console.log(disActive);
      setNotes([...disActive, newNote]);
    } else {
      setNotes([newNote]);
    }
  };

  const handleInputChange = (e) => {
    const noteId = e.target.form.id;
    const { value } = e.target;
    const editedNotes = notes.map((note) =>
      note.id === noteId ? { ...note, content: value } : note
    );
    setNotes([...editedNotes]);
  };

  const createNote = (id, content) => {
    const editedNotes = notes.map((note) =>
      note.id === id
        ? { ...note, content: content, isActive: false, isNew: false }
        : note
    );
    setNotes([...editedNotes]);
  };

  const readNote = (id) => {
    const noteToRead = notes.map((note) =>
      note.id === id
        ? { ...note, isActive: true }
        : { ...note, isActive: false, isNew: false }
    );
    setNotes([...noteToRead]);
    setDisabled(false);
  };

  const updateNote = () => {
    console.log("update");

    const noteToUpdate = notes.map((note) => {
      if (note.isActive) {
        return { ...note, isNew: true };
      } else {
        return { ...note };
      }
    });
    setNotes([...noteToUpdate]);
  };

  const deleteNote = (e) => {
    let selectedNote = null;
    console.log(e);
    notes.map((note) =>
      note.isActive ? (selectedNote = note.id) : { ...note }
    );
    if (window.confirm("Are you sure you want to delete this note?")) {
      const remainingNotes = notes.filter((note) => note.id !== selectedNote);
      setNotes([...remainingNotes]);
    } else {
      return;
    }
  };

  const handleFilterChange = (e) => {
    const { value } = e.target;
    setFilter(value);
  };

  console.log(notes);

  return (
    <>
      <OptionBox
        disabled={disabled}
        addNote={addNote}
        deleteNote={deleteNote}
        updateNote={updateNote}
        filterNote={handleFilterChange}
      />
      <main className="mainContainer">
        <Sidebar notes={notes} readNote={readNote} query={filter} />
        <Workspace
          notes={notes}
          handleChange={handleInputChange}
          createNote={createNote}
        />
      </main>
    </>
  );
}

export default App;
