import "./App.css";
import AllRoutes from "./Components/AllRoutes";
import Navbar from "./Components/Navbar";

function App() {
  return (
    <div className="App" style={{ backgroundColor: "white" }}>
      <Navbar />
      <AllRoutes />
    </div>
  );
}

export default App;
