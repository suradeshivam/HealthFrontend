import React,{useState,useEffect} from 'react'
import { Link } from 'react-router-dom'

export default function ChangePasswordPatient() {
  const [patientInfo, setPatientInfo] = useState("");
  const [userInfo, setUserInfo] = useState("");

  useEffect(() => {
    const patientInfo = JSON.parse(localStorage.getItem('patientInfo'))
    setPatientInfo(patientInfo)
    const userInfo = JSON.parse(localStorage.getItem('userInfo'))
    setUserInfo(userInfo)
  }, []);

  return (
    <>
  {/* Mirrored from doccure.dreamstechnologies.com/html/template/change-password.html by HTTrack Website Copier/3.x [XR&CO'2014], Tue, 16 Apr 2024 16:46:25 GMT */}
  <meta charSet="utf-8" />
  <title>Doccure</title>
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <meta
    name="description"
    content="The responsive professional Doccure template offers many features, like scheduling appointments with  top doctors, clinics, and hospitals via voice, video call & chat."
  />
  <meta
    name="keywords"
    content="practo clone, doccure, doctor appointment, Practo clone html template, doctor booking template"
  />
  <meta
    name="author"
    content="Practo Clone HTML Template - Doctor Booking Template"
  />
  <meta
    property="og:url"
    content="https://doccure.dreamstechnologies.com/html/"
  />
  <meta property="og:type" content="website" />
  <meta
    property="og:title"
    content="Doctors Appointment HTML Website Templates | Doccure"
  />
  <meta
    property="og:description"
    content="The responsive professional Doccure template offers many features, like scheduling appointments with  top doctors, clinics, and hospitals via voice, video call & chat."
  />
  <meta property="og:image" content="assets/img/preview-banner.jpg" />
  <meta name="twitter:card" content="summary_large_image" />
  <meta
    property="twitter:domain"
    content="https://doccure.dreamstechnologies.com/html/"
  />
  <meta
    property="twitter:url"
    content="https://doccure.dreamstechnologies.com/html/"
  />
  <meta
    name="twitter:title"
    content="Doctors Appointment HTML Website Templates | Doccure"
  />
  <meta
    name="twitter:description"
    content="The responsive professional Doccure template offers many features, like scheduling appointments with  top doctors, clinics, and hospitals via voice, video call & chat."
  />
  <meta name="twitter:image" content="assets/img/preview-banner.jpg" />
  <link href="assets/img/favicon.png" rel="icon" />
  <link rel="stylesheet" href="assets/css/bootstrap.min.css" />
  <link
    rel="stylesheet"
    href="assets/plugins/fontawesome/css/fontawesome.min.css"
  />
  <link rel="stylesheet" href="assets/plugins/fontawesome/css/all.min.css" />
  <link rel="stylesheet" href="assets/css/feather.css" />
  <link rel="stylesheet" href="assets/css/custom.css" />
  <div className="main-wrapper">
   
    <div className="breadcrumb-bar-two">
      <div className="container">
        <div className="row align-items-center inner-banner">
          <div className="col-md-12 col-12 text-center">
            <h2 className="breadcrumb-title">Change Password</h2>
            <nav aria-label="breadcrumb" className="page-breadcrumb">
              <ol className="breadcrumb">
                <li className="breadcrumb-item">
                  <a href="index.html">Home</a>
                </li>
                <li className="breadcrumb-item" aria-current="page">
                  Change Password
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
                         src={patientInfo?.profilePicture || "assets/img/doctors/doctor-thumb-02.jpg"}
                          alt="assets/img/patients/patient.jpg"
                        />
                      </a>
                      <div className="profile-det-info">
                        <h3>Patient</h3>
                        <div className="patient-details">
                          <h5>
                            <i className="fas fa-birthday-cake" />
                             {
                             new Date(patientInfo?.dob).toLocaleDateString('en-GB', { day: '2-digit',month: 'long',year: 'numeric'})},
                            {patientInfo?.age} years
                          </h5>
                          <h5 className="mb-0">
                            <i className="fas fa-map-marker-alt" /> {patientInfo?.city}, {patientInfo?.contry}
                          </h5>
                        </div>
                      </div>
                    </div>
              </div>
              <div className="dashboard-widget">
                <nav className="dashboard-menu">
                  <ul>
                    <li >
                      <Link to="/user">
                        <i className="fas fa-columns" />
                        <span>Dashboard</span>
                      </Link>
                    </li>
                    
                    <li>
                      <Link to="/dependent">
                        <i className="fas fa-users" />
                        <span>Dependent</span>
                      </Link>
                    </li>
                    {/* <li>
                      <a href="chat.html">
                        <i className="fas fa-comments" />
                        <span>Message</span>
                        <small className="unread-msg">23</small>
                      </a>
                    </li> */}
                    
                    <li>
                      <Link to="/orders">
                        <i className="fas fa-list-alt" />
                        <span>Orders</span>
                        <small className="unread-msg">7</small>
                      </Link>
                    </li>
                    <li>
                      <Link to="/medical-records">
                        <i className="fas fa-clipboard" />
                        <span>Add Medical Records</span>
                      </Link>
                    </li>
                 
                    <li>
                      <Link to="/profile-settings">
                        <i className="fas fa-user-cog" />
                        <span>Profile Settings</span>
                      </Link>
                    </li>
                    <li className="active">
                      <Link to="/change-password">
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
          <div className="col-md-7 col-lg-8 col-xl-9">
            <div className="card">
              <div className="card-body">
                <div className="row">
                  <div className="col-md-12 col-lg-6">
                    <form>
                      <div className="mb-3">
                        <label className="mb-2">Old Password</label>
                        <input type="password" className="form-control" />
                      </div>
                      <div className="mb-3">
                        <label className="mb-2">New Password</label>
                        <input type="password" className="form-control" />
                      </div>
                      <div className="mb-3">
                        <label className="mb-2">Confirm Password</label>
                        <input type="password" className="form-control" />
                      </div>
                      <div className="submit-section">
                        <button
                          type="submit"
                          className="btn btn-primary submit-btn"
                        >
                          Save Changes
                        </button>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  {/* Mirrored from doccure.dreamstechnologies.com/html/template/change-password.html by HTTrack Website Copier/3.x [XR&CO'2014], Tue, 16 Apr 2024 16:46:25 GMT */}
</>

  )
}
