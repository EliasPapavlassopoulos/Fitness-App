import { Routes } from "react-router";
import { Route } from "react-router-dom";
// import pages
import Dashboard from "./pages/Dashboard";
import Navigation from "./components/Navigation";
import Browse from "./pages/Browse";
import Profile from "./pages/Profile";
import WorkoutInformation from "./pages/Workout-Information";

function App() {
  return (
    <div className="main">
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/browse" element={<Browse />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/workout/information" element={<WorkoutInformation />} />
      </Routes>
      <Navigation />
    </div>
  );
}
export default App;
