import { Routes } from "react-router";
import { Route } from "react-router-dom";
// import pages
import Dashboard from "./pages/Dashboard";
import Navigation from "./components/Navigation";

function App() {
  return (
    <div className="main">
      <Routes>
        <Route path="/" element={<Dashboard />} />
      </Routes>
      <Navigation />
    </div>
  );
}
export default App;
