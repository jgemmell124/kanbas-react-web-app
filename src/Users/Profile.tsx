import React, { useState, useEffect } from "react";
import * as client from "./client";
import { Link, useNavigate } from "react-router-dom";
export default function Profile() {
  const [profile, setProfile] = useState({ username: "", password: "", 
    firstName: "", lastName: "", dob: "", email: "", role: "USER" });

  const navigate = useNavigate();

  const fetchProfile = async () => {
    const account = await client.profile();
    setProfile(account);
  };

  useEffect(() => {
    fetchProfile();
  }, []);

  const save = async () => {
    await client.updateUser(profile);
  }

  const signout = async () => {
    await client.signout();
    navigate("Kanbas/Profile/signin");
  };

  return (
    <div>
      <h1>Profile</h1>
      {profile && (
        <div>
          <Link  
            style={{ width: '100%', maxWidth: "300px" }}
            to="/Kanbas/Account/Admin/Users"
            className="mb-3 btn btn-warning w-100">
            Users
          </Link>
          <form>
            <div className="form-outline mb-3">
              <label className="form-label">Username</label>
              <input
                type={"text"}
                style={{ maxWidth: "300px" }}
                className="form-control"
                placeholder="username"
                value={profile.username}
                onChange={(e) =>
                  setProfile({ ...profile, username: e.target.value })}/>
            </div>
            <div className="form-outline mb-3">
              <label className="form-label">Password</label>
              <input
                type={"password"}
                style={{ maxWidth: "300px" }}
                className="form-control"
                placeholder="password"
                value={profile.password}
                onChange={(e) =>
                  setProfile({ ...profile, password: e.target.value })}/>
            </div>
            <div className="form-outline mb-3">
              <label className="form-label">First Name</label>
              <input
                type={"text"}
                style={{ maxWidth: "300px" }}
                className="form-control"
                placeholder="first name"
                value={profile.firstName}
                onChange={(e) =>
                  setProfile({ ...profile, firstName: e.target.value })}/>
            </div>
            <div className="form-outline mb-3">
              <label className="form-label">Last Name</label>
              <input
                type={"text"}
                style={{ maxWidth: "300px" }}
                className="form-control"
                placeholder="last name"
                value={profile.lastName}
                onChange={(e) =>
                  setProfile({ ...profile, lastName: e.target.value })}/>
            </div>
            <div className="form-outline mb-3">
              <label className="form-label">Date of Birth</label>
              <input
                type={"date"}
                style={{ maxWidth: "300px" }}
                className="form-control"
                placeholder="date of birth"
                value={profile.dob}
                onChange={(e) =>
                  setProfile({ ...profile, dob: e.target.value })}/>
            </div>
            <div className="form-outline mb-3">
              <label className="form-label">Email</label>
              <input
                type={"email"}
                style={{ maxWidth: "300px" }}
                className="form-control"
                placeholder="email"
                value={profile.email}
                onChange={(e) =>
                  setProfile({ ...profile, email: e.target.value })}/>
            </div>
            <div className="form-outline mb-3">
              <label className="form-label">Role</label>
              <select
                className="form-select"
                style={{ maxWidth: "300px" }}
                onChange={(e) =>
                setProfile({ ...profile, role: e.target.value })}>
                <option value="USER">User</option>
                <option value="ADMIN">Admin</option>
                <option value="FACULTY">Faculty</option>
                <option value="STUDENT">Student</option>
              </select>
            </div>
            <button
              style={{ width: '100%', maxWidth: "300px" }}
              onClick={save}
              type="button"
              className="btn btn-secondary btn-block mb-3"
            >
              Save
            </button>
            <br />
            <button
              style={{ width: '100%', maxWidth: "300px" }}
              onClick={signout}
              type="button"
              className="btn btn-danger btn-block mb-3"
            >
              Sign Out
            </button>
          </form>
        </div>
      )}
    </div>
  );
}
