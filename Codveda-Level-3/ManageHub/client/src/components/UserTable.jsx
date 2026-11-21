
import { Pencil, Trash2, ChevronLeft, ChevronRight } from "lucide-react";

function UserTable({ users, onEdit, onDelete, page, setPage, pageSize = 5 }) {
  const totalPages = Math.max(1, Math.ceil(users.length / pageSize));
  const currentPage = Math.min(page, totalPages);
  const startIndex = (currentPage - 1) * pageSize;
  const visibleUsers = users.slice(startIndex, startIndex + pageSize);

  return (
    <div className="user-table-wrapper">
      <div className="table-container">
        <table>
          <thead>
            <tr>
              <th>#</th>
              <th>Name</th>
              <th>Email</th>
              <th>Role</th>
              <th>Status</th>
              <th>Actions</th>
            </tr>
          </thead>

          <tbody>
            {visibleUsers.length > 0 ? (
              visibleUsers.map((user, index) => (
                <tr key={user._id}>
                  <td>{startIndex + index + 1}</td>
                  <td className="user-name">{user.name}</td>
                  <td className="user-email">{user.email}</td>
                  <td>{user.role}</td>
                  <td>
                    <span className={`status-badge ${user.status.toLowerCase()}`}>
                      <i /> {user.status}
                    </span>
                  </td>
                  <td>
                    <div className="row-actions">
                      <button
                        type="button"
                        className="edit-button"
                        onClick={() => onEdit(user)}
                        aria-label={`Edit ${user.name}`}
                      >
                        <Pencil />
                      </button>

                      <button
                        type="button"
                        className="delete-button"
                        onClick={() => onDelete(user)}
                        aria-label={`Delete ${user.name}`}
                      >
                        <Trash2 />
                      </button>
                    </div>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="6" className="empty-state">
                  No users found.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      <div className="table-footer">
        <p>
          Showing {users.length ? startIndex + 1 : 0}–
          {Math.min(startIndex + pageSize, users.length)} of {users.length} users
        </p>

        <div className="pagination">
          <button
            type="button"
            disabled={currentPage === 1}
            onClick={() => setPage(currentPage - 1)}
            aria-label="Previous page"
          >
            <ChevronLeft />
          </button>

          {Array.from({ length: totalPages }, (_, index) => (
            <button
              type="button"
              key={index + 1}
              className={currentPage === index + 1 ? "current-page" : ""}
              onClick={() => setPage(index + 1)}
              aria-label={`Go to page ${index + 1}`}
              aria-current={currentPage === index + 1 ? "page" : undefined}
            >
              {index + 1}
            </button>
          ))}

          <button
            type="button"
            disabled={currentPage === totalPages}
            onClick={() => setPage(currentPage + 1)}
            aria-label="Next page"
          >
            <ChevronRight />
          </button>
        </div>
      </div>
    </div>
  );
}

export default UserTable;
