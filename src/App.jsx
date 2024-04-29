

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Layout } from "./components/header/Layout";
import { JobListPages } from "./pages/JobListPages";
JobListPages

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route path="/empleo" element={<JobListPages />} />
            <Route path="/bootcamp" element={<p>Bootcamp</p>} />
            <Route path="/empleo" element={<p>empleo</p>} />
          </Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
