import React, { useEffect, useMemo, useState } from "react";
import { Link } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";
import { useNavigate } from "react-router-dom";
import Reschedule from "./Components/popups/Reschedule";
import Pagination from "./Components/Pagination";
import { FaBusinessTime } from "react-icons/fa";
import { FaCalendarAlt, FaSave, FaTimes } from "react-icons/fa";
import axios from "axios";
import { OrderState } from "./Contexts";
import Appointment from "./Components/Appointment";

// DashBoard
export default function Dashboard() {
  const [showModal, setShowModal] = useState(false);
  const [selectedDate, setSelectedDate] = useState("");
  const [selectedTime, setSelectedTime] = useState("");
  const [currentTime, setCurrentTime] = useState(new Date());
  const [appointments, setAppointments] = useState([]);
  const [upcoming, setUpcoming] = useState([]);
  const [today, setToday] = useState([]);
  const { setselectedPatient } = OrderState();
  const [doctorInfo, setDoctorInfo] = useState("");
  const [isAuthenticated, setIsAuthenticated] = useState("");

  const [patientSelect, setPatientSelect] = useState(null);
  let todayCount = 0;
  let upcomingCount = 0;
  // console.log(upcoming)

  const handleLogout = () => {
    console.log("in here");
    const userInfo = localStorage.getItem("userInfo");
    if (userInfo) {
      localStorage.removeItem("userInfo");
    }
    const token = localStorage.getItem("token");
    if (token) {
      localStorage.removeItem("token");
    }
    const docInfo = localStorage.getItem("docInfo");
    if (docInfo) {
      localStorage.removeItem("docInfo");
    }
  };

  const isRescheduleEnabled = (patient) => {
    const patientDateTime = new Date(`${patient.date} ${patient.time}`);

    const differenceInMinutes = (patientDateTime - currentTime) / (1000 * 60);

    return (
      patientDateTime.toDateString() === currentTime.toDateString() &&
      differenceInMinutes < 60
    );
  };

  const navigate = useNavigate();

  const handleTimeChange = (newTime) => {
    setSelectedTime(newTime);
  };

  const closeModal = () => setShowModal(false);

  const handleConfirm = () => {
    // Validate the date and time here if needed
    console.log("Selected Date:", selectedDate);
    console.log("Selected Time:", selectedTime);
    // Close the modal or trigger further actions
    closeModal();
  };

  const submitCode = (e) => {
    e.preventDefault();
    const roomId = uuidv4();
    navigate(`/room/${roomId}`);
  };

  const handleViewAppointment = (e, patientData) => {
    e.preventDefault();
    // setSelectedPatientValue(true);
    //setSelectedPatient(patientData);
  };

  // Api Calling

  // Past data
  const getAllAppointments = async (id, isAuthenticated, past) => {
    try {
      const data = await axios.post(
        "https://healthbackend-3xh2.onrender.com/appointment/appointments",
        {
          doctorId: id,
          past: past,
        },
        {
          headers: {
            "Content-Type": "application/json",

            // "Authorization":"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NjE5MmU0MzRmMGRjMjQ3MjJhZGM2ZDkiLCJlbWFpbCI6ImRvY3RvcjNAZ21haWwuY29tIiwiaWF0IjoxNzEyOTI5MTc2LCJleHAiOjE3MTMwMTU1NzZ9.F3sIqBUGYcArItg4t7sQGDObuEcig5NvfSwQx2L4wpQ",
            Authorization: isAuthenticated,
          },
        }
      );

      if (past === false) {
        const datastore = data.data.result;

        const todayDate = new Date().toLocaleDateString("en-US");

        let upcomingArray = [];
        let todayArray = [];
        // console.log(datastore)

        datastore.forEach((data) => {
          // console.log(new Date(data.date).toLocaleDateString("en-US"))
          // console.log(new Date().toLocaleDateString("en-US"))
          const appointmentDate = new Date(data.date).toLocaleDateString(
            "en-US"
          );
          if (todayDate === appointmentDate) {
            // console.log(data)
            todayArray.push(data);
            // setToday((prevToday) => [...prevToday, data])
            // console.log(today)
          } else {
            // console.log(data);
            upcomingArray.push(data);
            // setUpcoming((prevUpcoming) => [...prevUpcoming, data]);
          }
          setUpcoming(upcomingArray);
          // console.log(upcoming)
          setToday(todayArray);
        });
      } else {
        setAppointments(data.data.result);
      }
      // console.log(data.data.result);
      // console.log(today)
      // console.log(upcoming)
      // console.log(appointments);
    } catch (error) {
      console.log(error);
    }
  };

  const patients = [
    {
      name: "Richard Wilson",
      id: "#PT0016",
      date: "2024-04-29",
      time: "15:30",
    },
    {
      name: "Charlene Reed",
      id: "#PT0001",
      date: "2024-04-29",
      time: "14:00",
    },
    {
      name: "Charlene Reed",
      id: "#PT0001",
      date: "2024-04-29",
      time: "14:00",
    },
    {
      name: "Charlene Reed",
      id: "#PT0001",
      date: "2024-04-29",
      time: "14:00",
    },
    {
      name: "Charlene Reed",
      id: "#PT0001",
      date: "2024-04-29",
      time: "14:00",
    },
    {
      name: "Charlene Reed",
      id: "#PT0001",
      date: "2024-04-29",
      time: "14:00",
    },
    {
      name: "Charlene Reed",
      id: "#PT0001",
      date: "2024-04-29",
      time: "14:00",
    },
    {
      name: "Charlene Reed",
      id: "#PT0001",
      date: "2024-04-29",
      time: "14:00",
    },
    {
      name: "Charlene Reed",
      id: "#PT0001",
      date: "2024-04-29",
      time: "14:00",
    },
    {
      name: "Travis Trimble",
      id: "#PT0002",
      date: "2024-04-29",
      time: "14:00",
    },
    {
      name: "Carl Kelly",
      id: "#PT0003",
      date: "2024-04-29",
      time: "14:00",
    },
    {
      name: "Michelli Fairfax",
      id: "#PT0009",
      date: "2024-04-29",
      time: "14:00",
    },
    {
      name: "Gina More ",
      id: "#PT0003",
      date: "2024-04-29",
      time: "14:00",
    },
    {
      name: "Gina More ",
      id: "#PT0003",
      date: "2024-04-29",
      time: "14:00",
    },
    {
      name: "Gina More ",
      id: "#PT0003",
      date: "2024-04-29",
      time: "14:00",
    },
    {
      name: "Gina More ",
      id: "#PT0003",
      date: "2024-04-29",
      time: "14:00",
    },
    {
      name: "Gina More ",
      id: "#PT0003",
      date: "2024-04-29",
      time: "14:00",
    },
  ];

  // Pagination Logic
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(3);

  // Get Patients
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = patients.slice(indexOfFirstItem, indexOfLastItem);

  // Change page
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  const handlePatientSelect = (patient) => {
    // console.log(patient)
    setselectedPatient(patient);

    navigate("/appointment");
    // console.log(selectedPatient)
  };

  useEffect(() => {
    const doctorInfo = JSON.parse(localStorage.getItem("docInfo"));
    const isAuthenticated = localStorage.getItem("token");
    setIsAuthenticated(isAuthenticated);
    // Error in _id
    if (doctorInfo) {
      setDoctorInfo(doctorInfo);
      getAllAppointments(doctorInfo._id, isAuthenticated, false);
    }
  }, []);

  return (
    <div>
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
                          src="assets/img/doctors/doctor-thumb-02.jpg"
                          alt="User Image"
                        />
                      </a>
                      <div className="profile-det-info">
                        <h3>Dr. {doctorInfo?.userId?.name}</h3>
                        <div className="patient-details ">
                          <h5 className="mb-0 ">
                            {doctorInfo &&
                              doctorInfo?.educationDetails &&
                              doctorInfo?.educationDetails.map((edu, index) => (
                                <p key={index}>{edu.qualification}</p>
                              ))}
                            {/* &amp; {doctorInfo?.specialization} */}
                          </h5>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="dashboard-widget">
                    <nav className="dashboard-menu">
                      <ul>
                        <li className="active">
                          <Link to="/doctor">
                            <i className="fas fa-columns" />
                            <span>Dashboard</span>
                          </Link>
                        </li>
                        {/* <li>
                        <Link to="/appointments">
                          <i className="fas fa-calendar-check" />
                          <span>Appointments</span>
                        </Link>
                      </li> */}
                        <li>
                          <Link to="/schedule">
                            <i className="fas fa-hourglass-start" />
                            <span>Schedule Timings</span>
                          </Link>
                        </li>
                        <li>
                          <Link to="/accounts">
                            <i className="fas fa-file-invoice-dollar" />
                            <span>Accounts</span>
                          </Link>
                        </li>
                        <li>
                          <Link to="/reviews">
                            <i className="fas fa-star" />
                            <span>Reviews</span>
                          </Link>
                        </li>
                        <li>
                          <Link to="/profile">
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
                          <Link to="/login" onClick={handleLogout}>
                            <i className="fas fa-sign-out-alt" />
                            <span>Logout</span>
                          </Link>
                        </li>
                      </ul>
                    </nav>
                  </div>
                </div>
              </div>

              {/* 1 */}

              <div className="col-md-7 col-lg-8 col-xl-9">
                <div className="row">
                  <div className="col-md-12">
                    <div className="card dash-card">
                      <div className="card-body">
                        {doctorInfo ? (
                          <div className="row">
                            <div className="col-md-12 col-lg-4">
                              <div className="dash-widget dct-border-rht">
                                <div className="circle-bar circle-bar1">
                                  <div
                                    className="circle-graph1"
                                    data-percent={75}>
                                    <img
                                      src="assets/img/icon-01.png"
                                      className="img-fluid"
                                      alt="patient"
                                    />
                                  </div>
                                </div>
                                <div className="dash-widget-info">
                                  <h6>Total Patient</h6>

                                  <h3>2</h3>
                                  <p className="text-muted">Till Today</p>
                                </div>
                              </div>
                            </div>
                            <div className="col-md-12 col-lg-4">
                              <div className="dash-widget dct-border-rht">
                                <div className="circle-bar circle-bar2">
                                  <div
                                    className="circle-graph2"
                                    data-percent={65}>
                                    <img
                                      src="assets/img/icon-02.png"
                                      className="img-fluid"
                                      alt="Patient"
                                    />
                                  </div>
                                </div>
                                <div className="dash-widget-info">
                                  <h6>Today Patient</h6>
                                  <h3>{1}</h3>
                                  <p className="text-muted">
                                    {new Date().toLocaleDateString("en-US")}
                                  </p>
                                </div>
                              </div>
                            </div>
                            <div className="col-md-12 col-lg-4">
                              <div className="dash-widget">
                                <div className="circle-bar circle-bar3">
                                  <div
                                    className="circle-graph3"
                                    data-percent={50}>
                                    <img
                                      src="assets/img/icon-03.png"
                                      className="img-fluid"
                                      alt="Patient"
                                    />
                                  </div>
                                </div>
                                <div className="dash-widget-info">
                                  <h6>Appoinments</h6>
                                  <h3>2</h3>
                                  <p className="text-muted">
                                    {new Date().toLocaleDateString("en-US")}
                                  </p>
                                </div>
                              </div>
                            </div>
                          </div>
                        ) : (
                          <>
                            <h1 className="mx-auto text-center">
                              Your Analytics and Appointments will be Shown Here
                              !
                            </h1>
                            <br />
                            <h1 className="mx-auto text-center">
                              Please Create Your Profile !
                            </h1>
                          </>
                        )}
                      </div>
                    </div>
                  </div>
                </div>

                {/* 2 */}
                {doctorInfo && (
                  <div className="row">
                    <div className="col-md-12">
                      <h4 className="mb-4">Patient Appoinment</h4>
                      <div className="appointment-tab">
                        <ul className="nav nav-tabs nav-tabs-solid nav-tabs-rounded">
                          <li className="nav-item">
                            <a
                              className="nav-link active"
                              href="#upcoming-appointments"
                              data-bs-toggle="tab">
                              Today
                            </a>
                          </li>
                          <li className="nav-item">
                            <a
                              className="nav-link"
                              href="#today-appointments"
                              data-bs-toggle="tab">
                              Upcoming
                            </a>
                          </li>
                          <li className="nav-item">
                            <a
                              className="nav-link"
                              href="#history-appointments"
                              data-bs-toggle="tab"
                              onClick={() =>
                                getAllAppointments(
                                  doctorInfo._id,
                                  isAuthenticated,
                                  true
                                )
                              }>
                              History
                            </a>
                          </li>
                        </ul>
                        <div className="tab-content">
                          {/* Today Appointment Section */}
                          <div
                            className="tab-pane show active"
                            id="upcoming-appointments">
                            <div className="card card-table mb-0">
                              <div className="card-body">
                                <div className="table-responsive">
                                  <table className="table table-hover table-center mb-0">
                                    <thead>
                                      <tr>
                                        <th>Patient Name</th>
                                        <th>Appt Date</th>
                                        <th>Action</th>
                                      </tr>
                                    </thead>
                                    <tbody>
                                      {today.map((patient, index) => (
                                        <tr>
                                          <td>
                                            <h2 className="table-avatar">
                                              <a
                                                href="patient-profile.html"
                                                className="avatar avatar-sm me-2">
                                                <img
                                                  className="avatar-img rounded-circle"
                                                  src="assets/img/patients/patient.jpg"
                                                  alt="User Image"
                                                />
                                              </a>
                                              <a href="patient-profile.html">
                                                {patient.patient.userId.name}{" "}
                                                <span>
                                                  {patient.patient.userId._id}
                                                </span>
                                              </a>
                                            </h2>
                                          </td>
                                          <td>
                                            {patient.date
                                              ? new Date(
                                                  patient.date
                                                ).toLocaleDateString("en-US")
                                              : "Date not available"}{" "}
                                            <span className="d-block text-info">
                                              {patient.date
                                                ? new Date(
                                                    patient.date
                                                  ).toLocaleTimeString("en-US")
                                                : "Time not available"}
                                            </span>
                                          </td>

                                          <td style={{ textAlign: "center" }}>
                                            <div
                                              className="table-action"
                                              style={{
                                                display: "flex",
                                                gap: "1rem",
                                              }}>
                                              <div>
                                                <form
                                                  onSubmit={submitCode}
                                                  className="">
                                                  <button className="btn btn-sm bg-success-light">
                                                    <i className="fas fa-check" />{" "}
                                                    Join
                                                  </button>
                                                </form>
                                              </div>
                                              <div className="appointment-action">
                                                <button
                                                  className="btn btn-sm bg-danger-light"
                                                  data-bs-toggle="modal"
                                                  data-bs-target="#appt_details"
                                                  disabled={isRescheduleEnabled(
                                                    patient
                                                  )}
                                                  onClick={() => {
                                                    setSelectedDate(
                                                      patient.date
                                                    );
                                                    setSelectedTime(
                                                      patient.time
                                                    );
                                                  }}>
                                                  <i className="fas fa-calendar-alt" />{" "}
                                                  Reschedule
                                                </button>
                                              </div>
                                              <div>
                                                <button
                                                  className="btn btn-sm bg-info-light"
                                                  onClick={() =>
                                                    handlePatientSelect(patient)
                                                  }>
                                                  <i className="far fa-eye" />{" "}
                                                  View
                                                </button>
                                              </div>
                                            </div>
                                          </td>
                                        </tr>
                                      ))}
                                      {/* {selectedPatientValue && <Appointment selectedPatient={selectedPatient} />} */}
                                    </tbody>
                                  </table>
                                </div>
                              </div>
                            </div>
                            <Pagination
                              itemsPerPage={itemsPerPage}
                              totalItems={today.length}
                              paginate={paginate}
                            />
                          </div>

                          {/* Upcoming Appointment Section */}
                          <div className="tab-pane" id="today-appointments">
                            <div className="card card-table mb-0">
                              <div className="card-body">
                                <div className="table-responsive">
                                  <table className="table table-hover table-center mb-0">
                                    <thead>
                                      <tr>
                                        <th>Patient Name</th>
                                        <th>Appt Date</th>

                                        <th>Action</th>
                                      </tr>
                                    </thead>
                                    <tbody>
                                      {upcoming.map((patient, index) => (
                                        <tr key={index}>
                                          <td>
                                            <h2 className="table-avatar">
                                              <a
                                                href="patient-profile.html"
                                                className="avatar avatar-sm me-2">
                                                <img
                                                  className="avatar-img rounded-circle"
                                                  src="assets/img/patients/patient6.jpg"
                                                  alt="User Image"
                                                />
                                              </a>
                                              <a href="patient-profile.html">
                                                {patient.patient?.userId?.name}{" "}
                                                <span>
                                                  {patient.patient?.userId?._id}
                                                </span>
                                              </a>
                                            </h2>
                                          </td>
                                          <td>
                                            {patient.date
                                              ? new Date(
                                                  patient.date
                                                ).toLocaleDateString("en-US")
                                              : "Date not available"}{" "}
                                            <span className="d-block text-info">
                                              {patient.date
                                                ? new Date(
                                                    patient.date
                                                  ).toLocaleTimeString("en-US")
                                                : "Time not available"}
                                            </span>
                                          </td>

                                          <td style={{ textAlign: "center" }}>
                                            <div
                                              className="table-action"
                                              style={{
                                                display: "flex",
                                                gap: "1rem",
                                              }}>
                                              <div className="appointment-action">
                                                <button
                                                  className="btn btn-sm bg-danger-light"
                                                  data-bs-toggle="modal"
                                                  data-bs-target="#appt_details"
                                                  disabled={isRescheduleEnabled(
                                                    patient
                                                  )}>
                                                  <i className="fas fa-calendar-alt" />{" "}
                                                  Reschedule
                                                </button>

                                                {showModal && (
                                                  <Reschedule
                                                    closeModal={closeModal}
                                                  />
                                                )}
                                              </div>
                                              <div>
                                                <button
                                                  className="btn btn-sm bg-info-light"
                                                  onClick={() =>
                                                    handlePatientSelect(patient)
                                                  }>
                                                  <i className="far fa-eye" />{" "}
                                                  View
                                                </button>
                                              </div>
                                            </div>
                                          </td>
                                        </tr>
                                      ))}
                                    </tbody>
                                  </table>
                                </div>
                              </div>
                            </div>
                            <Pagination
                              itemsPerPage={itemsPerPage}
                              totalItems={upcoming.length}
                              paginate={paginate}
                            />
                          </div>

                          {/* History Section */}
                          <div className="tab-pane" id="history-appointments">
                            <div className="card card-table mb-0">
                              <div className="card-body">
                                <div className="table-responsive">
                                  <table className="table table-hover table-center mb-0">
                                    <thead>
                                      <tr>
                                        <th>Patient Name</th>
                                        <th>Appt Date</th>

                                        <th>Action</th>
                                      </tr>
                                    </thead>
                                    <tbody>
                                      {appointments[0] &&
                                        appointments.map((patient, index) => (
                                          <tr key={index}>
                                            <td>
                                              <h2 className="table-avatar">
                                                <a
                                                  href="patient-profile.html"
                                                  className="avatar avatar-sm me-2">
                                                  <img
                                                    className="avatar-img rounded-circle"
                                                    src="assets/img/patients/patient6.jpg"
                                                    alt="User Image"
                                                  />
                                                </a>
                                                <a href="patient-profile.html">
                                                  {patient.patient.userId.name}{" "}
                                                  <span>
                                                    {patient.patient.userId._id}
                                                  </span>
                                                </a>
                                              </h2>
                                            </td>
                                            <td>
                                              {patient.date
                                                ? new Date(
                                                    patient.date
                                                  ).toLocaleDateString("en-US")
                                                : "Date not available"}{" "}
                                              <span className="d-block text-info">
                                                {patient.date
                                                  ? new Date(
                                                      patient.date
                                                    ).toLocaleTimeString(
                                                      "en-US"
                                                    )
                                                  : "Time not available"}
                                              </span>
                                            </td>
                                            <td style={{ textAlign: "center" }}>
                                              <div
                                                className="table-action"
                                                style={{
                                                  display: "flex",
                                                  gap: "1rem",
                                                }}>
                                                <div>
                                                  <button
                                                    className="btn btn-sm bg-info-light"
                                                    onClick={() =>
                                                      handlePatientSelect(
                                                        patient
                                                      )
                                                    }>
                                                    <i className="far fa-eye" />{" "}
                                                    View
                                                  </button>
                                                </div>
                                              </div>
                                            </td>
                                          </tr>
                                        ))}
                                      {patientSelect && (
                                        <Appointment patient={patientSelect} />
                                      )}
                                    </tbody>
                                  </table>
                                </div>
                              </div>
                            </div>
                            <Pagination
                              itemsPerPage={itemsPerPage}
                              totalItems={appointments.length}
                              paginate={paginate}
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="modal fade custom-modal" id="appt_details">
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">
                {" "}
                <FaBusinessTime
                  style={{
                    color: "#48BB78",
                    fontSize: "2rem",
                    marginBottom: "0rem",
                    marginRight: "0.5rem",
                  }}
                />
                Reschedule
              </h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"></button>
            </div>
            <div className="modal-body">
              <div>
                <div>
                  <label
                    htmlFor="date"
                    style={{
                      display: "block",
                      color: "#4A5568",
                      fontWeight: "bold",
                    }}>
                    Date:
                  </label>
                  <input
                    id="date"
                    type="date"
                    value={selectedDate}
                    onChange={(e) => setSelectedDate(e.target.value)}
                    style={{
                      width: "100%",
                      padding: "0.5rem",
                      border: "1px solid #E2E8F0",
                      borderRadius: "0.25rem",
                      outline: "none",
                      transition:
                        "border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out",
                      "&:focus": {
                        borderColor: "#38A169",
                      },
                    }}
                  />
                  <div style={{ marginBottom: "1rem" }}>
                    <label
                      htmlFor="time"
                      style={{
                        display: "block",
                        color: "#4A5568",
                        fontWeight: "bold",
                      }}>
                      Time:
                    </label>
                    <input
                      id="time"
                      type="time"
                      value={selectedTime}
                      onChange={(e) => setSelectedTime(e.target.value)}
                      style={{
                        width: "100%",
                        padding: "0.5rem",
                        border: "1px solid #E2E8F0",
                        borderRadius: "0.25rem",
                        outline: "none",
                        transition:
                          "border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out",
                        "&:focus": {
                          borderColor: "#38A169",
                        },
                      }}
                    />
                  </div>
                </div>
                {/* <DatePicker value={value} onChange={setValue} /> */}
                <div style={{ display: "flex", gap: "1rem" }}>
                  <button
                    className="btn btn-sm bg-success-light"
                    style={{ margin: "auto" }}
                    onClick={handleConfirm}>
                    <i className="fas fa-check" /> Confirm
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
