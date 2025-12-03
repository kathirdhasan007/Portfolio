export default function Section({ title, hint, children }) {
  return (
    <div className="section">
      <div className="section-header">
        <h2>{title}</h2>
        {hint && <span className="hint">{hint}</span>}
      </div>
      {children}
    </div>
  );
}