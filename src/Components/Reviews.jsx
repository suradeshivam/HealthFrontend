import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function Reviews() {
  const commentData = [
    {
      imageUrl: 'assets/img/patients/patient2.jpg',
      author: 'Travis Trimble',
      reviewDate: 'Reviewed 4 Days ago',
      reviewCount: 5,
      comment: `Lorem ipsum dolor sit amet, consectetur adipisicing elit, 
      sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
      Ut enim ad minim veniam, quis nostrud exercitation. Curabitur non nulla sit amet nisl tempus`,
    },
    {
      imageUrl: 'assets/img/patients/patient3.jpg',
      author: 'Carl Kelly',
      reviewDate: 'Reviewed 5 Days ago',
      reviewCount: 4,
      comment: `Lorem ipsum dolor sit amet, consectetur adipisicing elit, 
      sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
      Ut enim ad minim veniam, quis nostrud exercitation. Curabitur non nulla sit amet nisl tempus`,
    },
    {
      imageUrl: 'assets/img/patients/patient4.jpg',
      author: 'Michelle Fairfax',
      reviewDate: 'Reviewed 6 Days ago',
      reviewCount: 4,
      comment: `Lorem ipsum dolor sit amet, consectetur adipisicing elit, 
      sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
      Ut enim ad minim veniam, quis nostrud exercitation. Curabitur non nulla sit amet nisl tempus`,
    },
    {
      imageUrl: 'assets/img/patients/patient5.jpg',
      author: 'Gina Moore',
      reviewDate: 'Reviewed 1 Week ago',
      reviewCount: 5,
      comment: `Lorem ipsum dolor sit amet, consectetur adipisicing elit, 
      sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
      Ut enim ad minim veniam, quis nostrud exercitation. Curabitur non nulla sit amet nisl tempus`,
    },
    {
      imageUrl: 'assets/img/patients/patient9.jpg',
      author: 'Walter Roberson',
      reviewDate: 'Reviewed 1 Week ago',
      reviewCount: 5,
      comment: `Lorem ipsum dolor sit amet, consectetur adipisicing elit, 
      sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
      Ut enim ad minim veniam, quis nostrud exercitation. Curabitur non nulla sit amet nisl tempus`,
    },
    {
      imageUrl: 'assets/img/patients/patient8.jpg',
      author: 'Daniel Griffing',
      reviewDate: 'Reviewed on 1 Nov 2023',
      reviewCount: 1,
      comment: `Lorem ipsum dolor sit amet, consectetur adipisicing elit, 
      sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
      Ut enim ad minim veniam, quis nostrud exercitation. Curabitur non nulla sit amet nisl tempus`,
    },
  ];

  const [review, setReview] = useState([]);

  // Function to render stars based on review count
  const renderStars = (count) => {
    const stars = [];
    for (let i = 0; i < count; i++) {
      stars.push(<i key={i} className="fas fa-star filled" />);
    }
    for (let i = count; i < 5; i++) {
      stars.push(<i key={i} className="fas fa-star" />);
    }
    return stars;
  };

  function generateRandomDate() {
    var currentDate = new Date();
    var startDate = new Date(currentDate.getFullYear() - 10, 0, 1); // 10 years ago from today
    var endDate = currentDate; // Today
  
    // Convert start and end date to milliseconds
    var startMillis = startDate.getTime();
    var endMillis = endDate.getTime();
  
    // Generate a random number between start and end date milliseconds
    var randomMillis = startMillis + Math.random() * (endMillis - startMillis);
  
    // Create a new Date object using the random milliseconds
    var randomDate = new Date(randomMillis);
  
    // Return the random date
    return randomDate;
  }

  useEffect(()=>{
    const docInfo = JSON.parse(localStorage.getItem('docInfo'));
    setReview(docInfo?.reviews);
  })

  return (
    <div className="main-wrapper">
      <div className="breadcrumb-bar-two">
        <div className="container">
          <div className="row align-items-center inner-banner">
            <div className="col-md-12 col-12 text-center">
              <h2 className="breadcrumb-title">Reviews</h2>
              <nav aria-label="breadcrumb" className="page-breadcrumb">
                <ol className="breadcrumb">
                  <li className="breadcrumb-item">
                    <a href="index.html">Home</a>
                  </li>
                  <li className="breadcrumb-item" aria-current="page">
                    Reviews
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
                      <li className="active">
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
              <div className="doc-review review-listing">
              <ul className="comment-list">
      {review.map((comment, index) => (
        <li key={index}>
          <div className="comment">
            <img
              className="avatar rounded-circle"
              alt="User Image"
              src={'assets/img/patients/patient8.jpg'}
            />
            <div className="comment-body"style={{width:"100%"}}>
              <div className="meta-data" >
                <span className="comment-author">{comment.patientName}</span>
                <div className="review-count rating">
                  {renderStars(comment.rating)}
                </div>
                <span className="comment-date">Reviewed 1 Week ago</span>
              </div>
              <p className="comment-content">{comment.description}</p>
            </div>
          </div>
        </li>
      ))}
    </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
