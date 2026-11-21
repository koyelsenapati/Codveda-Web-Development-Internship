
function StatsCard({ title, value, subtitle, icon: Icon, variant }) {
  return (
    <div className={`stat-card stat-${variant}`}>
      <div className="stat-icon">
        <Icon />
      </div>
      <div className="stat-info">
        <p>{title}</p>
        <h2>{value}</h2>
        <span>{subtitle}</span>
      </div>
      <div className="stat-decoration" />
    </div>
  );
}

export default StatsCard;
