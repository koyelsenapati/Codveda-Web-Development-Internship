
import { useState } from "react";
import "../styles/tasks.css";

function TaskForm({ onAddTask }) {
  const [title, setTitle] = useState("");
  const [category, setCategory] = useState("Study");
  const [priority, setPriority] = useState("Medium");
  const [dueDate, setDueDate] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!title.trim()) return;

    const newTask = {
      id: Date.now(),
      title: title.trim(),
      category,
      priority,
      dueDate,
      completed: false,
      createdAt: new Date().toISOString()
    };

    onAddTask(newTask);

    setTitle("");
    setCategory("Study");
    setPriority("Medium");
    setDueDate("");
  };

  return (
    <section className="task-form-card">
      <h3>Add New Task</h3>
      <p className="form-subtitle">Plan your day, one task at a time.</p>

      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="task-title">Task Name</label>
          <input
            id="task-title"
            type="text"
            placeholder="Enter your task..."
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
        </div>

        <div className="form-row">
          <div className="form-group">
            <label htmlFor="task-category">Category</label>
            <select
              id="task-category"
              value={category}
              onChange={(e) => setCategory(e.target.value)}
            >
              <option>Study</option>
              <option>Assignment</option>
              <option>Class</option>
              <option>Exam Prep</option>
              <option>Personal</option>
            </select>
          </div>

          <div className="form-group">
            <label htmlFor="task-priority">Priority</label>
            <select
              id="task-priority"
              value={priority}
              onChange={(e) => setPriority(e.target.value)}
            >
              <option>Low</option>
              <option>Medium</option>
              <option>High</option>
            </select>
          </div>
        </div>

        <div className="form-group">
          <label htmlFor="task-date">Due Date</label>
          <input
            id="task-date"
            type="date"
            value={dueDate}
            onChange={(e) => setDueDate(e.target.value)}
          />
        </div>

        <button type="submit" className="add-task-btn">
          + Add Task
        </button>
      </form>
    </section>
  );
}

export default TaskForm;
