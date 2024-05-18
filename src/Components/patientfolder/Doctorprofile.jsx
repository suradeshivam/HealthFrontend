import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { OrderState } from "../../Contexts";

export default function Doctorprofile() {
  const {
    selectedDoctor,
    setSelectedDoctor,
    selectedSlotDay,
    setSelectedSlotDay,
    selectedSlotTime,
    setSelectedSlotTime,
    selectedDate,
    setSelectedDate,
  } = OrderState();
  const [singleDoctor, setSingleDoctor] = useState([]);
  const [selectedSlot, setSelectedSlot] = useState(null);

  const handleSlotSelect = (index, slot, selectedDay) => {
    setSelectedSlot(index);
    setSelectedSlotDay(selectedDay);
    setSelectedSlotTime(slot);
  };

  console.log(selectedDoctor);

  const renderStars = (count) => {
    const stars = [];
    for (let i = 0; i < count; i++) {
      stars.push(<i key={i} className="fas fa-star filled" />);
    }
    for (let i = count; i < 5; i++) {
      stars.push(<i key={i} className="fas fa-star" />);
    }
    return stars;
  };

  // Schedule Code

  const daysOfWeek = [
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
    "Sunday",
  ];

  const monthNames = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  const currentDate = new Date();

  const currentDayIndex = currentDate.getDay();
  const todayDate = currentDate.getDate();
  const currentMonth = currentDate.getMonth();
  const todayYear = currentDate.getFullYear();
  const dayIndex = currentDate.getDay();

  const [selectedDay, setSelectedDay] = useState(null);
  console.log(currentDate.getDay());

  const handleDayClick = (day, index) => {
    setSelectedDay(day);
    setSelectedDate(dates[index]);
  };

  const getFormattedDate = (date, month, year) => {
    const formattedDate = date < 10 ? `0${date}` : date;
    const formattedMonth = month < 9 ? `0${month + 1}` : month + 1;
    return `${formattedDate}-${formattedMonth}-${year}`;
  };

  const renderDates = () => {
    const dates = [];
    for (let i = 0; i < daysOfWeek.length; i++) {
      const date = new Date(currentDate);
      date.setDate(todayDate + i);
      dates.push(
        getFormattedDate(date.getDate(), date.getMonth(), date.getFullYear())
      );
    }
    return dates;
  };

  const dates = renderDates();

  const renderDayName = (index) => {
    const dayIndex = (currentDayIndex + index - 1) % 7;
    return daysOfWeek[dayIndex];
  };

  const getSingleDoctorProfile = async () => {
    const isAuthenticated = localStorage.getItem("token");
    const doctor = await axios.get(
      `https://healthbackend-3xh2.onrender.com/patient/search/${selectedDoctor.userId._id}`,
      {
        headers: {
          authorization: isAuthenticated,
        },
      }
    );
    // console.log(doctor);
    setSingleDoctor(doctor.data.result.doctor);
  };

  console.log(singleDoctor);

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
                        src={
                          singleDoctor?.profilePicture ||
                          "assets/img/doctors/doctor-thumb-02.jpg"
                        }
                        className="img-fluid"
                        alt="User Image"
                      />
                    </div>
                    <div className="doc-info-cont">
                      <h4 className="doc-name">
                        Dr. {singleDoctor?.userId?.name}
                      </h4>
                      <p className="doc-speciality">
                        {singleDoctor &&
                          singleDoctor?.educationDetails &&
                          singleDoctor?.educationDetails.map((edu, index) => (
                            <p key={index}>{edu.qualification}</p>
                          ))}{" "}
                        &amp; {singleDoctor?.specialization}
                      </p>
                      {/* <p className="doc-department">
                        <img
                          src="assets/img/specialities/specialities-05.png"
                          className="img-fluid"
                          alt="Speciality"
                        />
                        Dentist
                      </p> */}
                      {/* <div className="rating">
                        <i className="fas fa-star filled" />
                        <i className="fas fa-star filled" />
                        <i className="fas fa-star filled" />
                        <i className="fas fa-star filled" />
                        <i className="fas fa-star" />
                        <span className="d-inline-block average-rating">
                          (35)
                        </span>
                      </div> */}
                      <div className="clinic-details">
                        <p className="doc-location">
                          <i className="fas fa-map-marker-alt" />{" "}
                          {singleDoctor?.city}, {singleDoctor?.contry}{" "}
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="doc-info-right">
                    <div className="clini-infos">
                      <ul>
                        <li>
                          <i className="far fa-comment" />
                          {singleDoctor?.reviews?.length} Reviews
                        </li>

                        <li>
                          <i className="far fa-money-bill-alt" /> ₹{" "}
                          {singleDoctor?.fees} per Appointment{" "}
                        </li>
                      </ul>
                    </div>

                    <div className="clinic-booking">
                      <Link className="apt-btn" to="/appointmentdetails">
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
                          <p>{singleDoctor?.about}</p>
                        </div>
                        <div className="widget education-widget">
                          <h4 className="widget-title">Education</h4>
                          <div className="experience-box">
                            <ul className="experience-list">
                              {singleDoctor &&
                                singleDoctor?.educationDetails &&
                                singleDoctor?.educationDetails.map(
                                  (edu, index) => (
                                    <li key={index}>
                                      <div className="experience-user">
                                        <div className="before-circle" />
                                      </div>
                                      <div className="experience-content">
                                        <div className="timeline-content">
                                          <a className="name">
                                            {edu?.collegeName}
                                          </a>
                                          <div>{edu.qualification}</div>
                                          <span className="time">
                                            {edu.yearOfCompletion}
                                          </span>
                                        </div>
                                      </div>
                                    </li>
                                  )
                                )}
                              {/* <li>
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
                              </li> */}
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
                                    <a className="name">
                                      {singleDoctor?.yearOfExperience} Years of
                                      Medical Experience
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
                              {singleDoctor &&
                                singleDoctor?.achievement &&
                                singleDoctor?.achievement.map((edu, index) => (
                                  <li key={index}>
                                    <div className="experience-user">
                                      <div className="before-circle" />
                                    </div>
                                    <div className="experience-content">
                                      <div className="timeline-content">
                                        <p className="exp-year">{edu?.year}</p>
                                        <h4 className="exp-title">
                                          {edu?.name}
                                        </h4>
                                      </div>
                                    </div>
                                  </li>
                                ))}
                              {/* <li>
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
                              </li> */}
                            </ul>
                          </div>
                        </div>

                        <div className="service-list">
                          <h4>Specializations</h4>
                          <ul className="clearfix">
                            <li> {singleDoctor?.specialization}</li>
                            {/* <li>Dental Care</li>
                            <li>Oral and Maxillofacial Surgery </li>
                            <li>Orthodontist</li>
                            <li>Periodontist</li>
                            <li>Prosthodontics</li> */}
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div role="tabpanel" id="doc_reviews" className="tab-pane ">
                    <div className="widget review-listing">
                      <ul className="comment-list">
                        {console.log(singleDoctor)}
                        {
                          singleDoctor?.reviews &&
                          singleDoctor?.reviews.map((comment, index) => (
                            <li key={index}>
                              <div className="comment">
                                <img
                                  className="avatar rounded-circle"
                                  alt="User Image"
                                  src={"assets/img/patients/patient8.jpg"}
                                />
                                <div
                                  className="comment-body"
                                  style={{ width: "100%" }}>
                                  <div className="meta-data">
                                    <span className="comment-author">
                                      {comment.patientName}
                                    </span>
                                    <div className="review-count rating">
                                      {renderStars(comment.rating)}
                                    </div>
                                    <span className="comment-date">
                                      Reviewed 1 Week ago
                                    </span>
                                  </div>
                                  <p className="comment-content">
                                    {comment.description}
                                  </p>
                                </div>
                              </div>
                            </li>
                          ))}
                      </ul>
                      {/* <div className="all-feedback text-center">
                        <a href="#" className="btn btn-primary btn-sm">
                          Show all feedback <strong>(167)</strong>
                        </a>
                      </div> */}
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
                                <h4 className="mb-1">{`${todayDate}-${monthNames[currentMonth]}-${todayYear}`}</h4>
                                <p className="text-muted">
                                  {daysOfWeek[dayIndex - 1]}
                                </p>
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
                                        {daysOfWeek?.map((day, index) => (
                                          <li
                                            key={index}
                                            onClick={() =>
                                              handleDayClick(
                                                renderDayName(index),
                                                index
                                              )
                                            }
                                          
                                            // className={selectedDay != null ? "selected" : ""}
                                          >
                                            <a className=" name"> 
                                            <span>{renderDayName(index)}</span>
                                            </a>

                                            <span className="slot-date">
                                              {index === 0 ? "Today " : null}
                                              {dates[index]}
                                              {/* <small className="slot-year">- {todayYear}</small> */}
                                            </span>
                                          </li>
                                        ))}

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
                                      <ul className="clearfix" >
                                        {selectedDay &&
                                          singleDoctor?.schedules[
                                            selectedDay?.toLowerCase()
                                          ]
                                            ?.filter((slot) => !slot.isBooked)
                                            ?.map((slot, index) => (
                                              <li key={index}>
                                                <a
                                                  className={`timing ${
                                                    selectedSlot === index &&
                                                    selectedDay ===
                                                      selectedSlotDay
                                                      ? "selected"
                                                      : ""
                                                  }`}
                                                  onClick={() =>
                                                    handleSlotSelect(
                                                      index,
                                                      slot.time,
                                                      selectedDay
                                                    )
                                                  }>
                                                  <span>
                                                    {slot.time.split(" ")[0]}
                                                  </span>{" "}
                                                  <span>
                                                    {slot.time.split(" ")[1]}
                                                  </span>
                                                </a>
                                              </li>
                                            ))}
                                        {/* <li>
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
                                        </li> */}
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
