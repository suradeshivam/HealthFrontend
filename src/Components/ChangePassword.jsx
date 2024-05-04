import axios from "axios";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { FiEye, FiEyeOff } from "react-icons/fi";
import { Link } from "react-router-dom";
import { Bounce, ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function ChangePassword() {
  const {
    register,
    formState: { errors },
  } = useForm();
  const [showPassword, setShowPassword] = useState();
  const [showConfirmPassword, setShowConfirmPassword] = useState();
  const [oldPassword, setOldPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showOldPassword, setShowOldPassword] = useState();
  const docInfo = JSON.parse(localStorage.getItem("docInfo"));
  const userId = docInfo.userId._id;
  const isAuthenticated = localStorage.getItem("token");

  const handleSubmit = async () => {
    if (newPassword.length < 3) {
      toast.error("Password must contain at least 8 characters", {
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
      return;
    }
    if (newPassword !== confirmPassword) {
      toast.error("Password doesn't match", {
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
      return;
    }

    const result = await axios.put(
      `https://healthbackend-3xh2.onrender.com/doctor/${userId}/updatePassword`,
      {
        oldPassword,
        newPassword,
      },
      {
        headers: {
          authorization: isAuthenticated,
        },
      }
    );
    toast(result.data.result);

    setOldPassword("");
    setConfirmPassword("");
    setNewPassword("");
  };

  return (
    <div className="main-wrapper">
      <div className="breadcrumb-bar-two">
        <div className="container">
          <div className="row align-items-center inner-banner">
            <div className="col-md-12 col-12 text-center">
              <h2 className="breadcrumb-title">Change Password</h2>
              <nav aria-label="breadcrumb" className="page-breadcrumb">
                <ol className="breadcrumb">
                  <li className="breadcrumb-item">
                    <a href="index.html">Home</a>
                  </li>
                  <li className="breadcrumb-item" aria-current="page">
                    Change Password
                  </li>
                </ol>
              </nav>
            </div>
          </div>
        </div>
      </div>
      <div className="content">
        <ToastContainer />
        <div className="container">
          <div className="row">
            <div className="col-md-5 col-lg-4 col-xl-3 theiaStickySidebar">
              <div className="profile-sidebar">
                <div className="widget-profile pro-widget-content">
                  <div className="profile-info-widget">
                    <a href="#" className="booking-doc-img">
                      <img
                        src="assets/img/doctors/doctor-thumb-02.jpg"
                        alt="User Image"
                      />
                    </a>
                    <div className="profile-det-info">
                      <h3>Dr. Darren Elder</h3>
                      <div className="patient-details">
                        <h5 className="mb-0">
                          BDS, MDS - Oral &amp; Maxillofacial Surgery
                        </h5>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="dashboard-widget">
                  <nav className="dashboard-menu">
                    <ul>
                      <li>
                        <Link to="/doctor">
                          <i className="fas fa-columns" />
                          <span>Dashboard</span>
                        </Link>
                      </li>
                      {/* <li>
                        <Link to="/appointments">
                          <i className="fas fa-calendar-check" />
                          <span>Appointments</span>
                        </Link>
                      </li> */}
                      <li>
                        <Link to="/schedule">
                          <i className="fas fa-hourglass-start" />
                          <span>Schedule Timings</span>
                        </Link>
                      </li>
                      <li>
                        <Link to="/accounts">
                          <i className="fas fa-file-invoice-dollar" />
                          <span>Accounts</span>
                        </Link>
                      </li>
                      <li>
                        <Link to="/reviews">
                          <i className="fas fa-star" />
                          <span>Reviews</span>
                        </Link>
                      </li>
                      <li>
                        <Link to="/profile">
                          <i className="fas fa-user-cog" />
                          <span>Profile Settings</span>
                        </Link>
                      </li>
                      <li className="active">
                        <Link to="/changepassword">
                          <i className="fas fa-lock" />
                          <span>Change Password</span>
                        </Link>
                      </li>
                      <li>
                        <Link to="/login">
                          <i className="fas fa-sign-out-alt" />
                          <span>Logout</span>
                        </Link>
                      </li>
                    </ul>
                  </nav>
                </div>
              </div>
            </div>
            <div className="col-md-7 col-lg-8 col-xl-9">
              <div className="card">
                <div className="card-body">
                  <div className="row">
                    <div className="col-md-12 col-lg-6">
                      <div className="mb-3">
                        <label className="mb-2">Old Password</label>
                        <div className="d-flex">
                          <input
                            value={oldPassword}
                            type={showOldPassword ? "text" : "password"}
                            {...register("oldPassword", {
                              required: "Password is required",
                              pattern: {
                                value:
                                  /^(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9]).{8,}$/,
                                message:
                                  "Password must contain at least 8 characters, one uppercase letter, one number, and one special character",
                              },
                            })}
                            onChange={(e) => setOldPassword(e.target.value)}
                            className="form-control"
                          />
                          <button
                            type="button"
                            onClick={() => setShowOldPassword(!showOldPassword)}
                            className="">
                            {showOldPassword ? (
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
                      <div className="mb-3">
                        <label className="mb-2">New Password</label>
                        <div className="d-flex">
                          <input
                            value={newPassword}
                            type={showPassword ? "text" : "password"}
                            {...register("newPassword", {
                              required: "Password is required",
                              pattern: {
                                value:
                                  /^(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9]).{8,}$/,
                                message:
                                  "Password must contain at least 8 characters, one uppercase letter, one number, and one special character",
                              },
                            })}
                            onChange={(e) => setNewPassword(e.target.value)}
                            className="form-control"
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
                      <div className="mb-3">
                        <label className="mb-2">Confirm Password</label>
                        <div className="d-flex">
                          <input
                            value={confirmPassword}
                            type={showConfirmPassword ? "text" : "password"}
                            {...register("confirmPassword", {
                              required: "Password is required",
                              pattern: {
                                value:
                                  /^(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9]).{8,}$/,
                                message:
                                  "Password must contain at least 8 characters, one uppercase letter, one number, and one special character",
                              },
                            })}
                            onChange={(e) => setConfirmPassword(e.target.value)}
                            className="form-control"
                          />
                          <button
                            type="button"
                            onClick={() =>
                              setShowConfirmPassword(!showConfirmPassword)
                            }
                            className="">
                            {showConfirmPassword ? (
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
                      <div className="submit-section">
                        <button
                          onClick={handleSubmit}
                          className="btn btn-primary submit-btn">
                          Save Changes
                        </button>
                      </div>
                    </div>
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
