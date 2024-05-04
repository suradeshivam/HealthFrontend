import axios from "axios";
import React, { useEffect, useState } from "react";
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
  const [address1, setAddress1] = useState("");
  const [address2, setAddress2] = useState("");
  const [city, setCity] = useState("");
  const [state, setState] = useState("");
  const [country, setCountry] = useState("");
  const [postalCode, setPostalCode] = useState("");
  const [specialization, setSpecialization] = useState("");
  const [yearOfExperience, setYearOfExperience] = useState("");
  const [education, setEducation] = useState([
    { qualification: "", collegeName: "", yearOfCompletion: "" }
  ]);
  const [awardsNAchievements, setAwardsNAchievements] = useState([
    { awards: "", year: "" },
  ]);
  const [licence, setLicence] = useState([
    { licenseNumber: "", yearOfIssued: "" },
  ]);
  const [awards, setAwards] = useState([{ name: "", year: "" }]);

  const [licenceNumber, setLicenceNumber] = useState("");
  const [yearLicenceNumber, setYearLicenceNumber] = useState("");

  const [fileName, setFileName] = useState("");
  const [filePreview, setFilePreview] = useState("");

  const countWords = (text) => {
    const wordArray = text.trim().split(/\s+/);
    return wordArray.length;
  };

  const handleAboutRemainingChange = (e) => {
    const inputValue = e.target.value;
    if (countWords(inputValue) <= 250) {
      setAboutMe(inputValue); // Update the input if within limit
    }
  };

  // Calculate the remaining words
  const remainingWords = 250 - countWords(aboutMe);

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
    const updatedEducation = [...education];
    
    // Update the specific field of the education object at the given index
    updatedEducation[index] = {
      ...updatedEducation[index],
      [name]: value
    };
  
    // Update the education state with the modified array
    setEducation(updatedEducation);
  
    // Update experiences
    const newExperiences = [...experiences];
    if (!newExperiences[index]) {
      newExperiences[index] = {}; // Initialize if undefined
    }
    newExperiences[index][name] = value;
    setExperiences(newExperiences);
  
 
    // Update memberships
    const updatedMemberships = [...memberships];
    if (!updatedMemberships[index]) {
      updatedMemberships[index] = {}; // Initialize if undefined
    }
    updatedMemberships[index][name] = value;
    setMemberships(updatedMemberships);
  };
  const handleAwardChange = (index, event) => {
    const { name, value } = event.target;
       // Update awards
       const updatedAwards = [...awards];
       if (!updatedAwards[index]) {
         updatedAwards[index] = {}; // Initialize if undefined
       }
       updatedAwards[index][name] = value;
       setAwards(updatedAwards);
     
  
  }
  // console.log(awards)
  const handleAddEducation = () => {
    setEducation([
      ...education,
      { qualification: "", collegeName: "", yearOfCompletion: "" },
    ]);
  
    // Add placeholders to experiences, awards, and memberships
    setExperiences([...experiences, {}]);
    // setAwards([...awards, {}]);
    // setMemberships([...memberships, {}]);
  };

  const handleAddAward = () => {
    setAwards([...awards, { name: "", year: "" }]);
  };
  // console.log(awards)
  const handleRemoveAward = (index) => {
    const updatedAwards = awards.filter((award, i) => i !== index);
    setAwards(updatedAwards);
  };
  
  const handleRemoveEducation = (index) => {
    const updatedEducation = [...education];
    updatedEducation.splice(index, 1);
    setEducation(updatedEducation);
  
    // Remove corresponding entries from experiences, awards, and memberships
    const newExperiences = [...experiences];
    newExperiences.splice(index, 1);
    setExperiences(newExperiences);
  
    const updatedAwards = [...awards];
    updatedAwards.splice(index, 1);
    setAwards(updatedAwards);
  
    const updatedMemberships = [...memberships];
    updatedMemberships.splice(index, 1);
    setMemberships(updatedMemberships);
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

  const getDocInfo = async () => {
    const isAuthenticated = localStorage.getItem("token");
    const docInfo = JSON.parse(localStorage.getItem("docInfo"));

    const userId = docInfo.userId._id;

    setUserName(docInfo.userId?.name || "");
    setEmail(docInfo.userId?.email || "");
    setPhone(docInfo.userId?.mobileNumber || "");
    setGender(docInfo?.gender || "");
    setEducation(docInfo?.educationDetails || "");
    setAwardsNAchievements(docInfo?.achievement);
    setLicence(docInfo?.license);
    const dobDate = new Date(docInfo?.dob);
    const day = dobDate.getDate().toString().padStart(2, "0");
    const month = (dobDate.getMonth() + 1).toString().padStart(2, "0");
    const year = dobDate.getFullYear();
    const formattedDate = `${day}-${month}-${year}`;
    // console.log(formattedDate);
    // setDOB(result?.dob || '');
    setDOB(formattedDate);
    setFees(docInfo?.fees || "");
    setAboutMe(docInfo?.about || "");
    setClinicName(docInfo?.clinicName || "");
    setClinicAddress(docInfo?.clinicAddress || "");
    setAddress1(docInfo?.addressLine1 || "");
    setAddress2(docInfo?.addressLine2 || "");
    setState(docInfo?.state);
    setCity(docInfo?.city || "");
    setCountry(docInfo?.contry || "");
    setPostalCode(docInfo?.zip || "");
    setSpecialization(docInfo?.specialization || "");
    setYearOfExperience(docInfo?.yearOfExperience || "");
  };

  const handleSubmit = async () => {
    const isAuthenticated = localStorage.getItem("token");
    const userInfo = JSON.parse(localStorage.getItem("userInfo"));
    const docInfo = JSON.parse(localStorage.getItem("docInfo"));

    licence[0].licenseNumber = licenceNumber;
    licence[0].yearOfIssued = yearLicenceNumber;

    console.log(
      // docInfo.userId._id,
      // userName,
      // yearOfExperience,
      // fees,
      // dob,
      // aboutMe,
      // specialization,
      // state,
      // awards,
      // licence,
      // address1,
      // address2,
      // city,
      // postalCode,
      // country,
      // education,
      // clinicName,
      // clinicAddress,
      // gender
    );

    try {
      const parts = dob.split("-");

      // Rearrange the parts to form the "YYYY-MM-DD" format
      const formattedDate = `${parts[2]}-${parts[1]}-${parts[0]}`;


      if (docInfo) {
        console.log("1");
        const updatedDoctor = await axios.put(
          `https://healthbackend-3xh2.onrender.com/doctor/${docInfo.userId._id}/update`,
          {
            userId: docInfo.userId._id,
            name: userName,
            yearOfExperience: yearOfExperience,
            fees: fees,
            dob: formattedDate,
            about: aboutMe,
            specialization: specialization,
            state: state,
            achivement: awards,
            license: licence,
            addressLine1: address1,
            addressLine2: address2,
            city: city,
            zip: postalCode,
            contry: country,
            educationDetails: education,
            clinicName: clinicName,
            clinicAddress: clinicAddress,
            gender: gender,
          },
          {
            headers: {
              authorization: isAuthenticated,
            },
          }
        );
        console.log(updatedDoctor);
        localStorage.setItem(
          "docInfo",
          JSON.stringify(updatedDoctor.data.result)
        );
        // setDoctorInfo(updatedDoctor.data.result);
        // console.log(doctorInfo);
        console.log("doctor updated success navigatingto docprofile");
      } else {
        const user = await axios.post(
          `https://healthbackend-3xh2.onrender.com/doctor/create`,
          {
            userId: userInfo._id,
            name: userName,
            yearsOfExperience: yearOfExperience,
            fees: fees,
            dob: dob,
            about: aboutMe,
            specialization: specialization,
            state: state,
            achivement: awards,
            license: licence,
            addressLine1: address1,
            addressLine2: address2,
            city: city,
            zip: postalCode,
            contry: country,
            educationDetails: education,
            clinicName: clinicName,
            clinicAddress: clinicAddress,
            gender: gender,
          },
          {
            headers: {
              "Content-Type": "application/json",
              Authorization: isAuthenticated,
            },
          }
        );

        console.log(user);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getDocInfo();
  }, []);

  // useState (()=>{

  //   console.log(doctorInfo);
  // },[doctorInfo])

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
                        <input
                          type="text"
                          onChange={(e) => setPhone(e.target.value)}
                          value={`+91 ${phone}`}
                          className="form-control"
                        />
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
                        <input
                          type="date"
                          onChange={(e) => setDOB(e.target.value)}
                          value={dob}
                          className="form-control"
                        />
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="mb-0">
                        <label className="mb-2">
                          Fees<span className="text-danger"> *</span>
                        </label>
                        <input
                          type="number"
                          onChange={(e) => setFees(e.target.value)}
                          value={fees}
                          className="form-control"
                        />
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
                      onChange={handleAboutRemainingChange}
                      value={aboutMe}
                      rows={5}
                    />
                    <p>Words remaining: {remainingWords}</p>
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
                        <input
                          type="text"
                          onChange={(e) => setClinicName(e.target.value)}
                          value={clinicName}
                          className="form-control"
                        />
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="mb-3">
                        <label className="mb-2">Clinic Address</label>
                        <input
                          type="text"
                          onChange={(e) => setClinicAddress(e.target.value)}
                          value={clinicAddress}
                          className="form-control"
                        />
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
                        <input
                          type="text"
                          onChange={(e) => setAddress1(e.target.value)}
                          value={address1}
                          className="form-control"
                        />
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="mb-3">
                        <label className="control-label">Address Line 2</label>
                        <input
                          type="text"
                          onChange={(e) => setAddress2(e.target.value)}
                          value={address2}
                          className="form-control"
                        />
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="mb-3">
                        <label className="control-label">
                          City<span className="text-danger"> *</span>
                        </label>
                        <input
                          type="text"
                          onChange={(e) => setCity(e.target.value)}
                          value={city}
                          className="form-control"
                        />
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="mb-3">
                        <label className="control-label">
                          State / Province
                          <span className="text-danger"> *</span>
                        </label>
                        <input
                          type="text"
                          onChange={(e) => setState(e.target.value)}
                          value={state}
                          className="form-control"
                        />
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="mb-3">
                        <label className="control-label">
                          Country<span className="text-danger"> *</span>
                        </label>
                        <input
                          type="text"
                          onChange={(e) => setCountry(e.target.value)}
                          value={country}
                          className="form-control"
                        />
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="mb-3">
                        <label className="control-label">
                          Postal Code<span className="text-danger"> *</span>
                        </label>
                        <input
                          type="number"
                          onChange={(e) => setPostalCode(e.target.value)}
                          value={postalCode}
                          className="form-control"
                        />
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
                                  Qualification
                                  <span className="text-danger"> *</span>
                                </label>
                                <input
                                  type="text"
                                  className="form-control"
                                  name="qualification"
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
                                  name="collegeName"
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
                                  name="yearOfCompletion"
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
                  <div className="experience-info">
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
                                type="number"
                                className="form-control"
                                name="hospitalName"
                                value={yearOfExperience}
                                onChange={(e) =>
                                  setYearOfExperience(e.target.value)
                                }
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
                                handleAwardChange(index, event)
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
                                handleAwardChange(index, event)
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

              {licence.map((license, index) => (
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
                            <input
                              type="text"
                              onChange={(e) => setLicenceNumber(e.target.value)}
                              value={license?.licenseNumber}
                              className="form-control"
                            />
                          </div>
                        </div>
                        <div className="col-12 col-md-5">
                          <div className="mb-3">
                            <label className="mb-2">
                              Year of issue
                              <span className="text-danger"> *</span>
                            </label>
                            <input
                              type="text"
                              onChange={(e) =>
                                setYearLicenceNumber(e.target.value)
                              }
                              value={license?.yearOfIssued}
                              className="form-control"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
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
                <button
                  type="submit"
                  onClick={handleSubmit}
                  className="btn btn-primary prime-btn">
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
