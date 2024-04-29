import React, { useCallback, useState } from "react";
import { FaUserInjured, FaUserMd } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import axios from "axios";
import { FiEye, FiEyeOff } from "react-icons/fi";

export default function LoginDoctor() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const navigate = useNavigate();
  // const { setLoading } = useLoading();
  const [showPassword, setShowPassword] = useState(false);
  // const { isLoggedIn, setIsLoggedIn } = OrderState();

  const onSubmit = useCallback(
    async (data) => {
      // setLoading(true);

      try {
        // Send form data to backend
        const response = await axios.post(
          "https://healthbackend-3xh2.onrender.com/user/signin",
          data,
          {
            headers: {
              isvalidrequest: "twinsistech",
            },
          }
        );

        const user = response.data.result.user;

        // Saving TOken
        await localStorage.setItem("token", response.data.result.token);

        const doctor = await axios.get(
          `https://healthbackend-3xh2.onrender.com/doctor/${user._id}`,
          
          {
            headers: {
              "Content-Type": "application/json",
               Authorization: response.data.result.token,
            },
          }
        );

        

        // Store the token securely
        await localStorage.setItem(
          "docInfo",
          JSON.stringify(doctor.data.result.doctor)
        );
        

        // setLoading(false);
        // setIsLoggedIn(true);

        console.log("Token ", response.data.result.token);

        // Check the role from the response data
        const role = response.data.result.user.role;
        // console.log(role)

        // Redirect user based on the role
        if (role === "doctor") {
          await navigate("/doctor");
        } else if (role === "user") {
          navigate("/user");
        } else {
          // Handle unknown role
          // For now, let's redirect to the dashboard
          navigate("/dashboard");
        }
      } catch (error) {
        // setLoading(false);
        console.error("Error submitting form:", error);
        // Handle error, show error message, etc.
      }
    },
    [navigate]
  );

  const togglePasswordVisibility = useCallback(() => {
    setShowPassword((prevShowPassword) => !prevShowPassword);
  }, []);
  return (
    <div className="main-wrapper">
      <div className="content top-space">
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-8 offset-md-2">
              <div className="account-content">
                <div className="row align-items-center justify-content-center">
                  <div className="col-md-7 col-lg-6 login-left">
                    <img
                      src="assets/img/login-banner.png"
                      className="img-fluid"
                      alt="TwinDoc Login"
                    />
                  </div>
                  <div className="col-md-12 col-lg-6 login-right">
                    <div className="login-header">
                      <h3>
                        Login <span>TwinDoc</span>
                      </h3>
                    </div>
                    <form onSubmit={handleSubmit(onSubmit)}>
                      <div className="mb-3 form-focus">
                        <input
                          type="email"
                          {...register("email", {
                            required: "Email is required",
                            pattern: {
                              value: /^\S+@\S+$/i,
                              message: "Invalid email address",
                            },
                          })}
                          className="form-control floating"
                        />
                        <label className="focus-label">Email</label>
                      </div>
                      <div className="mb-2">
                        <label className="mt-2">Create Password</label>
                        <div className="d-flex">
                          <input
                            type={showPassword ? "text" : "password"}
                            {...register("password", {
                              required: "Password is required",
                              pattern: {
                                value:
                                  /^(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9]).{8,}$/,
                                message:
                                  "Password must contain at least 8 characters, one uppercase letter, one number, and one special character",
                              },
                            })}
                            className="form-control floating"
                          />
                          <button
                            type="button"
                            onClick={() => setShowPassword(!showPassword)}
                            className="">
                            {showPassword ? (
                              <FiEyeOff className="text-gray-500" />
                            ) : (
                              <FiEye className="text-gray-500" />
                            )}
                          </button>
                          {errors.password && (
                            <p className="text-red-500 text-xs italic">
                              {errors.password.message}
                            </p>
                          )}
                        </div>
                      </div>
                      <div className="text-end">
                        <a className="forgot-link" href="forgot-password.html">
                          Forgot Password ?
                        </a>
                      </div>
                      <button
                        className="btn btn-primary w-100 btn-lg login-btn"
                        type="submit">
                        Login
                      </button>
                      <div className="login-or">
                        <span className="or-line" />
                        <span className="span-or">or</span>
                      </div>
                      <div className="row social-login">
                        <div className="col-6">
                          <a href="#" className="btn btn-facebook w-100">
                            <i className="fab fa-facebook-f me-1" /> Login
                          </a>
                        </div>
                        <div className="col-6">
                          <a href="#" className="btn btn-google w-100">
                            <i className="fab fa-google me-1" /> Login
                          </a>
                        </div>
                      </div>
                      <div className="text-center dont-have">
                        Don’t have an account?<br></br>
                        <Link
                          to="/signup?role=doctor" // Include role parameter for Doctor signup
                          className="m-2">
                          <FaUserMd className="" /> Sign up as a Doctor
                        </Link>
                        <Link
                          to="/signup?role=patient" // Include role parameter for Patient signup
                          className="">
                          <FaUserInjured /> Sign up as a Patient
                        </Link>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
