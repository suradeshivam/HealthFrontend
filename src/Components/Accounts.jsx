import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function Accounts() {
  const [accountName, setAccountName] = useState("Dr. Darren Elder");
  const [bankName, setBankName] = useState("Sbi");
  const [upiId, setUpiId] = useState();
  const [upiIdError, setUpiIdError] = useState();

  const handleUpiIdChange = (e) => {
    const upiIdValue = e.target.value;

    // Check if the input is empty
    if (upiIdValue.trim() === "") {
      setUpiId(upiIdValue); // Set the empty value
      setUpiIdError(""); // Clear any existing error
    } else {
      // Check if the input matches the regex pattern
      if (/^[0-9A-Za-z.-]{2,256}@[A-Za-z]{2,64}$/.test(upiIdValue)) {
        setUpiId(upiIdValue); // Set the valid UPI ID
        setUpiIdError(""); // Clear any existing error
      } else {
        setUpiId(upiIdValue); // Set the UPI ID
        setUpiIdError("Invalid UPI ID format"); // Set the error message for invalid format
      }
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Check if the UPI ID is valid
    if (/^[0-9A-Za-z.-]{2,256}@[A-Za-z]{2,64}$/.test(upiId)) {
      console.log("Account Name:", accountName);
      console.log("Bank Name:", bankName);
      console.log("UPI ID:", upiId);
    } else {
      // If UPI ID is invalid, show the error message
      setUpiIdError("Invalid UPI ID format");
    }
  };

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
                        {/* accounts */}
                        <div className="profile-view-bottom">
                          <div className="row ">
                            <div className="col-xl-6 ">
                              <div className="info-list">
                                <div className="title">Account Name</div>
                                <div className="text" id="account_name">
                                  {accountName}
                                </div>
                              </div>
                            </div>
                            <div className="col-xl-6 ">
                              <div className="info-list">
                                <div className="title">Bank Name</div>
                                <div className="text" id="bank_name">
                                  {bankName}
                                </div>
                              </div>
                            </div>
                            <div className="col-lg-6">
                              <div className="info-list">
                                <div className="title">UPI id</div>
                                <div className="text" id="account_no">
                                  {upiId}
                                  <h5>twinsistech@ybl</h5>
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
                              <span>Rs.90000</span> Earned
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
              <form id="accounts_form" method="post" onSubmit={handleSubmit}>
                <div className="row">
                  <div className="col-md-12">
                    <div className="mb-3">
                      <label className="control-label mb-2">Account Name</label>
                      <input
                        type="text"
                        name="account_name"
                        className="form-control acc_name"
                        value={accountName}
                        onChange={(e) => setAccountName(e.target.value)}
                      />
                      <span className="help-block" />
                    </div>
                  </div>
                </div>

                <div className="col-md-12">
                  <div className="mb-3">
                    <label className="control-label mb-2">Bank Name</label>
                    <input
                      type="text"
                      name="bank_name"
                      className="form-control bank_name"
                      value={bankName}
                      onChange={(e) => setBankName(e.target.value)}
                    />
                    <span className="help-block" />
                  </div>
                </div>

                <div className="row">
                  <div className="col-md-12">
                    <div className="mb-3">
                      <label className="control-label mb-2">UPI id</label>
                      <input
                        type="text"
                        name="account_no"
                        className="form-control account_no"
                        value={upiId}
                        onChange={handleUpiIdChange}
                        placeholder="example123@okbankname"
                      />
                      {upiIdError && (
                        <span className="help-block">{upiIdError}</span>
                      )}
                    </div>
                  </div>
                </div>
                <div className="modal-footer text-center">
                  <button
                    type="submit"
                    id="acc_btn"
                    className="btn btn-primary"
                    data-bs-dismiss="modal">
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
