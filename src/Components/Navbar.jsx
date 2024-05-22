import React from "react";
import { Link } from "react-router-dom";
import { OrderState } from "../Contexts";

export default function Navbar() {

  const {notification} = OrderState();

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
                  src="assets/img/favicon/20240505_203516.png"
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
            <ul className="main-nav" style={{ marginRight: "100px" }}>
              <li className="has-submenu ">
                <Link to="/aboutus">About us</Link>
              </li>
              <li className="has-submenu">
                <a href="javascript:void(0);">Services</a>
              </li>
              <li className="has-submenu">
                <Link to="/contactus">Contact</Link>
              </li>
              <li className="has-submenu">
                <a href="https://healthcareaii.netlify.app/" target="_blank">
                  Healthcare AI
                </a>
              </li>
            </ul>
          </div>
          <ul className="nav header-navbar-rht">
            <li className="nav-item dropdown noti-nav me-3 pe-0">
              <a
                className="dropdown-toggle nav-link p-0"
                data-bs-toggle="dropdown">
                <i className="fa-solid fa-bell" />{" "}
                <span className="badge">{notification?.length}</span>
              </a>
              <div className="dropdown-menu notifications dropdown-menu-end ">
                <div className="topnav-dropdown-header">
                  <span className="notification-title">Notifications</span>
                </div>
                <div className="noti-contenlt">
                  <ul className="notification-list">
                    {notification?.map ((noti) => ( 
                    <li className="notification-message" key={noti.id}>
                      <a >
                        <div className="notify-block d-flex">
                          <span className="avatar">
                            <img
                              className="avatar-img"
                              alt="Ruby perin"
                              src={noti.image ||"assets/img/clients/client-01.jpg"}
                            />
                          </span>
                          <div className="media-body">
                            <h6>
                            {noti.patientName}{" "}
                              <span className="notification-time">
                              {noti.time}
                              </span>
                            </h6>
                            <p className="noti-details">
                            Prescription added by  {" "}
                              <span className="noti-title">{noti.physicianName}</span>
                            </p>
                          </div>
                        </div>
                      </a>
                    </li>
                    ))}
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
