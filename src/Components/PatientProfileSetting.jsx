import React from "react";
import { Link } from "react-router-dom";

export default function Profilesettings() {
  return (
    <>
      {/* Mirrored from doccure.dreamstechnologies.com/html/template/profile-settings.html by HTTrack Website Copier/3.x [XR&CO'2014], Tue, 16 Apr 2024 16:46:25 GMT */}
      <meta charSet="utf-8" />
      <title>Doccure</title>
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta
        name="description"
        content="The responsive professional Doccure template offers many features, like scheduling appointments with  top doctors, clinics, and hospitals via voice, video call & chat."
      />
      <meta
        name="keywords"
        content="practo clone, doccure, doctor appointment, Practo clone html template, doctor booking template"
      />
      <meta
        name="author"
        content="Practo Clone HTML Template - Doctor Booking Template"
      />
      <meta
        property="og:url"
        content="https://doccure.dreamstechnologies.com/html/"
      />
      <meta property="og:type" content="website" />
      <meta
        property="og:title"
        content="Doctors Appointment HTML Website Templates | Doccure"
      />
      <meta
        property="og:description"
        content="The responsive professional Doccure template offers many features, like scheduling appointments with  top doctors, clinics, and hospitals via voice, video call & chat."
      />
      <meta property="og:image" content="assets/img/preview-banner.jpg" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta
        property="twitter:domain"
        content="https://doccure.dreamstechnologies.com/html/"
      />
      <meta
        property="twitter:url"
        content="https://doccure.dreamstechnologies.com/html/"
      />
      <meta
        name="twitter:title"
        content="Doctors Appointment HTML Website Templates | Doccure"
      />
      <meta
        name="twitter:description"
        content="The responsive professional Doccure template offers many features, like scheduling appointments with  top doctors, clinics, and hospitals via voice, video call & chat."
      />
      <meta name="twitter:image" content="assets/img/preview-banner.jpg" />
      <link href="assets/img/favicon.png" rel="icon" />
      <link rel="stylesheet" href="assets/css/bootstrap.min.css" />
      <link
        rel="stylesheet"
        href="assets/plugins/fontawesome/css/fontawesome.min.css"
      />
      <link
        rel="stylesheet"
        href="assets/plugins/fontawesome/css/all.min.css"
      />
      <link rel="stylesheet" href="assets/css/feather.css" />
      <link
        rel="stylesheet"
        href="assets/css/bootstrap-datetimepicker.min.css"
      />
      <link
        rel="stylesheet"
        href="assets/plugins/select2/css/select2.min.css"
      />
      <link rel="stylesheet" href="assets/css/custom.css" />
      <div className="main-wrapper">
        <div className="breadcrumb-bar-two">
          <div className="container">
            <div className="row align-items-center inner-banner">
              <div className="col-md-12 col-12 text-center">
                <h2 className="breadcrumb-title">Profile Settings</h2>
                <nav aria-label="breadcrumb" className="page-breadcrumb">
                  <ol className="breadcrumb">
                    <li className="breadcrumb-item">
                      <a href="index.html">Home</a>
                    </li>
                    <li className="breadcrumb-item" aria-current="page">
                      Profile Settings
                    </li>
                  </ol>
                </nav>
              </div>
            </div>
          </div>
        </div>
        <div className="content">
          <div className="container">
            <div className="row">
              <div className="col-md-5 col-lg-4 col-xl-3 theiaStickySidebar">
                <div className="profile-sidebar">
                  <div className="widget-profile pro-widget-content">
                    <div className="profile-info-widget">
                      <a href="#" className="booking-doc-img">
                        <img
                          src="assets/img/patients/patient.jpg"
                          alt="User Image"
                        />
                      </a>
                      <div className="profile-det-info">
                        <h3>Richard Wilson</h3>
                        <div className="patient-details">
                          <h5>
                            <i className="fas fa-birthday-cake" /> 24 Jul 1983,
                            38 years
                          </h5>
                          <h5 className="mb-0">
                            <i className="fas fa-map-marker-alt" /> Newyork, USA
                          </h5>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="dashboard-widget">
                    <nav className="dashboard-menu">
                      <ul>
                        <li className="active">
                          <Link to="/patient">
                            <i className="fas fa-columns" />
                            <span>Dashboard</span>
                          </Link>
                        </li>

                        <li>
                          <Link to="/orders">
                            <i className="fas fa-list-alt" />
                            <span>Orders</span>
                            <small className="unread-msg">7</small>
                          </Link>
                        </li>

                        <li>
                          <Link to="/patientprofile">
                            <i className="fas fa-user-cog" />
                            <span>Profile Settings</span>
                          </Link>
                        </li>
                        <li>
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
                    <form>
                      <div className="row">
                        <div className="col-12 col-md-12">
                          <div className="mb-3">
                            <div className="change-avatar">
                              <div className="profile-img">
                                <img
                                  src="assets/img/patients/patient.jpg"
                                  alt="User Image"
                                />
                              </div>
                              <div className="upload-img">
                                <div className="change-photo-btn">
                                  <span>
                                    <i className="fa fa-upload" /> Upload Photo
                                  </span>
                                  <input type="file" className="upload" />
                                </div>
                                <small className="form-text text-muted">
                                  Allowed JPG, GIF or PNG. Max size of 2MB
                                </small>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="col-12 col-md-6">
                          <div className="mb-3">
                            <label className="mb-2">First Name</label>
                            <input type="text" className="form-control" />
                          </div>
                        </div>
                        <div className="col-12 col-md-6">
                          <div className="mb-3">
                            <label className="mb-2">Last Name</label>
                            <input type="text" className="form-control" />
                          </div>
                        </div>
                        <div className="col-12 col-md-6">
                          <div className="mb-3">
                            <label className="mb-2">Date of Birth</label>
                            <div>
                              <input
                                type="text"
                                className="form-control datetimepicker"
                              />
                            </div>
                          </div>
                        </div>
                        <div className="col-12 col-md-6">
                          <div className="mb-3">
                            <label className="mb-2">Blood Group</label>
                            <select className="form-select form-control">
                              <option>A-</option>
                              <option>A+</option>
                              <option>B-</option>
                              <option>B+</option>
                              <option>AB-</option>
                              <option>AB+</option>
                              <option>O-</option>
                              <option>O+</option>
                            </select>
                          </div>
                        </div>
                        <div className="col-12 col-md-6">
                          <div className="mb-3">
                            <label className="mb-2">Email ID</label>
                            <input type="email" className="form-control" />
                          </div>
                        </div>
                        <div className="col-12 col-md-6">
                          <div className="mb-3">
                            <label className="mb-2">Mobile</label>
                            <input type="text" className="form-control" />
                          </div>
                        </div>
                        <div className="col-12 col-md-6">
                          <div className="mb-3">
                            <label className="mb-2">Height</label>
                            <input type="text" className="form-control" />
                          </div>
                        </div>
                        <div className="col-12 col-md-6">
                          <div className="mb-3">
                            <label className="mb-2">Age</label>
                            <input type="text" className="form-control" />
                          </div>
                        </div>
                        <div className="col-12 col-md-6">
                          <div className="mb-3">
                            <label className="mb-2">Allergies</label>
                            <input type="text" className="form-control" />
                          </div>
                        </div>
                        <div className="col-12">
                          <div className="mb-3">
                            <label className="mb-2">Address</label>
                            <input type="text" className="form-control" />
                          </div>
                        </div>
                        <div className="col-12 col-md-6">
                          <div className="mb-3">
                            <label className="mb-2">City</label>
                            <input type="text" className="form-control" />
                          </div>
                        </div>
                        <div className="col-12 col-md-6">
                          <div className="mb-3">
                            <label className="mb-2">State</label>
                            <input type="text" className="form-control" />
                          </div>
                        </div>
                        <div className="col-12 col-md-6">
                          <div className="mb-3">
                            <label className="mb-2">Zip Code</label>
                            <input type="text" className="form-control" />
                          </div>
                        </div>
                        <div className="col-12 col-md-6">
                          <div className="mb-3">
                            <label className="mb-2">Country</label>
                            <input type="text" className="form-control" />
                          </div>
                        </div>
                      </div>
                      <div className="submit-section">
                        <button
                          type="submit"
                          className="btn btn-primary submit-btn">
                          Save Changes
                        </button>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Mirrored from doccure.dreamstechnologies.com/html/template/profile-settings.html by HTTrack Website Copier/3.x [XR&CO'2014], Tue, 16 Apr 2024 16:46:25 GMT */}
    </>
  );
}
