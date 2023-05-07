import css from "./Sidebar.module.css";
function Sidebar() {
  console.log("Sidebar");
  return (
    <div className={css.sidebarContainer}>
      <h1>Sidebar</h1>
    </div>
  );
}

export default Sidebar;
