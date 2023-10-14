import React, { useEffect, useState } from "react";
import logo from "./logo.png";
import "./user_register.css";
import { useDispatch, useSelector } from "react-redux";
import sellerRegisterAction from "./actions/selller_register_actions";
import Loading from "./loading";

const SellerRegister = () => {
  const [formData, setFormData] = useState({
    email: localStorage.getItem("email"),
    username: "",
    fullName: "",
    phoneNumber: "",
    gender: "",
    password: "",
    occupation: "",
    pincode: "",
    landmark: "",
    state: "",
  });
  const dispatch = useDispatch();
  const sellerRegisterSelector = useSelector((state) => state.sellerRegister);
  const { loading, error, userInfo } = sellerRegisterSelector;
  const handleUserRegister = () => {
    dispatch(sellerRegisterAction(formData));
  };
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  useEffect(() => {
    if (error) {
      console.log(error);
    }
    if (userInfo) {
      console.log(userInfo);
    }
  }, [error, userInfo]);
  return (
    <>
      {loading && <Loading />}
      <nav className="navbar">
        <div className="navbar_logo">
          <img src={logo} alt="" width="270px" />
        </div>
      </nav>
      <div className="send_email">
        <div className="send_email_left">
          <img
            src="https://res.cloudinary.com/notesprofile/image/upload/v1695634638/Screenshot_1445-03-10_at_13.51.06_ckoi7r.png"
            alt=""
          />
        </div>
        <div className="send_email_right">
          <div className="user_register_content">
            <h2>Seller &nbsp; Details </h2>

            <form>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="27"
                viewBox="0 0 24 24"
                width="26"
              >
                <path d="M0 0h24v24H0z" fill="none" />
                <path d="M3 5v14c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2H5c-1.11 0-2 .9-2 2zm12 4c0 1.66-1.34 3-3 3s-3-1.34-3-3 1.34-3 3-3 3 1.34 3 3zm-9 8c0-2 4-3.1 6-3.1s6 1.1 6 3.1v1H6v-1z" />
              </svg>
              <input
                type="text"
                placeholder="Create username"
                name="username"
                value={formData.username}
                onChange={handleChange}
              />
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="27"
                viewBox="0 0 24 24"
                width="26"
              >
                <path d="M0 0h24v24H0z" fill="none" />
                <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
              </svg>{" "}
              <input type="text" placeholder="Full Name"   name="fullName"
    value={formData.fullName}
    onChange={handleChange}/>
              <select
  name="country"
  value={formData.country}
  onChange={handleChange}
>
  <option value="">Select Country</option>
  <option value="India">India</option>
  <option value="Canada">Canada</option>
  <option value="USA">USA</option>
  <option value="Russia">Russia</option>
</select>
<select
  name="state"
  value={formData.state}
  onChange={handleChange}
>
  <option value="">Select State</option>
  <option value="Punjab">Punjab</option>
  <option value="Delhi">Delhi</option>
  <option value="Chandigarh">Chandigarh</option>
</select>

              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="27"
                viewBox="0 0 24 24"
                width="26"
              >
                <path d="M0 0h24v24H0z" fill="none" />
                <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
              </svg>
              <input
  type="text"
  placeholder="Landmark"
  name="landmark"
  value={formData.landmark}
  onChange={handleChange}
/>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                enable-background="new 0 0 24 24"
                height="26"
                viewBox="0 0 24 24"
                width="26"
              >
                <g>
                  <rect fill="none" height="27" width="26" />
                </g>
                <g>
                  <path d="M17,11V3H7v4H3v14h8v-4h2v4h8V11H17z M7,19H5v-2h2V19z M7,15H5v-2h2V15z M7,11H5V9h2V11z M11,15H9v-2h2V15z M11,11H9V9h2 V11z M11,7H9V5h2V7z M15,15h-2v-2h2V15z M15,11h-2V9h2V11z M15,7h-2V5h2V7z M19,19h-2v-2h2V19z M19,15h-2v-2h2V15z" />
                </g>
              </svg>{" "}

              <input
  type="text"
  placeholder="PIN CODE"
  name="pincode"
  value={formData.pincode}
  onChange={handleChange}
/>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="26"
                viewBox="0 0 24 24"
                width="26"
              >
                <path d="M0 0h24v24H0z" fill="none" />
                <path d="M20.01 15.38c-1.23 0-2.42-.2-3.53-.56-.35-.12-.74-.03-1.01.24l-1.57 1.97c-2.83-1.35-5.48-3.9-6.89-6.83l1.95-1.66c.27-.28.35-.67.24-1.02-.37-1.11-.56-2.3-.56-3.53 0-.54-.45-.99-.99-.99H4.19C3.65 3 3 3.24 3 3.99 3 13.28 10.73 21 20.01 21c.71 0 .99-.63.99-1.18v-3.45c0-.54-.45-.99-.99-.99z" />
              </svg>
              <input
  type="text"
  placeholder="Phone number"
  name="phoneNumber"
  value={formData.phoneNumber}
  onChange={handleChange}
/>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="27"
                viewBox="0 0 24 24"
                width="26"
              >
                <path d="M0 0h24v24H0z" fill="none" />
                <path d="M12.65 10C11.83 7.67 9.61 6 7 6c-3.31 0-6 2.69-6 6s2.69 6 6 6c2.61 0 4.83-1.67 5.65-4H17v4h4v-4h2v-4H12.65zM7 14c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2z" />
              </svg>

              <input
  type="text"
  placeholder="Create password"
  name="password"
  value={formData.password}
  onChange={handleChange}
/>
<select
  name="gender"
  value={formData.gender}
  onChange={handleChange}
>
  <option value="">Select Gender</option>
  <option value="male">Male</option>
  <option value="female">Female</option>
  <option value="other">Other</option>
</select>

<select
  name="occupation"
  value={formData.occupation}
  onChange={handleChange}
>
  <option value="">Select Occupation</option>
  <option value="india">India</option>
  <option value="teacher">Teacher</option>
  <option value="engineer">Engineer</option>
  <option value="doctor">Doctor</option>
  <option value="artist">Artist</option>
  <option value="self employed">Self Employed</option>
</select>

            </form>
            <button onClick={handleUserRegister}>Continue</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default SellerRegister;
