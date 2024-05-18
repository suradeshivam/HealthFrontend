import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function Checkout() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [isChecked, setIsChecked] = useState(false);
  const navigate = useNavigate();

  const validateEmail = (email) => {
    const re = /\S+@\S+\.\S+/;
    return re.test(email);
  };

  const handlePayment = () => {
    if (!name || !email || !phone) {
      toast.error("Please fill in all required fields.");
      return;
    }
    if (!validateEmail(email)) {
      toast.error("Please enter a valid email address.");
      return;
    }
    if (!isChecked) {
      toast.error("Please accept the Terms & Conditions.");
      return;
    }

    // Your payment handling logic
    const options = {
      key: "rzp_test_24yRxkxuRbu0WP",
      amount: 16000,
      currency: "INR",
      name: "TwinsisTech",
      description: "Fees",
      image: "https://example.com/your_logo",
      handler: function (response) {
        if (response.razorpay_payment_id) {
          toast.success("Payment successful!");
          setTimeout(() => {
            navigate("/booking-success");
          }, 3000);
        } else {
          toast.error("Payment failed. Please try again.");
        }
      },
      prefill: {
        name: name,
        email: email,
        contact: phone,
      },
      notes: {
        address: "Razorpay Corporate Office",
      },
      theme: {
        color: "#0e82fd",
      },
    };

    const rzp1 = new window.Razorpay(options);
    rzp1.open();
  };

  return (
    <div>
      <div className="main-wrapper">
        <div className="breadcrumb-bar-two">
          <div className="container">
            <div className="row align-items-center inner-banner">
              <div className="col-md-12 col-12 text-center">
                <h2 className="breadcrumb-title">Checkout</h2>
              </div>
            </div>
          </div>
        </div>
        <div className="content">
          <div className="container">
            <div className="row">
              <div className="col-md-7 col-lg-8">
                <div className="card">
                  <div className="card-body">
                    <form>
                      <div className="info-widget">
                        <h4 className="card-title">Personal Information</h4>
                        <div className="row">
                          <div className="col-md-6 col-sm-12">
                            <div className="mb-3 card-label">
                              <label className="mb-2">
                                Name <span style={{ color: "red" }}>*</span>
                              </label>
                              <input
                                className="form-control"
                                type="text"
                                value={name}
                                onChange={(e) =>
                                  setName(
                                    e.target.value.replace(/[^A-Za-z]/gi, " ")
                                  )
                                }
                                autoComplete="name"
                                required
                              />
                            </div>
                          </div>
                          <div className="col-md-6 col-sm-12">
                            <div className="mb-3 card-label">
                              <label className="mb-2">
                                Email <span style={{ color: "red" }}>*</span>
                              </label>
                              <input
                                className="form-control"
                                type="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                autoComplete="email"
                                required
                              />
                            </div>
                          </div>
                          <div className="col-md-6 col-sm-12">
                            <div className="mb-3 card-label">
                              <label className="mb-2">
                                Phone <span style={{ color: "red" }}>*</span>
                              </label>
                              <input
                                className="form-control"
                                type="tel"
                                value={phone}
                                onChange={(e) =>
                                  setPhone(
                                    e.target.value
                                      .replace(/[^0-9+]/g, "")
                                      .slice(0, 13)
                                  )
                                }
                                autoComplete="tel"
                                required
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="terms-accept">
                        <div className="custom-checkbox">
                          <input
                            type="checkbox"
                            id="terms_accept"
                            checked={isChecked}
                            onChange={() => setIsChecked(!isChecked)}
                            required
                          />
                          {"  "}
                          <label htmlFor="terms_accept">
                            I have read and accept{" "}
                            <a href="terms-condition.html">
                              Terms &amp; Conditions
                            </a>
                          </label>
                        </div>
                      </div>
                      <div className="form-search-btn col-md-12">
                        <button
                          type="button"
                          className="btn"
                          onClick={handlePayment}>
                          Confirm & Pay
                        </button>
                      </div>
                    </form>
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
      <ToastContainer />
    </div>
  );
}
