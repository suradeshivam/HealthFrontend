import React, { useState } from "react";
import { Link } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";
import { useNavigate } from "react-router-dom";
import Reschedule from "./Components/popups/Reschedule";
import Pagination from "./Components/Pagination";

export default function Dashboard() {

  const [showModal, setShowModal] = useState(false);

  const navigate = useNavigate();

  const closeModal = () => setShowModal(false);

  const submitCode = (e) => {
    e.preventDefault();
    const roomId = uuidv4();
    navigate(`/room/${roomId}`);
  };


  const patients = [
    {
      name: "Richard Wilson",
      id: "#PT0016",
      date: "11 Nov 2023",
      time: "10.00 AM",
    },
    {
      name: "Charlene Reed",
      id: "#PT0001",
      date: "3 Nov 2023",
      time: "11.00 AM",
    },
    {
      name: "Charlene Reed",
      id: "#PT0001",
      date: "3 Nov 2023",
      time: "11.00 AM",
    },
    {
      name: "Charlene Reed",
      id: "#PT0001",
      date: "3 Nov 2023",
      time: "11.00 AM",
    },
    {
      name: "Charlene Reed",
      id: "#PT0001",
      date: "3 Nov 2023",
      time: "11.00 AM",
    },
    {
      name: "Charlene Reed",
      id: "#PT0001",
      date: "3 Nov 2023",
      time: "11.00 AM",
    },
    {
      name: "Charlene Reed",
      id: "#PT0001",
      date: "3 Nov 2023",
      time: "11.00 AM",
    },
    {
      name: "Charlene Reed",
      id: "#PT0001",
      date: "3 Nov 2023",
      time: "11.00 AM",
    },
    {
      name: "Charlene Reed",
      id: "#PT0001",
      date: "3 Nov 2023",
      time: "11.00 AM",
    },
    {
      name: "Travis Trimble",
      id: "#PT0002",
      date: "1 Nov 2023",
      time: "1.00 PM",
    },
    {
      name: "Carl Kelly",
      id: "#PT0003",
      date: "12 Dec 2023",
      time: "2.00 PM",
    },
    {
      name: "Michelli Fairfax",
      id: "#PT0009",
      date: "1 Nov 2023",
      time: "1.00 PM",
    },
    {
      name: "Gina More ",
      id: "#PT0003",
      date: "1 Nov 2023",
      time: "1.00 PM",
    },
    {
      name: "Gina More ",
      id: "#PT0003",
      date: "1 Nov 2023",
      time: "1.00 PM",
    },
    {
      name: "Gina More ",
      id: "#PT0003",
      date: "1 Nov 2023",
      time: "1.00 PM",
    },
    {
      name: "Gina More ",
      id: "#PT0003",
      date: "1 Nov 2023",
      time: "1.00 PM",
    },
    {
      name: "Gina More ",
      id: "#PT0003",
      date: "1 Nov 2023",
      time: "1.00 PM",
    },
  ]

  // Pagination Logic
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(3);

  // Get Patients
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = patients.slice(indexOfFirstItem, indexOfLastItem);

  // Change page
  const paginate = (pageNumber) => setCurrentPage(pageNumber);


  return (
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
                      <h3>Dr. Darren Elder</h3>
                      <div className="patient-details">
                        <h5 className="mb-0">
                          BDS, MDS - Oral &amp; Maxillofacial Surgery
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


            {/* 1 */}
            <div className="col-md-7 col-lg-8 col-xl-9">
              <div className="row">
                <div className="col-md-12">
                  <div className="card dash-card">
                    <div className="card-body">
                      <div className="row">
                        <div className="col-md-12 col-lg-4">
                          <div className="dash-widget dct-border-rht">
                            <div className="circle-bar circle-bar1">
                              <div className="circle-graph1" data-percent={75}>
                                <img
                                  src="assets/img/icon-01.png"
                                  className="img-fluid"
                                  alt="patient"
                                />
                              </div>
                            </div>
                            <div className="dash-widget-info">
                              <h6>Total Patient</h6>
                              <h3>1500</h3>
                              <p className="text-muted">Till Today</p>
                            </div>
                          </div>
                        </div>
                        <div className="col-md-12 col-lg-4">
                          <div className="dash-widget dct-border-rht">
                            <div className="circle-bar circle-bar2">
                              <div className="circle-graph2" data-percent={65}>
                                <img
                                  src="assets/img/icon-02.png"
                                  className="img-fluid"
                                  alt="Patient"
                                />
                              </div>
                            </div>
                            <div className="dash-widget-info">
                              <h6>Today Patient</h6>
                              <h3>160</h3>
                              <p className="text-muted">06, Nov 2023</p>
                            </div>
                          </div>
                        </div>
                        <div className="col-md-12 col-lg-4">
                          <div className="dash-widget">
                            <div className="circle-bar circle-bar3">
                              <div className="circle-graph3" data-percent={50}>
                                <img
                                  src="assets/img/icon-03.png"
                                  className="img-fluid"
                                  alt="Patient"
                                />
                              </div>
                            </div>
                            <div className="dash-widget-info">
                              <h6>Appoinments</h6>
                              <h3>85</h3>
                              <p className="text-muted">06, Apr 2023</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>


              {/* 2 */}
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
                          Upcoming
                        </a>
                      </li>
                      <li className="nav-item">
                        <a
                          className="nav-link"
                          href="#today-appointments"
                          data-bs-toggle="tab">
                          Today
                        </a>
                      </li>
                      <li className="nav-item">
                        <a
                          className="nav-link"
                          href="#today-appointments"
                          data-bs-toggle="tab">
                          History
                        </a>
                      </li>
                    </ul>
                    <div className="tab-content">
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
                                  {currentItems.map((patient, index) => (
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
                                          {patient.name} <span>{patient.id}</span>
                                        </a>
                                      </h2>
                                    </td>
                                    <td>
                                      {patient.date}{" "}
                                      <span className="d-block text-info">
                                        {patient.time}
                                      </span>
                                    </td>
                                  
                                    <td style={{textAlign:"center"}}>
                                      <div className="table-action" style={{display:"flex",gap:"1rem"}}>
                                      <div>
                                       <form onSubmit={submitCode} className="">
                                        <button
                                          className="btn btn-sm bg-success-light">
                                          <i className="fas fa-check" /> Join
                                        </button>
                                        </form>
                                        </div>
                                          <div>
                                        <button
                                           onClick={() => setShowModal(true)}
                                          className="btn btn-sm bg-danger-light">
                                          <i className="fas fa-calendar-alt" /> Reschedule
                                        </button>
                                        {showModal && <Reschedule closeModal={closeModal} />}
                                            </div>
                                            <div>
                                        <a
                                          href="javascript:void(0);"
                                          className="btn btn-sm bg-info-light">
                                          <i className="far fa-eye" /> View
                                        </a>
                                      
                                            </div>
                                            </div>
                                    </td>
                                    
                                    {/* <td>
                                      <div className="table-action"  style={{display:"flex", gap:"1rem"}}>
                                        <a
                                          href="javascript:void(0);"
                                          className="btn btn-sm bg-info-light">
                                          <i className="far fa-eye" /> View
                                        </a>
                                        <a
                                          href="javascript:void(0);"
                                          className="btn btn-sm bg-success-light">
                                          <i className="fas fa-check" /> Accept
                                        </a>
                                        <a
                                          href="javascript:void(0);"
                                          className="btn btn-sm bg-danger-light">
                                          <i className="fas fa-times" /> Cancel
                                        </a>
                                      </div>
                                    </td> */}
                                  </tr>
                                   ))}
                                  {/* <tr>
                                    <td>
                                      <h2 className="table-avatar">
                                        <a
                                          href="patient-profile.html"
                                          className="avatar avatar-sm me-2">
                                          <img
                                            className="avatar-img rounded-circle"
                                            src="assets/img/patients/patient1.jpg"
                                            alt="User Image"
                                          />
                                        </a>
                                        <a href="patient-profile.html">
                                          Charlene Reed <span>#PT0001</span>
                                        </a>
                                      </h2>
                                    </td>
                                    <td>
                                      3 Nov 2023{" "}
                                      <span className="d-block text-info">
                                        11.00 AM
                                      </span>
                                    </td>
                                   
                                    <td style={{textAlign:"center"}}>
                                      <div className="table-action" style={{display:"flex",gap:"2rem"}}>
                                      <div>
                                        <a
                                          href="javascript:void(0);"
                                          className="btn btn-sm bg-success-light">
                                          <i className="fas fa-check" /> Join
                                        </a>
                                        </div>
                                          <div>
                                        <a
                                          href="javascript:void(0);"
                                          className="btn btn-sm bg-danger-light">
                                          <i className="fas fa-calendar-alt" /> Reschedule
                                        </a>
                                            </div>
                                            <div>
                                        <a
                                          href="javascript:void(0);"
                                          className="btn btn-sm bg-info-light">
                                          <i className="far fa-eye" /> View
                                        </a>
                                      
                                            </div>
                                            </div>
                                    </td>
                                  </tr>
                                  <tr>
                                    <td>
                                      <h2 className="table-avatar">
                                        <a
                                          href="patient-profile.html"
                                          className="avatar avatar-sm me-2">
                                          <img
                                            className="avatar-img rounded-circle"
                                            src="assets/img/patients/patient2.jpg"
                                            alt="User Image"
                                          />
                                        </a>
                                        <a href="patient-profile.html">
                                          Travis Trimble <span>#PT0002</span>
                                        </a>
                                      </h2>
                                    </td>
                                    <td>
                                      1 Nov 2023{" "}
                                      <span className="d-block text-info">
                                        1.00 PM
                                      </span>
                                    </td>
                                    
                                    <td style={{textAlign:"center"}}>
                                      <div className="table-action" style={{display:"flex",gap:"2rem"}}>
                                      <div>
                                        <a
                                          href="javascript:void(0);"
                                          className="btn btn-sm bg-success-light">
                                          <i className="fas fa-check" /> Join
                                        </a>
                                        </div>
                                          <div>
                                        <a
                                          href="javascript:void(0);"
                                          className="btn btn-sm bg-danger-light">
                                          <i className="fas fa-calendar-alt" /> Reschedule
                                        </a>
                                            </div>
                                            <div>
                                        <a
                                          href="javascript:void(0);"
                                          className="btn btn-sm bg-info-light">
                                          <i className="far fa-eye" /> View
                                        </a>
                                      
                                            </div>
                                            </div>
                                    </td>
                                  </tr>
                                  <tr>
                                    <td>
                                      <h2 className="table-avatar">
                                        <a
                                          href="patient-profile.html"
                                          className="avatar avatar-sm me-2">
                                          <img
                                            className="avatar-img rounded-circle"
                                            src="assets/img/patients/patient3.jpg"
                                            alt="User Image"
                                          />
                                        </a>
                                        <a href="patient-profile.html">
                                          Carl Kelly <span>#PT0003</span>
                                        </a>
                                      </h2>
                                    </td>
                                    <td>
                                      30 Oct 2023{" "}
                                      <span className="d-block text-info">
                                        9.00 AM
                                      </span>
                                    </td>
                                   
                                    <td style={{textAlign:"center"}}>
                                      <div className="table-action" style={{display:"flex",gap:"2rem"}}>
                                      <div>
                                        <a
                                          href="javascript:void(0);"
                                          className="btn btn-sm bg-success-light">
                                          <i className="fas fa-check" /> Join
                                        </a>
                                        </div>
                                          <div>
                                        <a
                                          href="javascript:void(0);"
                                          className="btn btn-sm bg-danger-light">
                                          <i className="fas fa-calendar-alt" /> Reschedule
                                        </a>
                                            </div>
                                            <div>
                                        <a
                                          href="javascript:void(0);"
                                          className="btn btn-sm bg-info-light">
                                          <i className="far fa-eye" /> View
                                        </a>
                                      
                                            </div>
                                            </div>
                                    </td>
                                  </tr>
                                   
                                  <tr>
                                    <td>
                                      <h2 className="table-avatar">
                                        <a
                                          href="patient-profile.html"
                                          className="avatar avatar-sm me-2">
                                          <img
                                            className="avatar-img rounded-circle"
                                            src="assets/img/patients/patient4.jpg"
                                            alt="User Image"
                                          />
                                        </a>
                                        <a href="patient-profile.html">
                                          Michelle Fairfax <span>#PT0004</span>
                                        </a>
                                      </h2>
                                    </td>
                                    <td>
                                      28 Oct 2023{" "}
                                      <span className="d-block text-info">
                                        6.00 PM
                                      </span>
                                    </td>
                                   
                                    <td style={{textAlign:"center"}}>
                                      <div className="table-action" style={{display:"flex",gap:"2rem"}}>
                                      <div>
                                        <a
                                          href="javascript:void(0);"
                                          className="btn btn-sm bg-success-light">
                                          <i className="fas fa-check" /> Join
                                        </a>
                                        </div>
                                          <div>
                                        <a
                                          href="javascript:void(0);"
                                          className="btn btn-sm bg-danger-light">
                                          <i className="fas fa-calendar-alt" /> Reschedule
                                        </a>
                                            </div>
                                            <div>
                                        <a
                                          href="javascript:void(0);"
                                          className="btn btn-sm bg-info-light">
                                          <i className="far fa-eye" /> View
                                        </a>
                                      
                                            </div>
                                            </div>
                                    </td>
                                  </tr>
                                  <tr>
                                    <td>
                                      <h2 className="table-avatar">
                                        <a
                                          href="patient-profile.html"
                                          className="avatar avatar-sm me-2">
                                          <img
                                            className="avatar-img rounded-circle"
                                            src="assets/img/patients/patient5.jpg"
                                            alt="User Image"
                                          />
                                        </a>
                                        <a href="patient-profile.html">
                                          Gina Moore <span>#PT0005</span>
                                        </a>
                                      </h2>
                                    </td>
                                    <td>
                                      27 Oct 2023{" "}
                                      <span className="d-block text-info">
                                        8.00 AM
                                      </span>
                                    </td>
                                    
                                    <td style={{textAlign:"center"}}>
                                      <div className="table-action" style={{display:"flex",gap:"2rem"}}>
                                      <div>
                                        
                                        <a
                                          href="javascript:void(0);"
                                          className="btn btn-sm bg-success-light">
                                          <i className="fas fa-check" /> Join
                                        </a>
                                        </div>
                                          <div>
                                        <a
                                          href="javascript:void(0);"
                                          className="btn btn-sm bg-danger-light">
                                          <i className="fas fa-calendar-alt" /> Reschedule
                                        </a>
                                            </div>
                                            <div>
                                        <a
                                          href="javascript:void(0);"
                                          className="btn btn-sm bg-info-light">
                                          <i className="far fa-eye" /> View
                                        </a>
                                      
                                            </div>
                                            </div>
                                    </td>
                                  </tr> */}
                                </tbody>
                              </table>
                              
                            </div>
                          </div>
                        </div>
                      </div>
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
                                {currentItems.map((patient, index) => (
                                  <tr>
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
                                        {patient.name} <span>{patient.id}</span>
                                        </a>
                                      </h2>
                                    </td>
                                    <td>
                                    {patient.date}{" "}
                                      <span className="d-block text-info">
                                      {patient.time}
                                      </span>
                                    </td>

                                    <td style={{textAlign:"center"}}>
                                      <div className="table-action" style={{display:"flex",gap:"1rem"}}>
                                      <div>
                                       <form onSubmit={submitCode} className="">
                                        <button
                                          className="btn btn-sm bg-success-light">
                                          <i className="fas fa-check" /> Join
                                        </button>
                                        </form>
                                        </div>
                                          <div>
                                        <button
                                           onClick={() => setShowModal(true)}
                                          className="btn btn-sm bg-danger-light">
                                          <i className="fas fa-calendar-alt" /> Reschedule
                                        </button>
                                        {showModal && <Reschedule closeModal={closeModal} />}
                                            </div>
                                            <div>
                                        <a
                                          href="javascript:void(0);"
                                          className="btn btn-sm bg-info-light">
                                          <i className="far fa-eye" /> View
                                        </a>
                                      
                                            </div>
                                            </div>
                                    </td>
                                  </tr>
                                ))}
                                  {/* <tr>
                                    <td>
                                      <h2 className="table-avatar">
                                        <a
                                          href="patient-profile.html"
                                          className="avatar avatar-sm me-2">
                                          <img
                                            className="avatar-img rounded-circle"
                                            src="assets/img/patients/patient7.jpg"
                                            alt="User Image"
                                          />
                                        </a>
                                        <a href="patient-profile.html">
                                          Joan Gardner <span>#PT0006</span>
                                        </a>
                                      </h2>
                                    </td>
                                    <td>
                                      14 Nov 2023{" "}
                                      <span className="d-block text-info">
                                        5.00 PM
                                      </span>
                                    </td>

                                    <td>
                                      <div className="table-action">
                                        <a
                                          href="javascript:void(0);"
                                          className="btn btn-sm bg-info-light">
                                          <i className="far fa-eye" /> View
                                        </a>
                                        <a
                                          href="javascript:void(0);"
                                          className="btn btn-sm bg-success-light">
                                          <i className="fas fa-check" /> Accept
                                        </a>
                                        <a
                                          href="javascript:void(0);"
                                          className="btn btn-sm bg-danger-light">
                                          <i className="fas fa-times" /> Cancel
                                        </a>
                                      </div>
                                    </td>
                                  </tr>
                                  <tr>
                                    <td>
                                      <h2 className="table-avatar">
                                        <a
                                          href="patient-profile.html"
                                          className="avatar avatar-sm me-2">
                                          <img
                                            className="avatar-img rounded-circle"
                                            src="assets/img/patients/patient8.jpg"
                                            alt="User Image"
                                          />
                                        </a>
                                        <a href="patient-profile.html">
                                          Daniel Griffing <span>#PT0007</span>
                                        </a>
                                      </h2>
                                    </td>
                                    <td>
                                      14 Nov 2023{" "}
                                      <span className="d-block text-info">
                                        3.00 PM
                                      </span>
                                    </td>

                                    <td>
                                      <div className="table-action">
                                        <a
                                          href="javascript:void(0);"
                                          className="btn btn-sm bg-info-light">
                                          <i className="far fa-eye" /> View
                                        </a>
                                        <a
                                          href="javascript:void(0);"
                                          className="btn btn-sm bg-success-light">
                                          <i className="fas fa-check" /> Accept
                                        </a>
                                        <a
                                          href="javascript:void(0);"
                                          className="btn btn-sm bg-danger-light">
                                          <i className="fas fa-times" /> Cancel
                                        </a>
                                      </div>
                                    </td>
                                  </tr>
                                  <tr>
                                    <td>
                                      <h2 className="table-avatar">
                                        <a
                                          href="patient-profile.html"
                                          className="avatar avatar-sm me-2">
                                          <img
                                            className="avatar-img rounded-circle"
                                            src="assets/img/patients/patient9.jpg"
                                            alt="User Image"
                                          />
                                        </a>
                                        <a href="patient-profile.html">
                                          Walter Roberson <span>#PT0008</span>
                                        </a>
                                      </h2>
                                    </td>
                                    <td>
                                      14 Nov 2023{" "}
                                      <span className="d-block text-info">
                                        1.00 PM
                                      </span>
                                    </td>

                                    <td>
                                      <div className="table-action">
                                        <a
                                          href="javascript:void(0);"
                                          className="btn btn-sm bg-info-light">
                                          <i className="far fa-eye" /> View
                                        </a>
                                        <a
                                          href="javascript:void(0);"
                                          className="btn btn-sm bg-success-light">
                                          <i className="fas fa-check" /> Accept
                                        </a>
                                        <a
                                          href="javascript:void(0);"
                                          className="btn btn-sm bg-danger-light">
                                          <i className="fas fa-times" /> Cancel
                                        </a>
                                      </div>
                                    </td>
                                  </tr>
                                  <tr>
                                    <td>
                                      <h2 className="table-avatar">
                                        <a
                                          href="patient-profile.html"
                                          className="avatar avatar-sm me-2">
                                          <img
                                            className="avatar-img rounded-circle"
                                            src="assets/img/patients/patient10.jpg"
                                            alt="User Image"
                                          />
                                        </a>
                                        <a href="patient-profile.html">
                                          Robert Rhodes <span>#PT0010</span>
                                        </a>
                                      </h2>
                                    </td>
                                    <td>
                                      14 Nov 2023{" "}
                                      <span className="d-block text-info">
                                        10.00 AM
                                      </span>
                                    </td>

                                    <td>
                                      <div className="table-action">
                                        <a
                                          href="javascript:void(0);"
                                          className="btn btn-sm bg-info-light">
                                          <i className="far fa-eye" /> View
                                        </a>
                                        <a
                                          href="javascript:void(0);"
                                          className="btn btn-sm bg-success-light">
                                          <i className="fas fa-check" /> Accept
                                        </a>
                                        <a
                                          href="javascript:void(0);"
                                          className="btn btn-sm bg-danger-light">
                                          <i className="fas fa-times" /> Cancel
                                        </a>
                                      </div>
                                    </td>
                                  </tr>
                                  <tr>
                                    <td>
                                      <h2 className="table-avatar">
                                        <a
                                          href="patient-profile.html"
                                          className="avatar avatar-sm me-2">
                                          <img
                                            className="avatar-img rounded-circle"
                                            src="assets/img/patients/patient11.jpg"
                                            alt="User Image"
                                          />
                                        </a>
                                        <a href="patient-profile.html">
                                          Harry Williams <span>#PT0011</span>
                                        </a>
                                      </h2>
                                    </td>
                                    <td>
                                      14 Nov 2023{" "}
                                      <span className="d-block text-info">
                                        11.00 AM
                                      </span>
                                    </td>

                                    <td>
                                      <div className="table-action">
                                        <a
                                          href="javascript:void(0);"
                                          className="btn btn-sm bg-info-light">
                                          <i className="far fa-eye" /> View
                                        </a>
                                        <a
                                          href="javascript:void(0);"
                                          className="btn btn-sm bg-success-light">
                                          <i className="fas fa-check" /> Accept
                                        </a>
                                        <a
                                          href="javascript:void(0);"
                                          className="btn btn-sm bg-danger-light">
                                          <i className="fas fa-times" /> Cancel
                                        </a>
                                      </div>
                                    </td>
                                  </tr> */}
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
          <Pagination
            itemsPerPage={itemsPerPage}
            totalItems={patients.length}
            paginate={paginate}
          />
        </div>
      </div>
    </div>
  );
}
