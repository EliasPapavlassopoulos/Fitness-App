import { Routes } from "react-router";
import { Route } from "react-router-dom";
// import pages
import Dashboard from "./pages/Dashboard";
import Navigation from "./components/Navigation";
import Browse from "./pages/Browse";

function App() {
  return (
    <div className="main">
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/browse" element={<Browse />} />
      </Routes>
      <Navigation />
    </div>
  );
}
export default App;
