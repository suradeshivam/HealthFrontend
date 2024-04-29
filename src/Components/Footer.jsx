import React from "react";

export default function Footer() {
  return (
    <footer className="footer footer-one">
      <div className="footer-top">
        <div className="container">
          <div className="row">
            <div className="col-lg-3 col-md-4">
              <div className="footer-widget footer-about">
                <div className="footer-logo">
                  <a href="index.html">
                    <h4>TwinDoc</h4>
                  </a>
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
                          <i className="feather-mail" />{" "}
                          <a
                            href="https://TwinDoc.dreamstechnologies.com/cdn-cgi/l/email-protection"
                            className="__cf_email__"
                            data-cfemail="dbbfb4b8b8aea9be9bbea3bab6abb7bef5b8b4b6">
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

    </footer>
  );
}
