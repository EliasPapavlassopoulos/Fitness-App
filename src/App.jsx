import { Routes } from "react-router";
import { Route } from "react-router-dom";
// import pages
import Dashboard from "./pages/Dashboard";
import "./App.css";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Dashboard />} />
      </Routes>
    </div>
  );
}
export default App;
