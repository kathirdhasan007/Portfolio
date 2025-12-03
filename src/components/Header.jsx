import ThemeToggle from './ThemeToggle';
// import avatar from '../assets/avatar.png';

export default function Header() {
  return (
    <header className="nav">
      <div className="container nav-inner">
        <a href="#home" className="brand" aria-label="Go to home">
          <img src="/images.png" alt="Avatar" />
          <span>Kathirdhasan</span>
        </a>
        <nav className="nav-links" aria-label="Primary">
          <a href="#projects">Projects</a>
          <a href="#skills">Skills</a>
          <a href="#education">Education</a>
          <a href="#experience">Experience</a>
          <a href="#contact">Contact</a>
          <ThemeToggle />
        </nav>
      </div>
    </header>
  );
}