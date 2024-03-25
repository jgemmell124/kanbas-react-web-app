import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import * as client from "./client";

export default function Signup() {
  const [error, setError] = useState("");
  const [user, setUser] = useState({
    username: "", 
    password: ""
  });

  const navigate = useNavigate();

  const signup = async () => {
    try {
      await client.signup(user);
      navigate("/Kanbas/Account/Profile");
    } catch (err: any) {
      setError(err?.response?.data?.message);
    }
  };

  return (
    <div>
      <h1>Signup</h1>
      {error && <div>{error}</div>}
      <div className="form-outline mb-4">
        <label className="form-label">Username</label>
        <input
          style={{ maxWidth: "300px" }}
          className="form-control"
          placeholder="username"
          value={user.username}
          onChange={(e) =>
            setUser({ ...user, username: e.target.value })}/>
      </div>
      <div className="form-outline mb-4">
        <label className="form-label">Password</label>
        <input
          style={{ maxWidth: "300px" }}
          className="form-control"
          placeholder="password"
          type={"password"}
          value={user.password}
          onChange={(e) =>
            setUser({ ...user, password: e.target.value })}/>
      </div>
      <button
        onClick={signup}
        type="button"
        className="btn btn-danger btn-block mb-4"
      >
        Sign Up
      </button>
    </div>
  );
}

