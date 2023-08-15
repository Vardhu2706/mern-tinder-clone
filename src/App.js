// Imports
import { BrowserRouter, Routes, Route } from "react-router-dom";

// Importing Pages
import Homepage from "./pages/homepage";
import Dashboard from "./pages/dashboard.jsx";
import Onboarding from "./pages/onboarding";

// App Component
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={"/"} element={<Homepage />} />
        <Route path={"/onboarding"} element={<Onboarding />} />
        <Route path={"/dashboard"} element={<Dashboard />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
