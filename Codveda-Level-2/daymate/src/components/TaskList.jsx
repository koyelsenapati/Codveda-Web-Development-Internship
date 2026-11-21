
import TaskItem from "./TaskItem.jsx";
import "../styles/tasks.css";

function TaskList({ tasks, filter, onToggle, onDelete, onEdit }) {
  const filteredTasks = tasks.filter((task) => {
    if (filter === "Pending") return !task.completed;
    if (filter === "Completed") return task.completed;
    return true;
  });

  return (
    <section className="task-list-section">
      <div className="task-list-heading">
        <h3>My Tasks</h3>
        <span>{filteredTasks.length} Tasks</span>
      </div>

      {filteredTasks.length === 0 ? (
        <p className="no-tasks">No tasks found. Add a new task!</p>
      ) : (
        filteredTasks.map((task) => (
          <TaskItem
            key={task.id}
            task={task}
            onToggle={onToggle}
            onDelete={onDelete}
            onEdit={onEdit}
          />
        ))
      )}
    </section>
  );
}

export default TaskList;
