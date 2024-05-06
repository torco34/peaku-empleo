import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { JobListPages } from "./pages/JobListPages";
import { HomePages } from "./pages/HomePeges";
import { Header } from "./components/header/Header";
import { Footer } from "./components/header/Footer";
import { Bootcamp } from "./pages/Bootcamp";
import { ErrorPage } from "./pages/ErrorPage";

function App() {
  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route index path="/" element={<HomePages />} />
          <Route path="/empleo" element={<JobListPages />} />
          <Route path="/boot" element={<Bootcamp />} />
          <Route path="*" element={<ErrorPage />} />
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;
