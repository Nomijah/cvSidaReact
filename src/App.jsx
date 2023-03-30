import "./CSS/App.css";
import NavbarComponent from "./NavbarComponent";
import GitHubFetch from "./GitHubFetch";
import Footer from "./Footer";
import Home from "./Home";
import Contact from "./Contact";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="mainContainer">
      <NavbarComponent />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="portfolio" element={<GitHubFetch />} />
        <Route path="contact" element={<Contact />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
