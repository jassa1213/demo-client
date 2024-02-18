import React, { useEffect } from "react";
import logo from "./logo.png";
import { useDispatch, useSelector } from "react-redux";
import loginUser from "./actions/user_login_actions";
import Loading from "./loading";
import { useNavigate } from "react-router";
import { useFormik } from "formik";
import * as Yup from "yup";

const UserLogin = () => {
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: Yup.object({
      email: Yup.string()
        .email("Invalid email address")
        .required("Email is required"),
      password: Yup.string()
        .min(8, "Password must be at least 8 characters")
        .required("Password is required"),
    }),
    onSubmit: (values) => {
      // Handle form submission with the form values
      console.log(values);
    },
  });

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const userLogin = useSelector((state) => state.userLogin);
  const { loading, error, userInfo } = userLogin;

  const handleUserLogin = async () => {
    dispatch(loginUser(formik.values.email, formik.values.password));
  };

  useEffect(() => {
    if (userInfo) {
      navigate("/");
    }
    if (error) {
      console.log(error);
    }
  }, [userInfo, navigate, error]);

  return (
    <>
      <nav className="navbar">
        <div className="navbar_logo">
          <img src={logo} alt="" width="270px" />
        </div>
        <div className="navbar_auth_right">
          <button>Register</button>
          <button className="active">Login</button>
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
            {loading && <Loading />}
            <br />
            <form onSubmit={formik.handleSubmit}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="34"
                viewBox="0 0 24 24"
                width="34"
                style={{ position: "relative", left: "66px", top: "-3px" }}
              >
                <path d="M0 0h24v24H0z" fill="none" />
                <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
              </svg>
              <input
                type="text"
                placeholder="Email address"
                id="email"
                name="email"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.email}
              />
              {formik.touched.email && formik.errors.email && (
  <div style={{ color: 'red', marginLeft:"4em"}}>{formik.errors.email}</div>

              )}

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
              <input
                id="password"
                name="password"
                placeholder="Enter password"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.password}
              />
              

              {formik.touched.password && formik.errors.password && (
  <div style={{ color: 'red', marginLeft:"4em"}}>{formik.errors.password}</div>
              )}

              <button onClick={handleUserLogin}>Login</button>
            </form>
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

export default UserLogin;
