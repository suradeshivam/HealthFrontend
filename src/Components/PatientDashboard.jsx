import React, { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
export default function Patientdashboard() {
  const navigate = useNavigate();

  useEffect(() => {
    const userInfo = JSON.parse(localStorage.getItem("userInfo"));
    if (userInfo.role !== "user") {
      navigate("/");
    }
  }, []);

  return (
    <>
      {/* Mirrored from doccure.dreamstechnologies.com/html/template/patient-dashboard.html by HTTrack Website Copier/3.x [XR&CO'2014], Tue, 16 Apr 2024 16:46:18 GMT */}
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
      <link rel="stylesheet" href="assets/plugins/apex/apexcharts.css" />
      <link rel="stylesheet" href="assets/css/custom.css" />

      <div className="main-wrapper">
        <div className="breadcrumb-bar-two">
          <div className="container">
            <div className="row align-items-center inner-banner">
              <div className="col-md-12 col-12 text-center">
                <h2 className="breadcrumb-title">Dashboard</h2>
                <nav aria-label="breadcrumb" className="page-breadcrumb">
                  <ol className="breadcrumb">
                    <li className="breadcrumb-item">
                      <a href="index.html">Home</a>
                    </li>
                    <li className="breadcrumb-item" aria-current="page">
                      Dashboard
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
                        {/* <li>
                          <Link to="/favourites">
                            <i className="fas fa-bookmark" />
                            <span>Favourites</span>
                          </Link>
                        </li> */}
                        {/* <li>
                          <Link to="/dependent">
                            <i className="fas fa-users" />
                            <span>Dependent</span>
                          </Link>
                        </li> */}
                        {/* <li>
                      <a href="chat.html">
                        <i className="fas fa-comments" />
                        <span>Message</span>
                        <small className="unread-msg">23</small>
                      </a>
                    </li> */}
                        {/* <li>
                          <Link to="/patient-accounts">
                            <i className="fas fa-file-invoice-dollar" />
                            <span>Accounts</span>
                          </Link>
                        </li> */}
                        <li>
                          <Link to="/orders">
                            <i className="fas fa-list-alt" />
                            <span>Orders</span>
                            <small className="unread-msg">7</small>
                          </Link>
                        </li>
                        {/* <li>
                          <Link to="/medical-records">
                            <i className="fas fa-clipboard" />
                            <span>Add Medical Records</span>
                          </Link>
                        </li> */}
                        {/* <li>
                          <Link to="/medical-details">
                            <i className="fas fa-file-medical-alt" />
                            <span>Medical Details</span>
                          </Link>
                        </li> */}
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
                <div className="row">
                  <div className="col-12 col-md-6 col-lg-4 col-xl-3 patient-dashboard-top">
                    <div className="card">
                      <div className="card-body text-center">
                        <div className="mb-3">
                          <img
                            src="assets/img/specialities/pt-dashboard-01.png"
                            alt="heart-image"
                            width={55}
                          />
                        </div>
                        <h5>Heart Rate</h5>
                        <h6>
                          12 <sub>bpm</sub>
                        </h6>
                      </div>
                    </div>
                  </div>
                  <div className="col-12 col-md-6 col-lg-4 col-xl-3 patient-dashboard-top">
                    <div className="card">
                      <div className="card-body text-center">
                        <div className="mb-3">
                          <img
                            src="assets/img/specialities/pt-dashboard-02.png"
                            alt="thermometer-image"
                            width={55}
                          />
                        </div>
                        <h5>Body Temperature</h5>
                        <h6>
                          18 <sub>C</sub>
                        </h6>
                      </div>
                    </div>
                  </div>
                  <div className="col-12 col-md-6 col-lg-4 col-xl-3 patient-dashboard-top">
                    <div className="card">
                      <div className="card-body text-center">
                        <div className="mb-3">
                          <img
                            src="assets/img/specialities/pt-dashboard-03.png"
                            alt="hospital-equipment"
                            width={55}
                          />
                        </div>
                        <h5>Glucose Level</h5>
                        <h6>70 - 90</h6>
                      </div>
                    </div>
                  </div>
                  <div className="col-12 col-md-6 col-lg-4 col-xl-3 patient-dashboard-top">
                    <div className="card">
                      <div className="card-body text-center">
                        <div className="mb-3">
                          <img
                            src="assets/img/specialities/pt-dashboard-04.png"
                            alt="hospital-equipment"
                            width={55}
                          />
                        </div>
                        <h5>Blood Pressure</h5>
                        <h6>
                          202/90 <sub>mg/dl</sub>
                        </h6>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="row patient-graph-col">
                  <div className="col-12">
                    <div className="card">
                      <div className="card-header">
                        <h4 className="card-title">Graph Status</h4>
                      </div>
                      <div className="card-body pt-2 pb-2 mt-1 mb-1">
                        <div className="row">
                          <div className="col-12 col-md-6 col-lg-4 col-xl-3 patient-graph-box">
                            <a
                              href="#"
                              className="graph-box"
                              data-bs-toggle="modal"
                              data-bs-target="#graph1">
                              <div>
                                <h4>BMI Status</h4>
                              </div>
                              <div className="graph-img">
                                <img
                                  src="assets/img/shapes/graph-01.png"
                                  alt="shapes-icon"
                                />
                              </div>
                              <div className="graph-status-result mt-3">
                                <span className="graph-update-date">
                                  Last Update 6d
                                </span>
                              </div>
                            </a>
                          </div>
                          <div className="col-12 col-md-6 col-lg-4 col-xl-3 patient-graph-box">
                            <a
                              href="#"
                              className="graph-box pink-graph"
                              data-bs-toggle="modal"
                              data-bs-target="#graph2">
                              <div>
                                <h4>Heart Rate Status</h4>
                              </div>
                              <div className="graph-img">
                                <img
                                  src="assets/img/shapes/graph-02.png"
                                  alt="graph-icon"
                                />
                              </div>
                              <div className="graph-status-result mt-3">
                                <span className="graph-update-date">
                                  Last Update 2d
                                </span>
                              </div>
                            </a>
                          </div>
                          <div className="col-12 col-md-6 col-lg-4 col-xl-3 patient-graph-box">
                            <a
                              href="#"
                              className="graph-box sky-blue-graph"
                              data-bs-toggle="modal"
                              data-bs-target="#graph3">
                              <div>
                                <h4>FBC Status</h4>
                              </div>
                              <div className="graph-img">
                                <img
                                  src="assets/img/shapes/graph-03.png"
                                  alt="chart-icon"
                                />
                              </div>
                              <div className="graph-status-result mt-3">
                                <span className="graph-update-date">
                                  Last Update 5d
                                </span>
                              </div>
                            </a>
                          </div>
                          <div className="col-12 col-md-6 col-lg-4 col-xl-3 patient-graph-box">
                            <a
                              href="#"
                              className="graph-box orange-graph"
                              data-bs-toggle="modal"
                              data-bs-target="#graph4">
                              <div>
                                <h4>Weight Status</h4>
                              </div>
                              <div className="graph-img">
                                <img
                                  src="assets/img/shapes/graph-04.png"
                                  alt="chart-icon"
                                />
                              </div>
                              <div className="graph-status-result mt-3">
                                <span className="graph-update-date">
                                  Last Update 3d
                                </span>
                              </div>
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="card">
                  <div className="card-body pt-0">
                    <nav className="user-tabs mb-4">
                      <ul className="nav nav-tabs nav-tabs-bottom nav-justified">
                        <li className="nav-item">
                          <a
                            className="nav-link active"
                            href="#pat_appointments"
                            data-bs-toggle="tab">
                            Appointments
                          </a>
                        </li>
                        <li className="nav-item">
                          <a
                            className="nav-link"
                            href="#pat_prescriptions"
                            data-bs-toggle="tab">
                            Prescriptions
                          </a>
                        </li>
                        <li className="nav-item">
                          <a
                            className="nav-link"
                            href="#pat_medical_records"
                            data-bs-toggle="tab">
                            <span className="med-records">Medical Records</span>
                          </a>
                        </li>
                        <li className="nav-item">
                          <a
                            className="nav-link"
                            href="#pat_billing"
                            data-bs-toggle="tab">
                            Billing
                          </a>
                        </li>
                      </ul>
                    </nav>
                    <div className="tab-content pt-0">
                      <div
                        id="pat_appointments"
                        className="tab-pane fade show active">
                        <div className="card card-table mb-0">
                          <div className="card-body">
                            <div className="table-responsive">
                              <table className="table table-hover table-center mb-0">
                                <thead>
                                  <tr>
                                    <th>Doctor</th>
                                    <th>Appt Date</th>
                                    <th>Booking Date</th>
                                    <th>Amount</th>
                                    <th>Follow Up</th>
                                    <th>Status</th>
                                    <th>Action</th>
                                  </tr>
                                </thead>
                                <tbody>
                                  <tr>
                                    <td>
                                      <h2 className="table-avatar">
                                        <a
                                          href="doctor-profile.html"
                                          className="avatar avatar-sm me-2">
                                          <img
                                            className="avatar-img rounded-circle"
                                            src="assets/img/doctors/doctor-thumb-01.jpg"
                                            alt="User Image"
                                          />
                                        </a>
                                        <a href="doctor-profile.html">
                                          Dr. Ruby Perrin <span>Dental</span>
                                        </a>
                                      </h2>
                                    </td>
                                    <td>
                                      14 Nov 2023{" "}
                                      <span className="d-block text-info">
                                        10.00 AM
                                      </span>
                                    </td>
                                    <td>12 Nov 2023</td>
                                    <td>$160</td>
                                    <td>16 Nov 2023</td>
                                    <td>
                                      <span className="badge rounded-pill bg-success-light">
                                        Confirm
                                      </span>
                                    </td>
                                    <td>
                                      <div className="table-action">
                                        <a
                                          href="javascript:void(0);"
                                          className="btn btn-sm bg-primary-light">
                                          <i className="fas fa-print" /> Print
                                        </a>
                                        <a
                                          href="javascript:void(0);"
                                          className="btn btn-sm bg-info-light">
                                          <i className="far fa-eye" /> View
                                        </a>
                                      </div>
                                    </td>
                                  </tr>
                                  <tr>
                                    <td>
                                      <h2 className="table-avatar">
                                        <a
                                          href="doctor-profile.html"
                                          className="avatar avatar-sm me-2">
                                          <img
                                            className="avatar-img rounded-circle"
                                            src="assets/img/doctors/doctor-thumb-02.jpg"
                                            alt="User Image"
                                          />
                                        </a>
                                        <a href="doctor-profile.html">
                                          Dr. Darren Elder <span>Dental</span>
                                        </a>
                                      </h2>
                                    </td>
                                    <td>
                                      12 Nov 2023{" "}
                                      <span className="d-block text-info">
                                        8.00 PM
                                      </span>
                                    </td>
                                    <td>12 Nov 2023</td>
                                    <td>$250</td>
                                    <td>14 Nov 2023</td>
                                    <td>
                                      <span className="badge rounded-pill bg-success-light">
                                        Confirm
                                      </span>
                                    </td>
                                    <td>
                                      <div className="table-action">
                                        <a
                                          href="javascript:void(0);"
                                          className="btn btn-sm bg-primary-light">
                                          <i className="fas fa-print" /> Print
                                        </a>
                                        <a
                                          href="javascript:void(0);"
                                          className="btn btn-sm bg-info-light">
                                          <i className="far fa-eye" /> View
                                        </a>
                                      </div>
                                    </td>
                                  </tr>
                                  <tr>
                                    <td>
                                      <h2 className="table-avatar">
                                        <a
                                          href="doctor-profile.html"
                                          className="avatar avatar-sm me-2">
                                          <img
                                            className="avatar-img rounded-circle"
                                            src="assets/img/doctors/doctor-thumb-03.jpg"
                                            alt="User Image"
                                          />
                                        </a>
                                        <a href="doctor-profile.html">
                                          Dr. Deborah Angel{" "}
                                          <span>Cardiology</span>
                                        </a>
                                      </h2>
                                    </td>
                                    <td>
                                      11 Nov 2023{" "}
                                      <span className="d-block text-info">
                                        11.00 AM
                                      </span>
                                    </td>
                                    <td>10 Nov 2023</td>
                                    <td>$400</td>
                                    <td>13 Nov 2023</td>
                                    <td>
                                      <span className="badge rounded-pill bg-danger-light">
                                        Cancelled
                                      </span>
                                    </td>
                                    <td>
                                      <div className="table-action">
                                        <a
                                          href="javascript:void(0);"
                                          className="btn btn-sm bg-primary-light">
                                          <i className="fas fa-print" /> Print
                                        </a>
                                        <a
                                          href="javascript:void(0);"
                                          className="btn btn-sm bg-info-light">
                                          <i className="far fa-eye" /> View
                                        </a>
                                      </div>
                                    </td>
                                  </tr>
                                  <tr>
                                    <td>
                                      <h2 className="table-avatar">
                                        <a
                                          href="doctor-profile.html"
                                          className="avatar avatar-sm me-2">
                                          <img
                                            className="avatar-img rounded-circle"
                                            src="assets/img/doctors/doctor-thumb-04.jpg"
                                            alt="User Image"
                                          />
                                        </a>
                                        <a href="doctor-profile.html">
                                          Dr. Sofia Brient <span>Urology</span>
                                        </a>
                                      </h2>
                                    </td>
                                    <td>
                                      10 Nov 2023{" "}
                                      <span className="d-block text-info">
                                        3.00 PM
                                      </span>
                                    </td>
                                    <td>10 Nov 2023</td>
                                    <td>$350</td>
                                    <td>12 Nov 2023</td>
                                    <td>
                                      <span className="badge rounded-pill bg-warning-light">
                                        Pending
                                      </span>
                                    </td>
                                    <td>
                                      <div className="table-action">
                                        <a
                                          href="javascript:void(0);"
                                          className="btn btn-sm bg-primary-light">
                                          <i className="fas fa-print" /> Print
                                        </a>
                                        <a
                                          href="javascript:void(0);"
                                          className="btn btn-sm bg-info-light">
                                          <i className="far fa-eye" /> View
                                        </a>
                                      </div>
                                    </td>
                                  </tr>
                                  <tr>
                                    <td>
                                      <h2 className="table-avatar">
                                        <a
                                          href="doctor-profile.html"
                                          className="avatar avatar-sm me-2">
                                          <img
                                            className="avatar-img rounded-circle"
                                            src="assets/img/doctors/doctor-thumb-05.jpg"
                                            alt="User Image"
                                          />
                                        </a>
                                        <a href="doctor-profile.html">
                                          Dr. Marvin Campbell{" "}
                                          <span>Ophthalmology</span>
                                        </a>
                                      </h2>
                                    </td>
                                    <td>
                                      9 Nov 2023{" "}
                                      <span className="d-block text-info">
                                        7.00 PM
                                      </span>
                                    </td>
                                    <td>8 Nov 2023</td>
                                    <td>$75</td>
                                    <td>11 Nov 2023</td>
                                    <td>
                                      <span className="badge rounded-pill bg-success-light">
                                        Confirm
                                      </span>
                                    </td>
                                    <td>
                                      <div className="table-action">
                                        <a
                                          href="javascript:void(0);"
                                          className="btn btn-sm bg-primary-light">
                                          <i className="fas fa-print" /> Print
                                        </a>
                                        <a
                                          href="javascript:void(0);"
                                          className="btn btn-sm bg-info-light">
                                          <i className="far fa-eye" /> View
                                        </a>
                                      </div>
                                    </td>
                                  </tr>
                                  <tr>
                                    <td>
                                      <h2 className="table-avatar">
                                        <a
                                          href="doctor-profile.html"
                                          className="avatar avatar-sm me-2">
                                          <img
                                            className="avatar-img rounded-circle"
                                            src="assets/img/doctors/doctor-thumb-06.jpg"
                                            alt="User Image"
                                          />
                                        </a>
                                        <a href="doctor-profile.html">
                                          Dr. Katharine Berthold{" "}
                                          <span>Orthopaedics</span>
                                        </a>
                                      </h2>
                                    </td>
                                    <td>
                                      8 Nov 2023{" "}
                                      <span className="d-block text-info">
                                        9.00 AM
                                      </span>
                                    </td>
                                    <td>6 Nov 2023</td>
                                    <td>$175</td>
                                    <td>10 Nov 2023</td>
                                    <td>
                                      <span className="badge rounded-pill bg-danger-light">
                                        Cancelled
                                      </span>
                                    </td>
                                    <td>
                                      <div className="table-action">
                                        <a
                                          href="javascript:void(0);"
                                          className="btn btn-sm bg-primary-light">
                                          <i className="fas fa-print" /> Print
                                        </a>
                                        <a
                                          href="javascript:void(0);"
                                          className="btn btn-sm bg-info-light">
                                          <i className="far fa-eye" /> View
                                        </a>
                                      </div>
                                    </td>
                                  </tr>
                                  <tr>
                                    <td>
                                      <h2 className="table-avatar">
                                        <a
                                          href="doctor-profile.html"
                                          className="avatar avatar-sm me-2">
                                          <img
                                            className="avatar-img rounded-circle"
                                            src="assets/img/doctors/doctor-thumb-07.jpg"
                                            alt="User Image"
                                          />
                                        </a>
                                        <a href="doctor-profile.html">
                                          Dr. Linda Tobin <span>Neurology</span>
                                        </a>
                                      </h2>
                                    </td>
                                    <td>
                                      8 Nov 2023{" "}
                                      <span className="d-block text-info">
                                        6.00 PM
                                      </span>
                                    </td>
                                    <td>6 Nov 2023</td>
                                    <td>$450</td>
                                    <td>10 Nov 2023</td>
                                    <td>
                                      <span className="badge rounded-pill bg-success-light">
                                        Confirm
                                      </span>
                                    </td>
                                    <td>
                                      <div className="table-action">
                                        <a
                                          href="javascript:void(0);"
                                          className="btn btn-sm bg-primary-light">
                                          <i className="fas fa-print" /> Print
                                        </a>
                                        <a
                                          href="javascript:void(0);"
                                          className="btn btn-sm bg-info-light">
                                          <i className="far fa-eye" /> View
                                        </a>
                                      </div>
                                    </td>
                                  </tr>
                                  <tr>
                                    <td>
                                      <h2 className="table-avatar">
                                        <a
                                          href="doctor-profile.html"
                                          className="avatar avatar-sm me-2">
                                          <img
                                            className="avatar-img rounded-circle"
                                            src="assets/img/doctors/doctor-thumb-08.jpg"
                                            alt="User Image"
                                          />
                                        </a>
                                        <a href="doctor-profile.html">
                                          Dr. Paul Richard{" "}
                                          <span>Dermatology</span>
                                        </a>
                                      </h2>
                                    </td>
                                    <td>
                                      7 Nov 2023{" "}
                                      <span className="d-block text-info">
                                        9.00 PM
                                      </span>
                                    </td>
                                    <td>7 Nov 2023</td>
                                    <td>$275</td>
                                    <td>9 Nov 2023</td>
                                    <td>
                                      <span className="badge rounded-pill bg-success-light">
                                        Confirm
                                      </span>
                                    </td>
                                    <td>
                                      <div className="table-action">
                                        <a
                                          href="javascript:void(0);"
                                          className="btn btn-sm bg-primary-light">
                                          <i className="fas fa-print" /> Print
                                        </a>
                                        <a
                                          href="javascript:void(0);"
                                          className="btn btn-sm bg-info-light">
                                          <i className="far fa-eye" /> View
                                        </a>
                                      </div>
                                    </td>
                                  </tr>
                                  <tr>
                                    <td>
                                      <h2 className="table-avatar">
                                        <a
                                          href="doctor-profile.html"
                                          className="avatar avatar-sm me-2">
                                          <img
                                            className="avatar-img rounded-circle"
                                            src="assets/img/doctors/doctor-thumb-09.jpg"
                                            alt="User Image"
                                          />
                                        </a>
                                        <a href="doctor-profile.html">
                                          Dr. John Gibbs <span>Dental</span>
                                        </a>
                                      </h2>
                                    </td>
                                    <td>
                                      6 Nov 2023{" "}
                                      <span className="d-block text-info">
                                        8.00 PM
                                      </span>
                                    </td>
                                    <td>4 Nov 2023</td>
                                    <td>$600</td>
                                    <td>8 Nov 2023</td>
                                    <td>
                                      <span className="badge rounded-pill bg-success-light">
                                        Confirm
                                      </span>
                                    </td>
                                    <td>
                                      <div className="table-action">
                                        <a
                                          href="javascript:void(0);"
                                          className="btn btn-sm bg-primary-light">
                                          <i className="fas fa-print" /> Print
                                        </a>
                                        <a
                                          href="javascript:void(0);"
                                          className="btn btn-sm bg-info-light">
                                          <i className="far fa-eye" /> View
                                        </a>
                                      </div>
                                    </td>
                                  </tr>
                                  <tr>
                                    <td>
                                      <h2 className="table-avatar">
                                        <a
                                          href="doctor-profile.html"
                                          className="avatar avatar-sm me-2">
                                          <img
                                            className="avatar-img rounded-circle"
                                            src="assets/img/doctors/doctor-thumb-10.jpg"
                                            alt="User Image"
                                          />
                                        </a>
                                        <a href="doctor-profile.html">
                                          Dr. Olga Barlow <span>Dental</span>
                                        </a>
                                      </h2>
                                    </td>
                                    <td>
                                      5 Nov 2023{" "}
                                      <span className="d-block text-info">
                                        5.00 PM
                                      </span>
                                    </td>
                                    <td>1 Nov 2023</td>
                                    <td>$100</td>
                                    <td>7 Nov 2023</td>
                                    <td>
                                      <span className="badge rounded-pill bg-success-light">
                                        Confirm
                                      </span>
                                    </td>
                                    <td>
                                      <div className="table-action">
                                        <a
                                          href="javascript:void(0);"
                                          className="btn btn-sm bg-primary-light">
                                          <i className="fas fa-print" /> Print
                                        </a>
                                        <a
                                          href="javascript:void(0);"
                                          className="btn btn-sm bg-info-light">
                                          <i className="far fa-eye" /> View
                                        </a>
                                      </div>
                                    </td>
                                  </tr>
                                </tbody>
                              </table>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="tab-pane fade" id="pat_prescriptions">
                        <div className="card card-table mb-0">
                          <div className="card-body">
                            <div className="table-responsive">
                              <table className="table table-hover table-center mb-0">
                                <thead>
                                  <tr>
                                    <th>Date </th>
                                    <th>Name</th>
                                    <th>Created by </th>
                                    <th>Action</th>
                                  </tr>
                                </thead>
                                <tbody>
                                  <tr>
                                    <td>14 Nov 2023</td>
                                    <td>Prescription 1</td>
                                    <td>
                                      <h2 className="table-avatar">
                                        <a
                                          href="doctor-profile.html"
                                          className="avatar avatar-sm me-2">
                                          <img
                                            className="avatar-img rounded-circle"
                                            src="assets/img/doctors/doctor-thumb-01.jpg"
                                            alt="User Image"
                                          />
                                        </a>
                                        <a href="doctor-profile.html">
                                          Dr. Ruby Perrin <span>Dental</span>
                                        </a>
                                      </h2>
                                    </td>
                                    <td>
                                      <div className="table-action">
                                        <a
                                          href="javascript:void(0);"
                                          className="btn btn-sm bg-primary-light">
                                          <i className="fas fa-print" /> Print
                                        </a>
                                        <a
                                          href="javascript:void(0);"
                                          className="btn btn-sm bg-info-light">
                                          <i className="far fa-eye" /> View
                                        </a>
                                      </div>
                                    </td>
                                  </tr>
                                  <tr>
                                    <td>13 Nov 2023</td>
                                    <td>Prescription 2</td>
                                    <td>
                                      <h2 className="table-avatar">
                                        <a
                                          href="doctor-profile.html"
                                          className="avatar avatar-sm me-2">
                                          <img
                                            className="avatar-img rounded-circle"
                                            src="assets/img/doctors/doctor-thumb-02.jpg"
                                            alt="User Image"
                                          />
                                        </a>
                                        <a href="doctor-profile.html">
                                          Dr. Darren Elder <span>Dental</span>
                                        </a>
                                      </h2>
                                    </td>
                                    <td>
                                      <div className="table-action">
                                        <a
                                          href="javascript:void(0);"
                                          className="btn btn-sm bg-primary-light">
                                          <i className="fas fa-print" /> Print
                                        </a>
                                        <a
                                          href="javascript:void(0);"
                                          className="btn btn-sm bg-info-light">
                                          <i className="far fa-eye" /> View
                                        </a>
                                      </div>
                                    </td>
                                  </tr>
                                  <tr>
                                    <td>12 Nov 2023</td>
                                    <td>Prescription 3</td>
                                    <td>
                                      <h2 className="table-avatar">
                                        <a
                                          href="doctor-profile.html"
                                          className="avatar avatar-sm me-2">
                                          <img
                                            className="avatar-img rounded-circle"
                                            src="assets/img/doctors/doctor-thumb-03.jpg"
                                            alt="User Image"
                                          />
                                        </a>
                                        <a href="doctor-profile.html">
                                          Dr. Deborah Angel{" "}
                                          <span>Cardiology</span>
                                        </a>
                                      </h2>
                                    </td>
                                    <td>
                                      <div className="table-action">
                                        <a
                                          href="javascript:void(0);"
                                          className="btn btn-sm bg-primary-light">
                                          <i className="fas fa-print" /> Print
                                        </a>
                                        <a
                                          href="javascript:void(0);"
                                          className="btn btn-sm bg-info-light">
                                          <i className="far fa-eye" /> View
                                        </a>
                                      </div>
                                    </td>
                                  </tr>
                                  <tr>
                                    <td>11 Nov 2023</td>
                                    <td>Prescription 4</td>
                                    <td>
                                      <h2 className="table-avatar">
                                        <a
                                          href="doctor-profile.html"
                                          className="avatar avatar-sm me-2">
                                          <img
                                            className="avatar-img rounded-circle"
                                            src="assets/img/doctors/doctor-thumb-04.jpg"
                                            alt="User Image"
                                          />
                                        </a>
                                        <a href="doctor-profile.html">
                                          Dr. Sofia Brient <span>Urology</span>
                                        </a>
                                      </h2>
                                    </td>
                                    <td>
                                      <div className="table-action">
                                        <a
                                          href="javascript:void(0);"
                                          className="btn btn-sm bg-primary-light">
                                          <i className="fas fa-print" /> Print
                                        </a>
                                        <a
                                          href="javascript:void(0);"
                                          className="btn btn-sm bg-info-light">
                                          <i className="far fa-eye" /> View
                                        </a>
                                      </div>
                                    </td>
                                  </tr>
                                  <tr>
                                    <td>10 Nov 2023</td>
                                    <td>Prescription 5</td>
                                    <td>
                                      <h2 className="table-avatar">
                                        <a
                                          href="doctor-profile.html"
                                          className="avatar avatar-sm me-2">
                                          <img
                                            className="avatar-img rounded-circle"
                                            src="assets/img/doctors/doctor-thumb-05.jpg"
                                            alt="User Image"
                                          />
                                        </a>
                                        <a href="doctor-profile.html">
                                          Dr. Marvin Campbell{" "}
                                          <span>Dental</span>
                                        </a>
                                      </h2>
                                    </td>
                                    <td>
                                      <div className="table-action">
                                        <a
                                          href="javascript:void(0);"
                                          className="btn btn-sm bg-primary-light">
                                          <i className="fas fa-print" /> Print
                                        </a>
                                        <a
                                          href="javascript:void(0);"
                                          className="btn btn-sm bg-info-light">
                                          <i className="far fa-eye" /> View
                                        </a>
                                      </div>
                                    </td>
                                  </tr>
                                  <tr>
                                    <td>9 Nov 2023</td>
                                    <td>Prescription 6</td>
                                    <td>
                                      <h2 className="table-avatar">
                                        <a
                                          href="doctor-profile.html"
                                          className="avatar avatar-sm me-2">
                                          <img
                                            className="avatar-img rounded-circle"
                                            src="assets/img/doctors/doctor-thumb-06.jpg"
                                            alt="User Image"
                                          />
                                        </a>
                                        <a href="doctor-profile.html">
                                          Dr. Katharine Berthold{" "}
                                          <span>Orthopaedics</span>
                                        </a>
                                      </h2>
                                    </td>
                                    <td>
                                      <div className="table-action">
                                        <a
                                          href="javascript:void(0);"
                                          className="btn btn-sm bg-primary-light">
                                          <i className="fas fa-print" /> Print
                                        </a>
                                        <a
                                          href="javascript:void(0);"
                                          className="btn btn-sm bg-info-light">
                                          <i className="far fa-eye" /> View
                                        </a>
                                      </div>
                                    </td>
                                  </tr>
                                  <tr>
                                    <td>8 Nov 2023</td>
                                    <td>Prescription 7</td>
                                    <td>
                                      <h2 className="table-avatar">
                                        <a
                                          href="doctor-profile.html"
                                          className="avatar avatar-sm me-2">
                                          <img
                                            className="avatar-img rounded-circle"
                                            src="assets/img/doctors/doctor-thumb-07.jpg"
                                            alt="User Image"
                                          />
                                        </a>
                                        <a href="doctor-profile.html">
                                          Dr. Linda Tobin <span>Neurology</span>
                                        </a>
                                      </h2>
                                    </td>
                                    <td>
                                      <div className="table-action">
                                        <a
                                          href="javascript:void(0);"
                                          className="btn btn-sm bg-primary-light">
                                          <i className="fas fa-print" /> Print
                                        </a>
                                        <a
                                          href="javascript:void(0);"
                                          className="btn btn-sm bg-info-light">
                                          <i className="far fa-eye" /> View
                                        </a>
                                      </div>
                                    </td>
                                  </tr>
                                  <tr>
                                    <td>7 Nov 2023</td>
                                    <td>Prescription 8</td>
                                    <td>
                                      <h2 className="table-avatar">
                                        <a
                                          href="doctor-profile.html"
                                          className="avatar avatar-sm me-2">
                                          <img
                                            className="avatar-img rounded-circle"
                                            src="assets/img/doctors/doctor-thumb-08.jpg"
                                            alt="User Image"
                                          />
                                        </a>
                                        <a href="doctor-profile.html">
                                          Dr. Paul Richard{" "}
                                          <span>Dermatology</span>
                                        </a>
                                      </h2>
                                    </td>
                                    <td>
                                      <div className="table-action">
                                        <a
                                          href="javascript:void(0);"
                                          className="btn btn-sm bg-primary-light">
                                          <i className="fas fa-print" /> Print
                                        </a>
                                        <a
                                          href="javascript:void(0);"
                                          className="btn btn-sm bg-info-light">
                                          <i className="far fa-eye" /> View
                                        </a>
                                      </div>
                                    </td>
                                  </tr>
                                  <tr>
                                    <td>6 Nov 2023</td>
                                    <td>Prescription 9</td>
                                    <td>
                                      <h2 className="table-avatar">
                                        <a
                                          href="doctor-profile.html"
                                          className="avatar avatar-sm me-2">
                                          <img
                                            className="avatar-img rounded-circle"
                                            src="assets/img/doctors/doctor-thumb-09.jpg"
                                            alt="User Image"
                                          />
                                        </a>
                                        <a href="doctor-profile.html">
                                          Dr. John Gibbs <span>Dental</span>
                                        </a>
                                      </h2>
                                    </td>
                                    <td>
                                      <div className="table-action">
                                        <a
                                          href="javascript:void(0);"
                                          className="btn btn-sm bg-primary-light">
                                          <i className="fas fa-print" /> Print
                                        </a>
                                        <a
                                          href="javascript:void(0);"
                                          className="btn btn-sm bg-info-light">
                                          <i className="far fa-eye" /> View
                                        </a>
                                      </div>
                                    </td>
                                  </tr>
                                  <tr>
                                    <td>5 Nov 2023</td>
                                    <td>Prescription 10</td>
                                    <td>
                                      <h2 className="table-avatar">
                                        <a
                                          href="doctor-profile.html"
                                          className="avatar avatar-sm me-2">
                                          <img
                                            className="avatar-img rounded-circle"
                                            src="assets/img/doctors/doctor-thumb-10.jpg"
                                            alt="User Image"
                                          />
                                        </a>
                                        <a href="doctor-profile.html">
                                          Dr. Olga Barlow <span>Dental</span>
                                        </a>
                                      </h2>
                                    </td>
                                    <td>
                                      <div className="table-action">
                                        <a
                                          href="javascript:void(0);"
                                          className="btn btn-sm bg-primary-light">
                                          <i className="fas fa-print" /> Print
                                        </a>
                                        <a
                                          href="javascript:void(0);"
                                          className="btn btn-sm bg-info-light">
                                          <i className="far fa-eye" /> View
                                        </a>
                                      </div>
                                    </td>
                                  </tr>
                                </tbody>
                              </table>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div id="pat_medical_records" className="tab-pane fade">
                        <div className="card card-table mb-0">
                          <div className="card-body">
                            <div className="table-responsive">
                              <table className="table table-hover table-center mb-0">
                                <thead>
                                  <tr>
                                    <th>ID</th>
                                    <th>Date </th>
                                    <th>Description</th>
                                    <th>Attachment</th>
                                    <th>Created</th>
                                    <th>Action</th>
                                  </tr>
                                </thead>
                                <tbody>
                                  <tr>
                                    <td>
                                      <a href="javascript:void(0);">#MR-0010</a>
                                    </td>
                                    <td>14 Nov 2023</td>
                                    <td>Dental Filling</td>
                                    <td>
                                      <a href="#">dental-test.pdf</a>
                                    </td>
                                    <td>
                                      <h2 className="table-avatar">
                                        <a
                                          href="doctor-profile.html"
                                          className="avatar avatar-sm me-2">
                                          <img
                                            className="avatar-img rounded-circle"
                                            src="assets/img/doctors/doctor-thumb-01.jpg"
                                            alt="User Image"
                                          />
                                        </a>
                                        <a href="doctor-profile.html">
                                          Dr. Ruby Perrin <span>Dental</span>
                                        </a>
                                      </h2>
                                    </td>
                                    <td>
                                      <div className="table-action">
                                        <a
                                          href="javascript:void(0);"
                                          className="btn btn-sm bg-info-light">
                                          <i className="far fa-eye" /> View
                                        </a>
                                        <a
                                          href="javascript:void(0);"
                                          className="btn btn-sm bg-primary-light">
                                          <i className="fas fa-print" /> Print
                                        </a>
                                      </div>
                                    </td>
                                  </tr>
                                  <tr>
                                    <td>
                                      <a href="javascript:void(0);">#MR-0009</a>
                                    </td>
                                    <td>13 Nov 2023</td>
                                    <td>Teeth Cleaning</td>
                                    <td>
                                      <a href="#">dental-test.pdf</a>
                                    </td>
                                    <td>
                                      <h2 className="table-avatar">
                                        <a
                                          href="doctor-profile.html"
                                          className="avatar avatar-sm me-2">
                                          <img
                                            className="avatar-img rounded-circle"
                                            src="assets/img/doctors/doctor-thumb-02.jpg"
                                            alt="User Image"
                                          />
                                        </a>
                                        <a href="doctor-profile.html">
                                          Dr. Darren Elder <span>Dental</span>
                                        </a>
                                      </h2>
                                    </td>
                                    <td>
                                      <div className="table-action">
                                        <a
                                          href="javascript:void(0);"
                                          className="btn btn-sm bg-info-light">
                                          <i className="far fa-eye" /> View
                                        </a>
                                        <a
                                          href="javascript:void(0);"
                                          className="btn btn-sm bg-primary-light">
                                          <i className="fas fa-print" /> Print
                                        </a>
                                      </div>
                                    </td>
                                  </tr>
                                  <tr>
                                    <td>
                                      <a href="javascript:void(0);">#MR-0008</a>
                                    </td>
                                    <td>12 Nov 2023</td>
                                    <td>General Checkup</td>
                                    <td>
                                      <a href="#">cardio-test.pdf</a>
                                    </td>
                                    <td>
                                      <h2 className="table-avatar">
                                        <a
                                          href="doctor-profile.html"
                                          className="avatar avatar-sm me-2">
                                          <img
                                            className="avatar-img rounded-circle"
                                            src="assets/img/doctors/doctor-thumb-03.jpg"
                                            alt="User Image"
                                          />
                                        </a>
                                        <a href="doctor-profile.html">
                                          Dr. Deborah Angel{" "}
                                          <span>Cardiology</span>
                                        </a>
                                      </h2>
                                    </td>
                                    <td>
                                      <div className="table-action">
                                        <a
                                          href="javascript:void(0);"
                                          className="btn btn-sm bg-info-light">
                                          <i className="far fa-eye" /> View
                                        </a>
                                        <a
                                          href="javascript:void(0);"
                                          className="btn btn-sm bg-primary-light">
                                          <i className="fas fa-print" /> Print
                                        </a>
                                      </div>
                                    </td>
                                  </tr>
                                  <tr>
                                    <td>
                                      <a href="javascript:void(0);">#MR-0007</a>
                                    </td>
                                    <td>11 Nov 2023</td>
                                    <td>General Test</td>
                                    <td>
                                      <a href="#">general-test.pdf</a>
                                    </td>
                                    <td>
                                      <h2 className="table-avatar">
                                        <a
                                          href="doctor-profile.html"
                                          className="avatar avatar-sm me-2">
                                          <img
                                            className="avatar-img rounded-circle"
                                            src="assets/img/doctors/doctor-thumb-04.jpg"
                                            alt="User Image"
                                          />
                                        </a>
                                        <a href="doctor-profile.html">
                                          Dr. Sofia Brient <span>Urology</span>
                                        </a>
                                      </h2>
                                    </td>
                                    <td>
                                      <div className="table-action">
                                        <a
                                          href="javascript:void(0);"
                                          className="btn btn-sm bg-info-light">
                                          <i className="far fa-eye" /> View
                                        </a>
                                        <a
                                          href="javascript:void(0);"
                                          className="btn btn-sm bg-primary-light">
                                          <i className="fas fa-print" /> Print
                                        </a>
                                      </div>
                                    </td>
                                  </tr>
                                  <tr>
                                    <td>
                                      <a href="javascript:void(0);">#MR-0006</a>
                                    </td>
                                    <td>10 Nov 2023</td>
                                    <td>Eye Test</td>
                                    <td>
                                      <a href="#">eye-test.pdf</a>
                                    </td>
                                    <td>
                                      <h2 className="table-avatar">
                                        <a
                                          href="doctor-profile.html"
                                          className="avatar avatar-sm me-2">
                                          <img
                                            className="avatar-img rounded-circle"
                                            src="assets/img/doctors/doctor-thumb-05.jpg"
                                            alt="User Image"
                                          />
                                        </a>
                                        <a href="doctor-profile.html">
                                          Dr. Marvin Campbell{" "}
                                          <span>Ophthalmology</span>
                                        </a>
                                      </h2>
                                    </td>
                                    <td>
                                      <div className="table-action">
                                        <a
                                          href="javascript:void(0);"
                                          className="btn btn-sm bg-info-light">
                                          <i className="far fa-eye" /> View
                                        </a>
                                        <a
                                          href="javascript:void(0);"
                                          className="btn btn-sm bg-primary-light">
                                          <i className="fas fa-print" /> Print
                                        </a>
                                      </div>
                                    </td>
                                  </tr>
                                  <tr>
                                    <td>
                                      <a href="javascript:void(0);">#MR-0005</a>
                                    </td>
                                    <td>9 Nov 2023</td>
                                    <td>Leg Pain</td>
                                    <td>
                                      <a href="#">ortho-test.pdf</a>
                                    </td>
                                    <td>
                                      <h2 className="table-avatar">
                                        <a
                                          href="doctor-profile.html"
                                          className="avatar avatar-sm me-2">
                                          <img
                                            className="avatar-img rounded-circle"
                                            src="assets/img/doctors/doctor-thumb-06.jpg"
                                            alt="User Image"
                                          />
                                        </a>
                                        <a href="doctor-profile.html">
                                          Dr. Katharine Berthold{" "}
                                          <span>Orthopaedics</span>
                                        </a>
                                      </h2>
                                    </td>
                                    <td>
                                      <div className="table-action">
                                        <a
                                          href="javascript:void(0);"
                                          className="btn btn-sm bg-info-light">
                                          <i className="far fa-eye" /> View
                                        </a>
                                        <a
                                          href="javascript:void(0);"
                                          className="btn btn-sm bg-primary-light">
                                          <i className="fas fa-print" /> Print
                                        </a>
                                      </div>
                                    </td>
                                  </tr>
                                  <tr>
                                    <td>
                                      <a href="javascript:void(0);">#MR-0004</a>
                                    </td>
                                    <td>8 Nov 2023</td>
                                    <td>Head pain</td>
                                    <td>
                                      <a href="#">neuro-test.pdf</a>
                                    </td>
                                    <td>
                                      <h2 className="table-avatar">
                                        <a
                                          href="doctor-profile.html"
                                          className="avatar avatar-sm me-2">
                                          <img
                                            className="avatar-img rounded-circle"
                                            src="assets/img/doctors/doctor-thumb-07.jpg"
                                            alt="User Image"
                                          />
                                        </a>
                                        <a href="doctor-profile.html">
                                          Dr. Linda Tobin <span>Neurology</span>
                                        </a>
                                      </h2>
                                    </td>
                                    <td>
                                      <div className="table-action">
                                        <a
                                          href="javascript:void(0);"
                                          className="btn btn-sm bg-info-light">
                                          <i className="far fa-eye" /> View
                                        </a>
                                        <a
                                          href="javascript:void(0);"
                                          className="btn btn-sm bg-primary-light">
                                          <i className="fas fa-print" /> Print
                                        </a>
                                      </div>
                                    </td>
                                  </tr>
                                  <tr>
                                    <td>
                                      <a href="javascript:void(0);">#MR-0003</a>
                                    </td>
                                    <td>7 Nov 2023</td>
                                    <td>Skin Alergy</td>
                                    <td>
                                      <a href="#">alergy-test.pdf</a>
                                    </td>
                                    <td>
                                      <h2 className="table-avatar">
                                        <a
                                          href="doctor-profile.html"
                                          className="avatar avatar-sm me-2">
                                          <img
                                            className="avatar-img rounded-circle"
                                            src="assets/img/doctors/doctor-thumb-08.jpg"
                                            alt="User Image"
                                          />
                                        </a>
                                        <a href="doctor-profile.html">
                                          Dr. Paul Richard{" "}
                                          <span>Dermatology</span>
                                        </a>
                                      </h2>
                                    </td>
                                    <td>
                                      <div className="table-action">
                                        <a
                                          href="javascript:void(0);"
                                          className="btn btn-sm bg-info-light">
                                          <i className="far fa-eye" /> View
                                        </a>
                                        <a
                                          href="javascript:void(0);"
                                          className="btn btn-sm bg-primary-light">
                                          <i className="fas fa-print" /> Print
                                        </a>
                                      </div>
                                    </td>
                                  </tr>
                                  <tr>
                                    <td>
                                      <a href="javascript:void(0);">#MR-0002</a>
                                    </td>
                                    <td>6 Nov 2023</td>
                                    <td>Dental Removing</td>
                                    <td>
                                      <a href="#">dental-test.pdf</a>
                                    </td>
                                    <td>
                                      <h2 className="table-avatar">
                                        <a
                                          href="doctor-profile.html"
                                          className="avatar avatar-sm me-2">
                                          <img
                                            className="avatar-img rounded-circle"
                                            src="assets/img/doctors/doctor-thumb-09.jpg"
                                            alt="User Image"
                                          />
                                        </a>
                                        <a href="doctor-profile.html">
                                          Dr. John Gibbs <span>Dental</span>
                                        </a>
                                      </h2>
                                    </td>
                                    <td>
                                      <div className="table-action">
                                        <a
                                          href="javascript:void(0);"
                                          className="btn btn-sm bg-info-light">
                                          <i className="far fa-eye" /> View
                                        </a>
                                        <a
                                          href="javascript:void(0);"
                                          className="btn btn-sm bg-primary-light">
                                          <i className="fas fa-print" /> Print
                                        </a>
                                      </div>
                                    </td>
                                  </tr>
                                  <tr>
                                    <td>
                                      <a href="javascript:void(0);">#MR-0001</a>
                                    </td>
                                    <td>5 Nov 2023</td>
                                    <td>Dental Filling</td>
                                    <td>
                                      <a href="#">dental-test.pdf</a>
                                    </td>
                                    <td>
                                      <h2 className="table-avatar">
                                        <a
                                          href="doctor-profile.html"
                                          className="avatar avatar-sm me-2">
                                          <img
                                            className="avatar-img rounded-circle"
                                            src="assets/img/doctors/doctor-thumb-10.jpg"
                                            alt="User Image"
                                          />
                                        </a>
                                        <a href="doctor-profile.html">
                                          Dr. Olga Barlow <span>Dental</span>
                                        </a>
                                      </h2>
                                    </td>
                                    <td>
                                      <div className="table-action">
                                        <a
                                          href="javascript:void(0);"
                                          className="btn btn-sm bg-info-light">
                                          <i className="far fa-eye" /> View
                                        </a>
                                        <a
                                          href="javascript:void(0);"
                                          className="btn btn-sm bg-primary-light">
                                          <i className="fas fa-print" /> Print
                                        </a>
                                      </div>
                                    </td>
                                  </tr>
                                </tbody>
                              </table>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div id="pat_billing" className="tab-pane fade">
                        <div className="card card-table mb-0">
                          <div className="card-body">
                            <div className="table-responsive">
                              <table className="table table-hover table-center mb-0">
                                <thead>
                                  <tr>
                                    <th>Invoice No</th>
                                    <th>Doctor</th>
                                    <th>Amount</th>
                                    <th>Paid On</th>
                                    <th>Action</th>
                                  </tr>
                                </thead>
                                <tbody>
                                  <tr>
                                    <td>
                                      <a href="invoice-view.html">#INV-0010</a>
                                    </td>
                                    <td>
                                      <h2 className="table-avatar">
                                        <a
                                          href="doctor-profile.html"
                                          className="avatar avatar-sm me-2">
                                          <img
                                            className="avatar-img rounded-circle"
                                            src="assets/img/doctors/doctor-thumb-01.jpg"
                                            alt="User Image"
                                          />
                                        </a>
                                        <a href="doctor-profile.html">
                                          Ruby Perrin <span>Dental</span>
                                        </a>
                                      </h2>
                                    </td>
                                    <td>$450</td>
                                    <td>14 Nov 2023</td>
                                    <td>
                                      <div className="table-action">
                                        <a
                                          href="invoice-view.html"
                                          className="btn btn-sm bg-info-light">
                                          <i className="far fa-eye" /> View
                                        </a>
                                        <a
                                          href="javascript:void(0);"
                                          className="btn btn-sm bg-primary-light">
                                          <i className="fas fa-print" /> Print
                                        </a>
                                      </div>
                                    </td>
                                  </tr>
                                  <tr>
                                    <td>
                                      <a href="invoice-view.html">#INV-0009</a>
                                    </td>
                                    <td>
                                      <h2 className="table-avatar">
                                        <a
                                          href="doctor-profile.html"
                                          className="avatar avatar-sm me-2">
                                          <img
                                            className="avatar-img rounded-circle"
                                            src="assets/img/doctors/doctor-thumb-02.jpg"
                                            alt="User Image"
                                          />
                                        </a>
                                        <a href="doctor-profile.html">
                                          Dr. Darren Elder <span>Dental</span>
                                        </a>
                                      </h2>
                                    </td>
                                    <td>$300</td>
                                    <td>13 Nov 2023</td>
                                    <td>
                                      <div className="table-action">
                                        <a
                                          href="invoice-view.html"
                                          className="btn btn-sm bg-info-light">
                                          <i className="far fa-eye" /> View
                                        </a>
                                        <a
                                          href="javascript:void(0);"
                                          className="btn btn-sm bg-primary-light">
                                          <i className="fas fa-print" /> Print
                                        </a>
                                      </div>
                                    </td>
                                  </tr>
                                  <tr>
                                    <td>
                                      <a href="invoice-view.html">#INV-0008</a>
                                    </td>
                                    <td>
                                      <h2 className="table-avatar">
                                        <a
                                          href="doctor-profile.html"
                                          className="avatar avatar-sm me-2">
                                          <img
                                            className="avatar-img rounded-circle"
                                            src="assets/img/doctors/doctor-thumb-03.jpg"
                                            alt="User Image"
                                          />
                                        </a>
                                        <a href="doctor-profile.html">
                                          Dr. Deborah Angel{" "}
                                          <span>Cardiology</span>
                                        </a>
                                      </h2>
                                    </td>
                                    <td>$150</td>
                                    <td>12 Nov 2023</td>
                                    <td>
                                      <div className="table-action">
                                        <a
                                          href="invoice-view.html"
                                          className="btn btn-sm bg-info-light">
                                          <i className="far fa-eye" /> View
                                        </a>
                                        <a
                                          href="javascript:void(0);"
                                          className="btn btn-sm bg-primary-light">
                                          <i className="fas fa-print" /> Print
                                        </a>
                                      </div>
                                    </td>
                                  </tr>
                                  <tr>
                                    <td>
                                      <a href="invoice-view.html">#INV-0007</a>
                                    </td>
                                    <td>
                                      <h2 className="table-avatar">
                                        <a
                                          href="doctor-profile.html"
                                          className="avatar avatar-sm me-2">
                                          <img
                                            className="avatar-img rounded-circle"
                                            src="assets/img/doctors/doctor-thumb-04.jpg"
                                            alt="User Image"
                                          />
                                        </a>
                                        <a href="doctor-profile.html">
                                          Dr. Sofia Brient <span>Urology</span>
                                        </a>
                                      </h2>
                                    </td>
                                    <td>$50</td>
                                    <td>11 Nov 2023</td>
                                    <td>
                                      <div className="table-action">
                                        <a
                                          href="invoice-view.html"
                                          className="btn btn-sm bg-info-light">
                                          <i className="far fa-eye" /> View
                                        </a>
                                        <a
                                          href="javascript:void(0);"
                                          className="btn btn-sm bg-primary-light">
                                          <i className="fas fa-print" /> Print
                                        </a>
                                      </div>
                                    </td>
                                  </tr>
                                  <tr>
                                    <td>
                                      <a href="invoice-view.html">#INV-0006</a>
                                    </td>
                                    <td>
                                      <h2 className="table-avatar">
                                        <a
                                          href="doctor-profile.html"
                                          className="avatar avatar-sm me-2">
                                          <img
                                            className="avatar-img rounded-circle"
                                            src="assets/img/doctors/doctor-thumb-05.jpg"
                                            alt="User Image"
                                          />
                                        </a>
                                        <a href="doctor-profile.html">
                                          Dr. Marvin Campbell{" "}
                                          <span>Ophthalmology</span>
                                        </a>
                                      </h2>
                                    </td>
                                    <td>$600</td>
                                    <td>10 Nov 2023</td>
                                    <td>
                                      <div className="table-action">
                                        <a
                                          href="invoice-view.html"
                                          className="btn btn-sm bg-info-light">
                                          <i className="far fa-eye" /> View
                                        </a>
                                        <a
                                          href="javascript:void(0);"
                                          className="btn btn-sm bg-primary-light">
                                          <i className="fas fa-print" /> Print
                                        </a>
                                      </div>
                                    </td>
                                  </tr>
                                  <tr>
                                    <td>
                                      <a href="invoice-view.html">#INV-0005</a>
                                    </td>
                                    <td>
                                      <h2 className="table-avatar">
                                        <a
                                          href="doctor-profile.html"
                                          className="avatar avatar-sm me-2">
                                          <img
                                            className="avatar-img rounded-circle"
                                            src="assets/img/doctors/doctor-thumb-06.jpg"
                                            alt="User Image"
                                          />
                                        </a>
                                        <a href="doctor-profile.html">
                                          Dr. Katharine Berthold{" "}
                                          <span>Orthopaedics</span>
                                        </a>
                                      </h2>
                                    </td>
                                    <td>$200</td>
                                    <td>9 Nov 2023</td>
                                    <td>
                                      <div className="table-action">
                                        <a
                                          href="invoice-view.html"
                                          className="btn btn-sm bg-info-light">
                                          <i className="far fa-eye" /> View
                                        </a>
                                        <a
                                          href="javascript:void(0);"
                                          className="btn btn-sm bg-primary-light">
                                          <i className="fas fa-print" /> Print
                                        </a>
                                      </div>
                                    </td>
                                  </tr>
                                  <tr>
                                    <td>
                                      <a href="invoice-view.html">#INV-0004</a>
                                    </td>
                                    <td>
                                      <h2 className="table-avatar">
                                        <a
                                          href="doctor-profile.html"
                                          className="avatar avatar-sm me-2">
                                          <img
                                            className="avatar-img rounded-circle"
                                            src="assets/img/doctors/doctor-thumb-07.jpg"
                                            alt="User Image"
                                          />
                                        </a>
                                        <a href="doctor-profile.html">
                                          Dr. Linda Tobin <span>Neurology</span>
                                        </a>
                                      </h2>
                                    </td>
                                    <td>$100</td>
                                    <td>8 Nov 2023</td>
                                    <td>
                                      <div className="table-action">
                                        <a
                                          href="invoice-view.html"
                                          className="btn btn-sm bg-info-light">
                                          <i className="far fa-eye" /> View
                                        </a>
                                        <a
                                          href="javascript:void(0);"
                                          className="btn btn-sm bg-primary-light">
                                          <i className="fas fa-print" /> Print
                                        </a>
                                      </div>
                                    </td>
                                  </tr>
                                  <tr>
                                    <td>
                                      <a href="invoice-view.html">#INV-0003</a>
                                    </td>
                                    <td>
                                      <h2 className="table-avatar">
                                        <a
                                          href="doctor-profile.html"
                                          className="avatar avatar-sm me-2">
                                          <img
                                            className="avatar-img rounded-circle"
                                            src="assets/img/doctors/doctor-thumb-08.jpg"
                                            alt="User Image"
                                          />
                                        </a>
                                        <a href="doctor-profile.html">
                                          Dr. Paul Richard{" "}
                                          <span>Dermatology</span>
                                        </a>
                                      </h2>
                                    </td>
                                    <td>$250</td>
                                    <td>7 Nov 2023</td>
                                    <td>
                                      <div className="table-action">
                                        <a
                                          href="invoice-view.html"
                                          className="btn btn-sm bg-info-light">
                                          <i className="far fa-eye" /> View
                                        </a>
                                        <a
                                          href="javascript:void(0);"
                                          className="btn btn-sm bg-primary-light">
                                          <i className="fas fa-print" /> Print
                                        </a>
                                      </div>
                                    </td>
                                  </tr>
                                  <tr>
                                    <td>
                                      <a href="invoice-view.html">#INV-0002</a>
                                    </td>
                                    <td>
                                      <h2 className="table-avatar">
                                        <a
                                          href="doctor-profile.html"
                                          className="avatar avatar-sm me-2">
                                          <img
                                            className="avatar-img rounded-circle"
                                            src="assets/img/doctors/doctor-thumb-09.jpg"
                                            alt="User Image"
                                          />
                                        </a>
                                        <a href="doctor-profile.html">
                                          Dr. John Gibbs <span>Dental</span>
                                        </a>
                                      </h2>
                                    </td>
                                    <td>$175</td>
                                    <td>6 Nov 2023</td>
                                    <td>
                                      <div className="table-action">
                                        <a
                                          href="invoice-view.html"
                                          className="btn btn-sm bg-info-light">
                                          <i className="far fa-eye" /> View
                                        </a>
                                        <a
                                          href="javascript:void(0);"
                                          className="btn btn-sm bg-primary-light">
                                          <i className="fas fa-print" /> Print
                                        </a>
                                      </div>
                                    </td>
                                  </tr>
                                  <tr>
                                    <td>
                                      <a href="invoice-view.html">#INV-0001</a>
                                    </td>
                                    <td>
                                      <h2 className="table-avatar">
                                        <a
                                          href="doctor-profile.html"
                                          className="avatar avatar-sm me-2">
                                          <img
                                            className="avatar-img rounded-circle"
                                            src="assets/img/doctors/doctor-thumb-10.jpg"
                                            alt="User Image"
                                          />
                                        </a>
                                        <a href="doctor-profile.html">
                                          Dr. Olga Barlow <span>#0010</span>
                                        </a>
                                      </h2>
                                    </td>
                                    <td>$550</td>
                                    <td>5 Nov 2023</td>
                                    <td>
                                      <div className="table-action">
                                        <a
                                          href="invoice-view.html"
                                          className="btn btn-sm bg-info-light">
                                          <i className="far fa-eye" /> View
                                        </a>
                                        <a
                                          href="javascript:void(0);"
                                          className="btn btn-sm bg-primary-light">
                                          <i className="fas fa-print" /> Print
                                        </a>
                                      </div>
                                    </td>
                                  </tr>
                                </tbody>
                              </table>
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
        </div>
      </div>
      <div className="modal fade custom-modal" id="graph1">
        <div className="modal-dialog modal-dialog-centered modal-lg">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">BMI Status</h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"></button>
            </div>
            <div className="modal-body">
              <div id="bmi-status" />
            </div>
          </div>
        </div>
      </div>
      <div className="modal fade custom-modal" id="graph2">
        <div className="modal-dialog modal-dialog-centered modal-lg">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">Heart Rate Status</h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"></button>
            </div>
            <div className="modal-body">
              <div id="heartrate-status" />
            </div>
          </div>
        </div>
      </div>
      <div className="modal fade custom-modal" id="graph3">
        <div className="modal-dialog modal-dialog-centered modal-lg">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">FBC Status</h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"></button>
            </div>
            <div className="modal-body">
              <div id="fbc-status" />
            </div>
          </div>
        </div>
      </div>
      <div className="modal fade custom-modal" id="graph4">
        <div className="modal-dialog modal-dialog-centered modal-lg">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">Weight Status</h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"></button>
            </div>
            <div className="modal-body">
              <div id="weight-status" />
            </div>
          </div>
        </div>
      </div>
      {/* Mirrored from doccure.dreamstechnologies.com/html/template/patient-dashboard.html by HTTrack Website Copier/3.x [XR&CO'2014], Tue, 16 Apr 2024 16:46:24 GMT */}
    </>
  );
}
