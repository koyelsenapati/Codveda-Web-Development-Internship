
import "../styles/tasks.css";

function EmptyState() {
  return (
    <div className="empty-state">
      <div className="empty-icon">📝</div>
      <h3>No tasks yet!</h3>
      <p>Your task list is empty. Add your first task and make today productive.</p>
    </div>
  );
}

export default EmptyState;
