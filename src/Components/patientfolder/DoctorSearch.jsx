import React, { useState } from "react";
import { Link } from "react-router-dom";
import Pagination from "../Pagination";
import data from "./data";
import FilterDisplay from "./FilterDisplay";

export default function DoctorSearch() {
  //   const [doctors, setDoctors] = useState([
  //     {
  //       id: 1,
  //       name: "Dr. Suresh Joshi",
  //       image: "assets/img/doctors/doctor-13.jpg",
  //       speciality: "MBBS, Dentist",
  //       location: "Andheri West - Mumbai, India",
  //       experience: "20 Years of Experience",
  //       gender: "Male",
  //       availability: "Available Today",
  //       rating: 4.5,
  //       reviews: 35,
  //       fee: 1500,
  //     },
  //     {
  //       id: 2,
  //       name: "Dr. Abhijit Dey",
  //       image: "assets/img/doctors/doctor-14.jpg",
  //       speciality: "BDS, MDS - Oral & Maxillofacial Surgery",
  //       location: "Andheri West - Mumbai, India",
  //       experience: "15 Years of Experience",
  //       gender: "Male",
  //       availability: "Available Tomorrow",
  //       rating: 4.3,
  //       reviews: 22,
  //       fee: 2800,
  //     },
  //     {
  //       id: 3,
  //       name: "Dr. Sofia Brient",
  //       image: "assets/img/doctors/doctor-15.jpg",
  //       speciality: "MBBS, Dentist",
  //       location: "Andheri West - Mumbai, India",
  //       experience: "20 Years of Experience",
  //       gender: "Female",
  //       availability: "Available Today",
  //       rating: 4.5,
  //       reviews: 35,
  //       fee: 1500,
  //     },
  //     {
  //       id: 4,
  //       name: "Dr. Johny Rita",
  //       image: "assets/img/doctors/doctor-16.jpg",
  //       speciality: "MBBS, Dentist",
  //       location: "Andheri West - Mumbai, India",
  //       experience: "20 Years of Experience",
  //       gender: "Male",
  //       availability: "Available Today",
  //       rating: 4.5,
  //       reviews: 35,
  //       fee: 1500,
  //     },
  //     {
  //       id: 5,
  //       name: "Dr. Deborai Angel",
  //       image: "assets/img/doctors/doctor-17.jpg",
  //       speciality: "MBBS, Dentist",
  //       location: "Andheri West - Mumbai, India",
  //       experience: "20 Years of Experience",
  //       gender: "Female",
  //       availability: "Available Today",
  //       rating: 4.5,
  //       reviews: 35,
  //       fee: 1500,
  //     },
  //     {
  //       id: 6,
  //       name: "Dr. Shree Ram",
  //       image: "assets/img/doctors/doctor-17.jpg",
  //       speciality: "MBBS, Dentist",
  //       location: "Andheri West - Mumbai, India",
  //       experience: "20 Years of Experience",
  //       availability: "Available Today",
  //       rating: 4.5,
  //       reviews: 35,
  //       fee: 1500,
  //     },
  //   ]);

  // All Filters Logic

  // Filter state for gender and sorting

  const [doctors, setDoctors] = useState(data);
  const [filterDoctor, setFilterDoctor] = useState(data);
  const [filters, setFilters] = useState({
    selectedGender: "",
    selectedExperience: "",
    sortOrder: "",
    selectedRating: [],
  });

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
    }
  };

  // Function to filter doctors by gender
  const filterDoctors = (filterName, value) => {
    let filteredDoctors = [...doctors];

    // filteredDoctors = filteredDoctors.filter((doctor) => {
    //   // Check if the doctor matches the selected gender
    //   if (filters.selectedExperience || filters.selectedRating) {
    //     return false;
    //   }
      
    // Apply gender filter
      filteredDoctors = doctors.filter((doctor) => doctor.gender === value);
      // return true;
    // });

    // Update filtered doctors state
    setFilterDoctor(filteredDoctors);
  };

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
    let filteredDoctors = [...doctors];
    filteredDoctors = filteredDoctors.filter((doctor) => {
    if (filters.selectedGender && doctor.gender !== filters.selectedGender) {
      return false;
    }

    if (value === "1-5") {
      // filteredDoctors = doctors.filter(
        return doctor.yearOfExperience >= 1 && doctor.yearOfExperience <= 5
      // );
    } else if (value === "5+") {
      // filteredDoctors = doctors.filter((doctor) => doctor.yearOfExperience > 5);
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
      if (filters.selectedGender && doctor.gender !== filters.selectedGender) {
        return false;
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
                <nav aria-label="breadcrumb" className="page-breadcrumb">
                  <ol className="breadcrumb">
                    <li className="breadcrumb-item">
                      <a href="index.html">Home</a>
                    </li>
                    <li className="breadcrumb-item" aria-current="page">
                      Search Doctors
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
                              </ul>
                            </div>
                          </div>
                        </div>
                        {/* <div className="filter-grid">
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
                                <li>
                                  <label className="custom_check d-inline-flex">
                                    <input
                                      type="checkbox"
                                      name="availability"
                                    />
                                    <span className="checkmark" />
                                    Available in Next 7 Days
                                  </label>
                                </li>
                                <li>
                                  <label className="custom_check d-inline-flex">
                                    <input
                                      type="checkbox"
                                      name="availability"
                                    />
                                    <span className="checkmark" />
                                    Available in Next 30 Days
                                  </label>
                                </li>
                              </ul>
                            </div>
                          </div>
                        </div> */}
                        <div className="filter-grid">
                          <h4>
                            <a href="#collapsethree" data-bs-toggle="collapse">
                              Consultation Fee
                            </a>
                          </h4>
                          <div id="collapsethree" className="collapse show">
                            <div className="filter-collapse">
                              <div className="filter-content filter-content-slider">
                                <p>
                                  RS 1000 <span>RS 30000</span>
                                </p>
                                <div className="slider-wrapper">
                                  <div id="price-range" />
                                </div>
                                <div className="price-wrapper">
                                  <h6>
                                    Price :
                                    <span>
                                      RS <span id="pricerangemin" />
                                      - RS
                                      <span id="pricerangemax" />
                                    </span>
                                  </h6>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        {/* <div className="filter-grid">
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
                        </div> */}
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
                                  {/* <div className=" rating_custom_check d-inline-flex"> */}
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
                                  {/* </div> */}
                                </li>
                                <li>
                                  <label className="custom_check rating_custom_check d-inline-flex">
                                    {/* <div className=" rating_custom_check d-inline-flex"> */}
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
                                    {/* </div> */}
                                  </label>
                                </li>
                                <li>
                                  <label className="custom_check rating_custom_check d-inline-flex">
                                    {/* <div className=" rating_custom_check d-inline-flex"> */}
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
                                    {/* </div> */}
                                  </label>
                                </li>
                                <li>
                                  <label className="custom_check rating_custom_check d-inline-flex">
                                    {/* <div className=" rating_custom_check d-inline-flex"> */}
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
                                    {/* </div> */}
                                  </label>
                                </li>
                                <li>
                                  <label className="custom_check rating_custom_check d-inline-flex">
                                    {/* <div className=" rating_custom_check d-inline-flex"> */}
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
                                    {/* </div> */}
                                  </label>
                                </li>
                              </ul>
                            </div>
                          </div>
                        </div>
                        {/* <div className="filter-grid">
                          <h4>
                            <a href="#collapseeight" data-bs-toggle="collapse">
                              Languages
                            </a>
                          </h4>
                          <div id="collapseeight" className="collapse show">
                            <div className="filter-collapse">
                              <ul>
                                <li>
                                  <label className="custom_check d-inline-flex">
                                    <input type="checkbox" name="language" />
                                    <span className="checkmark" />
                                    English
                                  </label>
                                </li>
                                <li>
                                  <label className="custom_check d-inline-flex">
                                    <input type="checkbox" name="language" />
                                    <span className="checkmark" />
                                    Hindi
                                  </label>
                                </li>
                              </ul>
                            </div>
                          </div>
                        </div> */}
                        {/* <div className="filter-btn apply-btn">
                          <div className="row">
                            <div className="col-6">
                              <a
                                href="javascript:void(0);"
                                className="btn btn-primary"
                              >
                                Apply
                              </a>
                            </div>
                            <div className="col-6">
                              <a
                                href="javascript:void(0);"
                                className="btn btn-outline-primary"
                              >
                                Reset
                              </a>
                            </div>
                          </div>
                        </div> */}
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
                          {/* <div className="doctor-filter-availability">
                            <p>Availability</p>
                            <div className="status-toggle status-tog">
                              <input
                                type="checkbox"
                                id="status_6"
                                className="check"
                              />
                              <label htmlFor="status_6" className="checktoggle">
                                checkbox
                              </label>
                            </div>
                          </div> */}
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

                    {/* <div className="row">
                      <div className="col-sm-12">
                        <div className="blog-pagination rev-page">
                          <nav>
                            <ul className="pagination justify-content-center">
                              <li className="page-item disabled">
                                <a
                                  className="page-link page-prev"
                                  href="#"
                                  tabIndex={-1}
                                >
                                  <i className="feather-chevrons-left me-1" />{" "}
                                  PREV
                                </a>
                              </li>
                              <li className="page-item active">
                                <a className="page-link" href="#">
                                  1
                                </a>
                              </li>
                              <li className="page-item">
                                <a className="page-link" href="#">
                                  2
                                </a>
                              </li>
                              <li className="page-item">
                                <a className="page-link" href="#">
                                  ...
                                </a>
                              </li>
                              <li className="page-item">
                                <a className="page-link" href="#">
                                  10
                                </a>
                              </li>
                              <li className="page-item">
                                <a className="page-link page-next" href="#">
                                  NEXT{" "}
                                  <i className="feather-chevrons-right ms-1" />
                                </a>
                              </li>
                            </ul>
                          </nav>
                        </div>
                      </div>
                    </div> */}
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
