import React from "react";

export default function Contactus() {
  return (
    <>
      <div className="main-wrapper">
        <div className="breadcrumb-bar-two">
          <div className="container">
            <div className="row align-items-center inner-banner">
              <div className="col-md-12 col-12 text-center">
                <h2 className="breadcrumb-title">Contact Us</h2>
                <nav aria-label="breadcrumb" className="page-breadcrumb">
                  <ol className="breadcrumb">
                    <li className="breadcrumb-item">
                      <a href="index.html">Home</a>
                    </li>
                    <li className="breadcrumb-item" aria-current="page">
                      Contact Us
                    </li>
                  </ol>
                </nav>
              </div>
            </div>
          </div>
        </div>
        <section className="contact-section">
          <div className="container">
            <div className="row">
              <div className="col-lg-5 col-md-12">
                <div className="section-inner-header contact-inner-header">
                  <h6>Get in touch</h6>
                  <h2>Have Any Question?</h2>
                </div>
                <div className="card contact-card">
                  <div className="card-body">
                    <div className="contact-icon">
                      <i className="feather-map-pin" />
                    </div>
                    <div className="contact-details">
                      <h4>Address</h4>
                      <p>Govind Galaxy, Nasik MH 422002 India </p>
                    </div>
                  </div>
                </div>
                <div className="card contact-card">
                  <div className="card-body">
                    <div className="contact-icon">
                      <i className="feather-phone" />
                    </div>
                    <div className="contact-details">
                      <h4>Phone Number</h4>
                      <p>+91 8983633057</p>
                    </div>
                  </div>
                </div>
                <div className="card contact-card">
                  <div className="card-body">
                    <div className="contact-icon">
                      <i className="feather-mail" />
                    </div>
                    <div className="contact-details">
                      <h4>Email Address</h4>
                      <p>connect@twinsistech.com</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-7 col-md-12 d-flex">
                <div className="card contact-form-card w-100">
                  <div className="card-body">
                    <form action="#">
                      <div className="row">
                        <div className="col-md-6">
                          <div className="mb-3">
                            <label className="mb-2">Name</label>
                            <input
                              type="text"
                              className="form-control"
                              placeholder="Enter Your Name"
                            />
                          </div>
                        </div>
                        <div className="col-md-6">
                          <div className="mb-3">
                            <label className="mb-2">Email Address</label>
                            <input
                              type="text"
                              className="form-control"
                              placeholder="Enter Email Address"
                            />
                          </div>
                        </div>
                        <div className="col-md-6">
                          <div className="mb-3">
                            <label className="mb-2">Phone Number</label>
                            <input
                              type="text"
                              className="form-control"
                              placeholder="Enter Phone Number"
                            />
                          </div>
                        </div>
                        <div className="col-md-6">
                          <div className="mb-3">
                            <label className="mb-2">Services</label>
                            <input
                              type="text"
                              className="form-control"
                              placeholder="Enter Services"
                            />
                          </div>
                        </div>
                        <div className="col-md-12">
                          <div className="mb-3">
                            <label className="mb-2">Message</label>
                            <textarea
                              className="form-control"
                              placeholder="Enter your comments"
                              defaultValue={""}
                            />
                          </div>
                        </div>
                        <div className="col-md-12">
                          <div className="form-group-btn mb-0">
                            <button
                              type="submit"
                              className="btn btn-primary prime-btn">
                              Send Message
                            </button>
                          </div>
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <div className="contact-map d-flex">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3748.7747324071847!2d73.84174931125925!3d20.017967081312662!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bddc1c41af3c085%3A0x3a7f6e9dfb215f5c!2sGovind%20Galaxy!5e0!3m2!1sen!2sin!4v1715969528183!5m2!1sen!2sin"
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </div>
      {/* Mirrored from doccure.dreamstechnologies.com/html/template/contact-us.html by HTTrack Website Copier/3.x [XR&CO'2014], Tue, 16 Apr 2024 16:47:27 GMT */}
    </>
  );
}
