import axios from "axios";
import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { OrderState } from "../../Contexts";

export default function Doctorprofile() {
  const { selectedDoctor, setSelectedDoctor } = OrderState();

  const getSingleDoctorProfile = async () => {
    const isAuthenticated = localStorage.getItem("token");
    const doctor = await axios.get(
      `http://localhost:5000/patient/search/${selectedDoctor}`,
      {
        headers: {
          authorization: isAuthenticated,
        },
      }
    );

    console.log(doctor);
  };

  useEffect(() => {
    getSingleDoctorProfile();
  }, []);

  return (
    <div>
      <div className="main-wrapper">
        <div className="breadcrumb-bar-two">
          <div className="container">
            <div className="row align-items-center inner-banner">
              <div className="col-md-12 col-12 text-center">
                <h2 className="breadcrumb-title">Doctor Profile</h2>
              </div>
            </div>
          </div>
        </div>
        <div className="content">
          <div className="container">
            <div className="card">
              <div className="card-body">
                <div className="doctor-widget">
                  <div className="doc-info-left">
                    <div className="doctor-img">
                      <img
                        src="assets/img/doctors/doctor-thumb-02.jpg"
                        className="img-fluid"
                        alt="User Image"
                      />
                    </div>
                    <div className="doc-info-cont">
                      <h4 className="doc-name">Dr. Darren Elder</h4>
                      <p className="doc-speciality">
                        BDS, MDS - Oral &amp; Maxillofacial Surgery
                      </p>
                      <p className="doc-department">
                        <img
                          src="assets/img/specialities/specialities-05.png"
                          className="img-fluid"
                          alt="Speciality"
                        />
                        Dentist
                      </p>
                      <div className="rating">
                        <i className="fas fa-star filled" />
                        <i className="fas fa-star filled" />
                        <i className="fas fa-star filled" />
                        <i className="fas fa-star filled" />
                        <i className="fas fa-star" />
                        <span className="d-inline-block average-rating">
                          (35)
                        </span>
                      </div>
                      <div className="clinic-details">
                        <p className="doc-location">
                          <i className="fas fa-map-marker-alt" /> Newyork, USA{" "}
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="doc-info-right">
                    <div className="clini-infos">
                      <ul>
                        <li>
                          <i className="far fa-comment" /> 35 Reviews
                        </li>
                        <li>
                          <i className="fas fa-map-marker-alt" /> Newyork, USA
                        </li>
                        <li>
                          <i className="far fa-money-bill-alt" /> ₹ 100 per
                          Appointment{" "}
                        </li>
                      </ul>
                    </div>

                    <div className="clinic-booking">
                      <Link className="apt-btn" to="/checkout">
                        Book Appointment
                      </Link>
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
                        href="#doc_business_hours"
                        data-bs-toggle="tab">
                        Schedule
                      </a>
                    </li>
                    <li className="nav-item">
                      <a
                        className="nav-link "
                        href="#doc_overview"
                        data-bs-toggle="tab">
                        Overview
                      </a>
                    </li>

                    <li className="nav-item">
                      <a
                        className="nav-link"
                        href="#doc_reviews"
                        data-bs-toggle="tab">
                        Reviews
                      </a>
                    </li>
                  </ul>
                </nav>
                <div className="tab-content pt-0">
                  <div role="tabpanel" id="doc_overview" className="tab-pane">
                    <div className="row">
                      <div className="col-md-12 col-lg-9">
                        <div className="widget about-widget">
                          <h4 className="widget-title">About Me</h4>
                          <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit, sed do eiusmod tempor incididunt ut labore et
                            dolore magna aliqua. Ut enim ad minim veniam, quis
                            nostrud exercitation ullamco laboris nisi ut aliquip
                            ex ea commodo consequat. Duis aute irure dolor in
                            reprehenderit in voluptate velit esse cillum dolore
                            eu fugiat nulla pariatur. Excepteur sint occaecat
                            cupidatat non proident, sunt in culpa qui officia
                            deserunt mollit anim id est laborum.
                          </p>
                        </div>
                        <div className="widget education-widget">
                          <h4 className="widget-title">Education</h4>
                          <div className="experience-box">
                            <ul className="experience-list">
                              <li>
                                <div className="experience-user">
                                  <div className="before-circle" />
                                </div>
                                <div className="experience-content">
                                  <div className="timeline-content">
                                    <a href="#/" className="name">
                                      American Dental Medical University
                                    </a>
                                    <div>BDS</div>
                                    <span className="time">1998 - 2003</span>
                                  </div>
                                </div>
                              </li>
                              <li>
                                <div className="experience-user">
                                  <div className="before-circle" />
                                </div>
                                <div className="experience-content">
                                  <div className="timeline-content">
                                    <a href="#/" className="name">
                                      American Dental Medical University
                                    </a>
                                    <div>MDS</div>
                                    <span className="time">2003 - 2005</span>
                                  </div>
                                </div>
                              </li>
                            </ul>
                          </div>
                        </div>
                        <div className="widget experience-widget">
                          <h4 className="widget-title">Experience</h4>
                          <div className="experience-box">
                            <ul className="experience-list">
                              <li>
                                <div className="experience-user">
                                  <div className="before-circle" />
                                </div>
                                <div className="experience-content">
                                  <div className="timeline-content">
                                    <a href="#/" className="name">
                                      10 Years of Medical Experience
                                    </a>
                                  </div>
                                </div>
                              </li>
                            </ul>
                          </div>
                        </div>
                        <div className="widget awards-widget">
                          <h4 className="widget-title">Awards</h4>
                          <div className="experience-box">
                            <ul className="experience-list">
                              <li>
                                <div className="experience-user">
                                  <div className="before-circle" />
                                </div>
                                <div className="experience-content">
                                  <div className="timeline-content">
                                    <p className="exp-year">July 2023</p>
                                    <h4 className="exp-title">
                                      Humanitarian Award
                                    </h4>
                                  </div>
                                </div>
                              </li>
                              <li>
                                <div className="experience-user">
                                  <div className="before-circle" />
                                </div>
                                <div className="experience-content">
                                  <div className="timeline-content">
                                    <p className="exp-year">March 2011</p>
                                    <h4 className="exp-title">
                                      Certificate for International Volunteer
                                      Service
                                    </h4>
                                  </div>
                                </div>
                              </li>
                              <li>
                                <div className="experience-user">
                                  <div className="before-circle" />
                                </div>
                                <div className="experience-content">
                                  <div className="timeline-content">
                                    <p className="exp-year">May 2008</p>
                                    <h4 className="exp-title">
                                      The Dental Professional of The Year Award
                                    </h4>
                                  </div>
                                </div>
                              </li>
                            </ul>
                          </div>
                        </div>

                        <div className="service-list">
                          <h4>Specializations</h4>
                          <ul className="clearfix">
                            <li>Children Care</li>
                            <li>Dental Care</li>
                            <li>Oral and Maxillofacial Surgery </li>
                            <li>Orthodontist</li>
                            <li>Periodontist</li>
                            <li>Prosthodontics</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div role="tabpanel" id="doc_reviews" className="tab-pane ">
                    <div className="widget review-listing">
                      <ul className="comments-list">
                        <li>
                          <div className="comment">
                            <img
                              className="avatar avatar-sm rounded-circle"
                              alt="User Image"
                              src="assets/img/patients/patient.jpg"
                            />
                            <div className="comment-body">
                              <div className="meta-data">
                                <span className="comment-author">
                                  Richard Wilson
                                </span>
                                <span className="comment-date">
                                  Reviewed 2 Days ago
                                </span>
                                <div className="review-count rating">
                                  <i className="fas fa-star filled" />
                                  <i className="fas fa-star filled" />
                                  <i className="fas fa-star filled" />
                                  <i className="fas fa-star filled" />
                                  <i className="fas fa-star" />
                                </div>
                              </div>
                              <p className="recommended">
                                <i className="far fa-thumbs-up" /> I recommend
                                the doctor
                              </p>
                              <p className="comment-content">
                                Lorem ipsum dolor sit amet, consectetur
                                adipisicing elit, sed do eiusmod tempor
                                incididunt ut labore et dolore magna aliqua. Ut
                                enim ad minim veniam, quis nostrud exercitation.
                                Curabitur non nulla sit amet nisl tempus
                              </p>
                              <div className="comment-reply">
                                <a className="comment-btn" href="#">
                                  <i className="fas fa-reply" /> Reply
                                </a>
                                <p className="recommend-btn">
                                  <span>Recommend?</span>
                                  <a href="#" className="like-btn">
                                    <i className="far fa-thumbs-up" /> Yes
                                  </a>
                                  <a href="#" className="dislike-btn">
                                    <i className="far fa-thumbs-down" /> No
                                  </a>
                                </p>
                              </div>
                            </div>
                          </div>
                          <ul className="comments-reply">
                            <li>
                              <div className="comment">
                                <img
                                  className="avatar avatar-sm rounded-circle"
                                  alt="User Image"
                                  src="assets/img/patients/patient1.jpg"
                                />
                                <div className="comment-body">
                                  <div className="meta-data">
                                    <span className="comment-author">
                                      Charlene Reed
                                    </span>
                                    <span className="comment-date">
                                      Reviewed 3 Days ago
                                    </span>
                                    <div className="review-count rating">
                                      <i className="fas fa-star filled" />
                                      <i className="fas fa-star filled" />
                                      <i className="fas fa-star filled" />
                                      <i className="fas fa-star filled" />
                                      <i className="fas fa-star" />
                                    </div>
                                  </div>
                                  <p className="comment-content">
                                    Lorem ipsum dolor sit amet, consectetur
                                    adipisicing elit, sed do eiusmod tempor
                                    incididunt ut labore et dolore magna aliqua.
                                    Ut enim ad minim veniam. Curabitur non nulla
                                    sit amet nisl tempus
                                  </p>
                                  <div className="comment-reply">
                                    <a className="comment-btn" href="#">
                                      <i className="fas fa-reply" /> Reply
                                    </a>
                                    <p className="recommend-btn">
                                      <span>Recommend?</span>
                                      <a href="#" className="like-btn">
                                        <i className="far fa-thumbs-up" /> Yes
                                      </a>
                                      <a href="#" className="dislike-btn">
                                        <i className="far fa-thumbs-down" /> No
                                      </a>
                                    </p>
                                  </div>
                                </div>
                              </div>
                            </li>
                          </ul>
                        </li>
                        <li>
                          <div className="comment">
                            <img
                              className="avatar avatar-sm rounded-circle"
                              alt="User Image"
                              src="assets/img/patients/patient2.jpg"
                            />
                            <div className="comment-body">
                              <div className="meta-data">
                                <span className="comment-author">
                                  Travis Trimble
                                </span>
                                <span className="comment-date">
                                  Reviewed 4 Days ago
                                </span>
                                <div className="review-count rating">
                                  <i className="fas fa-star filled" />
                                  <i className="fas fa-star filled" />
                                  <i className="fas fa-star filled" />
                                  <i className="fas fa-star filled" />
                                  <i className="fas fa-star" />
                                </div>
                              </div>
                              <p className="comment-content">
                                Lorem ipsum dolor sit amet, consectetur
                                adipisicing elit, sed do eiusmod tempor
                                incididunt ut labore et dolore magna aliqua. Ut
                                enim ad minim veniam, quis nostrud exercitation.
                                Curabitur non nulla sit amet nisl tempus
                              </p>
                              <div className="comment-reply">
                                <a className="comment-btn" href="#">
                                  <i className="fas fa-reply" /> Reply
                                </a>
                                <p className="recommend-btn">
                                  <span>Recommend?</span>
                                  <a href="#" className="like-btn">
                                    <i className="far fa-thumbs-up" /> Yes
                                  </a>
                                  <a href="#" className="dislike-btn">
                                    <i className="far fa-thumbs-down" /> No
                                  </a>
                                </p>
                              </div>
                            </div>
                          </div>
                        </li>
                      </ul>
                      <div className="all-feedback text-center">
                        <a href="#" className="btn btn-primary btn-sm">
                          Show all feedback <strong>(167)</strong>
                        </a>
                      </div>
                    </div>
                  </div>
                  <div
                    role="tabpanel"
                    id="doc_business_hours"
                    className="tab-pane  show active ">
                    <div className="row">
                      <div className="container">
                        <div className="row">
                          <div className="col-12">
                            <div className="row">
                              <div className="col-12 col-sm-4 col-md-6">
                                <h4 className="mb-1">11 November 2023</h4>
                                <p className="text-muted">Monday</p>
                              </div>
                            </div>
                            <div className="card booking-schedule schedule-widget">
                              <div className="schedule-header">
                                <div className="row">
                                  <div className="col-md-12">
                                    <div className="day-slot">
                                      <ul>
                                        <li className="left-arrow">
                                          <a href="javascript:void(0)">
                                            <i className="fa fa-chevron-left" />
                                          </a>
                                        </li>
                                        <li>
                                          <span>Mon</span>
                                          <span className="slot-date">
                                            11 Nov{" "}
                                            <small className="slot-year">
                                              2023
                                            </small>
                                          </span>
                                        </li>
                                        <li>
                                          <span>Tue</span>
                                          <span className="slot-date">
                                            12 Nov{" "}
                                            <small className="slot-year">
                                              2023
                                            </small>
                                          </span>
                                        </li>
                                        <li>
                                          <span>Wed</span>
                                          <span className="slot-date">
                                            13 Nov{" "}
                                            <small className="slot-year">
                                              2023
                                            </small>
                                          </span>
                                        </li>
                                        <li>
                                          <span>Thu</span>
                                          <span className="slot-date">
                                            14 Nov{" "}
                                            <small className="slot-year">
                                              2023
                                            </small>
                                          </span>
                                        </li>
                                        <li>
                                          <span>Fri</span>
                                          <span className="slot-date">
                                            15 Nov{" "}
                                            <small className="slot-year">
                                              2023
                                            </small>
                                          </span>
                                        </li>
                                        <li>
                                          <span>Sat</span>
                                          <span className="slot-date">
                                            16 Nov{" "}
                                            <small className="slot-year">
                                              2023
                                            </small>
                                          </span>
                                        </li>
                                        <li>
                                          <span>Sun</span>
                                          <span className="slot-date">
                                            17 Nov{" "}
                                            <small className="slot-year">
                                              2023
                                            </small>
                                          </span>
                                        </li>
                                        <li className="right-arrow">
                                          <a href="javascript:void(0)">
                                            <i className="fa fa-chevron-right" />
                                          </a>
                                        </li>
                                      </ul>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div className="schedule-cont">
                                <div className="row">
                                  <div className="col-md-12">
                                    <div className="time-slot">
                                      <ul className="clearfix">
                                        <li>
                                          <a className="timing" href="#">
                                            <span>9:00</span> <span>AM</span>
                                          </a>
                                          <a className="timing" href="#">
                                            <span>10:00</span> <span>AM</span>
                                          </a>
                                          <a className="timing" href="#">
                                            <span>11:00</span> <span>AM</span>
                                          </a>
                                        </li>
                                        <li>
                                          <a className="timing" href="#">
                                            <span>9:00</span> <span>AM</span>
                                          </a>
                                          <a className="timing" href="#">
                                            <span>10:00</span> <span>AM</span>
                                          </a>
                                          <a className="timing" href="#">
                                            <span>11:00</span> <span>AM</span>
                                          </a>
                                        </li>
                                        <li>
                                          <a className="timing" href="#">
                                            <span>9:00</span> <span>AM</span>
                                          </a>
                                          <a className="timing" href="#">
                                            <span>10:00</span> <span>AM</span>
                                          </a>
                                          <a className="timing" href="#">
                                            <span>11:00</span> <span>AM</span>
                                          </a>
                                        </li>
                                        <li>
                                          <a className="timing" href="#">
                                            <span>9:00</span> <span>AM</span>
                                          </a>
                                          <a className="timing" href="#">
                                            <span>10:00</span> <span>AM</span>
                                          </a>
                                          <a className="timing" href="#">
                                            <span>11:00</span> <span>AM</span>
                                          </a>
                                        </li>
                                        <li>
                                          <a className="timing" href="#">
                                            <span>9:00</span> <span>AM</span>
                                          </a>
                                          <a
                                            className="timing selected"
                                            href="#">
                                            <span>10:00</span> <span>AM</span>
                                          </a>
                                          <a className="timing" href="#">
                                            <span>11:00</span> <span>AM</span>
                                          </a>
                                        </li>
                                        <li>
                                          <a className="timing" href="#">
                                            <span>9:00</span> <span>AM</span>
                                          </a>
                                          <a className="timing" href="#">
                                            <span>10:00</span> <span>AM</span>
                                          </a>
                                          <a className="timing" href="#">
                                            <span>11:00</span> <span>AM</span>
                                          </a>
                                        </li>
                                        <li>
                                          <a className="timing" href="#">
                                            <span>9:00</span> <span>AM</span>
                                          </a>
                                          <a className="timing" href="#">
                                            <span>10:00</span> <span>AM</span>
                                          </a>
                                          <a className="timing" href="#">
                                            <span>11:00</span> <span>AM</span>
                                          </a>
                                        </li>
                                      </ul>
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
            </div>
          </div>
        </div>
      </div>
      <div className="modal  call-modal" id="voice_call">
        <div className="modal-dialog modal-dialog-centered" role="document">
          <div className="modal-content">
            <div className="modal-body">
              <div className="call-box incoming-box">
                <div className="call-wrapper">
                  <div className="call-inner">
                    <div className="call-user">
                      <img
                        alt="User Image"
                        src="assets/img/doctors/doctor-thumb-02.jpg"
                        className="call-avatar"
                      />
                      <h4>Dr. Darren Elder</h4>
                      <span>Connecting...</span>
                    </div>
                    <div className="call-items">
                      <a
                        href="javascript:void(0);"
                        className="btn call-item call-end"
                        data-bs-dismiss="modal"
                        aria-label="Close">
                        <i className="material-icons">call_end</i>
                      </a>
                      <a
                        href="voice-call.html"
                        className="btn call-item call-start">
                        <i className="material-icons">call</i>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="modal  call-modal" id="video_call">
        <div className="modal-dialog modal-dialog-centered" role="document">
          <div className="modal-content">
            <div className="modal-body">
              <div className="call-box incoming-box">
                <div className="call-wrapper">
                  <div className="call-inner">
                    <div className="call-user">
                      <img
                        className="call-avatar"
                        src="assets/img/doctors/doctor-thumb-02.jpg"
                        alt="User Image"
                      />
                      <h4>Dr. Darren Elder</h4>
                      <span>Calling ...</span>
                    </div>
                    <div className="call-items">
                      <a
                        href="javascript:void(0);"
                        className="btn call-item call-end"
                        data-bs-dismiss="modal"
                        aria-label="Close">
                        <i className="material-icons">call_end</i>
                      </a>
                      <a
                        href="video-call.html"
                        className="btn call-item call-start">
                        <i className="material-icons">videocam</i>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Mirrored from TwinsisTech.dreamstechnologies.com/html/template/doctor-profile.html by HTTrack Website Copier/3.x [XR&CO'2014], Tue, 16 Apr 2024 16:46:15 GMT */}
    </div>
  );
}
