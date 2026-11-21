
import "../styles/dashboard.css";

function StatsCards({ totalTasks, completedTasks, pendingTasks, percentage }) {
  const stats = [
    { title: "Total Tasks", value: totalTasks, icon: "📋", color: "purple", subtitle: "All your tasks" },
    { title: "Pending", value: pendingTasks, icon: "◷", color: "orange", subtitle: "Tasks to complete" },
    { title: "Completed", value: completedTasks, icon: "✓", color: "green", subtitle: "Tasks finished" },
    { title: "Today's Progress", value: `${percentage}%`, icon: "📈", color: "blue", subtitle: `${completedTasks} of ${totalTasks} tasks done` }
  ];

  return (
    <section className="stats-container">
      {stats.map((stat) => (
        <div className="stat-card" key={stat.title}>
          <div className={`stat-icon ${stat.color}`}>{stat.icon}</div>
          <div className="stat-content">
            <p className="stat-title">{stat.title}</p>
            <h2 className="stat-value">{stat.value}</h2>
            <span className="stat-subtitle">{stat.subtitle}</span>
          </div>
        </div>
      ))}
    </section>
  );
}

export default StatsCards;
