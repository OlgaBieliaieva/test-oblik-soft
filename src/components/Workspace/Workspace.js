import css from "./Workspace.module.css";

function Workspace({ notes, handleChange, createNote }) {
  const handleEditNote = (e) => {
    console.log(e);
    const noteId = e.target.form.id;
    const noteContent = e.target.value;
    createNote(noteId, noteContent);
  };

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
                  value={note.content}
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
            <form className={css.noteForm} id={note.id} key={note.id}>
              <legend className={css.dateField}>{note.created}</legend>
              <label>
                <textarea
                  className={css.noteInput}
                  type="text"
                  name="note"
                  value={note.content}
                  onChange={handleChange}
                  onBlur={handleEditNote}
                  rows={42}
                  disabled
                ></textarea>
              </label>
            </form>
          )
      )}
    </div>
  );
}

export default Workspace;
