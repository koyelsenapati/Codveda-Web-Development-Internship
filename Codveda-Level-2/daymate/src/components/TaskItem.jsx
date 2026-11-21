
import { useState } from "react";

function TaskItem({ task, onToggle, onDelete, onEdit }) {
  const [isEditing, setIsEditing] = useState(false);
  const [editedTitle, setEditedTitle] = useState(task.title);

  const handleEdit = () => {
    if (!editedTitle.trim()) return;
    onEdit(task.id, editedTitle.trim());
    setIsEditing(false);
  };

  return (
    <div className={`task-item ${task.completed ? "task-completed" : ""}`}>
      <input
        type="checkbox"
        checked={task.completed}
        onChange={() => onToggle(task.id)}
      />

      <div className="task-details">
        {isEditing ? (
          <input
            type="text"
            value={editedTitle}
            onChange={(e) => setEditedTitle(e.target.value)}
          />
        ) : (
          <h4>{task.title}</h4>
        )}

        <div className="task-meta">
          <span>{task.category}</span>
          <span className={`priority ${task.priority.toLowerCase()}`}>
            {task.priority}
          </span>
          {task.dueDate && <span>Due: {task.dueDate}</span>}
        </div>
      </div>

      <div className="task-actions">
        {isEditing ? (
          <>
            <button onClick={handleEdit}>Save</button>
            <button onClick={() => {
              setEditedTitle(task.title);
              setIsEditing(false);
            }}>Cancel</button>
          </>
        ) : (
          <>
            <button onClick={() => setIsEditing(true)} title="Edit">✏️</button>
            <button onClick={() => onDelete(task.id)} title="Delete">🗑️</button>
          </>
        )}
      </div>
    </div>
  );
}

export default TaskItem;
