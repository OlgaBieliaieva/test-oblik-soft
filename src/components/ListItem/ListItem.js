function ListItem({ noteInfo }) {
  return (
    <>
      <p>{noteInfo.created}</p>
      <p>{noteInfo.content}</p>
      <p>{noteInfo.id}</p>
    </>
  );
}
export default ListItem;
