import "./Nav.css";
export default function Navbar() {
  return (
    <nav className="nav">
      <a href="/" className="nav-title">
        Voice of Commerce
      </a>
      <ul>
        <li className="active">
          <a href="/">Home</a>
        </li>
        <li>
          <a href="/about">About</a>
        </li>
        <li>
          <a href="/event">Event</a>
        </li>
      </ul>
    </nav>
  );
}
