import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { User } from "./client";
import * as client from "./client";

export default function Signin() {
  const [credentials, setCredentials] = useState<User>({ _id: "",
    username: "", password: "", firstName: "", lastName: "", role: "USER"
  });
  const navigate = useNavigate();
  const signin = async () => {
    try {
      await client.signin(credentials);
      navigate("/Kanbas/Account/Profile");
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div>
      <h1>Sign In</h1>
      <form>
        <div className="form-outline mb-4">
          <label className="form-label">Username</label>
          <input
            style={{ maxWidth: "300px" }}
            className="form-control"
            placeholder="username"
            value={credentials.username}
            onChange={(e) =>
              setCredentials({ ...credentials, username: e.target.value })}/>
        </div>
        <div className="form-outline mb-4">
          <label className="form-label">Password</label>
          <input
            style={{ maxWidth: "300px" }}
            className="form-control"
            placeholder="password"
            type={"password"}
            value={credentials.password}
            onChange={(e) =>
              setCredentials({ ...credentials, password: e.target.value })}/>
        </div>
        <button
          onClick={signin}
          type="button"
          className="btn btn-danger btn-block mb-4"
        >
          Sign in
        </button>
      </form>
    </div>
  );
}
