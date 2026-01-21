function Navbar({ setCurrentPage }) {
  return (
    <nav className="navbar">
      <button onClick={() => setCurrentPage("home")} className="nav-btn">
        Home
      </button>

      <button onClick={() => setCurrentPage("about")} className="nav-btn">
        About
      </button>

      <button onClick={() => setCurrentPage("section")} className="nav-btn">
        Section
      </button>
    </nav>
  );
}

export default Navbar;
