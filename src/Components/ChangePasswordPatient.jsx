import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Pagination from "./Pagination";
export default function Patientdashboard() {
  return (
    <>
      <div className="main-wrapper">
        <header className="header header-custom header-fixed header-one">
          <div className="container">
            <nav className="navbar navbar-expand-lg header-nav">
              <div className="navbar-header">
                <a id="mobile_btn" href="javascript:void(0);">
                  <span className="bar-icon">
                    <span />
                    <span />
                    <span />
                  </span>
                </a>
                <a href="index.html" className="navbar-brand logo">
                  <img
                    src="assets/img/logo.png"
                    className="img-fluid"
                    alt="Logo"
                  />
                </a>
              </div>
              <div className="main-menu-wrapper">
                <div className="menu-header">
                  <a href="index.html" className="menu-logo">
                    <img
                      src="assets/img/logo.png"
                      className="img-fluid"
                      alt="Logo"
                    />
                  </a>
                  <a
                    id="menu_close"
                    className="menu-close"
                    href="javascript:void(0);">
                    <i className="fas fa-times" />
                  </a>
                </div>
                <ul className="main-nav">
                  <li className="has-submenu megamenu">
                    <a href="javascript:void(0);">
                      Home <i className="fas fa-chevron-down" />
                    </a>
                    <ul className="submenu mega-submenu">
                      <li>
                        <div className="megamenu-wrapper">
                          <div className="row">
                            <div className="col-lg-2">
                              <div className="single-demo">
                                <div className="demo-img">
                                  <a
                                    href="index.html"
                                    className="inner-demo-img">
                                    <img
                                      src="assets/img/home-11.jpg"
                                      className="img-fluid "
                                      alt="img"
                                    />
                                  </a>
                                </div>
                                <div className="demo-info">
                                  <a
                                    href="index.html"
                                    className="inner-demo-img">
                                    General Home
                                  </a>
                                </div>
                              </div>
                            </div>
                            <div className="col-lg-2">
                              <div className="single-demo ">
                                <div className="demo-img">
                                  <a
                                    href="index-2.html"
                                    className="inner-demo-img">
                                    <img
                                      src="assets/img/home-10.jpg"
                                      className="img-fluid"
                                      alt="img"
                                    />
                                  </a>
                                </div>
                                <div className="demo-info">
                                  <a
                                    href="index-2.html"
                                    className="inner-demo-img">
                                    General Home 2
                                  </a>
                                </div>
                              </div>
                            </div>
                            <div className="col-lg-2">
                              <div className="single-demo">
                                <div className="demo-img">
                                  <a
                                    href="index-3.html"
                                    className="inner-demo-img">
                                    <img
                                      src="assets/img/home-09.jpg"
                                      className="img-fluid"
                                      alt="img"
                                    />
                                  </a>
                                </div>
                                <div className="demo-info">
                                  <a
                                    href="index-3.html"
                                    className="inner-demo-img">
                                    General Home 3
                                  </a>
                                </div>
                              </div>
                            </div>
                            <div className="col-lg-2">
                              <div className="single-demo">
                                <div className="demo-img">
                                  <a
                                    href="index-4.html"
                                    className="inner-demo-img">
                                    <img
                                      src="assets/img/home-08.jpg"
                                      className="img-fluid"
                                      alt="img"
                                    />
                                  </a>
                                </div>
                                <div className="demo-info">
                                  <a
                                    href="index-4.html"
                                    className="inner-demo-img">
                                    General Home 4
                                  </a>
                                </div>
                              </div>
                            </div>
                            <div className="col-lg-2">
                              <div className="single-demo">
                                <div className="demo-img">
                                  <a
                                    href="index-5.html"
                                    className="inner-demo-img">
                                    <img
                                      src="assets/img/home-07.jpg"
                                      className="img-fluid"
                                      alt="img"
                                    />
                                  </a>
                                </div>
                                <div className="demo-info">
                                  <a
                                    href="index-5.html"
                                    className="inner-demo-img">
                                    Cardiology Home
                                  </a>
                                </div>
                              </div>
                            </div>
                            <div className="col-lg-2">
                              <div className="single-demo">
                                <div className="demo-img">
                                  <a
                                    href="index-6.html"
                                    className="inner-demo-img">
                                    <img
                                      src="assets/img/home-06.jpg"
                                      className="img-fluid"
                                      alt="img"
                                    />
                                  </a>
                                </div>
                                <div className="demo-info">
                                  <a
                                    href="index-6.html"
                                    className="inner-demo-img">
                                    Eye Care Home
                                  </a>
                                </div>
                              </div>
                            </div>
                            <div className="col-lg-2">
                              <div className="single-demo">
                                <div className="demo-img">
                                  <a
                                    href="index-7.html"
                                    className="inner-demo-img">
                                    <img
                                      src="assets/img/home-05.jpg"
                                      className="img-fluid"
                                      alt="img"
                                    />
                                  </a>
                                </div>
                                <div className="demo-info">
                                  <a
                                    href="index-7.html"
                                    className="inner-demo-img">
                                    Veterinary Home
                                  </a>
                                </div>
                              </div>
                            </div>
                            <div className="col-lg-2">
                              <div className="single-demo">
                                <div className="demo-img">
                                  <a
                                    href="index-8.html"
                                    className="inner-demo-img">
                                    <img
                                      src="assets/img/home-04.jpg"
                                      className="img-fluid"
                                      alt="img"
                                    />
                                  </a>
                                </div>
                                <div className="demo-info">
                                  <a
                                    href="index-8.html"
                                    className="inner-demo-img">
                                    Paediatric Home
                                  </a>
                                </div>
                              </div>
                            </div>
                            <div className="col-lg-2">
                              <div className="single-demo">
                                <div className="demo-img">
                                  <a
                                    href="index-9.html"
                                    className="inner-demo-img">
                                    <img
                                      src="assets/img/home-03.jpg"
                                      className="img-fluid"
                                      alt="img"
                                    />
                                  </a>
                                </div>
                                <div className="demo-info">
                                  <a
                                    href="index-9.html"
                                    className="inner-demo-img">
                                    Fertility Home
                                  </a>
                                </div>
                              </div>
                            </div>
                            <div className="col-lg-2">
                              <div className="single-demo">
                                <div className="demo-img">
                                  <a
                                    href="index-10.html"
                                    className="inner-demo-img">
                                    <img
                                      src="assets/img/home-02.jpg"
                                      className="img-fluid"
                                      alt="img"
                                    />
                                  </a>
                                </div>
                                <div className="demo-info">
                                  <a
                                    href="index-10.html"
                                    className="inner-demo-img">
                                    ENT Hospital Home
                                  </a>
                                </div>
                              </div>
                            </div>
                            <div className="col-lg-2">
                              <div className="single-demo">
                                <div className="demo-img">
                                  <a
                                    href="index-11.html"
                                    className="inner-demo-img">
                                    <img
                                      src="assets/img/home-01.jpg"
                                      className="img-fluid"
                                      alt="img"
                                    />
                                  </a>
                                </div>
                                <div className="demo-info">
                                  <a
                                    href="index-11.html"
                                    className="inner-demo-img">
                                    Cosmetics Home
                                  </a>
                                </div>
                              </div>
                            </div>
                            <div className="col-lg-2">
                              <div className="single-demo">
                                <div className="demo-img">
                                  <a
                                    href="index-12.html"
                                    className="inner-demo-img">
                                    <img
                                      src="assets/img/home-12.jpg"
                                      className="img-fluid"
                                      alt="img"
                                    />
                                  </a>
                                </div>
                                <div className="demo-info">
                                  <a
                                    href="index-12.html"
                                    className="inner-demo-img">
                                    Lab Test Home
                                  </a>
                                </div>
                              </div>
                            </div>
                            <div className="col-lg-2">
                              <div className="single-demo">
                                <div className="demo-img">
                                  <a
                                    href="index-13.html"
                                    className="inner-demo-img">
                                    <img
                                      src="assets/img/home-13.jpg"
                                      className="img-fluid"
                                      alt="img"
                                    />
                                  </a>
                                </div>
                                <div className="demo-info">
                                  <a
                                    href="index-13.html"
                                    className="inner-demo-img">
                                    Homecare Home
                                  </a>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </li>
                    </ul>
                  </li>
                  <li className="has-submenu">
                    <a href="javascript:void(0);">
                      Doctors <i className="fas fa-chevron-down" />
                    </a>
                    <ul className="submenu">
                      <li>
                        <a href="doctor-dashboard.html">Doctor Dashboard</a>
                      </li>
                      <li>
                        <a href="appointments.html">Appointments</a>
                      </li>
                      <li>
                        <a href="schedule-timings.html">Schedule Timing</a>
                      </li>
                      <li>
                        <a href="my-patients.html">Patients List</a>
                      </li>
                      <li>
                        <a href="patient-profile.html">Patients Profile</a>
                      </li>
                      <li>
                        <a href="chat-doctor.html">Chat</a>
                      </li>
                      <li>
                        <a href="invoices.html">Invoices</a>
                      </li>
                      <li>
                        <a href="doctor-profile-settings.html">
                          Profile Settings
                        </a>
                      </li>
                      <li>
                        <a href="reviews.html">Reviews</a>
                      </li>
                      <li>
                        <a href="doctor-register.html">Doctor Register</a>
                      </li>
                      <li className="has-submenu">
                        <a href="doctor-blog.html">Blog</a>
                        <ul className="submenu">
                          <li>
                            <a href="doctor-blog.html">Blog</a>
                          </li>
                          <li>
                            <a href="blog-details.html">Blog view</a>
                          </li>
                          <li>
                            <a href="doctor-add-blog.html">Add Blog</a>
                          </li>
                        </ul>
                      </li>
                    </ul>
                  </li>
                  <li className="has-submenu active">
                    <a href="javascript:void(0);">
                      Patients <i className="fas fa-chevron-down" />
                    </a>
                    <ul className="submenu">
                      <li className="has-submenu">
                        <a href="javascript:void(0);">Doctors</a>
                        <ul className="submenu inner-submenu">
                          <li>
                            <a href="map-grid.html">Map Grid</a>
                          </li>
                          <li>
                            <a href="map-list.html">Map List</a>
                          </li>
                        </ul>
                      </li>
                      <li className="has-submenu">
                        <a href="javascript:void(0);">Search Doctor</a>
                        <ul className="submenu inner-submenu">
                          <li>
                            <a href="search.html">Search Doctor 1</a>
                          </li>
                          <li>
                            <a href="search-2.html">Search Doctor 2</a>
                          </li>
                        </ul>
                      </li>
                      <li>
                        <a href="doctor-profile.html">Doctor Profile</a>
                      </li>
                      <li className="has-submenu">
                        <a href="javascript:void(0);">Booking</a>
                        <ul className="submenu inner-submenu">
                          <li>
                            <a href="booking.html">Booking 1</a>
                          </li>
                          <li>
                            <a href="booking-2.html">Booking 2</a>
                          </li>
                        </ul>
                      </li>
                      <li>
                        <a href="checkout.html">Checkout</a>
                      </li>
                      <li>
                        <a href="booking-success.html">Booking Success</a>
                      </li>
                      <li>
                        <a href="patient-dashboard.html">Patient Dashboard</a>
                      </li>
                      <li>
                        <a href="favourites.html">Favourites</a>
                      </li>
                      <li>
                        <a href="chat.html">Chat</a>
                      </li>
                      <li>
                        <a href="profile-settings.html">Profile Settings</a>
                      </li>
                      <li className="active">
                        <a href="change-password.html">Change Password</a>
                      </li>
                    </ul>
                  </li>
                  <li className="has-submenu">
                    <a href="javascript:void(0);">
                      Pharmacy <i className="fas fa-chevron-down" />
                    </a>
                    <ul className="submenu">
                      <li>
                        <a href="pharmacy-index.html">Pharmacy</a>
                      </li>
                      <li>
                        <a href="pharmacy-details.html">Pharmacy Details</a>
                      </li>
                      <li>
                        <a href="pharmacy-search.html">Pharmacy Search</a>
                      </li>
                      <li>
                        <a href="product-all.html">Product</a>
                      </li>
                      <li>
                        <a href="product-description.html">
                          Product Description
                        </a>
                      </li>
                      <li>
                        <a href="cart.html">Cart</a>
                      </li>
                      <li>
                        <a href="product-checkout.html">Product Checkout</a>
                      </li>
                      <li>
                        <a href="payment-success.html">Payment Success</a>
                      </li>
                      <li>
                        <a href="pharmacy-register.html">Pharmacy Register</a>
                      </li>
                    </ul>
                  </li>
                  <li className="has-submenu">
                    <a href="javascript:void(0);">
                      Pages <i className="fas fa-chevron-down" />
                    </a>
                    <ul className="submenu">
                      <li>
                        <a href="about-us.html">About Us</a>
                      </li>
                      <li>
                        <a href="contact-us.html">Contact Us</a>
                      </li>
                      <li className="has-submenu">
                        <a href="javascript:void(0);">Call</a>
                        <ul className="submenu inner-submenu">
                          <li>
                            <a href="voice-call.html">Voice Call</a>
                          </li>
                          <li>
                            <a href="video-call.html">Video Call</a>
                          </li>
                        </ul>
                      </li>
                      <li className="has-submenu">
                        <a href="javascript:void(0);">Invoices</a>
                        <ul className="submenu inner-submenu">
                          <li>
                            <a href="invoices.html">Invoices</a>
                          </li>
                          <li>
                            <a href="invoice-view.html">Invoice View</a>
                          </li>
                        </ul>
                      </li>
                      <li className="has-submenu">
                        <a href="javascript:void(0);">Authentication</a>
                        <ul className="submenu inner-submenu">
                          <li>
                            <a href="login-email.html">Login Email</a>
                          </li>
                          <li>
                            <a href="login-phone.html">Login Phone</a>
                          </li>
                          <li>
                            <a href="doctor-signup.html">Doctor Signup</a>
                          </li>
                          <li>
                            <a href="patient-signup.html">Patient Signup</a>
                          </li>
                          <li>
                            <a href="forgot-password.html">Forgot Password 1</a>
                          </li>
                          <li>
                            <a href="forgot-password2.html">
                              Forgot Password 2
                            </a>
                          </li>
                          <li>
                            <a href="login-email-otp.html">Email OTP</a>
                          </li>
                          <li>
                            <a href="login-phone-otp.html">Phone OTP</a>
                          </li>
                        </ul>
                      </li>
                      <li className="has-submenu">
                        <a href="javascript:void(0);">Error Pages</a>
                        <ul className="submenu inner-submenu">
                          <li>
                            <a href="error-404.html">404 Error</a>
                          </li>
                          <li>
                            <a href="error-500.html">500 Error</a>
                          </li>
                        </ul>
                      </li>
                      <li>
                        <a href="blank-page.html">Starter Page</a>
                      </li>
                      <li>
                        <a href="pricing.html">Pricing Plan</a>
                      </li>
                      <li>
                        <a href="faq.html">FAQ</a>
                      </li>
                      <li>
                        <a href="maintenance.html">Maintenance</a>
                      </li>
                      <li>
                        <a href="coming-soon.html">Coming Soon</a>
                      </li>
                      <li>
                        <a href="terms-condition.html">Terms &amp; Condition</a>
                      </li>
                      <li>
                        <a href="privacy-policy.html">Privacy Policy</a>
                      </li>
                      <li>
                        <a href="components.html">Components</a>
                      </li>
                    </ul>
                  </li>
                  <li className="has-submenu">
                    <a href="#">
                      Blog <i className="fas fa-chevron-down" />
                    </a>
                    <ul className="submenu">
                      <li>
                        <a href="blog-list.html">Blog List</a>
                      </li>
                      <li>
                        <a href="blog-grid.html">Blog Grid</a>
                      </li>
                      <li>
                        <a href="blog-details.html">Blog Details</a>
                      </li>
                    </ul>
                  </li>
                  <li className="has-submenu">
                    <a href="#">
                      Admin <i className="fas fa-chevron-down" />
                    </a>
                    <ul className="submenu">
                      <li>
                        <a href="admin/index.html" target="_blank">
                          Admin
                        </a>
                      </li>
                      <li>
                        <a href="pharmacy/index.html" target="_blank">
                          Pharmacy Admin
                        </a>
                      </li>
                    </ul>
                  </li>
                </ul>
              </div>
              <ul className="nav header-navbar-rht">
                <li className="nav-item dropdown noti-nav view-cart-header me-3">
                  <a
                    href="#"
                    className="dropdown-toggle nav-link p-0 position-relative"
                    data-bs-toggle="dropdown">
                    <i className="fa-solid fa-cart-shopping" />{" "}
                    <small className="unread-msg1">7</small>
                  </a>
                  <div className="dropdown-menu notifications dropdown-menu-end">
                    <div className="shopping-cart">
                      <ul className="shopping-cart-items list-unstyled">
                        <li className="clearfix">
                          <div className="close-icon">
                            <i className="fa-solid fa-circle-xmark" />
                          </div>
                          <a href="product-description.html">
                            <img
                              className="avatar-img rounded"
                              src="assets/img/products/product.jpg"
                              alt="User Image"
                            />
                          </a>
                          <a
                            href="product-description.html"
                            className="item-name">
                            Benzaxapine Croplex
                          </a>
                          <span className="item-price">$849.99</span>
                          <span className="item-quantity">Quantity: 01</span>
                        </li>
                        <li className="clearfix">
                          <div className="close-icon">
                            <i className="fa-solid fa-circle-xmark" />
                          </div>
                          <a href="product-description.html">
                            <img
                              className="avatar-img rounded"
                              src="assets/img/products/product1.jpg"
                              alt="User Image"
                            />
                          </a>
                          <a
                            href="product-description.html"
                            className="item-name">
                            Ombinazol Bonibamol
                          </a>
                          <span className="item-price">$1,249.99</span>
                          <span className="item-quantity">Quantity: 01</span>
                        </li>
                        <li className="clearfix">
                          <div className="close-icon">
                            <i className="fa-solid fa-circle-xmark" />
                          </div>
                          <a href="product-description.html">
                            <img
                              className="avatar-img rounded"
                              src="assets/img/products/product2.jpg"
                              alt="User Image"
                            />
                          </a>
                          <a
                            href="product-description.html"
                            className="item-name">
                            Dantotate Dantodazole
                          </a>
                          <span className="item-price">$129.99</span>
                          <span className="item-quantity">Quantity: 01</span>
                        </li>
                      </ul>
                      <div className="booking-summary pt-3">
                        <div className="booking-item-wrap">
                          <ul className="booking-date">
                            <li>
                              Subtotal <span>$5,877.00</span>
                            </li>
                            <li>
                              Shipping <span>$25.00</span>
                            </li>
                            <li>
                              Tax <span>$0.00</span>
                            </li>
                            <li>
                              Total <span>$5.2555</span>
                            </li>
                          </ul>
                          <div className="booking-total">
                            <ul className="booking-total-list text-align">
                              <li>
                                <div className="clinic-booking pt-3">
                                  <a className="apt-btn" href="cart.html">
                                    View Cart
                                  </a>
                                </div>
                              </li>
                              <li>
                                <div className="clinic-booking pt-3">
                                  <a
                                    className="apt-btn"
                                    href="product-checkout.html">
                                    Checkout
                                  </a>
                                </div>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </li>
                <li className="nav-item dropdown noti-nav me-3 pe-0">
                  <a
                    href="#"
                    className="dropdown-toggle nav-link p-0"
                    data-bs-toggle="dropdown">
                    <i className="fa-solid fa-bell" />{" "}
                    <span className="badge">5</span>
                  </a>
                  <div className="dropdown-menu notifications dropdown-menu-end ">
                    <div className="topnav-dropdown-header">
                      <span className="notification-title">Notifications</span>
                    </div>
                    <div className="noti-content">
                      <ul className="notification-list">
                        <li className="notification-message">
                          <a href="#">
                            <div className="notify-block d-flex">
                              <span className="avatar">
                                <img
                                  className="avatar-img"
                                  alt="Ruby perin"
                                  src="assets/img/clients/client-01.jpg"
                                />
                              </span>
                              <div className="media-body">
                                <h6>
                                  Travis Tremble{" "}
                                  <span className="notification-time">
                                    18.30 PM
                                  </span>
                                </h6>
                                <p className="noti-details">
                                  Sent a amount of $210 for his Appointment{" "}
                                  <span className="noti-title">
                                    Dr.Ruby perin{" "}
                                  </span>
                                </p>
                              </div>
                            </div>
                          </a>
                        </li>
                        <li className="notification-message">
                          <a href="#">
                            <div className="notify-block d-flex">
                              <span className="avatar">
                                <img
                                  className="avatar-img"
                                  alt="Hendry Watt"
                                  src="assets/img/clients/client-02.jpg"
                                />
                              </span>
                              <div className="media-body">
                                <h6>
                                  Travis Tremble{" "}
                                  <span className="notification-time">
                                    12 Min Ago
                                  </span>
                                </h6>
                                <p className="noti-details">
                                  {" "}
                                  has booked her appointment to{" "}
                                  <span className="noti-title">
                                    Dr. Hendry Watt
                                  </span>
                                </p>
                              </div>
                            </div>
                          </a>
                        </li>
                        <li className="notification-message">
                          <a href="#">
                            <div className="notify-block d-flex">
                              <div className="avatar">
                                <img
                                  className="avatar-img"
                                  alt="Maria Dyen"
                                  src="assets/img/clients/client-03.jpg"
                                />
                              </div>
                              <div className="media-body">
                                <h6>
                                  Travis Tremble{" "}
                                  <span className="notification-time">
                                    6 Min Ago
                                  </span>
                                </h6>
                                <p className="noti-details">
                                  {" "}
                                  Sent a amount $210 for his Appointment{" "}
                                  <span className="noti-title">
                                    Dr.Maria Dyen
                                  </span>
                                </p>
                              </div>
                            </div>
                          </a>
                        </li>
                        <li className="notification-message">
                          <a href="#">
                            <div className="notify-block d-flex">
                              <div className="avatar avatar-sm">
                                <img
                                  className="avatar-img"
                                  alt="client-image"
                                  src="assets/img/clients/client-04.jpg"
                                />
                              </div>
                              <div className="media-body">
                                <h6>
                                  Travis Tremble{" "}
                                  <span className="notification-time">
                                    8.30 AM
                                  </span>
                                </h6>
                                <p className="noti-details">
                                  {" "}
                                  Send a message to his doctor
                                </p>
                              </div>
                            </div>
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </li>
                <li className="nav-item dropdown has-arrow logged-item">
                  <a
                    href="#"
                    className="dropdown-toggle nav-link"
                    data-bs-toggle="dropdown">
                    <span className="user-img">
                      <img
                        className="rounded-circle"
                        src="assets/img/patients/patient.jpg"
                        width={31}
                        alt="Darren Elder"
                      />
                    </span>
                  </a>
                  <div className="dropdown-menu dropdown-menu-end">
                    <div className="user-header">
                      <div className="avatar avatar-sm">
                        <img
                          src="assets/img/patients/patient.jpg"
                          alt="User Image"
                          className="avatar-img rounded-circle"
                        />
                      </div>
                      <div className="user-text">
                        <h6>Richard Wilson</h6>
                        <p className="text-muted mb-0">Patient</p>
                      </div>
                    </div>
                    <a className="dropdown-item" href="doctor-dashboard.html">
                      Dashboard
                    </a>
                    <a className="dropdown-item" href="profile-settings.html">
                      Profile Settings
                    </a>
                    <a className="dropdown-item" href="login.html">
                      Logout
                    </a>
                  </div>
                </li>
              </ul>
            </nav>
          </div>
        </header>
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
                        <li>
                          <a href="patient-dashboard.html">
                            <i className="fas fa-columns" />
                            <span>Dashboard</span>
                          </a>
                        </li>
                        <li>
                          <a href="favourites.html">
                            <i className="fas fa-bookmark" />
                            <span>Favourites</span>
                          </a>
                        </li>
                        <li>
                          <a href="dependent.html">
                            <i className="fas fa-users" />
                            <span>Dependent</span>
                          </a>
                        </li>
                        <li>
                          <a href="chat.html">
                            <i className="fas fa-comments" />
                            <span>Message</span>
                            <small className="unread-msg">23</small>
                          </a>
                        </li>
                        <li>
                          <a href="patient-accounts.html">
                            <i className="fas fa-file-invoice-dollar" />
                            <span>Accounts</span>
                          </a>
                        </li>
                        <li>
                          <a href="orders-list.html">
                            <i className="fas fa-list-alt" />
                            <span>Orders</span>
                            <small className="unread-msg">7</small>
                          </a>
                        </li>
                        <li>
                          <a href="medical-records.html">
                            <i className="fas fa-clipboard" />
                            <span>Add Medical Records</span>
                          </a>
                        </li>
                        <li>
                          <a href="medical-details.html">
                            <i className="fas fa-file-medical-alt" />
                            <span>Medical Details</span>
                          </a>
                        </li>
                        <li>
                          <a href="profile-settings.html">
                            <i className="fas fa-user-cog" />
                            <span>Profile Settings</span>
                          </a>
                        </li>
                        <li className="active">
                          <a href="change-password.html">
                            <i className="fas fa-lock" />
                            <span>Change Password</span>
                          </a>
                        </li>
                        <li>
                          <a href="login.html">
                            <i className="fas fa-sign-out-alt" />
                            <span>Logout</span>
                          </a>
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
                          <label className="mb-2">Old Passworddddd</label>
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
                              onClick={() =>
                                setShowOldPassword(!showOldPassword)
                              }
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
                              onChange={(e) =>
                                setConfirmPassword(e.target.value)
                              }
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
                                href="https://TwinsisTech.dreamstechnologies.com/cdn-cgi/l/email-protection"
                                className="__cf_email__"
                                data-cfemail="70141f1313050215301508111d001c155e131f1d">
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
      {/* Mirrored from TwinsisTech.dreamstechnologies.com/html/template/change-password.html by HTTrack Website Copier/3.x [XR&CO'2014], Tue, 16 Apr 2024 16:46:25 GMT */}
    </>
  );
}
