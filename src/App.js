import { useState, useEffect } from "react";
import shortid from "shortid";
import Header from "./components/Header/Header";
import Sidebar from "./components/Sidebar/Sidebar";
import Workspace from "./components/Workspace/Workspace";

// function init(state) {
//   const savedNotes = localStorage.getItem("notes");
//   const parsedNotes = JSON.parse(savedNotes);

//   if (parsedNotes !== null) {
//     return { ...state, notes: [...parsedNotes] };
//   }

//   return state;
// }

// function countReducer(state, action) {
//   switch (action.type) {
//     case "add":
//       return { ...state, notes: [...state.notes, action.payload] };

//     case "edit":
//       return { ...state, notes: [...action.payload] };

//     case "delete":
//       return { ...state, notes: [...action.payload] };

//     case "disActive":
//       return { ...state, notes: [...action.payload] };

//     case "filter":
//       return { ...state, filter: action.payload };

//     default:
//       return;
//   }
// }

function App() {
  const [notes, setNotes] = useState([]);
  const [content, setContent] = useState("");
  const [filter, setFilter] = useState("");

  const savedNotes = localStorage.getItem("notes");
  const parsedNotes = JSON.parse(savedNotes);

  // const [state, dispatch] = useReducer(
  //   countReducer,
  //   { notes: [], filter: "" },
  //   init
  // );

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

    setContent("");
    console.log("setContent(0)");
  };

  const handleInputChange = (e) => {
    const { value } = e.target;
    setContent(value);
    console.log("setContent(value)");
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
  };

  const updateNote = () => {
    console.log("update");

    const noteToUpdate = notes.map((note) => {
      if (note.isActive) {
        setContent(note.content);
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
      <Header
        addNote={addNote}
        deleteNote={deleteNote}
        updateNote={updateNote}
        filterNote={handleFilterChange}
      />
      <main className="mainContainer">
        <Sidebar notes={notes} readNote={readNote} query={filter} />
        <Workspace
          notes={notes}
          noteContent={content}
          handleChange={handleInputChange}
          createNote={createNote}
        />
      </main>
    </>
  );
}

export default App;
