import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import axios from "axios";
import { OrderState } from "../../Contexts";
const LabReports = () => {
  const [currentPageToday, setCurrentPageToday] = useState(1);
  const [currentPageUpcoming, setCurrentPageUpcoming] = useState(1);
  const [currentPageHistory, setCurrentPageHistory] = useState(1);
  const [itemsPerPage] = useState(5);
  const [patientInfo, setPatientInfo] = useState("");
  const [userInfo, setUserInfo] = useState("");
  const [appointments, setAppointments] = useState([]);
  const [upcoming, setUpcoming] = useState([]);
  const [today, setToday] = useState([]);

  const { setSelectedAppointment, setIsLoggedIn } = OrderState();

  const navigate = useNavigate();

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
    const patientInfo = localStorage.getItem("patientInfo");
    if (patientInfo) {
      localStorage.removeItem("patientInfo");
    }
    setIsLoggedIn(false);
  };

  const paginate1 = (pageNumber) => setCurrentPageToday(pageNumber);
  const paginate2 = (pageNumber) => setCurrentPageUpcoming(pageNumber);
  const paginate3 = (pageNumber) => setCurrentPageHistory(pageNumber);

  const getAllAppointments = async (id, isAuthenticated) => {
    console.log(id);
    try {
      const data = await axios.post(
        "https://healthbackend-3xh2.onrender.com/appointment/patientappointments",
        {
          patientId: id,
        },
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: isAuthenticated,
          },
        }
      );

      console.log(data);
      const appointments = data.data.result;
      const today = new Date();
      const todayAppointmentsArray = [];
      const upcomingAppointmentsArray = [];
      const pastAppointmentsArray = [];
      console.log(today + 6000000);
      today.setHours(0, 0, 0, 0);

      appointments.forEach((appointment) => {
        const appointmentDate = new Date(appointment.date);
        console.log(appointment.date, appointmentDate);
        if (appointmentDate < today) {
          pastAppointmentsArray.push(appointment);
        } else {
          // const currentDate = today;
          // currentDate.setHours(0, 0, 0, 0);
          if (appointmentDate.toDateString() === today.toDateString()) {
            todayAppointmentsArray.push(appointment);
          } else {
            upcomingAppointmentsArray.push(appointment);
          }
        }
      });

      console.log(todayAppointmentsArray);
      console.log(upcomingAppointmentsArray);
      console.log(pastAppointmentsArray);
      setToday(todayAppointmentsArray);
      setUpcoming(upcomingAppointmentsArray);
      setAppointments(pastAppointmentsArray);
    } catch (error) {
      console.log(error);
    }
  };

  console.log(today);

  const handleJoin = (meetingId) => {
    // console.log(meetingId);
    navigate(`/room/${meetingId}`);
  };

  const handleAppointmentSelect = (appointment) => {
    setSelectedAppointment(appointment);
    navigate("/patientappointment");
  };

  useEffect(() => {
    const patientInfo = JSON.parse(localStorage.getItem("patientInfo"));
    setPatientInfo(patientInfo);
    const userInfo = JSON.parse(localStorage.getItem("userInfo"));
    setUserInfo(userInfo);
    const isAuthenticated = localStorage.getItem("token");
    if (patientInfo) {
      getAllAppointments(patientInfo?._id, isAuthenticated);
    }
    if (userInfo.role !== "user") {
      navigate("/");
    }
  }, []);

  console.log(upcoming);
  const [records, setRecords] = useState([
    {
      id: "#MR-0010",
      date: "14 Nov 2023",
      description: "Dental Filling",
      attachment: "dental-test.pdf",
      doctor: {
        name: "Dr. Ruby Perrin",
        specialty: "Dental",
        avatar: "assets/img/doctors/doctor-thumb-01.jpg",
        profileLink: "doctor-profile.html",
      },
    },
    {
      id: "#MR-0009",
      date: "13 Nov 2023",
      description: "Teeth Cleaning",
      attachment: "dental-test.pdf",
      doctor: {
        name: "Dr. Darren Elder",
        specialty: "Dental",
        avatar: "assets/img/doctors/doctor-thumb-02.jpg",
        profileLink: "doctor-profile.html",
      },
    },
    {
      id: "#MR-0008",
      date: "12 Nov 2023",
      description: "General Checkup",
      attachment: "cardio-test.pdf",
      doctor: {
        name: "Dr. Deborah Angel",
        specialty: "Cardiology",
        avatar: "assets/img/doctors/doctor-thumb-03.jpg",
        profileLink: "doctor-profile.html",
      },
    },
    {
      id: "#MR-0007",
      date: "11 Nov 2023",
      description: "General Test",
      attachment: "general-test.pdf",
      doctor: {
        name: "Dr. Sofia Brient",
        specialty: "Urology",
        avatar: "assets/img/doctors/doctor-thumb-04.jpg",
        profileLink: "doctor-profile.html",
      },
    },
    {
      id: "#MR-0006",
      date: "10 Nov 2023",
      description: "Eye Test",
      attachment: "eye-test.pdf",
      doctor: {
        name: "Dr. Marvin Campbell",
        specialty: "Ophthalmology",
        avatar: "assets/img/doctors/doctor-thumb-05.jpg",
        profileLink: "doctor-profile.html",
      },
    },
  ]);

  return (
    <>
      <div className="main-wrapper">
        <div className="breadcrumb-bar-two">
          <div className="container">
            <div className="row align-items-center inner-banner">
              <div className="col-md-12 col-12 text-center">
                <h2 className="breadcrumb-title">Lab Reports</h2>
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
                          src={
                            patientInfo?.profilePicture ||
                            "assets/img/doctors/doctor-thumb-02.jpg"
                          }
                          alt="assets/img/patients/patient.jpg"
                        />
                      </a>
                      <div className="profile-det-info">
                        <h3>{patientInfo?.userId?.name}</h3>
                        <div className="patient-details">
                          <h5>
                            <i className="fas fa-birthday-cake" />
                            {new Date(patientInfo?.dob).toDateString(
                              patientInfo?.dob
                            )}
                            , {patientInfo?.age} years
                          </h5>
                          <h5 className="mb-0">
                            <i className="fas fa-map-marker-alt" />{" "}
                            {patientInfo?.city}, {patientInfo?.contry}
                          </h5>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="dashboard-widget">
                    <nav className="dashboard-menu">
                      <ul>
                        <li>
                          <Link to="/user">
                            <i className="fas fa-columns" />
                            <span>Dashboard</span>
                          </Link>
                        </li>

                        <li className="active">
                          <Link to="/labreports">
                            <i className="fas fa-list-alt" />
                            <span>Lab Reports</span>
                          </Link>
                        </li>
                        <li>
                          <Link to="/prescriptions">
                            <i className="fas fa-file-invoice" />
                            <span>Prescriptions</span>
                          </Link>
                        </li>
                        <li>
                          <Link to="/medical-records">
                            <i className="fas fa-clipboard" />
                            <span> Medical Records</span>
                          </Link>
                        </li>

                        <li>
                          <Link to="/profile-settings">
                            <i className="fas fa-user-cog" />
                            <span>Profile Settings</span>
                          </Link>
                        </li>
                        <li>
                          <Link to="/change-password">
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
              <div className="col-md-7 col-lg-8 col-xl-9">
                <div className="row">
                  <div className="col-sm-12">
                    <div className="card">
                      <div className="card-body">
                        <div className="card card-table mb-0">
                          <div className="card-body">
                            <div className="table-responsive">
                              <table className="table table-hover table-center mb-0">
                                <thead>
                                  <tr>
                                    <th>ID</th>
                                    <th>Date</th>
                                    <th>Description</th>
                                    <th>Attachment</th>
                                    <th>Created</th>
                                    <th>Action</th>
                                  </tr>
                                </thead>
                                <tbody>
                                  {records.map((record, index) => (
                                    <tr key={index}>
                                      <td>
                                        <a href="javascript:void(0);">
                                          {record.id}
                                        </a>
                                      </td>
                                      <td>{record.date}</td>
                                      <td>{record.description}</td>
                                      <td>
                                        <a href="#">{record.attachment}</a>
                                      </td>
                                      <td>
                                        <h2 className="table-avatar">
                                          <a
                                            href={record.doctor.profileLink}
                                            className="avatar avatar-sm me-2">
                                            <img
                                              className="avatar-img rounded-circle"
                                              src={record.doctor.avatar}
                                              alt="User Image"
                                            />
                                          </a>
                                          <a href={record.doctor.profileLink}>
                                            {record.doctor.name}{" "}
                                            <span>
                                              {record.doctor.specialty}
                                            </span>
                                          </a>
                                        </h2>
                                      </td>
                                      <td>
                                        <div className="table-action">
                                          <button className="btn btn-sm bg-info-light me-2">
                                            <i className="far fa-eye" /> View
                                          </button>
                                          <a
                                            href="javascript:void(0);"
                                            className="btn btn-sm bg-danger-light">
                                            <i className="far fa-trash-alt" />
                                          </a>
                                        </div>
                                      </td>
                                    </tr>
                                  ))}
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
        </div>
      </div>
    </>
  );
};

export default LabReports;
