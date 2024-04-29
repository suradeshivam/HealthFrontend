import React from "react";
import { Link } from "react-router-dom";

export default function ScheduleTime() {
  return (
    <>
      <div className="main-wrapper">
        
        <div className="breadcrumb-bar-two">
          <div className="container">
            <div className="row align-items-center inner-banner">
              <div className="col-md-12 col-12 text-center">
                <h2 className="breadcrumb-title">Schedule Timings</h2>
                <nav aria-label="breadcrumb" className="page-breadcrumb">
                  <ol className="breadcrumb">
                    <li className="breadcrumb-item">
                      <a href="index.html">Home</a>
                    </li>
                    <li className="breadcrumb-item" aria-current="page">
                      Schedule Timings
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
                        <li className="active">
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
              <div className="col-md-7 col-lg-8 col-xl-9">
                <div className="row">
                  <div className="col-sm-12">
                    <div className="card">
                      <div className="card-body">
                        <h4 className="card-title">Schedule Timings</h4>
                        <div className="profile-box">
                          <div className="row">
                            <div className="col-lg-4">
                              <div className="mb-3">
                                <label className="durations">
                                  Timing Slot Duration
                                </label>
                                <select className="form-select form-control">
                                  <option>-</option>
                                  <option>15 mins</option>
                                  <option selected="selected">30 mins</option>
                                  <option>45 mins</option>
                                  <option>1 Hour</option>
                                </select>
                              </div>
                            </div>
                          </div>
                          <div className="row">
                            <div className="col-md-12">
                              <div className="card schedule-widget mb-0">
                                <div className="schedule-header">
                                  <div className="schedule-nav">
                                    <ul className="nav nav-tabs nav-justified">
                                      <li className="nav-item">
                                        <a
                                          className="nav-link"
                                          data-bs-toggle="tab"
                                          href="#slot_sunday">
                                          Sunday
                                        </a>
                                      </li>
                                      <li className="nav-item">
                                        <a
                                          className="nav-link active"
                                          data-bs-toggle="tab"
                                          href="#slot_monday">
                                          Monday
                                        </a>
                                      </li>
                                      <li className="nav-item">
                                        <a
                                          className="nav-link"
                                          data-bs-toggle="tab"
                                          href="#slot_tuesday">
                                          Tuesday
                                        </a>
                                      </li>
                                      <li className="nav-item">
                                        <a
                                          className="nav-link"
                                          data-bs-toggle="tab"
                                          href="#slot_wednesday">
                                          Wednesday
                                        </a>
                                      </li>
                                      <li className="nav-item">
                                        <a
                                          className="nav-link"
                                          data-bs-toggle="tab"
                                          href="#slot_thursday">
                                          Thursday
                                        </a>
                                      </li>
                                      <li className="nav-item">
                                        <a
                                          className="nav-link"
                                          data-bs-toggle="tab"
                                          href="#slot_friday">
                                          Friday
                                        </a>
                                      </li>
                                      <li className="nav-item">
                                        <a
                                          className="nav-link"
                                          data-bs-toggle="tab"
                                          href="#slot_saturday">
                                          Saturday
                                        </a>
                                      </li>
                                    </ul>
                                  </div>
                                </div>
                                <div className="tab-content schedule-cont">
                                  <div
                                    id="slot_sunday"
                                    className="tab-pane fade">
                                    <h4 className="card-title d-flex justify-content-between">
                                      <span>Time Slots</span>
                                      <a
                                        className="edit-link"
                                        data-bs-toggle="modal"
                                        href="#add_time_slot">
                                        <i className="fa fa-plus-circle" /> Add
                                        Slot
                                      </a>
                                    </h4>
                                    <p className="text-muted mb-0">
                                      Not Available
                                    </p>
                                  </div>
                                  <div
                                    id="slot_monday"
                                    className="tab-pane fade show active">
                                    <h4 className="card-title d-flex justify-content-between">
                                      <span>Time Slots</span>
                                      <a
                                        className="edit-link"
                                        data-bs-toggle="modal"
                                        href="#edit_time_slot">
                                        <i className="fa fa-edit me-1" />
                                        Edit
                                      </a>
                                    </h4>
                                    <div className="doc-times">
                                      <div className="doc-slot-list">
                                        8:00 pm - 11:30 pm
                                        <a
                                          href="javascript:void(0)"
                                          className="delete_schedule">
                                          <i className="fa fa-times" />
                                        </a>
                                      </div>
                                      <div className="doc-slot-list">
                                        11:30 pm - 1:30 pm
                                        <a
                                          href="javascript:void(0)"
                                          className="delete_schedule">
                                          <i className="fa fa-times" />
                                        </a>
                                      </div>
                                      <div className="doc-slot-list">
                                        3:00 pm - 5:00 pm
                                        <a
                                          href="javascript:void(0)"
                                          className="delete_schedule">
                                          <i className="fa fa-times" />
                                        </a>
                                      </div>
                                      <div className="doc-slot-list">
                                        6:00 pm - 11:00 pm
                                        <a
                                          href="javascript:void(0)"
                                          className="delete_schedule">
                                          <i className="fa fa-times" />
                                        </a>
                                      </div>
                                    </div>
                                  </div>
                                  <div
                                    id="slot_tuesday"
                                    className="tab-pane fade">
                                    <h4 className="card-title d-flex justify-content-between">
                                      <span>Time Slots</span>
                                      <a
                                        className="edit-link"
                                        data-bs-toggle="modal"
                                        href="#add_time_slot">
                                        <i className="fa fa-plus-circle" /> Add
                                        Slot
                                      </a>
                                    </h4>
                                    <p className="text-muted mb-0">
                                      Not Available
                                    </p>
                                  </div>
                                  <div
                                    id="slot_wednesday"
                                    className="tab-pane fade">
                                    <h4 className="card-title d-flex justify-content-between">
                                      <span>Time Slots</span>
                                      <a
                                        className="edit-link"
                                        data-bs-toggle="modal"
                                        href="#add_time_slot">
                                        <i className="fa fa-plus-circle" /> Add
                                        Slot
                                      </a>
                                    </h4>
                                    <p className="text-muted mb-0">
                                      Not Available
                                    </p>
                                  </div>
                                  <div
                                    id="slot_thursday"
                                    className="tab-pane fade">
                                    <h4 className="card-title d-flex justify-content-between">
                                      <span>Time Slots</span>
                                      <a
                                        className="edit-link"
                                        data-bs-toggle="modal"
                                        href="#add_time_slot">
                                        <i className="fa fa-plus-circle" /> Add
                                        Slot
                                      </a>
                                    </h4>
                                    <p className="text-muted mb-0">
                                      Not Available
                                    </p>
                                  </div>
                                  <div
                                    id="slot_friday"
                                    className="tab-pane fade">
                                    <h4 className="card-title d-flex justify-content-between">
                                      <span>Time Slots</span>
                                      <a
                                        className="edit-link"
                                        data-bs-toggle="modal"
                                        href="#add_time_slot">
                                        <i className="fa fa-plus-circle" /> Add
                                        Slot
                                      </a>
                                    </h4>
                                    <p className="text-muted mb-0">
                                      Not Available
                                    </p>
                                  </div>
                                  <div
                                    id="slot_saturday"
                                    className="tab-pane fade">
                                    <h4 className="card-title d-flex justify-content-between">
                                      <span>Time Slots</span>
                                      <a
                                        className="edit-link"
                                        data-bs-toggle="modal"
                                        href="#add_time_slot">
                                        <i className="fa fa-plus-circle" /> Add
                                        Slot
                                      </a>
                                    </h4>
                                    <p className="text-muted mb-0">
                                      Not Available
                                    </p>
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
      <div className="modal fade custom-modal" id="add_time_slot">
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">Add Time Slots</h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"></button>
            </div>
            <div className="modal-body">
              <form>
                <div className="hours-info">
                  <div className="row hours-cont">
                    <div className="col-12 col-md-10">
                      <div className="row">
                        <div className="col-12 col-md-6">
                          <div className="mb-3">
                            <label className="mb-2">Start Time</label>
                            <select className="form-select form-control">
                              <option>-</option>
                              <option>12.00 am</option>
                              <option>12.30 am</option>
                              <option>1.00 am</option>
                              <option>1.30 am</option>
                            </select>
                          </div>
                        </div>
                        <div className="col-12 col-md-6">
                          <div className="mb-3">
                            <label className="mb-2">End Time</label>
                            <select className="form-select form-control">
                              <option>-</option>
                              <option>12.00 am</option>
                              <option>12.30 am</option>
                              <option>1.00 am</option>
                              <option>1.30 am</option>
                            </select>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="add-more mb-3">
                  <a href="javascript:void(0);" className="add-hours">
                    <i className="fa fa-plus-circle" /> Add More
                  </a>
                </div>
                <div className="submit-section text-center">
                  <button type="submit" className="btn btn-primary submit-btn">
                    Save
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      <div className="modal fade custom-modal" id="edit_time_slot">
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">Edit Time Slots</h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"></button>
            </div>
            <div className="modal-body">
              <form>
                <div className="hours-info">
                  <div className="row hours-cont">
                    <div className="col-12 col-md-10">
                      <div className="row">
                        <div className="col-12 col-md-6">
                          <div className="mb-3">
                            <label className="mb-2">Start Time</label>
                            <select className="form-select form-control">
                              <option>-</option>
                              <option selected="">12.00 am</option>
                              <option>12.30 am</option>
                              <option>1.00 am</option>
                              <option>1.30 am</option>
                            </select>
                          </div>
                        </div>
                        <div className="col-12 col-md-6">
                          <div className="mb-3">
                            <label className="mb-2">End Time</label>
                            <select className="form-select form-control">
                              <option>-</option>
                              <option>12.00 am</option>
                              <option selected="">12.30 am</option>
                              <option>1.00 am</option>
                              <option>1.30 am</option>
                            </select>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="row hours-cont">
                    <div className="col-12 col-md-10">
                      <div className="row">
                        <div className="col-12 col-md-6">
                          <div className="mb-3">
                            <label className="mb-2">Start Time</label>
                            <select className="form-select form-control">
                              <option>-</option>
                              <option>12.00 am</option>
                              <option selected="">12.30 am</option>
                              <option>1.00 am</option>
                              <option>1.30 am</option>
                            </select>
                          </div>
                        </div>
                        <div className="col-12 col-md-6">
                          <div className="mb-3">
                            <label className="mb-2">End Time</label>
                            <select className="form-select form-control">
                              <option>-</option>
                              <option>12.00 am</option>
                              <option>12.30 am</option>
                              <option selected="">1.00 am</option>
                              <option>1.30 am</option>
                            </select>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-12 col-md-2">
                      <label className="d-md-block d-sm-none d-none">
                        &nbsp;
                      </label>
                      <a href="#" className="btn btn-danger trash">
                        <i className="far fa-trash-alt" />
                      </a>
                    </div>
                  </div>
                  <div className="row hours-cont">
                    <div className="col-12 col-md-10">
                      <div className="row">
                        <div className="col-12 col-md-6">
                          <div className="mb-3">
                            <label className="mb-2">Start Time</label>
                            <select className="form-select form-control">
                              <option>-</option>
                              <option>12.00 am</option>
                              <option>12.30 am</option>
                              <option selected="">1.00 am</option>
                              <option>1.30 am</option>
                            </select>
                          </div>
                        </div>
                        <div className="col-12 col-md-6">
                          <div className="mb-3">
                            <label className="mb-2">End Time</label>
                            <select className="form-select form-control">
                              <option>-</option>
                              <option>12.00 am</option>
                              <option>12.30 am</option>
                              <option>1.00 am</option>
                              <option selected="">1.30 am</option>
                            </select>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-12 col-md-2">
                      <label className="d-md-block d-sm-none d-none">
                        &nbsp;
                      </label>
                      <a href="#" className="btn btn-danger trash">
                        <i className="far fa-trash-alt" />
                      </a>
                    </div>
                  </div>
                </div>
                <div className="add-more mb-3">
                  <a href="javascript:void(0);" className="add-hours">
                    <i className="fa fa-plus-circle" /> Add More
                  </a>
                </div>
                <div className="submit-section text-center">
                  <button type="submit" className="btn btn-primary submit-btn">
                    Save
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
