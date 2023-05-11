import css from "./Workspace.module.css";

function Workspace({ notes, handleChange, createNote }) {
  const handleEditNote = (e) => {
    const noteId = e.target.form.id;
    const noteContent = e.target.value;
    createNote(noteId, noteContent);
  };

  return (
    <div className={css.workspaceContainer}>
      {/* eslint-disable-next-line */}
      {notes.map((note) => {
        if (note.isActive && note.isNew) {
          return (
            <form className={css.noteForm} id={note.id} key={note.id}>
              <legend className={css.dateField}>{note.created}</legend>
              <label className={css.inputWrapper}>
                <textarea
                  className={css.noteInput}
                  type="text"
                  name="note"
                  value={note.content}
                  onChange={handleChange}
                  onBlur={handleEditNote}
                  autoFocus
                ></textarea>
              </label>
            </form>
          );
        }
        if (note.isActive) {
          return (
            <form className={css.noteForm} id={note.id} key={note.id}>
              <legend className={css.dateField}>{note.created}</legend>
              <label className={css.inputWrapper}>
                <textarea
                  className={css.noteInput}
                  type="text"
                  name="note"
                  value={note.content}
                  onChange={handleChange}
                  onBlur={handleEditNote}
                  disabled
                ></textarea>
              </label>
            </form>
          );
        }
      })}
    </div>
  );
}

export default Workspace;
