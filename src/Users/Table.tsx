import React, { useState, useEffect } from "react";
import * as client from "./client";
import { User } from "./client";
import { BsPencil, BsTrash3Fill, BsPlusCircleFill, BsFillCheckCircleFill } from "react-icons/bs";

export default function UserTable() {
  const [users, setUsers] = useState<User[]>([]);
  const [user, setUser] = useState<User>({
    _id: "", username: "", password: "", firstName: "",
    lastName: "", role: "USER" });
  const [role, setRole] = useState("USER");

  const fetchUsersByRole = async (role: string) => {
    const users = await client.findUsersByRole(role);
    setRole(role);
    setUsers(users);
  };

  const createUser = async () => {
    try {
      const newUser = await client.createUser(user);
      setUsers([newUser, ...users]);
    } catch (err) {
      console.log(err);
    }
  };

  const deleteUser = async (user: User) => {
    try {
      await client.deleteUser(user);
      setUsers(users.filter((u) => u._id !== user._id));
    } catch (err) {
      console.log(err);
    }
  };

  const selectUser = async (user: User) => {
    try {
      const u = await client.findUserById(user._id);
      setUser(u);
    } catch (err) {
      console.log(err);
    }
  };

  const updateUser = async () => {
    try {
      const status = await client.updateUser(user);
      setUsers(users.map((u) =>
        (u._id === user._id ? user : u)));
    } catch (err) {
      console.log(err);
    }
  };

  const fetchUsers = async () => {
    const users = await client.findAllUsers();
    setUsers(users);
  };

  useEffect(() => { 
    fetchUsers(); 
  }, []);

  return (
    <div>
      <select
        onChange={(e) => fetchUsersByRole(e.target.value)}
        value={role || "USER"}
        className="form-control w-25 float-end m-3"
      >
        <option value="USER">User</option>
        <option value="ADMIN">Admin</option>
        <option value="FACULTY">Faculty</option>
        <option value="STUDENT">Student</option>
      </select>
      <h1>User Table</h1>
      <table className="table">
        <thead>
          <tr>
            <th>Username</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Role</th>
            <th>&nbsp;</th>
          </tr>
          <tr>
            <td>
              <div className="row">
                <input 
                  className="form-control col"
                  placeholder="username"
                  value={user.username} 
                  onChange={(e) =>
                  setUser({ ...user, username: e.target.value })}/>
                <input 
                  className="form-control col"
                  placeholder="password"
                  value={user.password}
                  onChange={(e) =>
                    setUser({ ...user, password: e.target.value })}/>
              </div>
            </td>
            <td>
              <input
                className="form-control"
                placeholder="first name"
                value={user.firstName} onChange={(e) =>
                setUser({ ...user, firstName: e.target.value })}/>
            </td>
            <td>
              <input
                placeholder="last name"
                className="form-control"
                value={user.lastName} onChange={(e) =>
                setUser({ ...user, lastName: e.target.value })}/>
            </td>
            <td>
              <select 
                onChange={(e) => fetchUsersByRole(e.target.value)}
                value={role || "USER"}
                className="form-select w-25 float-end"
              >
                <option value="USER">User</option>
                <option value="ADMIN">Admin</option>
                <option value="FACULTY">Faculty</option>
                <option value="STUDENT">Student</option>
              </select>
            </td>
            <td>
              <button className="btn btn-success me-2">
                <BsPlusCircleFill 
                  onClick={createUser}
                />
              </button>
              <button className="btn btn-success me-2">
                <BsFillCheckCircleFill 
                  onClick={updateUser}
                />
              </button>
            </td>
          </tr>
        </thead>
        <tbody>
          {users.map((user: User, index) => (
            <tr key={user._id ?? index}>
              <td>{user.username}</td>
              <td>{user.firstName}</td>
              <td>{user.lastName}</td>
              <td>{user.role}</td>
              <td>
                <button className="btn btn-danger me-2" onClick={() => deleteUser(user)}>
                  <BsTrash3Fill />
                </button>
                <button className="btn btn-warning me-2">
                  <BsPencil onClick={() => selectUser(user)} />
                </button>
              </td>
            </tr>))}
        </tbody>
      </table>
    </div>
  );
}
