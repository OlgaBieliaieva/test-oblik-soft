import { IconContext } from "react-icons";
import { IoAddOutline } from "react-icons/io5";
import { IoTrashOutline } from "react-icons/io5";
import { IoCreateOutline } from "react-icons/io5";

import css from "./Header.module.css";

function Header({ addNote, deleteNote, updateNote, filterNote }) {
  return (
    <header className={css.headerContainer}>
      <ul className={css.buttonList}>
        <IconContext.Provider
          value={{
            color: "black",
            size: "1.2em",
            className: "react-icons",
          }}
        >
          <li className={css.listItem}>
            <button
              className={css.optionButton}
              type="button"
              onClick={addNote}
            >
              <IoAddOutline />
            </button>
          </li>
          <li className={css.listItem}>
            <button
              className={css.optionButton}
              type="button"
              onClick={deleteNote}
            >
              <IoTrashOutline />
            </button>
          </li>
          <li className={css.listItem}>
            <button
              className={css.optionButton}
              type="button"
              onClick={updateNote}
            >
              <IoCreateOutline />
            </button>
          </li>
        </IconContext.Provider>
      </ul>
      <form className={css.searchForm}>
        <label>
          <input
            className={css.searchInput}
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="🔍 Search"
            onChange={filterNote}
          ></input>
        </label>
      </form>
    </header>
  );
}

export default Header;
