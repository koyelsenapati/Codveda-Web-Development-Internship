import "../styles/sidebar.css";

function Sidebar() {
  return (
    <aside className="sidebar">
      <div className="sidebar-logo">
        <span className="logo-icon">✦</span>
        <h2>DayMate</h2>
      </div>
      <p className="sidebar-label">MENU</p>
      <nav className="sidebar-nav">
        <a href="#dashboard" className="nav-link active">⌂ Dashboard</a>
        <a href="#tasks" className="nav-link">▣ My Tasks</a>
        <a href="#calendar" className="nav-link">▦ Calendar</a>
        <a href="#progress" className="nav-link">◷ My Progress</a>
      </nav>
      <div className="sidebar-bottom">
        <p>Stay focused, keep growing!</p>
        <span>♡ One task at a time.</span>
      </div>
    </aside>
  );
}

export default Sidebar;