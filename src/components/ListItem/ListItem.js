import css from "./ListItem.module.css";

function ListItem({ noteInfo }) {
  return (
    <>
      <p className={css.itemContent}>{noteInfo.content}</p>
      <p className={css.itemCreated}>{noteInfo.created.slice(0, 12)}</p>
    </>
  );
}
export default ListItem;
