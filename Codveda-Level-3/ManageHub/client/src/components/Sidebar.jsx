
import {
  LayoutDashboard, Users, UserPlus, Settings,
  ChartNoAxesColumn, X
} from "lucide-react";

function Sidebar({ activePage, onNavigate, isOpen, onClose }) {
  const menuItems = [
    { label: "Dashboard", icon: LayoutDashboard },
    { label: "Users", icon: Users },
    { label: "Add User", icon: UserPlus },
    { label: "Settings", icon: Settings },
    { label: "Analytics", icon: ChartNoAxesColumn }
  ];

  return (
    <>
      <aside className={`sidebar ${isOpen ? "sidebar-open" : ""}`}>
        <div className="brand">
          <div className="brand-mark">M</div>
          <div>
            <h2>ManageHub</h2>
            <span>Admin Panel</span>
          </div>
          <button className="mobile-close" onClick={onClose}>
            <X />
          </button>
        </div>

        <div className="sidebar-divider" />
        <p className="nav-label">MAIN MENU</p>

        <nav className="sidebar-nav">
          {menuItems.map(item => {
            const Icon = item.icon;
            return (
              <button
                key={item.label}
                className={`nav-item ${activePage === item.label ? "selected" : ""}`}
                onClick={() => {
                  onNavigate(item.label);
                  onClose();
                }}
              >
                <Icon />
                <span>{item.label}</span>
              </button>
            );
          })}
        </nav>

        <div className="sidebar-bottom">© 2026 ManageHub</div>
      </aside>

      {isOpen && <div className="sidebar-backdrop" onClick={onClose} />}
    </>
  );
}

export default Sidebar;
