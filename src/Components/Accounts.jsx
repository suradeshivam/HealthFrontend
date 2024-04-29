import React from "react";
import { Link } from "react-router-dom";

export default function Accounts() {
  return (
    <>
      <div className="main-wrapper">
        <div className="breadcrumb-bar-two">
          <div className="container">
            <div className="row align-items-center inner-banner">
              <div className="col-md-12 col-12 text-center">
                <h2 className="breadcrumb-title">Accounts</h2>
                <nav aria-label="breadcrumb" className="page-breadcrumb">
                  <ol className="breadcrumb">
                    <li className="breadcrumb-item">
                      <a href="index.html">Home</a>
                    </li>
                    <li className="breadcrumb-item" aria-current="page">
                      Accounts
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
                        <li>
                          <Link to="/doctor">
                            <i className="fas fa-columns" />
                            <span>Dashboard</span>
                          </Link>
                        </li>
                        <li>
                          <Link to="/appointments">
                            <i className="fas fa-calendar-check" />
                            <span>Appointments</span>
                          </Link>
                        </li>
                        <li>
                          <Link to="/schedule">
                            <i className="fas fa-hourglass-start" />
                            <span>Schedule Timings</span>
                          </Link>
                        </li>
                        <li className="active">
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
              <div className="col-md-7 col-lg-8 col-xl-9">
                <div className="row">
                  <div className="col-lg-5 d-flex">
                    <div className="card flex-fill">
                      <div className="card-header">
                        <div className="row">
                          <div className="col-sm-6">
                            <h3 className="card-title">Account</h3>
                          </div>
                          <div className="col-sm-6">
                            <div>
                              <a
                                title="Edit Profile"
                                className="btn btn-primary btn-sm"
                                href="#account_modal"
                                data-bs-toggle="modal">
                                <i className="fas fa-pencil" /> Edit Details
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="card-body">
                        <div className="profile-view-bottom">
                          <div className="row">
                            <div className="col-lg-6">
                              <div className="info-list">
                                <div className="title">Bank Name</div>
                                <div className="text" id="bank_name">
                                  Wells Fargo &amp; Co
                                </div>
                              </div>
                            </div>
                            <div className="col-lg-6">
                              <div className="info-list">
                                <div className="title">Branch Name</div>
                                <div className="text" id="branch_name">
                                  Lenexa
                                </div>
                              </div>
                            </div>
                            <div className="col-lg-6">
                              <div className="info-list">
                                <div className="title">Account Number</div>
                                <div className="text" id="account_no">
                                  5396 5250 1908 3838
                                </div>
                              </div>
                            </div>
                            <div className="col-lg-6">
                              <div className="info-list">
                                <div className="title">Account Name</div>
                                <div className="text" id="account_name">
                                  Dr. Darren Elder
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-7 d-flex">
                    <div className="card flex-fill">
                      <div className="card-body">
                        <div className="row">
                          <div className="col-lg-6">
                            <div className="account-card bg-success-light">
                              <span>$90.48</span> Earned
                            </div>
                          </div>
                          <div className="col-lg-6">
                            <div className="account-card bg-warning-light">
                              <span>$0.00</span> Requested
                            </div>
                          </div>
                          <div className="col-lg-6">
                            <div className="account-card bg-purple-light">
                              <span>$90.48</span> Balance
                            </div>
                          </div>
                          <div className="col-md-12 text-center">
                            <a
                              href="#payment_request_modal"
                              className="btn btn-primary request_btn"
                              data-bs-toggle="modal">
                              Payment Request
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-sm-12">
                    <div className="card">
                      <div className="card-body pt-0">
                        <nav className="user-tabs mb-4">
                          <ul className="nav nav-tabs nav-tabs-bottom nav-justified">
                            <li className="nav-item">
                              <a
                                className="nav-link active"
                                href="#pat_accounts"
                                data-bs-toggle="tab">
                                Accounts
                              </a>
                            </li>
                            <li className="nav-item">
                              <a
                                className="nav-link"
                                href="#pat_refundrequest"
                                data-bs-toggle="tab">
                                Patients Refund Request
                              </a>
                            </li>
                          </ul>
                        </nav>
                        <div className="tab-content pt-0">
                          <div
                            id="pat_accounts"
                            className="tab-pane fade show active">
                            <div className="card card-table mb-0">
                              <div className="card-body">
                                <div className="table-responsive">
                                  <table className="table table-hover table-center mb-0">
                                    <thead>
                                      <tr>
                                        <th>Date</th>
                                        <th>Patient Name</th>
                                        <th>Amount</th>
                                        <th>Status</th>
                                        <th>Action</th>
                                      </tr>
                                    </thead>
                                    <tbody>
                                      <tr>
                                        <td>
                                          11 Nov 2023{" "}
                                          <span className="d-block text-info">
                                            10.00 AM
                                          </span>
                                        </td>
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
                                              Richard Wilson{" "}
                                              <span>#PT0016</span>
                                            </a>
                                          </h2>
                                        </td>
                                        <td>$150</td>
                                        <td>
                                          <span className="badge rounded-pill bg-success-light">
                                            Paid
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
                                              <i className="fas fa-check" />
                                              Accept
                                            </a>
                                            <a
                                              href="javascript:void(0);"
                                              className="btn btn-sm bg-danger-light">
                                              <i className="fas fa-times" />
                                              Cancel
                                            </a>
                                          </div>
                                        </td>
                                      </tr>
                                      <tr>
                                        <td>
                                          3 Nov 2023{" "}
                                          <span className="d-block text-info">
                                            11.00 AM
                                          </span>
                                        </td>
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
                                        <td>$200</td>
                                        <td>
                                          <span className="badge rounded-pill bg-success-light">
                                            Paid
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
                                              <i className="fas fa-check" />
                                              Accept
                                            </a>
                                            <a
                                              href="javascript:void(0);"
                                              className="btn btn-sm bg-danger-light">
                                              <i className="fas fa-times" />
                                              Cancel
                                            </a>
                                          </div>
                                        </td>
                                      </tr>
                                      <tr>
                                        <td>
                                          1 Nov 2023{" "}
                                          <span className="d-block text-info">
                                            1.00 PM
                                          </span>
                                        </td>
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
                                              Travis Trimble{" "}
                                              <span>#PT0002</span>
                                            </a>
                                          </h2>
                                        </td>
                                        <td>$75</td>
                                        <td>
                                          <span className="badge rounded-pill bg-success-light">
                                            Paid
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
                                              <i className="fas fa-check" />
                                              Accept
                                            </a>
                                            <a
                                              href="javascript:void(0);"
                                              className="btn btn-sm bg-danger-light">
                                              <i className="fas fa-times" />
                                              Cancel
                                            </a>
                                          </div>
                                        </td>
                                      </tr>
                                      <tr>
                                        <td>
                                          30 Oct 2023{" "}
                                          <span className="d-block text-info">
                                            9.00 AM
                                          </span>
                                        </td>
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
                                        <td>$100</td>
                                        <td>
                                          <span className="badge rounded-pill bg-warning-light">
                                            Pending
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
                                              <i className="fas fa-check" />
                                              Accept
                                            </a>
                                            <a
                                              href="javascript:void(0);"
                                              className="btn btn-sm bg-danger-light">
                                              <i className="fas fa-times" />
                                              Cancel
                                            </a>
                                          </div>
                                        </td>
                                      </tr>
                                      <tr>
                                        <td>
                                          28 Oct 2023{" "}
                                          <span className="d-block text-info">
                                            6.00 PM
                                          </span>
                                        </td>
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
                                              Michelle Fairfax{" "}
                                              <span>#PT0004</span>
                                            </a>
                                          </h2>
                                        </td>
                                        <td>$350</td>
                                        <td>
                                          <span className="badge rounded-pill bg-success-light">
                                            Paid
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
                                              <i className="fas fa-check" />
                                              Accept
                                            </a>
                                            <a
                                              href="javascript:void(0);"
                                              className="btn btn-sm bg-danger-light">
                                              <i className="fas fa-times" />
                                              Cancel
                                            </a>
                                          </div>
                                        </td>
                                      </tr>
                                      <tr>
                                        <td>
                                          27 Oct 2023{" "}
                                          <span className="d-block text-info">
                                            8.00 AM
                                          </span>
                                        </td>
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
                                        <td>$250</td>
                                        <td>
                                          <span className="badge rounded-pill bg-danger-light">
                                            Refunded
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
                                              <i className="fas fa-check" />
                                              Accept
                                            </a>
                                            <a
                                              href="javascript:void(0);"
                                              className="btn btn-sm bg-danger-light">
                                              <i className="fas fa-times" />
                                              Cancel
                                            </a>
                                          </div>
                                        </td>
                                      </tr>
                                    </tbody>
                                  </table>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="tab-pane fade" id="pat_refundrequest">
                            <div className="card card-table mb-0">
                              <div className="card-body">
                                <div className="table-responsive">
                                  <table className="table table-hover table-center mb-0">
                                    <thead>
                                      <tr>
                                        <th>Date</th>
                                        <th>Patient Name</th>
                                        <th>Amount</th>
                                        <th>Status</th>
                                        <th>Action</th>
                                      </tr>
                                    </thead>
                                    <tbody>
                                      <tr>
                                        <td>
                                          11 Nov 2023{" "}
                                          <span className="d-block text-info">
                                            10.00 AM
                                          </span>
                                        </td>
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
                                              Richard Wilson{" "}
                                              <span>#PT0016</span>
                                            </a>
                                          </h2>
                                        </td>
                                        <td>$150</td>
                                        <td>
                                          <span className="badge rounded-pill bg-success-light">
                                            Paid
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
                                              <i className="fas fa-check" />
                                              Accept
                                            </a>
                                            <a
                                              href="javascript:void(0);"
                                              className="btn btn-sm bg-danger-light">
                                              <i className="fas fa-times" />
                                              Cancel
                                            </a>
                                          </div>
                                        </td>
                                      </tr>
                                      <tr>
                                        <td>
                                          3 Nov 2023{" "}
                                          <span className="d-block text-info">
                                            11.00 AM
                                          </span>
                                        </td>
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
                                        <td>$200</td>
                                        <td>
                                          <span className="badge rounded-pill bg-success-light">
                                            Paid
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
                                              <i className="fas fa-check" />
                                              Accept
                                            </a>
                                            <a
                                              href="javascript:void(0);"
                                              className="btn btn-sm bg-danger-light">
                                              <i className="fas fa-times" />
                                              Cancel
                                            </a>
                                          </div>
                                        </td>
                                      </tr>
                                      <tr>
                                        <td>
                                          1 Nov 2023{" "}
                                          <span className="d-block text-info">
                                            1.00 PM
                                          </span>
                                        </td>
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
                                              Travis Trimble{" "}
                                              <span>#PT0002</span>
                                            </a>
                                          </h2>
                                        </td>
                                        <td>$75</td>
                                        <td>
                                          <span className="badge rounded-pill bg-success-light">
                                            Paid
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
                                              <i className="fas fa-check" />
                                              Accept
                                            </a>
                                            <a
                                              href="javascript:void(0);"
                                              className="btn btn-sm bg-danger-light">
                                              <i className="fas fa-times" />
                                              Cancel
                                            </a>
                                          </div>
                                        </td>
                                      </tr>
                                      <tr>
                                        <td>
                                          30 Oct 2023{" "}
                                          <span className="d-block text-info">
                                            9.00 AM
                                          </span>
                                        </td>
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
                                        <td>$100</td>
                                        <td>
                                          <span className="badge rounded-pill bg-warning-light">
                                            Pending
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
                                              <i className="fas fa-check" />
                                              Accept
                                            </a>
                                            <a
                                              href="javascript:void(0);"
                                              className="btn btn-sm bg-danger-light">
                                              <i className="fas fa-times" />
                                              Cancel
                                            </a>
                                          </div>
                                        </td>
                                      </tr>
                                      <tr>
                                        <td>
                                          28 Oct 2023{" "}
                                          <span className="d-block text-info">
                                            6.00 PM
                                          </span>
                                        </td>
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
                                              Michelle Fairfax{" "}
                                              <span>#PT0004</span>
                                            </a>
                                          </h2>
                                        </td>
                                        <td>$350</td>
                                        <td>
                                          <span className="badge rounded-pill bg-success-light">
                                            Paid
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
                                              <i className="fas fa-check" />
                                              Accept
                                            </a>
                                            <a
                                              href="javascript:void(0);"
                                              className="btn btn-sm bg-danger-light">
                                              <i className="fas fa-times" />
                                              Cancel
                                            </a>
                                          </div>
                                        </td>
                                      </tr>
                                      <tr>
                                        <td>
                                          27 Oct 2023{" "}
                                          <span className="d-block text-info">
                                            8.00 AM
                                          </span>
                                        </td>
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
                                        <td>$250</td>
                                        <td>
                                          <span className="badge rounded-pill bg-danger-light">
                                            Refunded
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
                                              <i className="fas fa-check" />
                                              Accept
                                            </a>
                                            <a
                                              href="javascript:void(0);"
                                              className="btn btn-sm bg-danger-light">
                                              <i className="fas fa-times" />
                                              Cancel
                                            </a>
                                          </div>
                                        </td>
                                      </tr>
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
        </div>
      </div>
      <div
        className="modal fade custom-modal"
        id="payment_request_modal"
        role="dialog"
        style={{ display: "none" }}
        aria-hidden="true">
        <div className="modal-dialog modal-dialog-centered" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h3 className="modal-title">Payment Request</h3>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              />
            </div>
            <div className="modal-body">
              <form id="payment_request_form" method="post">
                <input
                  type="hidden"
                  name="payment_type"
                  id="payment_type"
                  defaultValue={1}
                />
                <div className="mb-3">
                  <label className="mb-2">Request Amount</label>
                  <input
                    type="text"
                    name="request_amount"
                    id="request_amount"
                    className="form-control"
                    maxLength={6}
                    oninput="if (!window.__cfRLUnblockHandlers) return false; this.value = this.value.replace(/[^0-9.]/g, '').replace(/(\..*)\./g, '$1');"
                    data-cf-modified-9d2aab87120ae1d3fdeb4d9f-=""
                  />
                  <span className="help-block" />
                </div>
                <div className="mb-3">
                  <label className="mb-2">Description (Optional)</label>
                  <textarea
                    className="form-control"
                    name="description"
                    id="description"
                    defaultValue={""}
                  />
                  <span className="help-block" />
                </div>
              </form>
            </div>
            <div className="modal-footer text-center">
              <button
                type="submit"
                id="request_btn"
                className="btn btn-primary">
                Request
              </button>
            </div>
          </div>
        </div>
      </div>
      <div
        className="modal fade custom-modal"
        id="account_modal"
        role="dialog"
        aria-hidden="true">
        <div className="modal-dialog modal-dialog-centered" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h3 className="modal-title">Account Details</h3>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              />
            </div>
            <div className="modal-body">
              <form id="accounts_form" method="post">
                <div className="row">
                  <div className="col-md-12">
                    <div className="mb-3">
                      <label className="control-label mb-2">Bank Name</label>
                      <input
                        type="text"
                        name="bank_name"
                        className="form-control bank_name"
                        defaultValue="Wells Fargo & Co"
                      />
                      <span className="help-block" />
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-12">
                    <div className="mb-3">
                      <label className="control-label mb-2">Branch Name</label>
                      <input
                        type="text"
                        name="branch_name"
                        className="form-control branch_name"
                        defaultValue="Lenexa"
                      />
                      <span className="help-block" />
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-12">
                    <div className="mb-3">
                      <label className="control-label mb-2">
                        Account Number
                      </label>
                      <input
                        type="text"
                        name="account_no"
                        className="form-control account_no"
                        defaultValue="5396 5250 1908 3838"
                      />
                      <span className="help-block" />
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-12">
                    <div className="mb-3">
                      <label className="control-label mb-2">Account Name</label>
                      <input
                        type="text"
                        name="account_name"
                        className="form-control acc_name"
                        defaultValue="Dr. Darren Elder"
                      />
                      <span className="help-block" />
                    </div>
                  </div>
                </div>
              </form>
            </div>
            <div className="modal-footer text-center">
              <button type="submit" id="acc_btn" className="btn btn-primary">
                Save
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
