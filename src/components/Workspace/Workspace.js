// import { useState, useEffect } from "react";
// import Throttle from "lodash.throttle";
import css from "./Workspace.module.css";

function Workspace({ notes, noteContent, handleChange, createNote }) {
  // const [content, setContent] = useState("");

  // useEffect(() => {
  //   setContent("");
  // }, []);

  const handleEditNote = (e) => {
    console.log(e);
    const noteId = e.target.form.id;
    const noteContent = e.target.value;
    createNote(noteId, noteContent);
  };

  // const handleChange = (e) => {
  //   const { value } = e.target;
  //   setContent(value);
  // };

  // const handleCreate = (e) => {
  //   console.log(e);

  //     addNote(content);
  // };
  console.log(notes);

  return (
    <div className={css.workspaceContainer}>
      {notes.map(
        (note) =>
          note.isActive &&
          note.isNew && (
            <form className={css.noteForm} id={note.id} key={note.id}>
              <legend className={css.dateField}>Date/Time now</legend>
              <label>
                <textarea
                  className={css.noteInput}
                  type="text"
                  name="note"
                  value={noteContent}
                  onChange={handleChange}
                  onBlur={handleEditNote}
                  rows={42}
                  autoFocus
                ></textarea>
              </label>
            </form>
          )
      )}
      {notes.map(
        (note) =>
          note.isActive && (
            <>
              <p>{note.created}</p>
              <p>{note.content}</p>
            </>
          )
      )}
    </div>
  );
  // : (
  //   <div>No actives</div>
  // )

  //
  //
  //
}

export default Workspace;

// player.on(
//   "timeupdate",
//   Throttle(function (data) {
//     const currentTime = data.seconds;
//     localStorage.setItem(STORAGE_KEY, currentTime);
//   }, 1000)
// );

/* <div onBlur={handleDisplay}>
          {note.id} {note.created}
        </div> */
