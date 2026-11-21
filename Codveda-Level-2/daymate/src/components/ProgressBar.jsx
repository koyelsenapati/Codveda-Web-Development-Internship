
import "../styles/dashboard.css";

function ProgressBar({ totalTasks, completedTasks }) {
  const percentage = totalTasks === 0
    ? 0
    : Math.round((completedTasks / totalTasks) * 100);

  return (
    <section className="progress-card">
      <div className="progress-heading">
        <div>
          <h3>Daily Progress</h3>
          <p>Keep going! You're making progress.</p>
        </div>
        <span className="progress-percentage">{percentage}%</span>
      </div>

      <div className="progress-track">
        <div
          className="progress-fill"
          style={{ width: `${percentage}%` }}
        ></div>
      </div>

      <p className="progress-info">
        {completedTasks} of {totalTasks} tasks completed
      </p>
    </section>
  );
}

export default ProgressBar;
