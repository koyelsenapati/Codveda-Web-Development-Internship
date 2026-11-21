
import { useEffect, useState } from "react";
import * as userService from "../services/userService";

export function useUsers() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    let isMounted = true;

    async function loadUsers() {
      try {
        const data = await userService.getUsers();
        if (isMounted) setUsers(data);
      } catch (requestError) {
        if (isMounted) setError(requestError.message);
      } finally {
        if (isMounted) setLoading(false);
      }
    }

    loadUsers();
    return () => {
      isMounted = false;
    };
  }, []);

  async function addUser(user) {
    const newUser = await userService.createUser(user);
    setUsers(currentUsers => [newUser, ...currentUsers]);
    setError("");
    return newUser;
  }

  async function updateUser(id, updatedData) {
    const updatedUser = await userService.updateUser(id, updatedData);
    setUsers(currentUsers =>
      currentUsers.map(user => user._id === id ? updatedUser : user)
    );
    setError("");
    return updatedUser;
  }

  async function deleteUser(id) {
    await userService.deleteUser(id);
    setUsers(currentUsers => currentUsers.filter(user => user._id !== id));
    setError("");
  }

  function getUserById(id) {
    return users.find(user => user._id === id);
  }

  return {
    users,
    loading,
    error,
    addUser,
    updateUser,
    deleteUser,
    getUserById
  };
}
