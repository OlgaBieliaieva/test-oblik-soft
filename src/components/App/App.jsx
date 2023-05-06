import Header from "../Header/Header";
import Sidebar from "../Sidebar/Sidebar";
import Workspace from "../Workspace/Workspace";

function App() {
  const request = window.indexedDB.open("MyNotifications", 3);
  console.log(request);
  return (
    <>
      <Header />
      <Sidebar />
      <Workspace />
    </>
  );
}

export default App;
