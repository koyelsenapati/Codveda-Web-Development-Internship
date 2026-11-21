
import { useState } from "react";
import Header from "./components/Header.jsx";
import Sidebar from "./components/Sidebar.jsx";
import StatsCards from "./components/StatsCards.jsx";
import ProgressBar from "./components/ProgressBar.jsx";
import ConsistencyCalendar from "./components/ConsistencyCalendar.jsx";
import TaskForm from "./components/TaskForm.jsx";
import TaskList from "./components/TaskList.jsx";
import EmptyState from "./components/EmptyState.jsx";
import useLocalStorage from "./hooks/useLocalStorage.js";
import "./App.css";

function App() {
  const [tasks, setTasks] = useLocalStorage("daymate-tasks", []);
  const [filter, setFilter] = useState("All");

  // Add new task
  const addTask = (newTask) => {
    setTasks((prevTasks) => [...prevTasks, newTask]);
  };

  // Complete or undo task
  const toggleTask = (id) => {
    setTasks((prevTasks) =>
      prevTasks.map((task) =>
        task.id === id
          ? {
              ...task,
              completed: !task.completed,
              completedAt: !task.completed
                ? new Date().toISOString()
                : null
            }
          : task
      )
    );
  };

  // Delete task
  const deleteTask = (id) => {
    setTasks((prevTasks) =>
      prevTasks.filter((task) => task.id !== id)
    );
  };

  // Edit task
  const editTask = (id, newTitle) => {
    setTasks((prevTasks) =>
      prevTasks.map((task) =>
        task.id === id
          ? { ...task, title: newTitle }
          : task
      )
    );
  };

  // Task statistics
  const totalTasks = tasks.length;

  const completedTasks = tasks.filter(
    (task) => task.completed
  ).length;

  const pendingTasks = totalTasks - completedTasks;

  const percentage = totalTasks === 0
    ? 0
    : Math.round((completedTasks / totalTasks) * 100);

  // Completed dates for calendar
  const completedDates = [
    ...new Set(
      tasks
        .filter((task) => task.completed && task.completedAt)
        .map((task) => {
          const date = new Date(task.completedAt);
          const year = date.getFullYear();
          const month = String(date.getMonth() + 1).padStart(2, "0");
          const day = String(date.getDate()).padStart(2, "0");
          return `${year}-${month}-${day}`;
        })
    )
  ];

  return (
    <div className="app-shell">

      {/* Sidebar */}
      <Sidebar />

      {/* Main Dashboard */}
      <main className="app-layout" id="dashboard">

        {/* Dashboard Header */}
        <Header />

        {/* Statistics Cards */}
        <StatsCards
          totalTasks={totalTasks}
          completedTasks={completedTasks}
          pendingTasks={pendingTasks}
          percentage={percentage}
        />

        {/* Daily Progress Bar */}
        <div id="progress">
          <ProgressBar
            totalTasks={totalTasks}
            completedTasks={completedTasks}
          />
        </div>

        {/* Dashboard Main Layout */}
        <div className="dashboard-grid">

          {/* Left Section */}
          <section className="dashboard-main" id="tasks">

            {/* Add New Task */}
            <TaskForm onAddTask={addTask} />

            {/* Task Filter */}
            <div className="task-filter">
              <h3>
                My Tasks
                <span className="task-count">{totalTasks}</span>
              </h3>

              <div className="filter-options">
                {["All", "Pending", "Completed"].map((item) => (
                  <button
                    key={item}
                    className={
                      filter === item
                        ? "filter-btn active"
                        : "filter-btn"
                    }
                    onClick={() => setFilter(item)}
                  >
                    {item}
                  </button>
                ))}
              </div>
            </div>

            {/* Task List */}
            {tasks.length === 0 ? (
              <EmptyState />
            ) : (
              <TaskList
                tasks={tasks}
                filter={filter}
                onToggle={toggleTask}
                onDelete={deleteTask}
                onEdit={editTask}
              />
            )}

          </section>

          {/* Right Side Panel */}
          <aside className="dashboard-side" id="calendar">

            {/* Monthly Calendar */}
            <ConsistencyCalendar
              completedDates={completedDates}
            />

            {/* Motivation Card */}
            <div className="motivation-card">
              <div className="motivation-icon">✦</div>

              <h3>You're doing great!</h3>

              <p>
                Keep up the consistency.
                Small steps lead to big achievements.
              </p>

              <span>Stay focused ♡</span>
            </div>

          </aside>

        </div>
      </main>
    </div>
  );
}

export default App;
