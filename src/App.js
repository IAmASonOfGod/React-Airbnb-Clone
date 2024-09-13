import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Footer from "./components/Footer";
import Header from "./components/layout/Header";
import Home from "./components/layout/Home";
import SearchPage from "./components/SearchPage";
import Modal from "./components/Modal";

const App = () => {
  return (
    <div className="App">
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/search" element={<SearchPage />} />
        </Routes>
        <Footer />
        <Modal />
      </Router>
    </div>
  );
};

export default App;
