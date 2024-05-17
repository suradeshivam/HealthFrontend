import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { OrderState } from "../../Contexts";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { Bounce, ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function Checkout() {
  const [PatientInfo, setPatientInfo] = useState(null);
  console.log(PatientInfo);
  const {
    selectedDoctor,
    symptoms,
    temperature,
    bloodpresure,
    heartRate,
    reportFiles,
    pdfRefs,
    selectedSlotDay,
    selectedSlotTime,
    selectedDate,
  } = OrderState();

  const navigate = useNavigate();

  console.log(
    symptoms,
    temperature,
    bloodpresure,
    heartRate,
    reportFiles,
    pdfRefs,
    selectedSlotDay,
    selectedSlotTime,
    selectedDate
  );

  function parseTime(timeStr) {
    const [time, modifier] = timeStr.split(" ");
    let [hours, minutes] = time.split(":").map(Number);

    if (modifier === "PM" && hours !== 12) {
      hours += 12;
    } else if (modifier === "AM" && hours === 12) {
      hours = 0;
    }

    return { hours, minutes };
  }

  function convertToISO(dateStr, startTimeStr) {
    // Parse the date
    const [day, month, year] = dateStr.split("-").map(Number);

    // Parse the start time
    const { hours: startHours, minutes: startMinutes } =
      parseTime(startTimeStr);

    // Create a new Date object
    const date = new Date(
      Date.UTC(year, month - 1, day, startHours, startMinutes)
    );

    // Convert to ISO string
    const isoString = date.toISOString();

    return isoString;
  }

  const dateStr = "17-05-2024";
  const startTimeStr = "12:00 AM";

  const isoString = convertToISO(dateStr, startTimeStr);

  console.log(isoString);
  console.log(selectedDate);
  // console.log(selectedSlotTime.substring(0,9));

  const handleSubmit = async () => {
    const isAuthenticated = localStorage.getItem("token");
    const patientInfo = JSON.parse(localStorage.getItem("patientInfo"));
    console.log(selectedDoctor, patientInfo);

    console.log(selectedSlotTime.substring(0, 9));
    const date = convertToISO(selectedDate, selectedSlotTime.substring(0, 9));

    try {
      const result = await axios.post(
        `http://localhost:5000/appointment/create`,
        {
          patientId: patientInfo._id,
          doctorId: selectedDoctor._id,
          slot: selectedSlotTime,
          date: date,
          vitals: {
            heartRate: heartRate,
            bloodPressure: bloodpresure,
            temparature: temperature,
          },
          symptoms: symptoms,
          consent: true,
        },
        {
          headers: {
            authorization: isAuthenticated,
          },
        }
      );

      console.log(result);
      toast("Appointment Created Successfully");
      navigate("/booking-success");
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    const patientInfo = JSON.parse(localStorage.getItem("patientInfo"));
    setPatientInfo(patientInfo);
  }, []);
  return (
    <>
      <div className="main-wrapper">
        <div className="breadcrumb-bar-two">
          <div className="container">
            <div className="row align-items-center inner-banner">
              <div className="col-md-12 col-12 text-center">
                <h2 className="breadcrumb-title">Checkout</h2>
                <nav aria-label="breadcrumb" className="page-breadcrumb"></nav>
              </div>
            </div>
          </div>
        </div>
        <div className="content">
          <div className="container">
            <div className="row">
              <ToastContainer />
              <div className="col-md-7 col-lg-8">
                <div className="card">
                  <div className="card-body">
                    <div>
                      <div className="info-widget">
                        <h4 className="card-title">Personal Information</h4>
                        <div className="row">
                          <div className="col-md-6 col-sm-12">
                            <div className="mb-3 card-label">
                              <label className="mb-2">Name</label>
                              <input
                                className="form-control"
                                value={PatientInfo?.patient?.name}
                                type="text"
                              />
                            </div>
                          </div>

                          <div className="col-md-6 col-sm-12">
                            <div className="mb-3 card-label">
                              <label className="mb-2">Email</label>
                              <input className="form-control" type="email" />
                            </div>
                          </div>
                          <div className="col-md-6 col-sm-12">
                            <div className="mb-3 card-label">
                              <label className="mb-2">Phone</label>
                              <input className="form-control" type="text" />
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="payment-widget">
                        <h4 className="card-title">Payment Method</h4>
                        <div className="payment-list">
                          <label className="payment-radio credit-card-option">
                            <input
                              type="radio"
                              name="radio"
                              defaultChecked=""
                            />
                            <span className="checkmark" />
                            Credit card
                          </label>
                          <div className="row">
                            <div className="col-md-6">
                              <div className="mb-3 card-label">
                                <label htmlFor="card_name">Name on Card</label>
                                <input
                                  className="form-control"
                                  id="card_name"
                                  type="text"
                                />
                              </div>
                            </div>
                            <div className="col-md-6">
                              <div className="mb-3 card-label">
                                <label htmlFor="card_number">Card Number</label>
                                <input
                                  className="form-control"
                                  id="card_number"
                                  placeholder="1234 5678 9876 5432"
                                  type="text"
                                />
                              </div>
                            </div>
                            <div className="col-md-4">
                              <div className="mb-3 card-label">
                                <label htmlFor="expiry_month">
                                  Expiry Month
                                </label>
                                <input
                                  className="form-control"
                                  id="expiry_month"
                                  placeholder="MM"
                                  type="text"
                                />
                              </div>
                            </div>
                            <div className="col-md-4">
                              <div className="mb-3 card-label">
                                <label htmlFor="expiry_year">Expiry Year</label>
                                <input
                                  className="form-control"
                                  id="expiry_year"
                                  placeholder="YY"
                                  type="text"
                                />
                              </div>
                            </div>
                            <div className="col-md-4">
                              <div className="mb-3 card-label">
                                <label htmlFor="cvv">CVV</label>
                                <input
                                  className="form-control"
                                  id="cvv"
                                  type="text"
                                />
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="payment-list">
                          <label className="payment-radio paypal-option">
                            <input type="radio" name="radio" />
                            <span className="checkmark" />
                            Paypal
                          </label>
                        </div>
                        <div className="terms-accept">
                          <div className="custom-checkbox">
                            <input type="checkbox" id="terms_accept" />
                            {"  "}
                            {"  "}
                            <label htmlFor="terms_accept">
                              I have read and accept{" "}
                              <a href="terms-condition.html">
                                Terms &amp; Conditions
                              </a>
                            </label>
                          </div>
                        </div>
                        <div className="clinic-booking col-md-4 mt-3">
                          <Link className="apt-btn" onClick={handleSubmit}>
                            Confirm & Pay
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-5 col-lg-4 theiaStickySidebar">
                <div className="card booking-card">
                  <div className="card-header">
                    <h4 className="card-title">Booking Summary</h4>
                  </div>
                  <div className="card-body">
                    <div className="booking-doc-info">
                      <a href="doctor-profile.html" className="booking-doc-img">
                        <img
                          src="assets/img/doctors/doctor-thumb-02.jpg"
                          alt="User Image"
                        />
                      </a>
                      <div className="booking-info">
                        <h4>
                          <a href="doctor-profile.html">Dr. Darren Elder</a>
                        </h4>
                        <div className="rating">
                          <i className="fas fa-star filled" />
                          <i className="fas fa-star filled" />
                          <i className="fas fa-star filled" />
                          <i className="fas fa-star filled" />
                          <i className="fas fa-star" />
                          <span className="d-inline-block average-rating">
                            35
                          </span>
                        </div>
                        <div className="clinic-details">
                          <p className="doc-location">
                            <i className="fas fa-map-marker-alt" /> Newyork, USA
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="booking-summary">
                      <div className="booking-item-wrap">
                        <ul className="booking-date">
                          <li>
                            Date :<span> 16 Nov 2023</span>
                          </li>
                          <li>
                            Time :<span> 10:00 AM</span>
                          </li>
                        </ul>
                        <ul className="booking-fee">
                          <li>
                            Consulting Fee <span>₹ 100</span>
                          </li>
                          <li>
                            Booking Fee <span>₹ 10</span>
                          </li>
                          <li>
                            Video Call <span>₹ 50</span>
                          </li>
                        </ul>
                        <div className="booking-total">
                          <ul className="booking-total-list">
                            <li>
                              <span>Total</span>
                              <span className="total-cost">₹ 160</span>
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
      {/* Mirrored from TwinsisTech.dreamstechnologies.com/html/template/checkout.html by HTTrack Website Copier/3.x [XR&CO'2014], Tue, 16 Apr 2024 16:46:18 GMT */}
    </>
  );
}
