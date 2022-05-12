import { Routes } from "react-router";
import { Route } from "react-router-dom";
// import pages
import Dashboard from "./pages/Dashboard";

function App() {
  return (
    <div className="main">
      <Routes>
        <Route path="/" element={<Dashboard />} />
      </Routes>
    </div>
  );
}
export default App;
