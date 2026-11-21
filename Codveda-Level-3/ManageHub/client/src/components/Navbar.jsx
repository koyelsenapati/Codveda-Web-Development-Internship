
import { Search, Bell, ChevronDown, Menu } from "lucide-react";

function Navbar({ search, setSearch, onMenuClick }) {
  return (
    <header className="topbar">
      <button className="mobile-menu" onClick={onMenuClick} aria-label="Open menu">
        <Menu />
      </button>

      <div className="global-search">
        <Search size={19} />
        <input
          type="search"
          placeholder="Search users... (Ctrl + K)"
          value={search}
          onChange={event => setSearch(event.target.value)}
        />
      </div>

      <div className="topbar-actions">
        <button className="notification-button" aria-label="Notifications">
          <Bell />
          <i />
        </button>
        <button className="profile-button" aria-label="User profile">K</button>
        <ChevronDown size={17} />
      </div>
    </header>
  );
}

export default Navbar;
