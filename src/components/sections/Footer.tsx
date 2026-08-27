export default function Footer() {
  return (
    <footer className="py-6 flex flex-col items-center justify-center text-center">
      <div className="text-[var(--fg-muted)] font-mono text-xs flex flex-col items-center gap-2">
        <p>Designed & Built by Dipanshu Kumar</p>
        <p>
          <a href="https://github.com/raidipanshu25-ops" className="hover:text-[var(--accent)] transition-colors" target="_blank" rel="noopener noreferrer">GitHub</a>
          <span className="mx-2">·</span>
          <a href="https://linkedin.com/in/dipanshu-kumar-6308a5335" className="hover:text-[var(--accent)] transition-colors" target="_blank" rel="noopener noreferrer">LinkedIn</a>
          <span className="mx-2">·</span>
          <a href="mailto:kumardipanshu482@gmail.com" className="hover:text-[var(--accent)] transition-colors">Email</a>
        </p>
      </div>
    </footer>
  );
}
