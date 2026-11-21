
import { Users, Check, Pause, CalendarDays } from "lucide-react";
import StatsCard from "../components/StatsCard";
import UserForm from "../components/UserForm";
import UserTable from "../components/UserTable";
import SearchBar from "../components/SearchBar";

function Dashboard({
  users,
  form,
  setForm,
  onSubmit,
  editingId,
  onCancel,
  onEdit,
  onDelete,
  search,
  setSearch,
  filter,
  setFilter,
  page,
  setPage,
  message,
  loading
}) {
  const activeCount = users.filter(
    user => user.status === "Active"
  ).length;

  const inactiveCount = users.length - activeCount;

  const activePercentage = users.length
    ? Math.round((activeCount / users.length) * 100)
    : 0;

  const inactivePercentage = users.length
    ? Math.round((inactiveCount / users.length) * 100)
    : 0;

  const filteredUsers = users.filter(user => {
    const searchText = `${user.name} ${user.email} ${user.role}`.toLowerCase();
    const matchesSearch = searchText.includes(search.toLowerCase());
    const matchesFilter = filter === "All" || user.status === filter;
    return matchesSearch && matchesFilter;
  });

  const today = new Date().toLocaleDateString("en-IN", {
    day: "2-digit",
    month: "short",
    year: "numeric"
  });

  return (
    <section className="page-content" id="dashboard">
      <div className="welcome-row">
        <div className="welcome-copy">
          <p className="eyebrow">YOUR WORKSPACE</p>
          <h1>
            Welcome back, Koyel! <span>👋</span>
          </h1>
          <p className="welcome-subtitle">
            Manage your team and keep your workspace organised.
          </p>
        </div>
        <div className="date-pill">
          <CalendarDays size={18} />
          <span>{today}</span>
        </div>
      </div>

      <section className="stats-grid">
        <StatsCard
          title="Total Users"
          value={users.length}
          subtitle="Your user directory"
          icon={Users}
          variant="total"
        />
        <StatsCard
          title="Active Users"
          value={activeCount}
          subtitle={`${activePercentage}% active`}
          icon={Check}
          variant="active"
        />
        <StatsCard
          title="Inactive Users"
          value={inactiveCount}
          subtitle={`${inactivePercentage}% inactive`}
          icon={Pause}
          variant="inactive"
        />
      </section>

      {message && (
        <div className="toast-message" role="status">
          {message}
        </div>
      )}

      <section className="workspace-grid">
        <UserForm
          form={form}
          setForm={setForm}
          onSubmit={onSubmit}
          editingId={editingId}
          onCancel={onCancel}
        />

        <section className="panel users-panel" id="users">
          <div className="users-heading">
            <div className="panel-heading">
              <div className="heading-icon">
                <Users />
              </div>
              <div>
                <h2>All Users</h2>
                <p>View and manage your registered users.</p>
              </div>
            </div>

            <SearchBar
              search={search}
              setSearch={setSearch}
              filter={filter}
              setFilter={setFilter}
            />
          </div>

          {loading ? (
            <div className="table-empty-state">
              Loading users...
            </div>
          ) : (
            <UserTable
              users={filteredUsers}
              onEdit={onEdit}
              onDelete={onDelete}
              page={page}
              setPage={setPage}
            />
          )}
        </section>
      </section>

      <footer className="dashboard-footer">
        <span>Manage your team with clarity.</span>
        <span>© 2026 ManageHub</span>
      </footer>
    </section>
  );
}

export default Dashboard;
