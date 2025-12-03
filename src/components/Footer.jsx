import { profile } from '../data/content';

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="footer">
      © {year} {profile.name}. Built with React + Vite. Keep shipping.
    </footer>
  );
}