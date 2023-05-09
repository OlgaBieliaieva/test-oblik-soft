import ListItem from "../ListItem/ListItem";
import css from "./Sidebar.module.css";

function Sidebar({ notes, readNote, query }) {
  const handleClick = (event) => {
    const activeNote = event.currentTarget.id;
    readNote(activeNote);
  };

  return (
    <div className={css.sidebarContainer}>
      <ul>
        {notes
          .filter((note) =>
            note.content.toLowerCase().includes(query.toLowerCase())
          )
          .map((note) => {
            return (
              <li key={note.id} id={note.id} onClick={handleClick}>
                <ListItem noteInfo={note} />
              </li>
            );
          })}
      </ul>
    </div>
  );
}

export default Sidebar;
