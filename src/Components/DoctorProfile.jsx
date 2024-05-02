import axios from "axios";
import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function DoctorProfile() {

  const [doctorInfo, setDoctorInfo] = useState({});
  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [gender, setGender] = useState("");
  const [dob, setDOB] = useState("");
  const [fees, setFees] = useState("");
  const [aboutMe, setAboutMe] = useState("");
  const [clinicName, setClinicName] = useState("");
  const [clinicAddress, setClinicAddress] = useState("");
  const [address, setAddress] = useState("");
  const [city, setCity] = useState("");
  const [state, setState] = useState("");
  const [country, setCountry] = useState("");
  const [postalCode, setPostalCode] = useState("");
  const [specialization, setSpecialization] = useState("");
  const [yearOfExperience, setYearOfExperience] = useState("");
  const [education, setEducation] = useState([]);
  const [awardsNAchievements, setAwardsNAchievements] = useState([
    { awards: "", year: "" },
  ]);
  const [licenceNumber,setLicenceNumber] = useState("");
  const [yearLicenceNumber,setYearLicenceNumber] = useState("");



  const [fileName, setFileName] = useState("");
  const [filePreview, setFilePreview] = useState("");

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      setFileName(file.name);

      const reader = new FileReader();
      reader.onloadend = () => {
        setFilePreview(reader.result);
      };
      reader.readAsDataURL(file);
    } else {
      setFileName("");
      setFilePreview("");
    }
  };

  const handleInputChange = (index, event) => {
    const { name, value } = event.target;
    const list = [...education];
    list[index][name] = value;
    setEducation(list);
    const newExperiences = [...experiences];
    newExperiences[index][name] = value;
    setExperiences(newExperiences);
    const updatedAwards = [...awards];
    updatedAwards[index][name] = value;
    setAwards(updatedAwards);
    const updatedMemberships = [...memberships];
    updatedMemberships[index].name = value;
    setMemberships(updatedMemberships);
  };

  const handleAddEducation = () => {
    setEducation([...education, { degree: "", institute: "", year: "" }]);
  };

  const handleRemoveEducation = (index) => {
    const list = [...education];
    list.splice(index, 1);
    setEducation(list);
  };
  // State to manage multiple experience entries
  const [experiences, setExperiences] = useState([
    { id: 1, hospitalName: "", from: "", to: "", designation: "" },
  ]);

  // Function to add a new experience entry
  const handleAddExperience = () => {
    const newId =
      experiences.length > 0 ? experiences[experiences.length - 1].id + 1 : 1;
    setExperiences([
      ...experiences,
      { id: newId, hospitalName: "", from: "", to: "", designation: "" },
    ]);
  };

  // Function to remove an experience entry
  const handleRemoveExperience = (index) => {
    const newExperiences = experiences.filter((_, i) => i !== index);
    setExperiences(newExperiences);
  };

  const [awards, setAwards] = useState([{ name: "", year: "" }]);

  const handleAddAward = () => {
    setAwards([...awards, { name: "", year: "" }]);
  };

  const handleRemoveAward = (index) => {
    const updatedAwards = awards.filter((award, i) => i !== index);
    setAwards(updatedAwards);
  };

  const [memberships, setMemberships] = useState([{ name: "" }]);

  const handleAddMembership = () => {
    setMemberships([...memberships, { name: "" }]);
  };

  const handleRemoveMembership = (index) => {
    if (index !== 0) {
      const updatedMemberships = [...memberships];
      updatedMemberships.splice(index, 1);
      setMemberships(updatedMemberships);
    }
  };

  const getDocInfo = async() =>{

    const isAuthenticated = localStorage.getItem("token");
    const docInfo = JSON.parse(localStorage.getItem('docInfo'));
    const userId = docInfo.userId._id;
    try {
      const response = await axios.get(
        `https://healthbackend-3xh2.onrender.com/doctor/${userId}`,{
          headers:{
            Authorization:isAuthenticated,
          },
        }
      );

      const result = response.data.result.doctor;
      console.log(result)
      setDoctorInfo(result);

      
  setUserName(docInfo.userId?.name || '')
  setEmail(docInfo.userId?.email || '')
  setPhone(docInfo.userId?.mobileNumber || '')
  setGender(result?.gender || '')
  setEducation(result.educationDetails || '')
  // setFees()
  // setAboutMe()
  // setClinicName()
  // setClinicAddress()
  // setAddress()
  // setCity()
  // setCountry()
  //  setPostalCode()
  // setSpecialization()
  // setYearOfExperience()
  setDOB(result?.dob || ''); 
  setFees(result?.fees || ''); 
  setAboutMe(result?.aboutMe || ''); 
    setClinicName(result?.clinicName || '');
    setClinicAddress(result?.clinicAddress || '');
    setAddress(result?.addressLine1 || ''); 
    setCity(result?.city || '');
    setCountry(result?.contry || ''); 
    setPostalCode(result?.zip || ''); 
    setSpecialization(result?.specialization || '');
    setYearOfExperience(result?.yearOfExperience || '');

      
    } catch (error) {
      console.log(error);
    }
  }

  useState (()=>{
   
    getDocInfo();
  },[])

  useState (()=>{
   
    console.log(doctorInfo);
  },[doctorInfo])

  return (
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
                        <Link to="/appointments">
                          <i className="fas fa-calendar-check" />
                          <span>Appointments</span>
                        </Link>
                      </li>
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
                      <li>
                        <Link to="/reviews">
                          <i className="fas fa-star" />
                          <span>Reviews</span>
                        </Link>
                      </li>
                      <li className="active">
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
              <div className="card">
                <div className="card-body">
                  <h4 className="card-title">Basic Information</h4>
                  <div className="row">
                    <div className="col-md-12">
                      <div className="mb-3">
                        <div className="change-avatar">
                          <div className="profile-img">
                            <img
                              src="assets/img/doctors/doctor-thumb-02.jpg"
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
                    <div className="col-md-6">
                      <div className="mb-3">
                        <label className="mb-2">
                          Username <span className="text-danger">*</span>
                        </label>
                        <input
                          type="text"
                          onChange={(e) => setUserName(e.target.value)}
                          value={userName}
                          className="form-control"
                          readOnly=""
                        />
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="mb-3">
                        <label className="mb-2">
                          Email <span className="text-danger">*</span>
                        </label>
                        <input
                          type="email"
                          onChange={(e) => setEmail(e.target.value)}
                          value={email}
                          className="form-control"
                          readOnly=""
                        />
                      </div>
                    </div>

                    <div className="col-md-6">
                      <div className="mb-3">
                        <label className="mb-2">
                          Phone Number<span className="text-danger"> *</span>
                        </label>
                        <input type="text"
                        onChange={(e) => setPhone(e.target.value)}
                        value={`+91 ${phone}`}
                        className="form-control" />
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="mb-3">
                        <label className="mb-2">
                          Gender<span className="text-danger"> *</span>
                        </label>
                        <select
                        onChange={(e) => setGender(e.target.value)}
                        value={gender}
                        
                        className="form-select form-control">
                          {console.log(gender)}
                          <option>Select</option>
                          <option>Male</option>
                          <option>Female</option>
                        </select>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="mb-0">
                        <label className="mb-2">
                          Date of Birth<span className="text-danger"> *</span>
                        </label>
                        <input type="text"
                        onChange={(e) => setDOB(e.target.value)}
                        value={new Date(dob).toLocaleDateString("en-US")}
                        className="form-control" />
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="mb-0">
                        <label className="mb-2">
                          Fees<span className="text-danger"> *</span>
                        </label>
                        <input type="number"
                        onChange={(e) => setFees(e.target.value)}
                        value={fees}
                        className="form-control" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="card">
                <div className="card-body">
                  <h4 className="card-title">About Me</h4>
                  <div className="mb-0">
                    <label className="mb-2">Biography</label>
                    <textarea
                      className="form-control"
                      onChange={(e) => setAboutMe(e.target.value)}
                      value={aboutMe}
                      rows={5}
                      defaultValue={""}
                    />
                  </div>
                </div>
              </div>
              <div className="card">
                <div className="card-body">
                  <h4 className="card-title">Clinic Info</h4>
                  <div className="row">
                    <div className="col-md-6">
                      <div className="mb-3">
                        <label className="mb-2">Clinic Name</label>
                        <input type="text"
                        onChange={(e) => setClinicName(e.target.value)}
                        value={clinicName}
                        className="form-control" />
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="mb-3">
                        <label className="mb-2">Clinic Address</label>
                        <input type="text"
                        onChange={(e) => setClinicAddress(e.target.value)}
                        value={clinicAddress}
                        className="form-control" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="card ">
                <div className="card-body">
                  <h4 className="card-title">Address</h4>
                  <div className="row">
                    <div className="col-md-6">
                      <div className="mb-3">
                        <label className="mb-2">
                          Address Line 1<span className="text-danger"> *</span>
                        </label>
                        <input type="text"
                        onChange={(e) => setAddress(e.target.value)}
                        value={address}
                        className="form-control" />
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="mb-3">
                        <label className="control-label">Address Line 2</label>
                        <input type="text" className="form-control" />
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="mb-3">
                        <label className="control-label">
                          City<span className="text-danger"> *</span>
                        </label>
                        <input type="text"
                        onChange={(e) => setCity(e.target.value)}
                        value={city}
                        className="form-control" />
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="mb-3">
                        <label className="control-label">
                          State / Province
                          <span className="text-danger"> *</span>
                        </label>
                        <input type="text"
                        onChange={(e) => setState(e.target.value)}
                        value={state}
                        className="form-control" />
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="mb-3">
                        <label className="control-label">
                          Country<span className="text-danger"> *</span>
                        </label>
                        <input type="text"
                        onChange={(e) => setCountry(e.target.value)}
                        value={country}
                        className="form-control" />
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="mb-3">
                        <label className="control-label">
                          Postal Code<span className="text-danger"> *</span>
                        </label>
                        <input type="text"
                        onChange={(e) => setPostalCode(e.target.value)}
                        value={postalCode}
                        className="form-control" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="card services-card">
                <div className="card-body">
                  <h4 className="card-title">Specialization</h4>

                  <div className="mb-0">
                    <input
                      className="input-tags form-control"
                      type="text"
                      data-role="tagsinput"
                      placeholder="Enter Specialization"
                      name="specialist"
                      id="specialist"
                      onChange={(e) => setSpecialization(e.target.value)}
                      value={specialization}
                    />
                  </div>
                </div>
              </div>
              <div className="card">
                <div className="card-body">
                  <h4 className="card-title">Education</h4>
                  {education.map((edu, index) => (
                    <div className="education-info" key={index}>
                      <div className="row education-cont">
                        <div className="col-12 col-md-10 col-lg-11">
                          <div className="row">
                            <div className="col-12 col-md-6 col-lg-4">
                              <div className="mb-3">
                                <label className="mb-2">
                                  Qualification<span className="text-danger"> *</span>
                                </label>
                                <input
                                  type="text"
                                  className="form-control"
                                  name="degree"
                                  value={edu.qualification}
                                  onChange={(e) => handleInputChange(index, e)}
                                />
                              </div>
                            </div>
                            <div className="col-12 col-md-6 col-lg-4">
                              <div className="mb-3">
                                <label className="mb-2">
                                  College/Institute
                                  <span className="text-danger"> *</span>
                                </label>
                                <input
                                  type="text"
                                  className="form-control"
                                  name="institute"
                                  value={edu.collegeName}
                                  onChange={(e) => handleInputChange(index, e)}
                                />
                              </div>
                            </div>
                            <div className="col-12 col-md-6 col-lg-4">
                              <div className="mb-3">
                                <label className="mb-2">
                                  Year of Completion
                                  <span className="text-danger"> *</span>
                                </label>
                                <input
                                  type="text"
                                  className="form-control"
                                  name="year"
                                  value={edu.yearOfCompletion}
                                  onChange={(e) => handleInputChange(index, e)}
                                />
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      {index !== 0 && ( // Condition to render the Remove button only for slots after the first one
                        <div className="remove-education">
                          <a onClick={() => handleRemoveEducation(index)}>
                            <i className="fa fa-minus-circle" /> Remove
                          </a>
                        </div>
                      )}
                    </div>
                  ))}
                  <div className="add-more mt-2">
                    <a className="add-education" onClick={handleAddEducation}>
                      <i className="fa fa-plus-circle" /> Add More
                    </a>
                  </div>
                </div>
              </div>

              <div className="card">
                <div className="card-body">
                  <h4 className="card-title">Experience</h4>
                  {/* {experiences.map((experience, index) => ( */}
                    <div className="experience-info" >
                      <div className="row experience-cont">
                        <div className="col-12 col-md-10 col-lg-11">
                          <div className="row">
                            <div className="col-12 col-md-6 col-lg-4">
                              <div className="mb-3">
                                <label className="mb-2">
                                  Years of Experience
                                  <span className="text-danger"> *</span>
                                </label>
                                <input
                                  type="text"
                                  className="form-control"
                                  name="hospitalName"
                                  value={yearOfExperience}
                                  onChange={(e) => setYearOfExperience(e.target.value)}
                                  // onChange={(event) =>
                                  //   handleInputChange(index, event)
                                  // }
                                />
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  {/* ))} */}
                </div>
              </div>

              <div className="card">
                <div className="card-body">
                  <h4 className="card-title">Awards & Achievements</h4>
                  {awards.map((award, index) => (
                    <div key={index} className="awards-info">
                      <div className="row awards-cont">
                        <div className="col-12 col-md-5">
                          <div className="mb-3">
                            <label className="mb-2">Awards</label>
                            <input
                              type="text"
                              className="form-control"
                              name="name"
                              value={award.name}
                              onChange={(event) =>
                                handleInputChange(index, event)
                              }
                            />
                          </div>
                        </div>
                        <div className="col-12 col-md-5">
                          <div className="mb-3">
                            <label className="mb-2">Year</label>
                            <input
                              type="text"
                              className="form-control"
                              name="year"
                              value={award.year}
                              onChange={(event) =>
                                handleInputChange(index, event)
                              }
                            />
                          </div>
                        </div>
                      </div>
                      {index !== 0 && (
                        <div className="row">
                          <div className="col-12">
                            <div className="mb-3">
                              <a onClick={() => handleRemoveAward(index)}>
                                <i className="fa fa-minus-circle" /> Remove
                              </a>
                            </div>
                          </div>
                        </div>
                      )}
                    </div>
                  ))}
                  <div className="add-more">
                    <a
                      href="javascript:void(0);"
                      className="add-experience"
                      onClick={handleAddAward}>
                      <i className="fa fa-plus-circle" /> Add More
                    </a>
                  </div>
                </div>
              </div>

              <div className="card">
                <div className="card-body">
                  <h4 className="card-title">Licence </h4>
                  <div className="registrations-info">
                    <div className="row reg-cont">
                      <div className="col-12 col-md-5">
                        <div className="mb-3">
                          <label className="mb-2">
                            Licence number
                            <span className="text-danger"> *</span>
                          </label>
                          <input type="text"
                          onChange={(e) => setLicenceNumber(e.target.value)}
                          value={licenceNumber}
                          className="form-control" />
                        </div>
                      </div>
                      <div className="col-12 col-md-5">
                        <div className="mb-3">
                          <label className="mb-2">
                            Year of issue<span className="text-danger"> *</span>
                          </label>
                          <input type="text" 
                          onChange={(e) => setYearLicenceNumber(e.target.value)}
                          value={yearLicenceNumber}
                          className="form-control" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="card">
                <div className="card-body">
                  <h4 className="card-title">
                    Certificate<span className="text-danger"> *</span>
                  </h4>
                  <div className="row">
                    <div className="col-lg-12">
                      <div className="mb-3">
                        <div className="relative-form">
                          <label htmlFor="certificateUpload">
                            Upload Certificate Here
                          </label>
                          <div className="relative-file-upload">
                            <input
                              type="file"
                              id="certificateUpload"
                              onChange={handleFileChange}
                              accept=".pdf, image/*"
                            />
                            <span>
                              {fileName
                                ? `Selected File: ${fileName}`
                                : "Choose File"}
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  {filePreview && (
                    <div>
                      <h5>Preview</h5>
                      {fileName.toLowerCase().endsWith(".pdf") ? (
                        <embed
                          src={filePreview}
                          type="application/pdf"
                          width="100%"
                          height="500px"
                        />
                      ) : (
                        <img
                          src={filePreview}
                          alt="Preview"
                          style={{ maxWidth: "100%" }}
                        />
                      )}
                    </div>
                  )}
                </div>
              </div>

              <div className="submit-section submit-btn-bottom">
                <button type="submit" className="btn btn-primary prime-btn">
                  Save Changes
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
