
import "../styles/calendar.css";

function ConsistencyCalendar({ completedDates = [] }) {
  const today = new Date();
  const year = today.getFullYear();
  const month = today.getMonth();

  const firstDay = new Date(year, month, 1).getDay();
  const totalDays = new Date(year, month + 1, 0).getDate();

  const monthName = today.toLocaleDateString("en-US", {
    month: "long",
    year: "numeric"
  });

  const days = Array.from({ length: totalDays }, (_, index) => index + 1);
  const weekdays = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

  return (
    <section className="calendar-card">
      <div className="calendar-heading">
        <h3>Consistency Calendar</h3>
        <p>{monthName}</p>
      </div>

      <div className="calendar-grid">
        {weekdays.map((day) => (
          <span className="calendar-weekday" key={day}>{day}</span>
        ))}

        {Array.from({ length: firstDay }).map((_, index) => (
          <span className="calendar-empty" key={`empty-${index}`}></span>
        ))}

        {days.map((day) => {
          const dateKey = `${year}-${String(month + 1).padStart(2, "0")}-${String(day).padStart(2, "0")}`;
          const isCompleted = completedDates.includes(dateKey);
          const isToday = day === today.getDate();

          return (
            <span
              key={day}
              className={`calendar-day ${isCompleted ? "completed" : ""} ${isToday ? "today" : ""}`}
              title={isCompleted ? "Task completed" : ""}
            >
              {day}
            </span>
          );
        })}
      </div>

      <div className="calendar-legend">
        <span className="legend-dot"></span>
        <span>Task completed</span>
      </div>
    </section>
  );
}

export default ConsistencyCalendar;
