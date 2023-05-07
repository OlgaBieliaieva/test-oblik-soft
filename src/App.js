import Header from "./components/Header/Header";
import Sidebar from "./components/Sidebar/Sidebar";
import Workspace from "./components/Workspace/Workspace";

function App() {
  return (
    <>
      <Header />
      <main className="mainContainer">
        <Sidebar />
        <Workspace />
      </main>
    </>
  );
}

export default App;
