
import "../styles/header.css";

function Header() {
  const today = new Date();

  const formattedDate = today.toLocaleDateString("en-US", {
    weekday: "long",
    month: "long",
    day: "numeric",
    year: "numeric"
  });

  return (
    <header className="dashboard-header">
      <div className="header-welcome">
        <h1>Good Morning!</h1>
        <p>Ready to make today productive?</p>
      </div>
      <div className="header-date">
        <span>📅</span>
        <p>{formattedDate}</p>
      </div>
    </header>
  );
}

export default Header;
