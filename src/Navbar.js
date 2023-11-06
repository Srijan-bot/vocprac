import "./Nav.css"
export default function Navbar() {
  return (
    <nav className="nav">
      <a href="/" className="nav-title">
        Voice of Commerce
      </a>
      <ul>
        <li>
          <a href="/">Home</a>
        </li>
        <li>
          <a href="/">About</a>
        </li>
        <li>
          <a href="/">Events</a>
        </li>
      </ul>
    </nav>
  );
}
