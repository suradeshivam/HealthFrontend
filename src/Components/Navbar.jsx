import React from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
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
            <Link to="/" className="navbar-brand logo">
              <img
                src="assets/img/favicon/20240505_203516.png"
                className="img-fluid"
                alt="Logo"
              />
            </Link>
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
                href="javascript:void(0);"
              >
                <i className="fas fa-times" />
              </a>
            </div>
            <ul className="main-nav" style={{ marginRight: "100px" }}>
              <li className="has-submenu ">
                <a href="javascript:void(0);">About Us</a>
              </li>
              <li className="has-submenu">
                <a href="javascript:void(0);">Services</a>
              </li>
              <li className="has-submenu">
                <a href="javascript:void(0);">Contact</a>
              </li>
            </ul>
          </div>
          <ul className="nav header-navbar-rht">
            <li className="nav-item dropdown noti-nav me-3 pe-0">
              <a
                href="#"
                className="dropdown-toggle nav-link p-0"
                data-bs-toggle="dropdown"
              >
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
                              <span className="noti-title">Dr.Ruby perin </span>
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
                              <span className="noti-title">Dr.Maria Dyen</span>
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
                              <span className="notification-time">8.30 AM</span>
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
                data-bs-toggle="dropdown"
              >
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
                <Link className="dropdown-item" to="/user">
                  Dashboard
                </Link>
                <Link className="dropdown-item" to="/profile-settings">
                  Profile Settings
                </Link>
                <Link className="dropdown-item" href="/login">
                  Logout
                </Link>
              </div>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
