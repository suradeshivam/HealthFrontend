import React, { useEffect, useState } from 'react'
import axios from 'axios';
import FilterDisplay from '../patientfolder/FilterDisplay'

export default function Search2() {
  const [feeRange, setFeeRange] = useState([1500, 5000]); // Initial fee range
  
  const [allDoctor, setAllDoctor] = useState([]);
  const [selectedSpecialist, setSelectedSpecialist] = useState('');

  // Soring logic

  const [sortOrder, setSortOrder] = useState('');

  const handleSortChange = (e) => {
    setSortOrder(e.target.value);
  };

  // const sortedDoctors = [...pageDoctor].sort((a, b) => {
  //   if (sortOrder === 'ascending') {
  //     return a.userId.name.localeCompare(b.userId.name);
  //   } else if (sortOrder === 'descending') {
  //     return b.userId.name.localeCompare(a.userId.name);
  //   }
  //   return 0;
  // });

  // Function to handle change in fee range
  const handleFeeChange = (event) => {
    setFeeRange([parseInt(event.target.value), feeRange[1]]);
  };

  const data1 = {
    specialists: [
      { id: 1, name: "Cardiologist" },
      { id: 2, name: "Dermatologist" },
      { id: 3, name: "Heart specialists" },
      ,
      { id: 4, name: "Gastroenterologist" },
      { id: 5, name: "Hematologist" },
      { id: 6, name: "Neurologist" },
      { id: 7, name: "Oncologist" },
      { id: 8, name: "Ophthalmologist" },
      { id: 9, name: "Orthopedic Surgeon" },
      { id: 10, name: "Pediatrician" },
      { id: 11, name: "Plastic Surgeon" },
      { id: 12, name: "Psychiatrist" },
      { id: 13, name: "Radiologist" },
      { id: 14, name: "Rheumatologist" },
      { id: 15, name: "Cancer Specialist" },
      { id: 16, name: "Anesthesiologist" },
      { id: 17, name: "Gynecologist" },
      { id: 18, name: "Otolaryngologist (ENT Specialist)" },
      { id: 19, name: "Pathologist" },
      { id: 20, name: "Pulmonologist" },
      { id: 21, name: "Dentist" },
      { id: 22, name: "Cancer Specialist" },
    ],
  };
 
  const [doctors, setDoctors] = useState(
    [
      {
        "id": 1,
        "name": "Dr.Suresh Joshi",
        "image": "assets/img/doctors/doctor-13.jpg",
        "speciality": "MBBS, Dentist",
        "location": "Andheri West - Mumbai, India",
        "experience": "20 Years of Experience",
        "availability": "Available Today",
        "rating": 4.5,
        "reviews": 35,
        "fee": 1500
      },
      {
        "id": 2,
        "name": "Dr. Abhijit Dey",
        "image": "assets/img/doctors/doctor-14.jpg",
        "speciality": "BDS, MDS - Oral & Maxillofacial Surgery",
        "location": "Andheri West - Mumbai, India",
        "experience": "15 Years of Experience",
        "availability": "Available Tomorrow",
        "rating": 4.3,
        "reviews": 22,
        "fee": 2800
      },
      {
        "id": 3,
        "name": "Dr. Sofia Brient",
        "image": "assets/img/doctors/doctor-15.jpg",
        "speciality": "MBBS, Dentist",
        "location": "Andheri West - Mumbai, India",
        "experience": "20 Years of Experience",
        "availability": "Available Today",
        "rating": 4.5,
        "reviews": 35,
        "fee": 3300
      },
      {
        "id": 4,
        "name": "Dr. Johny Rita",
        "image": "assets/img/doctors/doctor-16.jpg",
        "speciality": "MBBS, Dentist",
        "location": "Andheri West - Mumbai, India",
        "experience": "20 Years of Experience",
        "availability": "Available Today",
        "rating": 4.5,
        "reviews": 35,
        "fee": 1000
      },
      {
        "id": 5,
        "name": "Dr. Deborah Angel",
        "image": "assets/img/doctors/doctor-17.jpg",
        "speciality": "MBBS, Dentist",
        "location": "Andheri West - Mumbai, India",
        "experience": "20 Years of Experience",
        "availability": "Available Today",
        "rating": 4.5,
        "reviews": 35,
        "fee": 500
      }
    ]
);
const filteredDoctors = doctors.filter(
  (doctor) => doctor.fee <= feeRange[0] && doctor.fee <= feeRange[1]
);


const handleSpecialistChange = (e) => {
  setSelectedSpecialist(e.target.value);
};



const getAllDoctors = async () => {
  const isAuthenticated = localStorage.getItem("token");
  try {
    const response = await axios.get("https://healthbackend-3xh2.onrender.com/patient/search", {
      headers: {
        isvalidrequest: "twinsistech",
        authorization: isAuthenticated,
      },
    });

    console.log(response);
    // setDocFilter(response.data.result);
    setAllDoctor(response.data.result);

    // handleSearchFilter(response.data.result);
    // setFilterDoctor(response.data.result);
  } catch (error) {
    console.log(error);
  }
};


useEffect(() => {
  getAllDoctors();
}, []);


  return (
    <>
  
  
  <title>Twinsdoc</title>
  <div className="main-wrapper search-page">
    <div className="breadcrumb-bar-two">
      <div className="container">
        <div className="row align-items-center inner-banner">
          <div className="col-md-12 col-12 text-center">
            <h2 className="breadcrumb-title">Search Physicians</h2>
            <nav aria-label="breadcrumb" className="page-breadcrumb">
              <ol className="breadcrumb">
                <li className="breadcrumb-item">
                  <a href="index.html">Home</a>
                </li>
                <li className="breadcrumb-item" aria-current="page">
                  Search Physicians
                </li>
              </ol>
            </nav>
          </div>
        </div>
      </div>
    </div>

    {/* Filters */}
    <div className="doctor-content content">
      <div className="container">
        <div className="row">
          <div className="col-xl-12 col-lg-12 map-view">
            <div className="row">
              <div className="col-lg-3  theiaStickySidebar">
                <div className="filter-contents">
                  <div className="filter-header">
                    <h4 className="filter-title">Filter</h4>
                  </div>
                  <div className="filter-details">
                    <div className="filter-grid">
                      <h4>
                        <a href="#collapseone" data-bs-toggle="collapse">
                          Gender
                        </a>
                      </h4>
                      <div id="collapseone" className="collapse show">
                        <div className="filter-collapse">
                          <ul>
                            <li>
                              <label className="custom_check d-inline-flex">
                                <input type="checkbox" name="gender" />
                                <span className="checkmark" />
                                Male 
                              </label>
                            </li>
                            <li>
                              <label className="custom_check d-inline-flex">
                                <input type="checkbox" name="gender" />
                                <span className="checkmark" />
                                Female
                              </label>
                            </li>
                            <li>
                              <label className="custom_check d-inline-flex">
                                <input type="checkbox" name="gender" />
                                <span className="checkmark" />
                                Other
                              </label>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                    <div className="filter-grid">
                      <h4>
                        <a href="#collapsetwo" data-bs-toggle="collapse">
                          Availability
                        </a>
                      </h4>
                      <div id="collapsetwo" className="collapse show">
                        <div className="filter-collapse">
                          <ul>
                            <li>
                              <label className="custom_check d-inline-flex">
                                <input type="checkbox" name="availability" />
                                <span className="checkmark" />
                                Available Today
                              </label>
                            </li>
                            <li>
                              <label className="custom_check d-inline-flex">
                                <input type="checkbox" name="availability" />
                                <span className="checkmark" />
                                Available Tomorrow
                              </label>
                            </li>
                            <li>
                              <label className="custom_check d-inline-flex">
                                <input type="checkbox" name="availability" />
                                <span className="checkmark" />
                                Available for 7 days
                              </label>
                            </li>
                         
                          </ul>
                        </div>
                      </div>
                    </div>
                    <div className="filter-grid">
                      <h4>
                        <a href="#collapsethree" data-bs-toggle="collapse">
                          Consultation Fee
                        </a>
                      </h4>
                      <div id="collapsethree" className="collapse show">
                        <div className="filter-collapse">
                          <div className="filter-content filter-content-slider">
                            
                            <div className="slider-wrapper" >
                              <div id="price-range" />
                              <input type="range"
                                min="0"
                                max="5000"
                                step="100"
                                value={feeRange[0]}
                                onChange={handleFeeChange}
                                style={{
                                  width: "100%", 
                                  height: "10px", 
                                  borderRadius: "5px", 
                                  background: "#E9ECF1", 
                                  outline: "none",
                                  opacity: "0.7", 
                                  transition: "opacity 0.2s",
                                   
                                  ":hover": {
                                      opacity: "1", 
                                  }
                              }}/>
                            </div>
                            <div className="price-wrapper">
                              <h6>
                                Price :
                                <span>
                                   RS{feeRange[0]} <span id="pricerangemin" />
                                  - {feeRange[1]} RS<span id="pricerangemax" />
                                </span>
                              </h6>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  
                    <div className="filter-grid">
                      <h4>
                        <a href="#collapsefive" data-bs-toggle="collapse">
                          Experience
                        </a>
                      </h4>
                      <div id="collapsefive" className=" collapse show">
                        <div className="filter-collapse">
                          <ul>
                            <li>
                              <label className="custom_check d-inline-flex">
                                <input type="checkbox" name="experience" />
                                <span className="checkmark" />
                                1-5 Years
                              </label>
                            </li>
                            <li>
                              <label className="custom_check d-inline-flex">
                                <input type="checkbox" name="experience" />
                                <span className="checkmark" />
                                5+ Years
                              </label>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                    
                    <div className="filter-grid">
                      <h4>
                        <a href="#collapseseven" data-bs-toggle="collapse">
                          By Rating
                        </a>
                      </h4>
                      <div id="collapseseven" className="collapse show">
                        <div className="filter-collapse">
                          <ul>
                            <li>
                              <div className="custom_check rating_custom_check d-inline-flex">
                                <input type="checkbox" name="online" />
                                <span className="checkmark" />
                                <div className="rating">
                                  <i className="fas fa-star filled" />
                                  <i className="fas fa-star filled" />
                                  <i className="fas fa-star filled" />
                                  <i className="fas fa-star filled" />
                                  <i className="fas fa-star filled" />
                                  <span className="rating-count">(40)</span>
                                </div>
                              </div>
                            </li>
                            <li>
                              <div className="custom_check rating_custom_check d-inline-flex">
                                <input type="checkbox" name="online" />
                                <span className="checkmark" />
                                <div className="rating">
                                  <i className="fas fa-star filled" />
                                  <i className="fas fa-star filled" />
                                  <i className="fas fa-star filled" />
                                  <i className="fas fa-star filled" />
                                  <i className="fas fa-star" />
                                  <span className="rating-count">(35)</span>
                                </div>
                              </div>
                            </li>
                            <li>
                              <div className="custom_check rating_custom_check d-inline-flex">
                                <input type="checkbox" name="online" />
                                <span className="checkmark" />
                                <div className="rating">
                                  <i className="fas fa-star filled" />
                                  <i className="fas fa-star filled" />
                                  <i className="fas fa-star filled" />
                                  <i className="fas fa-star" />
                                  <i className="fas fa-star" />
                                  <span className="rating-count">(20)</span>
                                </div>
                              </div>
                            </li>
                            <li>
                              <div className="custom_check rating_custom_check d-inline-flex">
                                <input type="checkbox" name="online" />
                                <span className="checkmark" />
                                <div className="rating">
                                  <i className="fas fa-star filled" />
                                  <i className="fas fa-star filled" />
                                  <i className="fas fa-star" />
                                  <i className="fas fa-star" />
                                  <i className="fas fa-star" />
                                  <span className="rating-count">(10)</span>
                                </div>
                              </div>
                            </li>
                            <li>
                              <div className="custom_check rating_custom_check d-inline-flex">
                                <input type="checkbox" name="online" />
                                <span className="checkmark" />
                                <div className="rating">
                                  <i className="fas fa-star filled" />
                                  <i className="fas fa-star" />
                                  <i className="fas fa-star" />
                                  <i className="fas fa-star" />
                                  <i className="fas fa-star" />
                                  <span className="rating-count">(05)</span>
                                </div>
                              </div>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                   
                    
                  </div>
                </div>
              </div>

              {/*  */}

              <div className="col-lg-9">
                <div className="doctor-filter-info">
                  <div className="doctor-filter-inner">
                    <div>
                      <div className="doctors-found">
                        <p>
                          <span>100 Physicians found ...</span>
                        </p>
                      </div>
                     
                    </div>
                    <div >
                      <div className='doctor-filter-sort'>
                      <i className="feather-search bficon" />


                      <div className='doctor-filter-select w-100'>
                        <select
                          className="form-control  "
                          value={selectedSpecialist}
                         onChange={handleSpecialistChange}
                          >
                          <option className="doctor-filter-option" value="">Search Physicians, specialists</option>
                          {data1.specialists.map((specialist) => (
                            <option key={specialist.id} value={specialist.name}>
                              {specialist.name}
                            </option>
                          ))}
                        </select>
                      </div>

                      </div>


                      
                    </div>


                    <div className="doctor-filter-option">
                      <div className="doctor-filter-sort">
                        <p>Sort</p>
                        <div className="doctor-filter-select w-100">
                          <select className="form-control" value={sortOrder} onChange={handleSortChange}>
                          <option value="">Select</option>
                                <option value="ascending">
                                  Ascending Order
                                </option>
                                <option value="descending">
                                  Descending Order
                                </option>
                          </select>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Doctor map */}

                <div>
      {/* {filteredDoctors.map((doctor, index) => (
        <div className="card doctor-card" key={index}>
          <div className="card-body">
            <div className="doctor-widget-one">
              <div className="doc-info-left">
                <div className="doctor-img">
                  <a href="doctor-profile.html">
                    <img
                      src={doctor.image}
                      className="img-fluid"
                      alt={doctor.name}
                    />
                  </a>
                </div>
                <div className="doc-info-cont">
                  <h4 className="doc-name">
                    <a href="doctor-profile.html">{doctor.name}</a>
                    <i className="fas fa-circle-check" />
                  </h4>
                  <p className="doc-speciality">{doctor.speciality}</p>
                  <div className="clinic-details">
                    <p className="doc-location">
                      <i className="feather-map-pin" />
                      {doctor.location}
                    </p>
                    <p className="doc-location">
                      <i className="feather-award" /> {doctor.experience}
                    </p>
                  </div>
                </div>
              </div>
              <div className="doc-info-right">
                <div className="clini-infos">
                  <ul>
                    <li>
                      <i className="feather-clock available-icon" />
                      <span className="available-date">
                        {doctor.availability}
                      </span>
                    </li>
                    <div className="reviews-ratings">
                      <p>
                        <span>
                          <i className="fas fa-star" /> {doctor.rating}
                        </span>{" "}
                        ({doctor.reviews} Reviews)
                      </p>
                    </div>
                    <li>
                    ₹ {doctor.fee}{' '}
                      <i className="feather-info available-info-icon" />
                    </li>
                  </ul>
                </div>
                <div className="clinic-booking book-appoint">
                  <Link className="btn btn-primary" to="/doctor-profile">
                    Book Appointment
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))} */}
       <FilterDisplay filterData={allDoctor} />
    </div>
    
               
              </div>
            </div>
          </div>
          <div className="col-xl-3 col-lg-12 theiaStickySidebar map-right">
            <div id="map" className="map-listing" />
          </div>
        </div>
      </div>
    </div>
    
    <div className="mouse-cursor cursor-outer" />
    <div className="mouse-cursor cursor-inner" />
  </div>
  
</>

  )
}
