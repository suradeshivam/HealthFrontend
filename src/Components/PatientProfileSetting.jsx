import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function Profilesettings() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    dateOfBirth: "",
    age: "",
    bloodGroup: "",
    gender: "",
    mobile: "",
    height: "",
    weight: "",
    allergies: [""],
    previousDisease: [{ disease: "", year: "" }],
    address: "",
    city: "",
    state: "",
    zipCode: "",
    country: "",
  });

  const [errors, setErrors] = useState({
    dateOfBirth: "",
    age: "",
    bloodGroup: "",
    gender: "",
    email: "",
    mobile: "",
    address: "",
    city: "",
    state: "",
    zipCode: "",
    country: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    setErrors((prevErrors) => ({
      ...prevErrors,
      [name]: "",
    }));
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };



  const handleAllergies = () => {
    setFormData((prevState) => ({
      ...prevState,
      allergies: [...prevState.allergies, ""], // Add a new empty allergy field
    }));
  };
  const handleRemoveAllergy = (index) => {
    setFormData((prevState) => ({
      ...prevState,
      allergies: prevState.allergies.filter((_, i) => i !== index), // Remove allergy at specified index
    }));
  };

  const handleChangeAllergies = (index, value) => {
    const updatedAllergies = [...formData.allergies];
    updatedAllergies[index] = value;
    setFormData((prevState) => ({
      ...prevState,
      allergies: updatedAllergies,
    }));
  };

  const handlePreviousDisease = () => {
    setFormData((prevState) => ({
      ...prevState,
      previousDisease: [
        ...prevState.previousDisease,
        { disease: "", year: "" },
      ], // Add a new empty allergy field
    }));
  };

  const handleRemovePreviousDisease = (index) => {
    setFormData((prevState) => ({
      ...prevState,
      previousDisease: prevState.previousDisease.filter((_, i) => i !== index), // Remove allergy at specified index
    }));
  };

  const handleChangePreviousDisease = (e, index, key) => {
    const { value } = e.target;
    const updatedPreviousDisease = [...formData.previousDisease];
    updatedPreviousDisease[index][key] = value; // Update the specified property of the object at the specified index
    setFormData((prevState) => ({
      ...prevState,
      previousDisease: updatedPreviousDisease,
    }));
    
  };

  const getPatientInfo = async () => {

    
    const userInfo = JSON.parse(localStorage.getItem("userInfo"));


    setFormData({
      name: userInfo.name || "",
      email: userInfo.email || "",
      mobile: userInfo.mobileNumber || "",
      dateOfBirth: "",
      age: "",
      bloodGroup: "",
      gender: "",
      height: "",
      weight: "",
      allergies: [""],
      previousDisease: [{ disease: "", year: "" }],
      address: "",
      city: "",
      state: "",
      zipCode: "",
      country: "",
    });
  }

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Add other validation rules
    let errorsObj = {};

    if (!formData.dateOfBirth.trim()) {
      errorsObj.dateOfBirth = "Date of Birth is required";
    }

    if (!formData.age.trim()) {
      errorsObj.age = "Age is required";
    }

    if (!formData.bloodGroup.trim()) {
      errorsObj.bloodGroup = "Blood Group is required";
    }

    if (!formData.gender.trim() || formData.gender === "Select") {
      errorsObj.gender = "Gender is required";
    }

    if (!formData.address.trim()) {
      errorsObj.address = "Address is required";
    }

    if (!formData.city.trim()) {
      errorsObj.city = "City is required";
    }

    if (!formData.state.trim()) {
      errorsObj.state = "State is required";
    }

    if (!formData.zipCode.trim()) {
      errorsObj.zipCode = "Zip Code is required";
    }

    if (!formData.country.trim()) {
      errorsObj.country = "Country is required";
    }

    if (Object.keys(errorsObj).length > 0) {
      setErrors(errorsObj);
      return; // Prevent form submission if there are errors
    }

    setErrors({
      dateOfBirth: "",
      age: "",
      bloodGroup: "",
      gender: "",
      address: "",
      city: "",
      state: "",
      zipCode: "",
      country: "",
      // Add other fields as needed
    });

    console.log(formData);

    const isAuthenticated = localStorage.getItem("token");


    try {

      const user = await axios.post(
        `https://healthbackend-3xh2.onrender.com/patient/create`,
        formData,
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: isAuthenticated,
          },
        }
      );

      console.log(user);
      // localStorage.setItem(
      //   "patientInfo",
      //   JSON.stringify(user.data.result.doctor)
      // );
     
    } catch (error) {
      console.log(error);
    }





  };

  useEffect(() => {
    getPatientInfo();
  }, []);

  return (
    <>
      {/* Mirrored from doccure.dreamstechnologies.com/html/template/profile-settings.html by HTTrack Website Copier/3.x [XR&CO'2014], Tue, 16 Apr 2024 16:46:25 GMT */}
      <meta charSet="utf-8" />
      <title>Doccure</title>
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta
        name="description"
        content="The responsive professional Doccure template offers many features, like scheduling appointments with  top doctors, clinics, and hospitals via voice, video call & chat."
      />
      <meta
        name="keywords"
        content="practo clone, doccure, doctor appointment, Practo clone html template, doctor booking template"
      />
      <meta
        name="author"
        content="Practo Clone HTML Template - Doctor Booking Template"
      />
      <meta
        property="og:url"
        content="https://doccure.dreamstechnologies.com/html/"
      />
      <meta property="og:type" content="website" />
      <meta
        property="og:title"
        content="Doctors Appointment HTML Website Templates | Doccure"
      />
      <meta
        property="og:description"
        content="The responsive professional Doccure template offers many features, like scheduling appointments with  top doctors, clinics, and hospitals via voice, video call & chat."
      />
      <meta property="og:image" content="assets/img/preview-banner.jpg" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta
        property="twitter:domain"
        content="https://doccure.dreamstechnologies.com/html/"
      />
      <meta
        property="twitter:url"
        content="https://doccure.dreamstechnologies.com/html/"
      />
      <meta
        name="twitter:title"
        content="Doctors Appointment HTML Website Templates | Doccure"
      />
      <meta
        name="twitter:description"
        content="The responsive professional Doccure template offers many features, like scheduling appointments with  top doctors, clinics, and hospitals via voice, video call & chat."
      />
      <meta name="twitter:image" content="assets/img/preview-banner.jpg" />
      <link href="assets/img/favicon.png" rel="icon" />
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
        href="assets/css/bootstrap-datetimepicker.min.css"
      />
      <link
        rel="stylesheet"
        href="assets/plugins/select2/css/select2.min.css"
      />
      <link rel="stylesheet" href="assets/css/custom.css" />
      <div className="main-wrapper">
        <div className="breadcrumb-bar-two">
          <div className="container">
            <div className="row align-items-center inner-banner">
              <div className="col-md-12 col-12 text-center">
                <h2 className="breadcrumb-title">Profile Settings</h2>
                <nav aria-label="breadcrumb" className="page-breadcrumb">
                  <ol className="breadcrumb">
                    <li className="breadcrumb-item">
                      <a href="index.html">Home</a>
                    </li>
                    <li className="breadcrumb-item" aria-current="page">
                      Profile Settings
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
                          src="assets/img/patients/patient.jpg"
                          alt="User Image"
                        />
                      </a>
                      <div className="profile-det-info">
                        <h3>Richard Wilson</h3>
                        <div className="patient-details">
                          <h5>
                            <i className="fas fa-birthday-cake" /> 24 Jul 1983,
                            38 years
                          </h5>
                          <h5 className="mb-0">
                            <i className="fas fa-map-marker-alt" /> Newyork, USA
                          </h5>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="dashboard-widget">
                    <nav className="dashboard-menu">
                      <ul>
                        <li className="active">
                          <Link to="/user">
                            <i className="fas fa-columns" />
                            <span>Dashboard</span>
                          </Link>
                        </li>

                        <li>
                          <Link to="/orders">
                            <i className="fas fa-list-alt" />
                            <span>Orders</span>
                            <small className="unread-msg">7</small>
                          </Link>
                        </li>

                        <li>
                          <Link to="/patientprofile">
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
                <div className="card">
                  <div className="card-body">
                    <form onSubmit={handleSubmit}>
                      <h4 className="card-title">Basic Information</h4>
                      <div className="row">
                        <div className="col-12 col-md-12">
                          <div className="mb-3">
                            <div className="change-avatar">
                              <div className="profile-img">
                                <img
                                  src="assets/img/patients/patient.jpg"
                                  alt="User Image"
                                />
                              </div>
                              <div className="upload-img">
                                <div className="change-photo-btn">
                                  <span>
                                    <i className="fa fa-upload" /> Upload Photo
                                  </span>
                                  <input type="file" className="upload" />
                                </div>
                                <small className="form-text text-muted">
                                  Allowed JPG, GIF or PNG. Max size of 2MB
                                </small>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="col-12 col-md-6">
                          <div className="mb-3">
                            <label className="mb-2">
                              Name<span className="text-danger"> *</span>
                            </label>
                            <input
                              type="text"
                              className="form-control"
                              name="name"
                              value={formData.name}
                              onChange={handleChange}
                            />
                          </div>
                        </div>

                        <div className="col-12 col-md-6">
                          <div className="mb-3">
                            <label className="mb-2">
                              Mobile No. <span className="text-danger"> *</span>
                            </label>
                            <input
                              type="text"
                              className="form-control"
                              name="mobile"
                              value={formData.mobile}
                              onChange={handleChange}
                            />
                          </div>
                        </div>
                        
                        {/* <div className="col-12 col-md-6">
                          <div className="mb-3">
                            <label className="mb-2">
                              Last Name <span className="text-danger"> *</span>
                            </label>
                            <input
                              type="text"
                              className="form-control"
                              name="lastName"
                              value={formData.lastName}
                              onChange={handleChange}
                            />
                          </div>
                        </div> */}
                        <div className="col-12 col-md-6">
                          <div className="mb-3">
                            <label className="mb-2">
                              Date of Birth{" "}
                              <span className="text-danger"> *</span>
                            </label>
                            <div>
                              <input
                                type="date"
                                className="form-control datetimepicker"
                                name="dateOfBirth"
                                value={formData.dateOfBirth}
                                onChange={handleChange}
                              />
                              {errors.dateOfBirth && (
                                <span
                                  style={{ color: "red", fontSize: "13px" }}
                                >
                                  {errors.dateOfBirth}
                                </span>
                              )}
                            </div>
                          </div>
                        </div>
                        <div className="col-12 col-md-6">
                          <div className="mb-3">
                            <label className="mb-2">
                              Age <span className="text-danger"> *</span>
                            </label>
                            <input
                              type="text"
                              className="form-control"
                              name="age"
                              value={formData.age}
                              onChange={handleChange}
                            />
                            {errors.age && (
                              <span style={{ color: "red", fontSize: "13px" }}>
                                {errors.age}
                              </span>
                            )}
                          </div>
                        </div>
                        <div className="col-12 col-md-6">
                          <div className="mb-3">
                            <label className="mb-2">
                              Blood Group{" "}
                              <span className="text-danger"> *</span>
                            </label>
                            <select
                              className="form-select form-control"
                              name="bloodGroup"
                              value={formData.bloodGroup}
                              onChange={handleChange}
                            >
                              <option>A-</option>
                              <option>A+</option>
                              <option>B-</option>
                              <option>B+</option>
                              <option>AB-</option>
                              <option>AB+</option>
                              <option>O-</option>
                              <option>O+</option>
                            </select>
                          </div>
                          {errors.bloodGroup && (
                            <span style={{ color: "red", fontSize: "13px" }}>
                              {errors.bloodGroup}
                            </span>
                          )}
                        </div>
                        <div className="col-12 col-md-6">
                          <div className="mb-3">
                            <label className="mb-2">
                              Gender <span className="text-danger"> *</span>
                            </label>
                            <select
                              className="form-select form-control"
                              name="gender"
                              value={formData.gender}
                              onChange={handleChange}
                            >
                              <option>Select</option>
                              <option>Male</option>
                              <option>Female</option>
                              <option>Other</option>
                            </select>
                          </div>
                          {errors.gender && (
                            <span style={{ color: "red", fontSize: "13px" }}>
                              {errors.gender}
                            </span>
                          )}
                        </div>
                        
                        
                        <div className="col-12 col-md-6">
                          <div className="mb-3">
                            <label className="mb-2">Height(ft)</label>
                            <input
                              type="text"
                              className="form-control"
                              name="height"
                              value={formData.height}
                              onChange={handleChange}
                            />
                          </div>
                        </div>
                        <div className="col-12  col-md-6">
                          <div className="mb-3">
                            <label className="mb-2">Weight(kg)</label>
                            <input
                              type="text"
                              className="form-control"
                              name="weight"
                              value={formData.weight}
                              onChange={handleChange}
                            />
                          </div>
                        </div>
                        <div className="col-12 ">
                          <div className="mb-3">
                            <label className="mb-2">
                              Email ID <span className="text-danger"> *</span>
                            </label>
                            <input
                              type="email"
                              className="form-control"
                              name="email"
                              value={formData.email}
                              onChange={handleChange}
                            />
                          </div>
                        </div>


<br/>
                        <div className="col-12 col-md-6">
                          {/* <div style={{ display: 'flex', flexWrap: 'wrap', gap:"4px" }}> */}
                          {formData.allergies.map((allergy, index) => (
                            <div className="mb-3" key={index}>
                              <label className="mb-2">
                                Allergies {index + 1}
                              </label>
                              <input
                                type="text"
                                className="form-control"
                                value={allergy}
                                placeholder="Allergy"
                                onChange={(e) =>
                                  handleChangeAllergies(index, e.target.value)
                                }
                              />
                              {index !== 0 && ( // Condition to render the Remove button only for slots after the first one
                                <div className="remove-education">
                                  <a onClick={() => handleRemoveAllergy(index)}>
                                    <i className="fa fa-minus-circle" /> Remove
                                  </a>
                                </div>
                              )}
                            </div>
                          ))}
                          {/* </div> */}
                          <div className="add-more mt-2">
                            <a
                              className="add-education"
                              onClick={handleAllergies}
                            >
                              <i className="fa fa-plus-circle" /> Add More
                            </a>
                          </div>
                        </div>

                        
                       <div className="col-12 col-md-6">
  {formData.previousDisease.map((diseaseItem, index) => (
    <div className="mb-3 " key={index}>
      <label className="mb-2">Previous Disease {index + 1}</label>
      <div className="d-flex gap-3 "> {/* Use d-flex class to display items in a row */}
        <input
          type="text"
          className="form-control"
          placeholder="Previous Disease"
          value={diseaseItem.disease}
          onChange={(e) => handleChangePreviousDisease(e, index, 'disease')}
        />
        <input
          type="text"
          className="form-control"
          placeholder="Year"
          value={diseaseItem.year}
          onChange={(e) => handleChangePreviousDisease(e, index, 'year')}
        />
            </div>
        {index !== 0 && (
          <div className="remove-education">
            <a onClick={() => handleRemovePreviousDisease(index)}>
              <i className="fa fa-minus-circle" /> Remove
            </a>
          </div>
        )}
    </div>
  ))}
  <div className="add-more mt-2">
    <a className="add-education" onClick={handlePreviousDisease}>
      <i className="fa fa-plus-circle" /> Add More
    </a>
  </div>
</div>


                        
                        <br />
                        <br />
                        <br /> <br />
                        <br />
                        <br />
                        <div className="col-12">
                          <div className="mb-3">
                            <h4 className="card-title">Address</h4>
                            <label className="mb-2">
                              Address <span className="text-danger"> *</span>
                            </label>
                            <input
                              type="text"
                              className="form-control"
                              name="address"
                              value={formData.address}
                              onChange={handleChange}
                            />
                            {errors.address && (
                              <span style={{ color: "red", fontSize: "13px" }}>
                                {errors.address}
                              </span>
                            )}
                          </div>
                        </div>
                        <div className="col-12 col-md-6">
                          <div className="mb-3">
                            <label className="mb-2">
                              City <span className="text-danger"> *</span>
                            </label>
                            <input
                              type="text"
                              className="form-control"
                              name="city"
                              value={formData.city}
                              onChange={handleChange}
                            />
                            {errors.city && (
                              <span style={{ color: "red", fontSize: "13px" }}>
                                {errors.city}
                              </span>
                            )}
                          </div>
                        </div>
                        <div className="col-12 col-md-6">
                          <div className="mb-3">
                            <label className="mb-2">
                              State <span className="text-danger"> *</span>
                            </label>
                            <input
                              type="text"
                              className="form-control"
                              name="state"
                              value={formData.state}
                              onChange={handleChange}
                            />
                            {errors.state && (
                              <span style={{ color: "red", fontSize: "13px" }}>
                                {errors.state}
                              </span>
                            )}
                          </div>
                        </div>
                        <div className="col-12 col-md-6">
                          <div className="mb-3">
                            <label className="mb-2">
                              Zip Code <span className="text-danger"> *</span>
                            </label>
                            <input
                              type="text"
                              className="form-control"
                              name="zipCode"
                              value={formData.zipCode}
                              onChange={handleChange}
                            />
                            {errors.zipCode && (
                              <span style={{ color: "red", fontSize: "13px" }}>
                                {errors.zipCode}
                              </span>
                            )}
                          </div>
                        </div>
                        <div className="col-12 col-md-6">
                          <div className="mb-3">
                            <label className="mb-2">
                              Country <span className="text-danger"> *</span>
                            </label>
                            <input
                              type="text"
                              className="form-control"
                              name="country"
                              value={formData.country}
                              onChange={handleChange}
                            />
                            {errors.country && (
                              <span style={{ color: "red", fontSize: "13px" }}>
                                {errors.country}
                              </span>
                            )}
                          </div>
                        </div>
                      </div>
                      <div className="submit-section">
                        <button
                          type="submit"
                          className="btn btn-primary submit-btn"
                        >
                          Save Changes
                        </button>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Mirrored from doccure.dreamstechnologies.com/html/template/profile-settings.html by HTTrack Website Copier/3.x [XR&CO'2014], Tue, 16 Apr 2024 16:46:25 GMT */}
    </>
  );
}
