import { useState } from 'react';
import ThemeToggle from './ThemeToggle';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="nav">
      <div className="container nav-inner">
        <a href="#home" className="brand" aria-label="Go to home">
          <img src="/images.png" alt="Avatar" />
          <span>Kathirdhasan</span>
        </a>

        {/* Hamburger button */}
        <button
          className="menu-toggle"
          aria-label="Toggle navigation"
          onClick={() => setIsOpen(!isOpen)}
        >
          ☰
        </button>

        {/* Navigation links */}
        <nav className={`nav-links ${isOpen ? 'open' : ''}`} aria-label="Primary">
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