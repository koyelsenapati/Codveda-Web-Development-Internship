
import { UserRound, Mail, BriefcaseBusiness, ChevronDown, Plus } from "lucide-react";

function UserForm({ form, setForm, onSubmit, editingId, onCancel }) {
  function handleChange(event) {
    setForm({ ...form, [event.target.name]: event.target.value });
  }

  return (
    <section className="panel form-panel" id="add-user">
      <div className="panel-heading">
        <div className="heading-icon"><Plus /></div>
        <div>
          <h2>{editingId ? "Edit User" : "Add New User"}</h2>
          <p>{editingId ? "Update user information." : "Fill in the details to add a new user."}</p>
        </div>
      </div>

      <div className="form-divider" />

      <form onSubmit={onSubmit}>
        <label htmlFor="name">Full Name</label>
        <div className="input-wrap">
          <UserRound />
          <input
            id="name"
            name="name"
            value={form.name}
            onChange={handleChange}
            placeholder="Enter full name"
            required
          />
        </div>

        <label htmlFor="email">Email Address</label>
        <div className="input-wrap">
          <Mail />
          <input
            id="email"
            name="email"
            type="email"
            value={form.email}
            onChange={handleChange}
            placeholder="Enter email address"
            required
          />
        </div>

        <label htmlFor="role">Role</label>
        <div className="input-wrap">
          <BriefcaseBusiness />
          <select id="role" name="role" value={form.role} onChange={handleChange}>
            <option value="Developer">Developer</option>
            <option value="Designer">Designer</option>
            <option value="Manager">Manager</option>
            <option value="Tester">Tester</option>
            <option value="Administrator">Administrator</option>
          </select>
          <ChevronDown className="select-chevron" />
        </div>

        <label>User Status</label>
        <div className="status-options">
          <button
            type="button"
            className={`status-choice ${form.status === "Active" ? "active-choice" : ""}`}
            onClick={() => setForm({ ...form, status: "Active" })}
          >
            <i className="green-dot" /> Active
          </button>
          <button
            type="button"
            className={`status-choice ${form.status === "Inactive" ? "inactive-choice" : ""}`}
            onClick={() => setForm({ ...form, status: "Inactive" })}
          >
            <i className="orange-dot" /> Inactive
          </button>
        </div>

        <button className="submit-button" type="submit">
          <Plus size={19} />
          {editingId ? "Save Changes" : "Add User"}
        </button>

        {editingId && (
          <button className="cancel-button" type="button" onClick={onCancel}>
            Cancel Editing
          </button>
        )}
      </form>
    </section>
  );
}

export default UserForm;
