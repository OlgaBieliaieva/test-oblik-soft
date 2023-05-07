import css from "./Workspace.module.css";

function Workspace() {
  console.log("Workspace");
  return (
    <div className={css.workspaceContainer}>
      <form className={css.noteForm}>
        <legend className={css.dateField}>Date/Time now</legend>
        <label>
          <textarea className={css.noteInput} rows={42}></textarea>
        </label>
      </form>
    </div>
  );
}

export default Workspace;
