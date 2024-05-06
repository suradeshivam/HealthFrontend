import React from "react";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="footer footer-one">
      <div className="footer-top">
        <div className="container">
          <div className="row">
            <div className="col-lg-3 col-md-4">
              <div className="footer-widget footer-about">
                <div className="footer-logo">
                  <Link to={"/"}>
                    <a>
                      <h4>TwinDoc</h4>
                    </a>
                  </Link>
                </div>
                <div className="footer-about-content">
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore.
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
                        <a>Search for Doctors</a>
                      </li>
                      <li>
                        <Link to={"/login"}>Login</Link>
                      </li>
                      <li>
                        <Link to={"signup"}>Register</Link>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="col-lg-3 col-md-4">
                  <div className="footer-widget footer-menu">
                    <h2 className="footer-title">For Doctors</h2>
                    <ul>
                      <li>
                        <a>Appointments</a>
                      </li>
                      <li>
                        <a>Chat</a>
                      </li>
                      <li>
                        <Link to={"/login"}>
                          <a>Login</a>
                        </Link>
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
                          <i className="feather-map-pin" /> 3556 Beech Street,
                          USA
                        </p>
                      </div>
                      <div className="footer-address">
                        <p>
                          <i className="feather-phone-call" /> +1 315 369 5943
                        </p>
                      </div>
                      <div className="footer-address mb-0">
                        <p>
                          <i className="feather-mail" /> <a>email</a>
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
    </footer>
  );
}
