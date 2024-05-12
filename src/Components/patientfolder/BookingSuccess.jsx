import React from 'react'
import { Link } from 'react-router-dom'

export default function Bookingsuccess() {
  return (
    <>

  <div className="main-wrapper">
    <div className="breadcrumb-bar-two">
      <div className="container">
        <div className="row align-items-center inner-banner">
          <div className="col-md-12 col-12 text-center">
            <h2 className="breadcrumb-title">Booking</h2>
           
          </div>
        </div>
      </div>
    </div>
    <div className="content success-page-cont">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-6">
            <div className="card success-card">
              <div className="card-body">
                <div className="success-cont">
                  <i className="fas fa-check" />
                  <h3>Appointment booked Successfully!</h3>
                  <p>
                    Appointment booked with <strong>Dr. Darren Elder</strong>
                    <br /> on <strong>12 Nov 2023 5:00PM to 6:00PM</strong>
                  </p>
                  <Link
                    to="/invoice-view"
                    className="btn btn-primary view-inv-btn"
                  >
                    View Invoice
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
   
  </div>
  {/* Mirrored from TwinsisTech.dreamstechnologies.com/html/template/booking-success.html by HTTrack Website Copier/3.x [XR&CO'2014], Tue, 16 Apr 2024 16:46:18 GMT */}
</>

  )
}
