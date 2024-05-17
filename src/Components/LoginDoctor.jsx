import React, { useCallback, useState } from "react";
import { FaUserInjured, FaUserMd } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import axios from "axios";
import { FiEye, FiEyeOff } from "react-icons/fi";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';
import { Bounce, ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

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
      toast("Please wait while we are fetching your data");
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

        console.log(response);
        const user = response.data.result.user;

        // Saving TOken
        await localStorage.setItem("token", response.data.result.token);

        if (user.createdProfile && user.role === "doctor") {
          const doctor = await axios.get(
            `https://healthbackend-3xh2.onrender.com/doctor/${user._id}`,

            {
              headers: {
                "Content-Type": "application/json",
                Authorization: response.data.result.token,
              },
            }
          );

          toast("Data fetched successfully");
          // Store the token securely
          await localStorage.setItem(
            "docInfo",
            JSON.stringify(doctor.data.result.doctor)
          );
        } else if (user.createdProfile && user.role === "user") {
          const patient = await axios.get(
            `https://healthbackend-3xh2.onrender.com/patient/${user._id}`,

            {
              headers: {
                "Content-Type": "application/json",
                Authorization: response.data.result.token,
              },
            }
          );

          toast("Data fetched successfully");
          // Store the token securely
          await localStorage.setItem(
            "patientInfo",
            JSON.stringify(patient.data.result)
          );
          console.log(patient.data.result);
        }
        await localStorage.setItem("userInfo", JSON.stringify(user));
        const role = user.role;
        console.log(role);
        if (role === "doctor") {
          await navigate("/doctor");
        } else if (role === "user") {
          console.log("here");
          navigate("/user");
        } else {
          console.log("here");
          navigate("/dashboard");
        }
      } catch (error) {
        // setLoading(false);
        console.error("Error submitting form:", error);
        toast.error(error.response.data.message, {
          position: "top-right",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
          transition: Bounce,
        });
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
            <ToastContainer />
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
                      <div className="mb-3 ">
                        <label className="focus-label">Email</label>
                        <input
                          type="email"
                          placeholder="Email"
                          {...register("email", {
                            required: "Email is required",
                            pattern: {
                              value: /^\S+@\S+$/i,
                              message: "Invalid email address",
                            },
                          })}
                          className="form-control floating"
                        />
                      </div>
                      <div className="mb-2">
                        <label className="mt-2">Enter Your Password</label>
                        <div className="pass-group d-flex">
                          <input
                            placeholder="Password"
                            type={showPassword ? "text" : "password"}
                            {...register("password", {
                              required: "Password is required",
                              pattern: {
                                message:
                                  "Password must contain at least 8 characters, one uppercase letter, one number, and one special character",
                              },
                            })}
                            className="form-control pass-input"
                          />
                          <span
                            
                            onClick={() => setShowPassword(!showPassword)}
                            className="toggle-password">
                            <FontAwesomeIcon icon={showPassword ? faEyeSlash : faEye} />
                          </span>
                          {errors.password && (
                            <p className="text-red-500 text-xs italic">
                              {errors.password.message}
                            </p>
                          )}
                        </div>
                      </div>
                      <div className="text-end">
                        <a className="forgot-link">Forgot Password ?</a>
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
                          to="/signup?role=user" // Include role parameter for Patient signup
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
