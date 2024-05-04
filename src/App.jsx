import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Layout } from "./components/header/Layout";
import { JobListPages } from "./pages/JobListPages";
import { HomePages } from "./pages/HomePeges";
JobListPages;

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route element={<Layout />}>
            <Route index path="/" element={<HomePages />} />
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
