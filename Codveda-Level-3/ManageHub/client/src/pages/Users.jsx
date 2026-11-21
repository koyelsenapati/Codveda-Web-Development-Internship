
import { Users } from "lucide-react";

function UsersPage({ users, loading }) {
  return (
    <section className="secondary-page">
      <div className="secondary-page-heading">
        <div className="heading-icon">
          <Users />
        </div>
        <div>
          <h1>Users Directory</h1>
          <p>Overview of all registered users.</p>
        </div>
      </div>

      <div className="directory-summary">
        <h2>{users.length}</h2>
        <p>Total registered users</p>
      </div>

      <div className="directory-list">
        {loading ? (
          <p>Loading users...</p>
        ) : users.length > 0 ? (
          users.map(user => (
            <div className="directory-item" key={user._id}>
              <div className="directory-avatar">
                {user.name.charAt(0).toUpperCase()}
              </div>

              <div className="directory-details">
                <h3>{user.name}</h3>
                <p>{user.email}</p>
              </div>

              <span className={`status-badge ${user.status.toLowerCase()}`}>
                <i /> {user.status}
              </span>
            </div>
          ))
        ) : (
          <p>No users available.</p>
        )}
      </div>
    </section>
  );
}

export default UsersPage;
