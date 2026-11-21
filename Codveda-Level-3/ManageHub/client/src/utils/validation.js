
export function validateUser(user) {
  const errors = {};

  if (!user.name || !user.name.trim()) {
    errors.name = "Full name is required.";
  } else if (user.name.trim().length < 2) {
    errors.name = "Name must contain at least 2 characters.";
  }

  if (!user.email || !user.email.trim()) {
    errors.email = "Email address is required.";
  } else {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailPattern.test(user.email.trim())) {
      errors.email = "Enter a valid email address.";
    }
  }

  const validRoles = [
    "Developer",
    "Designer",
    "Manager",
    "Tester",
    "Administrator"
  ];

  if (!validRoles.includes(user.role)) {
    errors.role = "Please select a valid role.";
  }

  if (!["Active", "Inactive"].includes(user.status)) {
    errors.status = "Please select a valid status.";
  }

  return {
    isValid: Object.keys(errors).length === 0,
    errors
  };
}
