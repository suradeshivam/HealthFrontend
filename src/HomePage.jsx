import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom';

import  axios  from 'axios';
export default function HomePage() {
const data ={
  "specialists": [
    { "id": 1, "name": "Heart specialist" },
    { "id": 2, "name": "Dermatologist" },
    { "id": 3, "name": "Endocrinologist" },
    { "id": 4, "name": "Gastroenterologist" },
    { "id": 5, "name": "Hematologist" },
    { "id": 6, "name": "Neurologist" },
    { "id": 7, "name": "Oncologist" },
    { "id": 8, "name": "Ophthalmologist" },
    { "id": 9, "name": "Orthopedic Surgeon" },
    { "id": 10, "name": "Pediatrician" },
    { "id": 11, "name": "Plastic Surgeon" },
    { "id": 12, "name": "Psychiatrist" },
    { "id": 13, "name": "Radiologist" },
    { "id": 14, "name": "Rheumatologist" },
    { "id": 15, "name": "Urologist" },
    { "id": 16, "name": "Anesthesiologist" },
    { "id": 17, "name": "Gynecologist" },
    { "id": 18, "name": "Otolaryngologist (ENT Specialist)" },
    { "id": 19, "name": "Pathologist" },
    { "id": 20, "name": "Pulmonologist" },
    { "id": 21, "name": "Dentist" }
  ]
}

const cities = {
  "names": [
    {"id": 1, "city": "Pune"},
    {"id": 2, "city": "Athens"},
    {"id": 3, "city": "Bangalore"},
    {"id": 4, "city": "Bangkok"},
    {"id": 5, "city": "Barcelona"},
    {"id": 6, "city": "Berlin"},
    {"id": 7, "city": "Cairo"},
    {"id": 8, "city": "Chennai"},
    {"id": 9, "city": "Delhi"},
    {"id": 10, "city": "Dubai"},
    {"id": 11, "city": "Hong Kong"},
    {"id": 12, "city": "Hyderabad"},
    {"id": 13, "city": "Istanbul"},
    {"id": 14, "city": "Jaipur"},
    {"id": 15, "city": "Jalgoan"},
    {"id": 16, "city": "Kanpur"},
    {"id": 17, "city": "Kolkata"},
    {"id": 18, "city": "Kopergoan"},
    {"id": 19, "city": "London"},
    {"id": 20, "city": "Los Angeles"},
    {"id": 21, "city": "Lucknow"},
    {"id": 22, "city": "Madrid"},
    {"id": 23, "city": "Moscow"},
    {"id": 24, "city": "Mumbai"},
    {"id": 25, "city": "Munich"},
    {"id": 26, "city": "Nagpur"},
    {"id": 27, "city": "New York"},
    {"id": 28, "city": "Oslo"},
    {"id": 29, "city": "Paris"},
    {"id": 30, "city": "Patna"},
    {"id": 31, "city": "Pimpri-Chinchwad"},
    {"id": 32, "city": "Pune"},
    {"id": 33, "city": "Rio de Janeiro"},
    {"id": 34, "city": "Rome"},
    {"id": 35, "city": "Seoul"},
    {"id": 36, "city": "Shanghai"},
    {"id": 37, "city": "Shirdi"},
    {"id": 38, "city": "Singapore"},
    {"id": 39, "city": "Stockholm"},
    {"id": 40, "city": "Surat"},
    {"id": 41, "city": "Sydney"},
    {"id": 42, "city": "Thane"},
    {"id": 43, "city": "Tokyo"},
    {"id": 44, "city": "Toronto"},
    {"id": 45, "city": "Vadodara"},
    {"id": 46, "city": "Vienna"},
    {"id": 47, "city": "Visakhapatnam"},
    {"id": 48, "city": "Yeola"}
  ]
};

const navigate = useNavigate();

const DropdownMenu = ({ data }) => {
  return (
    <div className="search-input search-line">
    <i className="feather-search bficon" />
    <div  style={{ marginBottom: '0' }}>
      <select
        className="form-control"
        style={{
          border: 'none',
          marginLeft: '10px',
          opacity: 1,
          transform: 'scaleY(1)',
          display: 'inline-block',
         
        }}
      >
        <option  value="" style={{ color: 'grey' }}>
          Search doctors, specialist
        </option>
        {data.specialists.map((specialist) => (
          <option key={specialist.id} value={specialist.name}>
            {specialist.name}
          </option>
        ))}
      </select>
    </div>
  </div>
  
  );
};
const DropdownMenu1 = ({ cities }) => {
  return (
    <div>
       <i className="feather-map-pin" style={{marginLeft:'8px'}} />
    {/* <i className="feather-search bficon" /> */}
    <div  style={{ marginBottom: '0',width:'100%', }}>
      <select
        className="form-control"
        style={{
          border:'none',
          marginLeft: '30px',
          opacity: 1,
          transform: 'scaleY(1)',
          display: 'inline-block',
          width:'100%'
        }}
      >
        <option  value="" style={{ color: 'grey' }}>
          Location
        </option>
        {cities.names.map((names) => (
          <option key={names.id} value={names.city}>
            {names.city}
          </option>
        ))}
      </select>
    </div>
  </div>
  
  );
};

const [docFilter,setDocFilter] = useState("");

const getAllDoctors = async() =>{

  const isAuthenticated = localStorage.getItem("token");
  try {

    const response = await axios.get('https://healthbackend-3xh2.onrender.com/patient/search',
    {
      headers:{
        "Content-Type": "application/json",
        Authorization: isAuthenticated,
      },
    }
    );

    // console.log(response);
    setDocFilter(response.data.result);
    // setFilterDoctor(response.data.result);
    
  } catch (error) {
    console.log(error);
  }

}
console.log(docFilter)

const handleSearch = () => {
  navigate('/docsearch', { state: { docFilters: docFilter } });
};

useEffect ( ()=>{

  getAllDoctors();

},[]);



  return (
    <>
 
  <title>TwinDoc</title>

  <div className="main-wrapper">
    {/* This header is temperary just for demonstration */}
  <header className="header header-custom header-fixed header-one">
      <div className="container">
        <nav className="navbar navbar-expand-lg header-nav">
          <div className="navbar-header">
            <a id="mobile_btn" href="javascript:void(0);">
              <span className="bar-icon">
                <span />
                <span />
                <span />
              </span>
            </a>
            <Link to="/index" className="navbar-brand logo">
              
           
              {/* <img src="assets/img/favicon/20240505_203516.png" className="img-fluid" alt="Logo" /> */}
            <h3>TwinsDoc</h3>
            </Link>
          </div>
          
          <div className="main-menu-wrapper">
            <div className="menu-header">
              <a href="index.html" className="menu-logo">
                <img
                  src="assets/img/logo.png"
                  className="img-fluid"
                  alt="Logo"
                />
              </a>
              <a
                id="menu_close"
                className="menu-close"
                href="javascript:void(0);"
              >
                <i className="fas fa-times" />
              </a>
            </div>

            <ul className="main-nav">
             
              <li className="has-submenu ">
                <a href="javascript:void(0);">
                  About Us 
                </a>
               
              </li>
              <li className="has-submenu">
                <a href="javascript:void(0);">
                  Services 
                </a>
               
              </li>
              <li className="has-submenu">
                <a href="javascript:void(0);">
                  Contact 
                </a>
               </li>
              
              
             
            </ul>
          </div>
          <ul className="nav header-navbar-rht">
          
              <li className="register-btn">
                <Link to="/signup" className="btn reg-btn">
                  <i className="feather-user" />
                  Register
                </Link>
              </li>
              <li >
                <Link to="/doc-patientlogin" className="btn btn-primary log-btn" >
                  <i className="feather-lock  " />
                  Login
                </Link>
              </li>
            
          </ul>
        </nav>
      </div>
    </header>

    
    <section className="banner-section">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-6">
            <div className="banner-content " >
              <h1>
              <span>Your Health</span>, Our Way 
              </h1>
              <img
                src="assets/img/icons/header-icon.svg"
                className="header-icon"
                alt="header-icon"
              />
              <p>Connect, Consult, Care with Our Online TwinDoc Portal at your Nearby Location.</p>
              <a href="booking.html" className="btn">
                Start a Consult
              </a>
              <div className="banner-arrow-img">
                <img
                  src="assets/img/down-arrow-img.png"
                  className="img-fluid"
                  alt="down-arrow"
                />
              </div>
            </div>
            {/* search specialist */}
            <div className="search-box-one " >
              <form >

              <DropdownMenu data={data}  />

                {/* location */}
                <div className="search-input search-map-line">
      
      <div >
        
        {/* Include the DropdownMenu1 component here */}
        <DropdownMenu1 cities={cities} />
         
      </div>
    </div>

                <div className="search-input search-calendar-line">
                  <i className="feather-calendar" />
                  <div className=" mb-0">
                    <input
                      type="date"
                      className="form-control datetimepicker"
                      placeholder="Date"
                    />
                  </div>
                </div>
                <div className="form-search-btn">
                  
                  
                  <button className="btn" type="submit" onClick={handleSearch}>
                    Search
                  </button>
                  
                </div>
              </form>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="banner-img " >
              <img
                src="assets/img/banner-img.png"
                className="img-fluid"
                alt="patient-image"
              />
              <div className="banner-img1">
                <img
                  src="assets/img/banner-img1.png"
                  className="img-fluid"
                  alt="checkup-image"
                />
              </div>
              <div className="banner-img2">
                <img
                  src="assets/img/banner-img2.png"
                  className="img-fluid"
                  alt="doctor-slide"
                />
              </div>
              <div className="banner-img3">
                <img
                  src="assets/img/banner-img3.png"
                  className="img-fluid"
                  alt="doctors-list"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section className="work-section">
      <div className="container">
        <div className="row">
          <div
            className="col-lg-4 col-md-12 work-img-info "
            
          >
            <div className="work-img">
              <img
                src="assets/img/work-img.png"
                className="img-fluid"
                alt="doctor-image"
              />
            </div>
          </div>
          <div className="col-lg-8 col-md-12 work-details">
            <div className="section-header-one " >
              <h5>How it Works</h5>
              <h2 className="section-title">
                4 easy steps to get your solution
              </h2>
            </div>
            <div className="row">
              <div className="col-lg-6 col-md-6 " >
                <div className="work-info">
                  <div className="work-icon">
                    <span>
                      <img
                        src="assets/img/icons/work-01.svg"
                        alt="search-doctor-icon"
                      />
                    </span>
                  </div>
                  <div className="work-content">
                    <h5>Search Doctor</h5>
                    <p>
                    Find the Right Healthcare Professional for You.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-lg-6 col-md-6 " >
                <div className="work-info">
                  <div className="work-icon">
                    <span>
                      <img
                        src="assets/img/icons/work-02.svg"
                        alt="doctor-profile-icon"
                      />
                    </span>
                  </div>
                  <div className="work-content">
                    <h5>Check Doctor Profile</h5>
                    <p>
                    Discover Specialties, Experience, and Reviews. Start Your Health Journey Today!
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-lg-6 col-md-6 " >
                <div className="work-info">
                  <div className="work-icon">
                    <span>
                      <img
                        src="assets/img/icons/work-03.svg"
                        alt="calendar-icon"
                      />
                    </span>
                  </div>
                  <div className="work-content">
                    <h5>Schedule Appointment</h5>
                    <p>
                    Choose your time, pick a provider, and confirm in seconds. Prioritize your well-being effortlessly! 
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-lg-6 col-md-6 " >
                <div className="work-info">
                  <div className="work-icon">
                    <span>
                      <img
                        src="assets/img/icons/work-04.svg"
                        alt="solution-icon"
                      />
                    </span>
                  </div>
                  <div className="work-content">
                    <h5>Get Your Solution</h5>
                    <p>
                    Tailored Solutions for Your Health Needs. Thrive with Us!
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

      {/* <section className="articles-section">
        <div className="container">
          <div className="row">
            <div className="col-md-12 " >
              <div className="section-header-one text-center">
                <h2 className="section-title">Latest Articles</h2>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-6 col-md-6 d-flex " >
              <div className="articles-grid w-100">
                <div className="articles-info">
                  <div className="articles-left">
                    <a href="blog-details.html">
                      <div className="articles-img">
                        <img
                          src="assets/img/blog/blog-11.jpg"
                          className="img-fluid"
                          alt="John Doe"
                        />
                      </div>
                    </a>
                  </div>
                  <div className="articles-right">
                    <div className="articles-content">
                      <ul className="articles-list nav">
                        <li>
                          <i className="feather-user" /> John Doe
                        </li>
                        <li>
                          <i className="feather-calendar" /> 13 Aug, 2023
                        </li>
                      </ul>
                      <h4>
                        <a href="blog-details.html">
                          Doccure – Making your clinic painless visit?
                        </a>
                      </h4>
                      <p>
                        Sed perspiciatis unde omnis iste natus error sit
                        voluptatem accusantium{" "}
                      </p>
                      <a href="blog-details.html" className="btn">
                        View Blog
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6 col-md-6 d-flex " >
              <div className="articles-grid w-100">
                <div className="articles-info">
                  <div className="articles-left">
                    <a href="blog-details.html">
                      <div className="articles-img">
                        <img
                          src="assets/img/blog/blog-12.jpg"
                          className="img-fluid"
                          alt="Darren Elder"
                        />
                      </div>
                    </a>
                  </div>
                  <div className="articles-right">
                    <div className="articles-content">
                      <ul className="articles-list nav">
                        <li>
                          <i className="feather-user" /> Darren Elder
                        </li>
                        <li>
                          <i className="feather-calendar" /> 10 Sep, 2023
                        </li>
                      </ul>
                      <h4>
                        <a href="blog-details.html">
                          What are the benefits of Online Doctor Booking?
                        </a>
                      </h4>
                      <p>
                        Sed perspiciatis unde omnis iste natus error sit
                        voluptatem accusantium{" "}
                      </p>
                      <a href="blog-details.html" className="btn">
                        View Blog
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6 col-md-6 d-flex " >
              <div className="articles-grid w-100">
                <div className="articles-info">
                  <div className="articles-left">
                    <a href="blog-details.html">
                      <div className="articles-img">
                        <img
                          src="assets/img/blog/blog-13.jpg"
                          className="img-fluid"
                          alt="Ruby Perrin"
                        />
                      </div>
                    </a>
                  </div>
                  <div className="articles-right">
                    <div className="articles-content">
                      <ul className="articles-list nav">
                        <li>
                          <i className="feather-user" /> Ruby Perrin
                        </li>
                        <li>
                          <i className="feather-calendar" /> 30 Oct, 2023
                        </li>
                      </ul>
                      <h4>
                        <a href="blog-details.html">
                          Benefits of consulting with an Online Doctor
                        </a>
                      </h4>
                      <p>
                        Sed perspiciatis unde omnis iste natus error sit
                        voluptatem accusantium{" "}
                      </p>
                      <a href="blog-details.html" className="btn">
                        View Blog
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6 col-md-6 d-flex " >
              <div className="articles-grid w-100">
                <div className="articles-info">
                  <div className="articles-left">
                    <a href="blog-details.html">
                      <div className="articles-img">
                        <img
                          src="assets/img/blog/blog-14.jpg"
                          className="img-fluid"
                          alt="Sofia Brient"
                        />
                      </div>
                    </a>
                  </div>
                  <div className="articles-right">
                    <div className="articles-content">
                      <ul className="articles-list nav">
                        <li>
                          <i className="feather-user" /> Sofia Brient
                        </li>
                        <li>
                          <i className="feather-calendar" /> 08 Nov, 2023
                        </li>
                      </ul>
                      <h4>
                        <a href="blog-details.html">
                          5 Great reasons to use an Online Doctor
                        </a>
                      </h4>
                      <p>
                        Sed perspiciatis unde omnis iste natus error sit
                        voluptatem accusantium{" "}
                      </p>
                      <a href="blog-details.html" className="btn">
                        View Blog
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section> */}
    <section className="app-section">
      <div className="container">
        <div className="app-bg">
          <div className="row align-items-center">
            <div className="col-lg-6 col-md-12">
              <div className="app-content">
                <div className="app-header " >
                  <h5>Working for Your Better Health.</h5>
                  <h2>Download the TwinDoc App today!</h2>
                </div>
                <div className="app-scan " >
                  <p>Scan the QR code to get the app now</p>
                  <img src="assets/img/scan-img.png" alt="scan-image" />
                </div>
                <div className="google-imgs " >
                  <a href="javascript:void(0);">
                    <img src="assets/img/google-play.png" alt="img" />
                  </a>
                  <a href="javascript:void(0);">
                    <img src="assets/img/app-store.png" alt="img" />
                  </a>
                </div>
              </div>
            </div>
            <div className="col-lg-6 col-md-12 " >
              <div className="mobile-img">
                <img
                  src="assets/img/mobile-img.png"
                  className="img-fluid"
                  alt="img"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section className="faq-section">
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <div
              className="section-header-one text-center "
              
            >
              <h5>Get Your Answer</h5>
              <h2 className="section-title">Frequently Asked Questions</h2>
            </div>
          </div>
        </div>
        <div className="row align-items-center">
          <div className="col-lg-6 col-md-12 " >
            <div className="faq-img">
              <img
                src="assets/img/faq-img.png"
                className="img-fluid"
                alt="img"
              />
              <div className="faq-patients-count">
                <div className="faq-smile-img">
                  <img src="assets/img/icons/smiling-icon.svg" alt="icon" />
                </div>
                <div className="faq-patients-content">
                  <h4>
                    <span className="count-digit">95</span>k+
                  </h4>
                  <p>Happy Patients</p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-6 col-md-12">
            <div className="faq-info " >
              <div className="accordion" id="faq-details">
                <div className="accordion-item">
                  <h2 className="accordion-header" id="headingOne">
                    <a
                      href="javascript:void(0);"
                      className="accordion-button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapseOne"
                      aria-expanded="true"
                      aria-controls="collapseOne"
                    >
                      How do I schedule an appointment with a doctor through the portal?
                    </a>
                  </h2>
                  <div
                    id="collapseOne"
                    className="accordion-collapse collapse show"
                    aria-labelledby="headingOne"
                    data-bs-parent="#faq-details"
                  >
                    <div className="accordion-body">
                      <div className="accordion-content">
                        <p>
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit, sed do eiusmod tempor incididunt ut labore et
                          dolore magna aliqua. Ut enim ad minim veniam,{" "}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="accordion-item">
                  <h2 className="accordion-header" id="headingTwo">
                    <a
                      href="javascript:void(0);"
                      className="accordion-button collapsed"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapseTwo"
                      aria-expanded="false"
                      aria-controls="collapseTwo"
                    >
                      What types of medical professionals are available for consultations?
                    </a>
                  </h2>
                  <div
                    id="collapseTwo"
                    className="accordion-collapse collapse"
                    aria-labelledby="headingTwo"
                    data-bs-parent="#faq-details"
                  >
                    <div className="accordion-body">
                      <div className="accordion-content">
                        <p>
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit, sed do eiusmod tempor incididunt ut labore et
                          dolore magna aliqua. Ut enim ad minim veniam,{" "}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="accordion-item">
                  <h2 className="accordion-header" id="headingThree">
                    <a
                      href="javascript:void(0);"
                      className="accordion-button collapsed"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapseThree"
                      aria-expanded="false"
                      aria-controls="collapseThree"
                    >
                     Can I get prescriptions through the online portal?
                    </a>
                  </h2>
                  <div
                    id="collapseThree"
                    className="accordion-collapse collapse"
                    aria-labelledby="headingThree"
                    data-bs-parent="#faq-details"
                  >
                    <div className="accordion-body">
                      <div className="accordion-content">
                        <p>
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit, sed do eiusmod tempor incididunt ut labore et
                          dolore magna aliqua. Ut enim ad minim veniam,{" "}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="accordion-item">
                  <h2 className="accordion-header" id="headingFour">
                    <a
                      href="javascript:void(0);"
                      className="accordion-button collapsed"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapseFour"
                      aria-expanded="false"
                      aria-controls="collapseFour"
                    >
                      Are there options for video consultations, or is it strictly text-based communication?

                    </a>
                  </h2>
                  <div
                    id="collapseFour"
                    className="accordion-collapse collapse"
                    aria-labelledby="headingFour"
                    data-bs-parent="#faq-details"
                  >
                    <div className="accordion-body">
                      <div className="accordion-content">
                        <p>
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit, sed do eiusmod tempor incididunt ut labore et
                          dolore magna aliqua. Ut enim ad minim veniam,{" "}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="accordion-item">
                  <h2 className="accordion-header" id="headingFive">
                    <a
                      href="javascript:void(0);"
                      className="accordion-button collapsed"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapseFive"
                      aria-expanded="false"
                      aria-controls="collapseFive"
                    >
                     Can I request a specific doctor for my consultation?

                    </a>
                  </h2>
                  <div
                    id="collapseFive"
                    className="accordion-collapse collapse"
                    aria-labelledby="headingFive"
                    data-bs-parent="#faq-details"
                  >
                    <div className="accordion-body">
                      <div className="accordion-content">
                        <p>
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit, sed do eiusmod tempor incididunt ut labore et
                          dolore magna aliqua. Ut enim ad minim veniam,{" "}
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
    </section>
    {/* <section className="testimonial-section">
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <div className="testimonial-slider slick">
              <div className="testimonial-grid">
                <div className="testimonial-info">
                  <div className="testimonial-img">
                    <img
                      src="assets/img/clients/client-01.jpg"
                      className="img-fluid"
                      alt="John Doe"
                    />
                  </div>
                  <div className="testimonial-content">
                    <div className="section-header section-inner-header testimonial-header">
                      <h5>Testimonials</h5>
                      <h2>What Our Client Says</h2>
                    </div>
                    <div className="testimonial-details">
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore
                        magna aliqua. Ut enim ad minim veniam, quis nostrud
                        exercitation ullamco laboris nisi ut aliquip ex ea
                        commodo consequat. Duis aute irure dolor in
                        reprehenderit in voluptate velit esse cillum dolore eu
                        fugiat nulla pariatur.
                      </p>
                      <h6>
                        <span>John Doe</span> New York
                      </h6>
                    </div>
                  </div>
                </div>
              </div>
              <div className="testimonial-grid">
                <div className="testimonial-info">
                  <div className="testimonial-img">
                    <img
                      src="assets/img/clients/client-02.jpg"
                      className="img-fluid"
                      alt="Amanda Warren"
                    />
                  </div>
                  <div className="testimonial-content">
                    <div className="section-header section-inner-header testimonial-header">
                      <h5>Testimonials</h5>
                      <h2>What Our Client Says</h2>
                    </div>
                    <div className="testimonial-details">
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore
                        magna aliqua. Ut enim ad minim veniam, quis nostrud
                        exercitation ullamco laboris nisi ut aliquip ex ea
                        commodo consequat. Duis aute irure dolor in
                        reprehenderit in voluptate velit esse cillum dolore eu
                        fugiat nulla pariatur.
                      </p>
                      <h6>
                        <span>Amanda Warren</span> Florida
                      </h6>
                    </div>
                  </div>
                </div>
              </div>
              <div className="testimonial-grid">
                <div className="testimonial-info">
                  <div className="testimonial-img">
                    <img
                      src="assets/img/clients/client-03.jpg"
                      className="img-fluid"
                      alt="Betty Carlson"
                    />
                  </div>
                  <div className="testimonial-content">
                    <div className="section-header section-inner-header testimonial-header">
                      <h5>Testimonials</h5>
                      <h2>What Our Client Says</h2>
                    </div>
                    <div className="testimonial-details">
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore
                        magna aliqua. Ut enim ad minim veniam, quis nostrud
                        exercitation ullamco laboris nisi ut aliquip ex ea
                        commodo consequat. Duis aute irure dolor in
                        reprehenderit in voluptate velit esse cillum dolore eu
                        fugiat nulla pariatur.
                      </p>
                      <h6>
                        <span>Betty Carlson</span> Georgia
                      </h6>
                    </div>
                  </div>
                </div>
              </div>
              <div className="testimonial-grid">
                <div className="testimonial-info">
                  <div className="testimonial-img">
                    <img
                      src="assets/img/clients/client-04.jpg"
                      className="img-fluid"
                      alt="Veronica"
                    />
                  </div>
                  <div className="testimonial-content">
                    <div className="section-header section-inner-header testimonial-header">
                      <h5>Testimonials</h5>
                      <h2>What Our Client Says</h2>
                    </div>
                    <div className="testimonial-details">
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore
                        magna aliqua. Ut enim ad minim veniam, quis nostrud
                        exercitation ullamco laboris nisi ut aliquip ex ea
                        commodo consequat. Duis aute irure dolor in
                        reprehenderit in voluptate velit esse cillum dolore eu
                        fugiat nulla pariatur.
                      </p>
                      <h6>
                        <span>Veronica</span> California
                      </h6>
                    </div>
                  </div>
                </div>
              </div>
              <div className="testimonial-grid">
                <div className="testimonial-info">
                  <div className="testimonial-img">
                    <img
                      src="assets/img/clients/client-05.jpg"
                      className="img-fluid"
                      alt="Richard"
                    />
                  </div>
                  <div className="testimonial-content">
                    <div className="section-header section-inner-header testimonial-header">
                      <h5>Testimonials</h5>
                      <h2>What Our Client Says</h2>
                    </div>
                    <div className="testimonial-details">
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore
                        magna aliqua. Ut enim ad minim veniam, quis nostrud
                        exercitation ullamco laboris nisi ut aliquip ex ea
                        commodo consequat. Duis aute irure dolor in
                        reprehenderit in voluptate velit esse cillum dolore eu
                        fugiat nulla pariatur.
                      </p>
                      <h6>
                        <span>Richard</span> Michigan
                      </h6>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section> */}
    {/* <section className="partners-section">
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <div
              className="section-header-one text-center "
              
            >
              <h2 className="section-title">Our Partners</h2>
            </div>
          </div>
        </div>
        <div className="partners-info " >
          <ul className="owl-carousel partners-slider d-flex">
            <li>
              <a href="javascript:void(0);">
                <img
                  className="img-fluid"
                  src="assets/img/partners/partners-1.svg"
                  alt="partners"
                />
              </a>
            </li>
            <li>
              <a href="javascript:void(0);">
                <img
                  className="img-fluid"
                  src="assets/img/partners/partners-2.svg"
                  alt="partners"
                />
              </a>
            </li>
            <li>
              <a href="javascript:void(0);">
                <img
                  className="img-fluid"
                  src="assets/img/partners/partners-3.svg"
                  alt="partners"
                />
              </a>
            </li>
            <li>
              <a href="javascript:void(0);">
                <img
                  className="img-fluid"
                  src="assets/img/partners/partners-4.svg"
                  alt="partners"
                />
              </a>
            </li>
            <li>
              <a href="javascript:void(0);">
                <img
                  className="img-fluid"
                  src="assets/img/partners/partners-5.svg"
                  alt="partners"
                />
              </a>
            </li>
            <li>
              <a href="javascript:void(0);">
                <img
                  className="img-fluid"
                  src="assets/img/partners/partners-6.svg"
                  alt="partners"
                />
              </a>
            </li>
            <li>
              <a href="javascript:void(0);">
                <img
                  className="img-fluid"
                  src="assets/img/partners/partners-1.svg"
                  alt="partners"
                />
              </a>
            </li>
            <li>
              <a href="javascript:void(0);">
                <img
                  className="img-fluid"
                  src="assets/img/partners/partners-2.svg"
                  alt="partners"
                />
              </a>
            </li>
            <li>
              <a href="javascript:void(0);">
                <img
                  className="img-fluid"
                  src="assets/img/partners/partners-3.svg"
                  alt="partners"
                />
              </a>
            </li>
            <li>
              <a href="javascript:void(0);">
                <img
                  className="img-fluid"
                  src="assets/img/partners/partners-4.svg"
                  alt="partners"
                />
              </a>
            </li>
            <li>
              <a href="javascript:void(0);">
                <img
                  className="img-fluid"
                  src="assets/img/partners/partners-5.svg"
                  alt="partners"
                />
              </a>
            </li>
            <li>
              <a href="javascript:void(0);">
                <img
                  className="img-fluid"
                  src="assets/img/partners/partners-6.svg"
                  alt="partners"
                />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </section> */}
   
    <div className="mouse-cursor cursor-outer" />
    <div className="mouse-cursor cursor-inner" />
  </div>
  <div className="progress-wrap active-progress">
    <svg
      className="progress-circle svg-content"
      width="100%"
      height="100%"
      viewBox="-1 -1 102 102"
    >
      <path
        d="M50,1 a49,49 0 0,1 0,98 a49,49 0 0,1 0,-98"
        style={{
          transition: "stroke-dashoffset 10ms linear 0s",
          strokeDasharray: "307.919px, 307.919px",
          strokeDashoffset: "228.265px"
        }}
      ></path>
    </svg>
  </div>
  {/* Mirrored from doccure.dreamstechnologies.com/html/template/index.html by HTTrack Website Copier/3.x [XR&CO'2014], Tue, 16 Apr 2024 16:40:33 GMT */}
</>

  )
}
