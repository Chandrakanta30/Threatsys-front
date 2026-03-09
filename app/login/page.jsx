"use client";

import React, { useState } from "react";

const LoginPage = () => {
  const [role, setRole] = useState("student");

  return (
    <div className="login-body">
      <div className="ol-login-wrapper">
        <div className="row">

          {/* LEFT SIDE */}
          <div className="col-md-6">
            <div className="left-login">
              <a className="w-100" href="./index.html">
                <img
                  className="light-img"
                  src="images/logo-dark.svg"
                  alt="Threatsys Academy Logo"
                />
              </a>

              <h2>
                Hello,<br />
                <span>Welcome!</span>
              </h2>

              <p>
                New here? Request Access to join and log in to the LMS platform.
              </p>

              <a className="go-home" href="./index.html">
                ← Home
              </a>
            </div>
          </div>

          {/* RIGHT SIDE */}
          <div className="col-md-6">
            <div className="right-login">

              {/* ROLE SELECTOR */}
              <div className="ol-role-selector">
                {["student", "teacher", "admin"].map((item) => (
                  <div
                    key={item}
                    className={`ol-role-btn ${
                      role === item ? "active" : ""
                    }`}
                    onClick={() => setRole(item)}
                  >
                    {item.charAt(0).toUpperCase() + item.slice(1)}
                  </div>
                ))}
              </div>

{role}

              {/* ================= STUDENT ================= */}
              {role === "student" && (
                <form className="ol-form active">
                  <h2 className="ol-title">Login</h2>

                  <input
                    type="text"
                    className="ol-input"
                    placeholder="Student ID"
                    required
                  />

                  <input
                    type="password"
                    className="ol-input"
                    placeholder="Password / Access Code"
                    required
                  />

                  <div className="form-check mt-2">
                    <input
                      type="checkbox"
                      className="form-check-input"
                      id="rememberStudent"
                    />
                    <label htmlFor="rememberStudent">
                      Remember me
                    </label>
                  </div>

                  <button type="submit" className="ol-btn">
                    Login as Student
                  </button>
                </form>
              )}

              {/* ================= TEACHER ================= */}
              {role === "teacher" && (
                <form className="ol-form active">
                  <h2 className="ol-title">Login</h2>

                  <input
                    type="email"
                    className="ol-input"
                    placeholder="Teacher Email"
                    required
                  />

                  <input
                    type="password"
                    className="ol-input"
                    placeholder="Password / Access Code"
                    required
                  />

                  <button type="submit" className="ol-btn">
                    Login as Teacher
                  </button>
                </form>
              )}

              {/* ================= ADMIN ================= */}
              {role === "admin" && (
                <form className="ol-form active">
                  <h2 className="ol-title">Login</h2>

                  <input
                    type="text"
                    className="ol-input"
                    placeholder="Admin Username"
                    required
                  />

                  <input
                    type="password"
                    className="ol-input"
                    placeholder="Password"
                    required
                  />

                  <button type="submit" className="ol-btn">
                    Login as Admin
                  </button>
                </form>
              )}

            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default LoginPage;