export default function ThemeToggle() {
  const toggle = () => {
    const root = document.documentElement;
    const isLight = root.classList.toggle('light');
    localStorage.setItem('theme', isLight ? 'light' : 'dark');
  };
  return (
    <button className="btn outline" onClick={toggle} aria-label="Toggle theme">
      Theme
    </button>
  );
}