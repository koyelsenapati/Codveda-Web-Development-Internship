
import { AlertTriangle, Trash2, X } from "lucide-react";

function DeleteModal({ user, onConfirm, onCancel }) {
  if (!user) return null;

  return (
    <div className="modal-overlay" onClick={onCancel}>
      <div
        className="delete-modal"
        role="dialog"
        aria-modal="true"
        aria-labelledby="delete-title"
        onClick={event => event.stopPropagation()}
      >
        <button
          type="button"
          className="modal-close"
          onClick={onCancel}
          aria-label="Close"
        >
          <X />
        </button>

        <div className="modal-icon">
          <AlertTriangle />
        </div>

        <h2 id="delete-title">Delete User?</h2>

        <p>
          Are you sure you want to delete <strong>{user.name}</strong>?
          This action cannot be undone.
        </p>

        <div className="modal-actions">
          <button
            type="button"
            className="modal-cancel"
            onClick={onCancel}
          >
            Cancel
          </button>

          <button
            type="button"
            className="modal-delete"
            onClick={onConfirm}
          >
            <Trash2 size={16} />
            Delete User
          </button>
        </div>
      </div>
    </div>
  );
}

export default DeleteModal;
