import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import Pagination from "../Pagination";
import data from "./data";
import FilterDisplay from "./FilterDisplay";
import axios from "axios";
import { OrderState } from "../../Contexts";

export default function DoctorSearch() {
  
  // All Filters Logic

  // Filter state for gender and sorting

  const {homeDocFilter, setHomeDocFilter,selectedSpecialist,setSelectedSpecialist,selectedLocation, setSelectedLocation } = OrderState();

  // const location = useLocation();
  // const docFilters = location.state?.docFilters || "";
  console.log("1");
  console.log(homeDocFilter);


  const [doctors, setDoctors] = useState(data);
  const [filterDoctor, setFilterDoctor] = useState([]);
  const [filters, setFilters] = useState({
    selectedGender: "",
    selectedExperience: "",
    sortOrder: "",
    selectedRating: [],
  });



  const [docFilter, setDocFilter] = useState("");
  const [allDoctor, setAllDoctor] = useState([]);
  // const [filterDoctor, setfilterDoctor] = useState([]);
  const [feeRange, setFeeRange] = useState([1500, 5000]);

  const handleFeeChange = (event) => {
    
    const newFeeRange = parseInt(event.target.value);
    setFeeRange([newFeeRange, feeRange[1]]);
    filterDoctors(newFeeRange, feeRange[1]);

  };

  const filterDoctors = (minFee, maxFee) => {
    let filteredDoctors = [...doctors];
    filteredDoctors = filteredDoctors.filter(
      (doctor) => doctor.fee >= minFee && doctor.fee <= maxFee
    );
    setFilterDoctor(filteredDoctors);
  };

  // Function to handle filter changes
  const handleFilterChange = (filterName, value) => {
    setFilters({
      ...filters,
      [filterName]: value,
    });
    if (filterName === "selectedGender") {
      filterDoctors(filterName, value);
    } else if (filterName === "sortOrder") {
      sortFilteredDoctors(value);
    } else if (filterName === "selectedExperience") {
      experienceFilter(value);
    } else if (filterName === "selectedRating") {
      selectedRatingFilter(value);
    } else if (filterName === "feeRange") {
      selectedFeeFilter();
    }
  };


  const selectedFeeFilter = () => {
    const filteredDoctors = filterDoctor.filter(
      (doctor) => doctor.fee <= feeRange[0] && doctor.fee <= feeRange[1]
    );

    setFilterDoctor(filteredDoctors);
  }

 

  const sortFilteredDoctors = (value) => {
    const sortedDoctors = [...filterDoctor];

    if (value === "ascending") {
      sortedDoctors.sort((a, b) => a.name.localeCompare(b.name));
    } else if (value === "descending") {
      sortedDoctors.sort((a, b) => b.name.localeCompare(a.name));
    }

    // Update sorted doctors state
    setFilterDoctor(sortedDoctors);
  };

  const experienceFilter = (value) => {
    let filteredDoctors = [...docFilter];
    filteredDoctors = filteredDoctors.filter((doctor) => {
    if (filters.selectedGender && doctor.gender !== filters.selectedGender ) {
      return false;
    }

    if (value === "1-5") {
        return doctor.yearOfExperience >= 1 && doctor.yearOfExperience <= 5
    } else if (value === "5+") {
      return doctor.yearOfExperience > 5;
    }
    return true;
  })

    setFilterDoctor(filteredDoctors);
  };

  const selectedRatingFilter = (value) => {
    let filteredDoctors = [...doctors];
    const rating = parseInt(value);

    filteredDoctors = filteredDoctors.filter((doctor) => {
      if (filters.selectedGender && doctor.gender !== filters.selectedGender ) {
        return false;
      }
      // Check if the doctor matches the selected experience filter
    if (filters.selectedExperience) {
      if (filters.selectedExperience === "1-5") {
        if (
          doctor.yearOfExperience < 1 ||
          doctor.yearOfExperience > 5
        ) {
          return false;
        }
      } else if (filters.selectedExperience === "5+") {
        if (doctor.yearOfExperience <= 5) {
          return false;
        }
      }
    }
        if (Array.isArray(doctor.reviews)) {
            const totalRating = doctor.reviews.reduce((acc, review) => acc + review.rating, 0);
            const averageRating = Math.round(totalRating / doctor.reviews.length) || 0;
            return averageRating === rating; 
        }
        return false; // Return false if reviews is not an array or empty
    });


    setFilterDoctor(filteredDoctors);
  };

  const getAllDoctors = async () => {
    const isAuthenticated = localStorage.getItem("token");
    try {
      const response = await axios.get(
        "https://healthbackend-3xh2.onrender.com/patient/search",
        {
          headers: {
            isvalidrequest: "twinsistech",
            authorization: isAuthenticated,
          },
        }
      );
  
      
      console.log(response);
      // setDocFilter(response.data.result);
      setAllDoctor(response.data.result);

      handleSearchFilter(response.data.result);
      // setFilterDoctor(response.data.result);
    } catch (error) {
      console.log(error);
    }
  };

  const handleSearchFilter = (result) => {
    // Filter doctors based on selected specialist and location
    console.log(allDoctor)
    const filteredDoctors = result?.filter((doctors) => {
      const specialistMatch = selectedSpecialist === '' || doctors.specialization === selectedSpecialist;
      const locationMatch = selectedLocation === '' || doctors.city === selectedLocation;
      return specialistMatch && locationMatch;
    });
    console.log(filteredDoctors);
    setFilterDoctor(filteredDoctors);
  };

  console.log(filterDoctor)

  useEffect ( ()=>{

    getAllDoctors();
  
  },[]);

 
  return (
    <>
      <title>TwinDoc</title>
      <link
        rel="shortcut icon"
        href="assets/img/favicon.png"
        type="image/x-icon"
      />
      <link rel="stylesheet" href="assets/css/bootstrap.min.css" />
      <link
        rel="stylesheet"
        href="assets/plugins/fontawesome/css/fontawesome.min.css"
      />
      <link
        rel="stylesheet"
        href="assets/plugins/fontawesome/css/all.min.css"
      />
      <link rel="stylesheet" href="assets/css/feather.css" />
      <link
        rel="stylesheet"
        href="assets/plugins/select2/css/select2.min.css"
      />
      <link rel="stylesheet" href="assets/plugins/jquery-ui/jquery-ui.css" />
      <link rel="stylesheet" href="assets/css/custom.css" />
      <div className="main-wrapper search-page">
        <header className="header header-custom header-fixed header-one">
          <div className="container"></div>
        </header>
        <div className="breadcrumb-bar-two">
          <div className="container">
            <div className="row align-items-center inner-banner">
              <div className="col-md-12 col-12 text-center">
                <h2 className="breadcrumb-title">Search Doctors</h2>
               
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
                                    <input
                                      type="radio"
                                      name="Male"
                                      checked={
                                        filters.selectedGender === "Male"
                                      }
                                      onChange={() =>
                                        handleFilterChange(
                                          "selectedGender",
                                          "Male"
                                        )
                                      }
                                    />
                                    <span className="checkmark" />
                                    Male
                                  </label>
                                </li>
                                <li>
                                  <label className="custom_check d-inline-flex">
                                    <input
                                      type="radio"
                                      name="Female"
                                      checked={
                                        filters.selectedGender === "Female"
                                      }
                                      onChange={() =>
                                        handleFilterChange(
                                          "selectedGender",
                                          "Female"
                                        )
                                      }
                                    />
                                    <span className="checkmark" />
                                    Female
                                  </label>
                                </li>
                                <li>
                                  <label className="custom_check d-inline-flex">
                                    <input
                                      type="radio"
                                      name="Other"
                                      checked={
                                        filters.selectedGender === "Other"
                                      }
                                      onChange={() =>
                                        handleFilterChange(
                                          "selectedGender",
                                          "Other"
                                        )
                                      }
                                    />
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
                                    <input
                                      type="checkbox"
                                      name="availability"
                                    />
                                    <span className="checkmark" />
                                    Available Today
                                  </label>
                                </li>
                                <li>
                                  <label className="custom_check d-inline-flex">
                                    <input
                                      type="checkbox"
                                      name="availability"
                                    />
                                    <span className="checkmark" />
                                    Available Tomorrow
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
                            <a href="#collapsefour" data-bs-toggle="collapse">
                              Speciality
                            </a>
                          </h4>
                          <div id="collapsefour" className="collapse show">
                            <div className="filter-collapse">
                              <ul>
                                <li>
                                  <label className="custom_check d-inline-flex">
                                    <input type="checkbox" name="speciality" />
                                    <span className="checkmark" />
                                    Urology
                                  </label>
                                </li>
                                <li>
                                  <label className="custom_check d-inline-flex">
                                    <input type="checkbox" name="speciality" />
                                    <span className="checkmark" />
                                    Ophthalmology
                                  </label>
                                </li>
                                <li>
                                  <label className="custom_check d-inline-flex">
                                    <input type="checkbox" name="speciality" />
                                    <span className="checkmark" />
                                    Cardiology
                                  </label>
                                </li>
                              </ul>
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
                                    <input
                                      type="radio"
                                      name="experience"
                                      checked={
                                        filters.selectedExperience === "1-5"
                                      }
                                      onChange={() =>
                                        handleFilterChange(
                                          "selectedExperience",
                                          "1-5"
                                        )
                                      }
                                    />
                                    <span className="checkmark" />
                                    1-5 Years
                                  </label>
                                </li>
                                <li>
                                  <label className="custom_check d-inline-flex">
                                    <input
                                      type="radio"
                                      name="experience"
                                      checked={
                                        filters.selectedExperience === "5+"
                                      }
                                      onChange={() =>
                                        handleFilterChange(
                                          "selectedExperience",
                                          "5+"
                                        )
                                      }
                                    />
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
                                  
                                  <label className="custom_check rating_custom_check d-inline-flex">
                                    <input
                                      type="radio"
                                      name="rating"
                                      checked={filters.selectedRating === "5"}
                                      onChange={() =>
                                        handleFilterChange(
                                          "selectedRating",
                                          "5"
                                        )
                                      }
                                    />
                                    <span className="checkmark" />
                                    <div className="rating">
                                      <i className="fas fa-star filled" />
                                      <i className="fas fa-star filled" />
                                      <i className="fas fa-star filled" />
                                      <i className="fas fa-star filled" />
                                      <i className="fas fa-star filled" />
                                      <span className="rating-count">(40)</span>
                                    </div>
                                  </label>
                                  
                                </li>
                                <li>
                                  <label className="custom_check rating_custom_check d-inline-flex">
                                    
                                    <input
                                      type="radio"
                                      name="rating"
                                      checked={filters.selectedRating === "4"}
                                      onChange={() =>
                                        handleFilterChange(
                                          "selectedRating",
                                          "4"
                                        )
                                      }
                                    />
                                    <span className="checkmark" />
                                    <div className="rating">
                                      <i className="fas fa-star filled" />
                                      <i className="fas fa-star filled" />
                                      <i className="fas fa-star filled" />
                                      <i className="fas fa-star filled" />
                                      <i className="fas fa-star" />
                                      <span className="rating-count">(35)</span>
                                    </div>
                                   
                                  </label>
                                </li>
                                <li>
                                  <label className="custom_check rating_custom_check d-inline-flex">
                                    
                                    <input
                                      type="radio"
                                      name="rating"
                                      checked={filters.selectedRating === "3"}
                                      onChange={() =>
                                        handleFilterChange(
                                          "selectedRating",
                                          "3"
                                        )
                                      }
                                    />
                                    <span className="checkmark" />
                                    <div className="rating">
                                      <i className="fas fa-star filled" />
                                      <i className="fas fa-star filled" />
                                      <i className="fas fa-star filled" />
                                      <i className="fas fa-star" />
                                      <i className="fas fa-star" />
                                      <span className="rating-count">(20)</span>
                                    </div>
                                    
                                  </label>
                                </li>
                                <li>
                                  <label className="custom_check rating_custom_check d-inline-flex">
                                   
                                    <input
                                      type="radio"
                                      name="rating"
                                      checked={filters.selectedRating === "2"}
                                      onChange={() =>
                                        handleFilterChange(
                                          "selectedRating",
                                          "2"
                                        )
                                      }
                                    />
                                    <span className="checkmark" />
                                    <div className="rating">
                                      <i className="fas fa-star filled" />
                                      <i className="fas fa-star filled" />
                                      <i className="fas fa-star" />
                                      <i className="fas fa-star" />
                                      <i className="fas fa-star" />
                                      <span className="rating-count">(10)</span>
                                    </div>
                                    
                                  </label>
                                </li>
                                <li>
                                  <label className="custom_check rating_custom_check d-inline-flex">
                                    
                                    <input
                                      type="radio"
                                      name="rating"
                                      checked={filters.selectedRating === "1"}
                                      onChange={() =>
                                        handleFilterChange(
                                          "selectedRating",
                                          "1"
                                        )
                                      }
                                    />
                                    <span className="checkmark" />
                                    <div className="rating">
                                      <i className="fas fa-star filled" />
                                      <i className="fas fa-star" />
                                      <i className="fas fa-star" />
                                      <i className="fas fa-star" />
                                      <i className="fas fa-star" />
                                      <span className="rating-count">(05)</span>
                                    </div>
                                   
                                  </label>
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
                              <span>100 Doctors found for:</span> Dentist in
                              Andheri West - Mumbai, India{" "}
                            </p>
                          </div>
                                                  </div>
                        <div className="doctor-filter-option">
                          <div className="doctor-filter-sort">
                            <p>Sort</p>
                            <div className="doctor-filter-select w-100">
                              <select
                                className="form-control"
                                onChange={(e) =>
                                  handleFilterChange(
                                    "sortOrder",
                                    e.target.value
                                  )
                                }
                              >
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

                    <FilterDisplay filterData={filterDoctor} />
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
  );
}
