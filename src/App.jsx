import { useState } from "react";
import Home from "./pages/Home";
import About from "./pages/About";
import Section from "./pages/Section";
import Navbar from "./components/Navbar";

function App() {
  const [currentPage, setCurrentPage] = useState("home");

  const renderPage = () => {
    if (currentPage === "home") return <Home />;
    if (currentPage === "about") return <About />;
    if (currentPage === "section") return <Section />;
  };

  return (
    <>
      <Navbar setCurrentPage={setCurrentPage} />
      {renderPage()}
    </>
  );
}

export default App;
