import React from "react";
import { Link } from "react-router-dom";

export default function Orderslist() {
  return (
    <>
      {/* Mirrored from doccure.dreamstechnologies.com/html/template/orders-list.html by HTTrack Website Copier/3.x [XR&CO'2014], Tue, 16 Apr 2024 16:48:29 GMT */}
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
      <link rel="stylesheet" href="assets/css/custom.css" />
      <div className="main-wrapper">
        <div className="breadcrumb-bar-two">
          <div className="container">
            <div className="row align-items-center inner-banner">
              <div className="col-md-12 col-12 text-center">
                <h2 className="breadcrumb-title">Orders</h2>
                <nav aria-label="breadcrumb" className="page-breadcrumb">
                  <ol className="breadcrumb">
                    <li className="breadcrumb-item">
                      <a href="index.html">Home</a>
                    </li>
                    <li className="breadcrumb-item" aria-current="page">
                      Orders
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
                  <div className="col-sm-12">
                    <div className="card">
                      <div className="card-body">
                        <div className="card card-table mb-0">
                          <div className="card-body">
                            <div className="table-responsive">
                              <table className="table table-hover table-center mb-0">
                                <thead>
                                  <tr>
                                    <th>#</th>
                                    <th>Order Id</th>
                                    <th>Pharmacy Name</th>
                                    <th>Quantity</th>
                                    <th>Amount</th>
                                    <th>Payment Gateway</th>
                                    <th>Status</th>
                                    <th>Order date</th>
                                  </tr>
                                </thead>
                                <tbody>
                                  <tr>
                                    <td>1</td>
                                    <td>
                                      <a href="invoice-view.html">
                                        OD1236547890
                                      </a>
                                    </td>
                                    <td>Medlife Medical</td>
                                    <td>2</td>
                                    <td>$150</td>
                                    <td>Stripe</td>
                                    <td>
                                      <span className="badge badge-primary">
                                        Order Placed
                                      </span>
                                    </td>
                                    <td>
                                      11 Nov 2023{" "}
                                      <span className="d-block text-info">
                                        10.00 AM
                                      </span>
                                    </td>
                                  </tr>
                                  <tr>
                                    <td>2</td>
                                    <td>
                                      <a href="invoice-view.html">
                                        OD1236547891
                                      </a>
                                    </td>
                                    <td>Medlife Medical</td>
                                    <td>4</td>
                                    <td>$200</td>
                                    <td>Stripe</td>
                                    <td>
                                      <span className="badge badge-primary">
                                        Order Placed
                                      </span>
                                    </td>
                                    <td>
                                      3 Nov 2023{" "}
                                      <span className="d-block text-info">
                                        11.00 AM
                                      </span>
                                    </td>
                                  </tr>
                                  <tr>
                                    <td>3</td>
                                    <td>
                                      <a href="invoice-view.html">
                                        OD1236547892
                                      </a>
                                    </td>
                                    <td>Medlife Medical</td>
                                    <td>1</td>
                                    <td>$75</td>
                                    <td>Stripe</td>
                                    <td>
                                      <span className="badge badge-primary">
                                        Order Placed
                                      </span>
                                    </td>
                                    <td>
                                      1 Nov 2023{" "}
                                      <span className="d-block text-info">
                                        1.00 PM
                                      </span>
                                    </td>
                                  </tr>
                                  <tr>
                                    <td>4</td>
                                    <td>
                                      <a href="invoice-view.html">
                                        OD1236547893
                                      </a>
                                    </td>
                                    <td>PharmaMed Medical</td>
                                    <td>2</td>
                                    <td>$100</td>
                                    <td>Paystack</td>
                                    <td>
                                      <span className="badge badge-warning">
                                        Shipped
                                      </span>
                                    </td>
                                    <td>
                                      30 Oct 2023{" "}
                                      <span className="d-block text-info">
                                        9.00 AM
                                      </span>
                                    </td>
                                  </tr>
                                  <tr>
                                    <td>5</td>
                                    <td>
                                      <a href="invoice-view.html">
                                        OD1236547894
                                      </a>
                                    </td>
                                    <td>PharmaMed Medical</td>
                                    <td>5</td>
                                    <td>$350</td>
                                    <td>Stripe</td>
                                    <td>
                                      <span className="badge badge-warning">
                                        Shipped
                                      </span>
                                    </td>
                                    <td>
                                      28 Oct 2023{" "}
                                      <span className="d-block text-info">
                                        6.00 PM
                                      </span>
                                    </td>
                                  </tr>
                                  <tr>
                                    <td>6</td>
                                    <td>
                                      <a href="invoice-view.html">
                                        OD1236547895
                                      </a>
                                    </td>
                                    <td>The Pill Club Medical</td>
                                    <td>1</td>
                                    <td>$250</td>
                                    <td>Paypal</td>
                                    <td>
                                      <span className="badge badge-primary">
                                        Order Placed
                                      </span>
                                    </td>
                                    <td>
                                      27 Oct 2023{" "}
                                      <span className="d-block text-info">
                                        8.00 AM
                                      </span>
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
        <footer className="footer footer-one">
          <div className="footer-top">
            <div className="container">
              <div className="row">
                <div className="col-lg-3 col-md-4">
                  <div className="footer-widget footer-about">
                    <div className="footer-logo">
                      <a href="index.html">
                        <img src="assets/img/logo.png" alt="logo" />
                      </a>
                    </div>
                    <div className="footer-about-content">
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="row">
                    <div className="col-lg-3 col-md-4">
                      <div className="footer-widget footer-menu">
                        <h2 className="footer-title">For Patients</h2>
                        <ul>
                          <li>
                            <a href="search.html">Search for Doctors</a>
                          </li>
                          <li>
                            <a href="login.html">Login</a>
                          </li>
                          <li>
                            <a href="register.html">Register</a>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div className="col-lg-3 col-md-4">
                      <div className="footer-widget footer-menu">
                        <h2 className="footer-title">For Doctors</h2>
                        <ul>
                          <li>
                            <a href="appointments.html">Appointments</a>
                          </li>
                          <li>
                            <a href="chat.html">Chat</a>
                          </li>
                          <li>
                            <a href="login.html">Login</a>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div className="col-lg-6 col-md-4">
                      <div className="footer-widget footer-contact">
                        <h2 className="footer-title">Contact Us</h2>
                        <div className="footer-contact-info">
                          <div className="footer-address">
                            <p>
                              <i className="feather-map-pin" /> 3556 Beech
                              Street, USA
                            </p>
                          </div>
                          <div className="footer-address">
                            <p>
                              <i className="feather-phone-call" /> +1 315 369
                              5943
                            </p>
                          </div>
                          <div className="footer-address mb-0">
                            <p>
                              <i className="feather-mail" />{" "}
                              <a
                                href="https://doccure.dreamstechnologies.com/cdn-cgi/l/email-protection"
                                className="__cf_email__"
                                data-cfemail="492d262a2a3c3b2c092c31282439252c672a2624">
                                [email&nbsp;protected]
                              </a>
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-3 col-md-7">
                  <div className="footer-widget">
                    <h2 className="footer-title">Join Our Newsletter</h2>
                    <div className="subscribe-form">
                      <form action="#">
                        <input
                          type="email"
                          className="form-control"
                          placeholder="Enter Email"
                        />
                        <button type="submit" className="btn">
                          Submit
                        </button>
                      </form>
                    </div>
                    <div className="social-icon">
                      <ul>
                        <li>
                          <a href="javascript:void(0);">
                            <i className="fab fa-facebook" />
                          </a>
                        </li>
                        <li>
                          <a href="javascript:void(0);">
                            <i className="fab fa-instagram" />
                          </a>
                        </li>
                        <li>
                          <a href="javascript:void(0);">
                            <i className="fab fa-twitter" />
                          </a>
                        </li>
                        <li>
                          <a href="javascript:void(0);">
                            <i className="fab fa-linkedin-in" />
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="footer-bottom">
            <div className="container">
              <div className="copyright">
                <div className="row">
                  <div className="col-md-6 col-lg-6">
                    <div className="copyright-text">
                      <p className="mb-0">
                        {" "}
                        Copyright © 2024{" "}
                        <a
                          href="https://themeforest.net/user/dreamstechnologies/portfolio"
                          target="_blank">
                          Dreamstechnologies.
                        </a>{" "}
                        All Rights Reserved
                      </p>
                    </div>
                  </div>
                  <div className="col-md-6 col-lg-6">
                    <div className="copyright-menu">
                      <ul className="policy-menu">
                        <li>
                          <a href="privacy-policy.html">Privacy Policy</a>
                        </li>
                        <li>
                          <a href="terms-condition.html">
                            Terms and Conditions
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </footer>
      </div>
      {/* Mirrored from doccure.dreamstechnologies.com/html/template/orders-list.html by HTTrack Website Copier/3.x [XR&CO'2014], Tue, 16 Apr 2024 16:48:29 GMT */}
    </>
  );
}
