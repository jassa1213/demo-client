import React, { useState } from "react";
import logo from "./logo.png";


const UserChangePassword = () => {
  const [oldPassword, setOldPassword] = useState(""); 
  const [newPassword, setNewPassword] = useState(""); 
  const [confirmPassword, setConfirmPassword] = useState(""); 

  const handleUserLogin = async () => {
  }
  
  const [showPassword, setShowPassword] = useState(false);
  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };
  return (
    <>

<nav className="navbar">
        <div className="navbar_logo">
          <img src={logo} alt="" width="270px" />
        </div>
        <div className="navbar_auth_right">
      <button >Register</button>
      <button className='active'>Login</button>
        </div>
      </nav>
      <div className="send_email">
        <div className="send_email_left">
          <img
            src="https://res.cloudinary.com/notesprofile/image/upload/v1695574487/Screenshot_1445-03-09_at_15.08.56_apbijy.png"
            alt=""
          />
        </div>
        <div className="send_email_right">
          <div className="send_email_content">
            <h2>USER &nbsp; LOGIN </h2>
            <br />

            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="34"
              viewBox="0 0 24 24"
              width="34"
              style={{ position: "relative", left: "66px", top: "-3px" }}
            >
              <path d="M0 0h24v24H0z" fill="none" />
              <path d="M18 8h-1V6c0-2.76-2.24-5-5-5S7 3.24 7 6v2H6c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V10c0-1.1-.9-2-2-2zm-6 9c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2zm3.1-9H8.9V6c0-1.71 1.39-3.1 3.1-3.1 1.71 0 3.1 1.39 3.1 3.1v2z" />
            </svg>
            <input   type={showPassword ? 'text' : 'password'} placeholder="Enter old password"  value={oldPassword}
        onChange={(e) => setOldPassword(e.target.value)} />
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="28"
              viewBox="0 0 24 24"
              width="28"
              style={{ position: "relative", left: "-60px", top: "-2px" }}
              onClick={togglePasswordVisibility}
            >
              <path d="M0 0h24v24H0z" fill="none" />
              <path d="M12 4.5C7 4.5 2.73 7.61 1 12c1.73 4.39 6 7.5 11 7.5s9.27-3.11 11-7.5c-1.73-4.39-6-7.5-11-7.5zM12 17c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5zm0-8c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3z" />
            </svg>

<br /><br />
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="34"
              viewBox="0 0 24 24"
              width="34"
              style={{ position: "relative", left: "66px", top: "-3px" }}
            >
              <path d="M0 0h24v24H0z" fill="none" />
              <path d="M18 8h-1V6c0-2.76-2.24-5-5-5S7 3.24 7 6v2H6c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V10c0-1.1-.9-2-2-2zm-6 9c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2zm3.1-9H8.9V6c0-1.71 1.39-3.1 3.1-3.1 1.71 0 3.1 1.39 3.1 3.1v2z" />
            </svg>
            <input   type={showPassword ? 'text' : 'password'} placeholder="Enter new password"  value={newPassword}
        onChange={(e) => setNewPassword(e.target.value)} />
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="28"
              viewBox="0 0 24 24"
              width="28"
              style={{ position: "relative", left: "-60px", top: "-2px" }}
              onClick={togglePasswordVisibility}
            >
              <path d="M0 0h24v24H0z" fill="none" />
              <path d="M12 4.5C7 4.5 2.73 7.61 1 12c1.73 4.39 6 7.5 11 7.5s9.27-3.11 11-7.5c-1.73-4.39-6-7.5-11-7.5zM12 17c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5zm0-8c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3z" />
            </svg>

            <br />
            <br />

            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="34"
              viewBox="0 0 24 24"
              width="34"
              style={{ position: "relative", left: "66px", top: "-3px" }}
            >
              <path d="M0 0h24v24H0z" fill="none" />
              <path d="M18 8h-1V6c0-2.76-2.24-5-5-5S7 3.24 7 6v2H6c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V10c0-1.1-.9-2-2-2zm-6 9c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2zm3.1-9H8.9V6c0-1.71 1.39-3.1 3.1-3.1 1.71 0 3.1 1.39 3.1 3.1v2z" />
            </svg>
            <input   type={showPassword ? 'text' : 'password'} placeholder="Enter confirm password"     value={confirmPassword}    onChange={(e) => setConfirmPassword(e.target.value)} />
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="28"
              viewBox="0 0 24 24"
              width="28"
              style={{ position: "relative", left: "-60px", top: "-2px" }}
              onClick={togglePasswordVisibility}
            >
              <path d="M0 0h24v24H0z" fill="none" />
              <path d="M12 4.5C7 4.5 2.73 7.61 1 12c1.73 4.39 6 7.5 11 7.5s9.27-3.11 11-7.5c-1.73-4.39-6-7.5-11-7.5zM12 17c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5zm0-8c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3z" />
            </svg>
            <button onClick={handleUserLogin}>Login</button>
            {/* {loading ? 'on' : 'off'} */}
            <br />

            <p>--------OR--------</p>
            <p className="span">
              Don't have an account? &nbsp; &nbsp;
              <a href="www.google.com">Sign up</a>

      {/* {error && <p className="error">{error}</p>} */}
            </p>
          </div>
        </div>
      </div>
    </>
  );
};


export default UserChangePassword