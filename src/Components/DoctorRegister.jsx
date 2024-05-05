import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { useLocation } from "react-router-dom";
import axios from "axios";
import { FiEye, FiEyeOff } from "react-icons/fi";

export default function DoctorRegister() {
  const location = useLocation();
  const [role, setRole] = useState("");

  useEffect(() => {
    const searchParams = new URLSearchParams(location.search);
    const roleParam = searchParams.get("role");
    setRole(roleParam);
  }, [location]);

  const {
    register,
    handleSubmit,
    formState: { errors },
    getValues,
  } = useForm();
  const navigate = useNavigate();
  // const { setLoading } = useLoading(); // Get the setLoading function from context
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const onSubmit = async (data) => {
    // setLoading(true); // Set loading to true before form submission

    // Validation for password matching
    if (data.password !== data.confirmPassword) {
      // setLoading(false); // Set loading to false after validation
      alert("Passwords do not match");
      return;
    }

    try {
      // Remove confirm password field from data
      delete data.confirmPassword;

      // Set name field to email
      data.name = data.email;

      // Replace phoneNumber with mobileNumber
      data.mobileNumber = data.phoneNumber;
      delete data.phoneNumber;

      // Include the role in the form data
      data.role = role;

      // Include status field set to "active"
      data.status = "active";

      // Send form data to backend
      const response = await axios.post(
        "https://healthbackend-3xh2.onrender.com/user/signup",
        data,
        {
          headers: {
            isvalidrequest: "twinsistech",
          },
        }
      );

      // setLoading(false); // Set loading to false after successful submission
      console.log("Form submitted:", data);
      console.log("Response from backend:", response.data);

      // Navigate to the OTP page after successful signup
      navigate("/doctor/", { state: { phoneNumber: data.mobileNumber } });
    } catch (error) {
      // setLoading(false); // Set loading to false after error
      console.error("Error submitting form:", error);
      // Handle error, show error message, etc.
    }
  };
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
                      alt="Login Banner"
                    />
                  </div>
                  <div className="col-md-12 col-lg-6 login-right">
                    <div className="login-header">
                      <h3>
                        Doctor Register{" "}
                        <a href="register.html">Not a Doctor?</a>
                      </h3>
                    </div>
                    <form onSubmit={handleSubmit(onSubmit)}>
                      <div className="mb-2 ">
                        <label className="">Email</label>
                        <input
                          id="email"
                          type="email"
                          placeholder="Email Address"
                          {...register("email", {
                            required: "Email is required",
                            pattern: {
                              value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                              message: "Invalid email address",
                            },
                          })}
                          className="form-control floating"
                        />
                        {errors.email && (
                          <p className="text-red-500 text-xs italic">
                            {errors.email.message}
                          </p>
                        )}
                      </div>
                      <div className="mb-2 ">
                        <label className="mt-2">Mobile Number</label>
                        <input
                          type="text"
                          {...register("phoneNumber", {
                            required: "Phone number is required",
                            pattern: {
                              value: /^\d{10}$/,
                              message: "Invalid phone number",
                            },
                          })}
                          className="form-control floating"
                        />
                        {errors.phoneNumber && (
                          <p className="text-red-500 text-xs italic">
                            {errors.phoneNumber.message}
                          </p>
                        )}
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
                      <div className="mb-2">
                        <label className="mt-2">Confirm Password</label>
                        <div className="d-flex">
                          <input
                            type={showConfirmPassword ? "text" : "password"}
                            {...register("confirmPassword", {
                              required: "Confirm Password is required",
                              validate: (value) =>
                                value === getValues("password") ||
                                "Passwords do not match",
                            })}
                            className="form-control floating"
                          />
                          <button
                            type="button"
                            onClick={() =>
                              setShowConfirmPassword((prev) => !prev)
                            }
                            className="">
                            {showConfirmPassword ? (
                              <FiEyeOff className="text-gray-500" />
                            ) : (
                              <FiEye className="text-gray-500" />
                            )}
                          </button>
                          {errors.confirmPassword && (
                            <p className="text-red-500 text-xs italic">
                              {errors.confirmPassword.message}
                            </p>
                          )}
                        </div>
                      </div>
                      <div className="text-end">
                        <Link to={"/login"}>
                          <a className="forgot-link">
                            Already have an account?
                          </a>
                        </Link>
                      </div>
                      <button
                        className="btn btn-primary w-100 btn-lg login-btn"
                        type="submit">
                        Signup
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
