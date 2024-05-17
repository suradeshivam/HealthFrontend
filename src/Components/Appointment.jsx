import axios from "axios";
import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { OrderState } from "../Contexts";
import { Bounce, ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router-dom";
import { FaRegEdit } from "react-icons/fa";
import { IoIosArrowBack } from "react-icons/io";
import { MdOutlineSaveAlt } from "react-icons/md";
import { MdAddCircleOutline } from "react-icons/md";

export default function Patientprofile() {
  // const location = useLocation();
  // const [patient, setPatient] = useState(location.state?.patient);
  const [singleAppointment, setSingleAppointment] = useState();
  const { selectedPatient } = OrderState();
  const [isEditing, setIsEditing] = useState(false);
  const navigate = useNavigate();

  const [doctorInfo, setDoctorInfo] = useState("");

  // console.log(patient)

  const [observations, setObservations] = useState([]);

  const addObservation = () => {
    setObservations([...observations, ""]);
  };

  const deleteObservation = (index) => {
    const newObservations = [...observations];
    newObservations.splice(index, 1);
    setObservations(newObservations);
  };

  const handleEditClick = (index) => {
    setIsEditing(true);
    // setCurrentEditingIndex(index);
  };

  const [prescriptions, setPrescriptions] = useState([
    { name: "", quantity: "", times: [] },
  ]);

  const addPrescription = () => {
    setPrescriptions([...prescriptions, { name: "", quantity: "", times: [] }]);
  };

  const handleInputChange = (index, event) => {
    const { name, value } = event.target;
    const newPrescriptions = [...prescriptions];
    newPrescriptions[index][name] = value;
    setPrescriptions(newPrescriptions);
  };

  const handleObservationChange = (e, index) => {
    const { name, value } = e.target;
    const updatedObs = [...observations];
    updatedObs[index] = value;
    setObservations(updatedObs);
  };

  const handleAddObservation = () => {
    setObservations([...observations, ""]);
  };

  console.log(observations);

  const handleCheckboxChange = (index, time) => {
    const newPrescriptions = [...prescriptions];
    if (newPrescriptions[index].times.includes(time)) {
      newPrescriptions[index].times = newPrescriptions[index].times.filter(
        (item) => item !== time
      );
    } else {
      newPrescriptions[index].times.push(time);
    }
    setPrescriptions(newPrescriptions);
  };
  // console.log(prescriptions)
  const removePrescription = (index) => {
    const newPrescriptions = [...prescriptions];
    newPrescriptions.splice(index, 1);
    setPrescriptions(newPrescriptions);
  };
  const [isSignatureClicked, setIsSignatureClicked] = useState(false);

  const handleSignatureClick = () => {
    setIsSignatureClicked(true);
  };

  const handleSignatureSave = (signature) => {
    // You can save the signature data here
    // For example, send it to the server, save it to local storage, etc.
    console.log("Signature saved:", signature);
    // Close the modal and reset the signature clicked state
    setIsSignatureClicked(false);
    // setModalOpen(false);
  };

  const handlePrecriptionSubmit = async () => {
    const isAuthenticated = localStorage.getItem("token");

    try {
      console.log("1");

      const response = await axios.put(
        "http://localhost:5000/appointment/prescription",
        {
          appointmentId: selectedPatient._id,
          newPrescription: prescriptions,
        },
        {
          headers: {
            "Content-Type": "application/json",
            authorization: isAuthenticated,
          },
        }
      );

      console.log(response);
      const updatedPatient = response.data?.result;
      // Update the patient state with the updated patient data
      // setPatient(updatedPatient);
      // localStorage.setItem(
      //   "docInfo",
      //   JSON.stringify(updatedDoctor.data.result)
      // );
      toast("Prescription Added Successfully", {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        transition: Bounce,
      });
    } catch (error) {
      toast.error("Internal Server Error", {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        transition: Bounce,
      });
    }
  };

  const getOneAppointment = async () => {
    console.log("askahu");
    const isAuthenticated = localStorage.getItem("token");
    const response = await axios.get(
      `http://localhost:5000/appointment/${selectedPatient._id}`,
      {
        headers: {
          "Content-Type": "application/json",
          authorization: isAuthenticated,
        },
      }
    );

    console.log(response);
    setSingleAppointment(response.data.result);
    console.log(singleAppointment);
  };

  const handleBack = () => {
    navigate("/doctor"); // Navigate to Dashboard page when the back button is clicked
  };

  //   console.log(observations)

  const handleSaveObservation = async () => {
    const appointmentId = selectedPatient._id;
    const isAuthenticated = localStorage.getItem("token");
    try {
      const observationres = await axios.put(
        `http://localhost:5000/appointment/observation/`,
        {
          appointmentId: appointmentId,
          newObservations: observations,
        },
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: isAuthenticated,
          },
        }
      );
      console.log(observationres);

      toast("Observation Added Successfully", {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        transition: Bounce,
      });

      const appointment = await axios.get(
        `http://localhost:5000/appointment/${appointmentId}`,
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: isAuthenticated,
          },
        }
      );

      console.log(appointment);
      setSingleAppointment(appointment.data.result);
    } catch (error) {
      console.log(error);
      toast.error("Internal Server Error", {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        transition: Bounce,
      });
    }
  };

  // console.log(singleAppointment)

  useEffect(() => {
    getOneAppointment();
    const doctorInfo = JSON.parse(localStorage.getItem("docInfo"));
    if (doctorInfo) {
      setDoctorInfo(doctorInfo);
    }
    setPrescriptions(selectedPatient?.prescriptions);
    setObservations(selectedPatient?.observations);
  }, []);

  return (
    <div>
      <div className="main-wrapper">
        <div className="breadcrumb-bar-two">
          <div className="container">
            <div className="row align-items-center inner-banner">
              <div className="col-md-12 col-12 text-center">
                <h2 className="breadcrumb-title">Profile</h2>

                <nav aria-label="breadcrumb" className="page-breadcrumb">
                  <ol className="breadcrumb">
                    <li className="breadcrumb-item">
                      <a href="index.html">Home</a>
                    </li>
                    <li className="breadcrumb-item" aria-current="page">
                      Profile
                    </li>
                  </ol>
                </nav>
              </div>
            </div>
          </div>
        </div>
        <div className="content">
          <div className="container">
            <div>
              <button
                onClick={handleBack}
                className="btn btn-primary patient-graph-box">
                {" "}
                <IoIosArrowBack />
                Back to Dashboard
              </button>
            </div>
            <br />
            <div className="row">
              <ToastContainer />

              <div className="col-md-5 col-lg-4 col-xl-3 theiaStickySidebar dct-dashbd-lft">
                <div className="card widget-profile pat-widget-profile">
                  <div className="card-body">
                    <div className="pro-widget-content">
                      <div className="profile-info-widget">
                        <a href="#" className="booking-doc-img">
                          <img
                            src="assets/img/patients/patient.jpg"
                            alt="User Image"
                          />
                        </a>
                        <div className="profile-det-info">
                          <h3>{selectedPatient?.patient?.userId?.name}</h3>
                          <div className="patient-details">
                            <h5>
                              <b>Patient ID :</b>
                              {selectedPatient.patient?.userId?._id}
                            </h5>
                            <h5 className="mb-0">
                              <i className="fas fa-map-marker-alt" />{" "}
                              {selectedPatient.patient?.city},
                              {selectedPatient.patient?.contry}
                            </h5>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="patient-info">
                      <ul>
                        <li>
                          Phone{" "}
                          <span>
                            +91-
                            {`${selectedPatient.patient?.userId?.mobileNumber}`}
                          </span>
                        </li>
                        <li>
                          Age <span>{selectedPatient.patient?.age}</span>
                        </li>
                        <li>
                          Blood Group{" "}
                          <span>{selectedPatient.patient?.bloodType}</span>
                        </li>
                        <li>
                          DOB{" "}
                          <span>
                            {new Date(
                              selectedPatient.patient?.dob
                            ).toDateString(selectedPatient.patient?.dob)}
                          </span>
                        </li>
                        <li>
                          Gender<span>{selectedPatient.patient?.gender}</span>
                        </li>
                        <li>
                          Email
                          <span>{selectedPatient.patient?.userId?.email}</span>
                        </li>
                        <li>
                          Height
                          <span>{selectedPatient.patient?.height} Feet</span>
                        </li>
                        <li>
                          Weight
                          <span>{selectedPatient.patient?.weight} KG</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="card">
                  <div className="card-header">
                    <h4 className="card-title">AI Predicted Diseases</h4>
                  </div>
                  <ul className="list-group list-group-flush">
                    <li className="list-group-item">
                      <div class="submit-section mt-2 text-center">
                        <button
                          type="submit"
                          class="btn btn-secondary submit-btn">
                          Click to Predict
                        </button>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-md-7 col-lg-8 col-xl-9">
                <div className="row">
                  <div className="col-12 col-md-6 col-lg-4 col-xl-3 patient-dashboard-top">
                    <div className="card">
                      <div className="card-body text-center">
                        <div className="mb-3">
                          <img
                            src="assets/img/specialities/pt-dashboard-01.png"
                            alt="heart-image"
                            width={55}
                          />
                        </div>
                        <h5>Heart Rate</h5>
                        <h6>
                          {selectedPatient?.vitals?.heartRate} <sub>bpm</sub>
                        </h6>
                      </div>
                    </div>
                  </div>
                  <div className="col-12 col-md-6 col-lg-4 col-xl-3 patient-dashboard-top">
                    <div className="card">
                      <div className="card-body text-center">
                        <div className="mb-3">
                          <img
                            src="assets/img/specialities/pt-dashboard-02.png"
                            alt="thermometer-image"
                            width={55}
                          />
                        </div>
                        <h5>Body Temperature</h5>
                        <h6>
                          {selectedPatient?.vitals?.temparature} <sub>C</sub>
                        </h6>
                      </div>
                    </div>
                  </div>
                  <div className="col-12 col-md-6 col-lg-4 col-xl-3 patient-dashboard-top">
                    <div className="card">
                      <div className="card-body text-center">
                        <div className="mb-3">
                          <img
                            src="assets/img/specialities/pt-dashboard-03.png"
                            alt="hospital-equipment"
                            width={55}
                          />
                        </div>
                        <h5>Glucose Level</h5>
                        <h6>70 - 90</h6>
                      </div>
                    </div>
                  </div>
                  <div className="col-12 col-md-6 col-lg-4 col-xl-3 patient-dashboard-top">
                    <div className="card">
                      <div className="card-body text-center">
                        <div className="mb-3">
                          <img
                            src="assets/img/specialities/pt-dashboard-04.png"
                            alt="hospital-equipment"
                            width={55}
                          />
                        </div>
                        <h5>Blood Pressure</h5>
                        <h6>
                          {selectedPatient?.vitals?.bloodPressure}{" "}
                          <sub>mg/dl</sub>
                        </h6>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="row patient-graph-col">
                  <div className="col-12">
                    <div className="card">
                      <div className="card-header">
                        <h4 className="card-title">
                          Patient Basic Medical Information
                        </h4>
                      </div>
                      <div className="card-body pt-2 pb-2 mt-1 mb-1">
                        <div className="row">
                          <div className="col-12 col-md-6 col-lg-4 col-xl-3 patient-graph-box">
                            <a
                              href="#"
                              className="graph-box"
                              data-bs-toggle="modal"
                              data-bs-target="#graph1">
                              <div>
                                <h4>Symptoms</h4>
                              </div>
                              <div className="graph-img">
                                <img
                                  src="assets/img/shapes/graph-01.png"
                                  alt="shapes-icon"
                                />
                              </div>
                            </a>
                          </div>
                          <div className="col-12 col-md-6 col-lg-4 col-xl-3 patient-graph-box">
                            <a
                              href="#"
                              className="graph-box pink-graph"
                              data-bs-toggle="modal"
                              data-bs-target="#graph2">
                              <div>
                                <h4>Allergies</h4>
                              </div>
                              <div className="graph-img">
                                <img
                                  src="assets/img/shapes/graph-02.png"
                                  alt="graph-icon"
                                />
                              </div>
                            </a>
                          </div>
                          <div className="col-12 col-md-6 col-lg-4 col-xl-3 patient-graph-box">
                            <a
                              href="#"
                              className="graph-box sky-blue-graph"
                              data-bs-toggle="modal"
                              data-bs-target="#graph3">
                              <div>
                                <h4>Medical Records</h4>
                              </div>
                              <div className="graph-img">
                                <img
                                  src="assets/img/shapes/graph-03.png"
                                  alt="chart-icon"
                                />
                              </div>
                            </a>
                          </div>
                          <div className="col-12 col-md-6 col-lg-4 col-xl-3 patient-graph-box">
                            <a
                              href="#"
                              className="graph-box orange-graph"
                              data-bs-toggle="modal"
                              data-bs-target="#graph4">
                              <div>
                                <h4>BMI</h4>
                              </div>
                              <div className="graph-img">
                                <img
                                  src="assets/img/shapes/graph-04.png"
                                  alt="chart-icon"
                                />
                              </div>
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="card">
                  <div className="card-body pt-0">
                    <nav className="user-tabs mb-4">
                      <ul className="nav nav-tabs nav-tabs-bottom nav-justified">
                        <li className="nav-item">
                          <a
                            className="nav-link active"
                            href="#pat_appointments"
                            data-bs-toggle="tab">
                            Observations
                          </a>
                        </li>
                        <li className="nav-item">
                          <a
                            className="nav-link"
                            href="#pat_prescriptions"
                            data-bs-toggle="tab">
                            Prescriptions
                          </a>
                        </li>

                        <li className="nav-item">
                          <a
                            className="nav-link"
                            href="#pat_reports"
                            data-bs-toggle="tab">
                            Reports
                          </a>
                        </li>

                        <li className="nav-item">
                          <a
                            className="nav-link"
                            href="#pat_billing"
                            data-bs-toggle="tab">
                            Encounters
                          </a>
                        </li>
                      </ul>
                    </nav>
                    <div className="tab-content pt-0">
                      <div
                        id="pat_appointments"
                        className="tab-pane fade show active">
                        <div className="card card-table mb-0">
                          <div className="card-body">
                            <div className="table-responsive">
                              <table className="table table-hover table-center mb-0">
                                <thead>
                                  <tr>
                                    <th>Observation Notes</th>
                                    <th>Action</th>
                                    <th className="add-more mb-3">
                                      <a
                                        href="javascript:void(0);"
                                        className="add-hours"
                                        onClick={handleAddObservation}>
                                        <i className="fa fa-plus-circle" /> Add
                                        Observation
                                      </a>
                                    </th>
                                  </tr>
                                </thead>
                                <tbody>
                                  {/* {observations.map((observation, index) => (
              <>
                <div className="modal-body">
                  <textarea
                    name="data"
                    className="form-control"
                    rows="5"
                    value={observation}
                    onChange={(e, index) => handleObservationChange(e, index)}
                    placeholder="Enter your data here..."></textarea>
                </div>
                <div className="modal-footer text-center">
                  <button
                    type="submit"
                    onClick={handleSaveObservation}
                    className="btn btn-outline btn-success">
                    Submit
                  </button>
                </div>
              </>
            ))} */}
                                  {observations.map((observation, index) => (
                                    <tr className=" " key={index}>
                                      <td className="text-sm mt-2 p-4  ">
                                        <textarea
                                          className="form-control"
                                          rows="5"
                                          name="name"
                                          value={observation}
                                          onChange={(e) =>
                                            handleObservationChange(e, index)
                                          }
                                          disabled={!isEditing}
                                          //   className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring focus:border-blue-300"
                                        ></textarea>
                                      </td>
                                      <td className="flex gap-1 border-l-2 mt-2 justify-center d-flex flex-row">
                                        {/* <button className="sm:text-white font-bold text-green-500 sm:bg-green-500  p-1 px-2 sm:p-1 sm:px-3 sm:text-sm rounded-lg">Edit</button> */}
                                        <div>
                                          <button
                                            className="btn btn-primary patient-graph-box"
                                            onClick={handleEditClick}>
                                            <MdOutlineSaveAlt className="mt-1" />
                                            Edit
                                          </button>
                                        </div>
                                        <button
                                          className="btn mb-1 bg-danger-light patient-graph-box"
                                          onClick={() =>
                                            deleteObservation(index)
                                          }>
                                          Delete
                                        </button>
                                      </td>
                                    </tr>
                                  ))}
                                  <div className="flex justify-between p-4">
                                    <div>
                                      <button
                                        className="btn btn-primary patient-graph-box"
                                        onClick={handleSaveObservation}>
                                        <MdOutlineSaveAlt className="mt-1" />
                                        Save
                                      </button>
                                    </div>
                                  </div>
                                </tbody>
                              </table>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="tab-pane fade" id="pat_prescriptions">
                        <div>
                          <div className="card">
                            <div className="card-header">
                              <h4 className="card-title mb-0">
                                Edit Prescription
                              </h4>
                            </div>
                            <div className="card-body">
                              <div className="row">
                                <div className="col-sm-6">
                                  <div className="biller-info">
                                    <h4 className="d-block">
                                      Dr. {doctorInfo.userId?.name}
                                    </h4>
                                    <span className="d-block text-sm text-muted">
                                      {doctorInfo?.specialization}
                                    </span>
                                    <span className="d-block text-sm text-muted">
                                      {doctorInfo?.city} , {doctorInfo?.contry}
                                    </span>
                                  </div>
                                </div>
                                <div className="col-sm-6 text-sm-end">
                                  <div className="billing-info">
                                    <h4 className="d-block">
                                      {new Date().toLocaleDateString("en-US")}
                                    </h4>
                                    {/* <span className="d-block text-muted">#INV0001</span> */}
                                  </div>
                                </div>
                              </div>
                              <div className="add-more-item text-end">
                                <a
                                  onClick={addPrescription}
                                  className="add-prescription">
                                  <i className="fa fa-plus-circle" /> Add More
                                </a>
                              </div>
                              <div className="card card-table">
                                <div className="card-body">
                                  <div className="table-responsive">
                                    <table className="table table-hover table-center add-table-prescription">
                                      <thead>
                                        <tr>
                                          <th className="table-head-name">
                                            Name
                                          </th>
                                          <th>Quantity</th>
                                          <th>Time</th>
                                          <th className="custom-class" />
                                        </tr>
                                      </thead>
                                      <tbody>
                                        {prescriptions.map(
                                          (prescription, index) => (
                                            <tr key={index}>
                                              <td>
                                                <input
                                                  className="form-control"
                                                  name="name"
                                                  value={prescription.name}
                                                  onChange={(event) =>
                                                    handleInputChange(
                                                      index,
                                                      event
                                                    )
                                                  }
                                                  type="text"
                                                />
                                              </td>
                                              <td>
                                                <input
                                                  className="form-control"
                                                  name="quantity"
                                                  value={prescription.quantity}
                                                  onChange={(event) =>
                                                    handleInputChange(
                                                      index,
                                                      event
                                                    )
                                                  }
                                                  type="text"
                                                />
                                              </td>

                                              <td>
                                                <div className="form-check form-check-inline">
                                                  <label className="form-check-label">
                                                    <input
                                                      className="form-check-input"
                                                      type="checkbox"
                                                      checked={prescription.times.includes(
                                                        "Morning"
                                                      )}
                                                      onChange={() =>
                                                        handleCheckboxChange(
                                                          index,
                                                          "Morning"
                                                        )
                                                      }
                                                    />{" "}
                                                    Morning
                                                  </label>
                                                </div>
                                                <div className="form-check form-check-inline">
                                                  <label className="form-check-label">
                                                    <input
                                                      className="form-check-input"
                                                      type="checkbox"
                                                      checked={prescription.times.includes(
                                                        "Afternoon"
                                                      )}
                                                      onChange={() =>
                                                        handleCheckboxChange(
                                                          index,
                                                          "Afternoon"
                                                        )
                                                      }
                                                    />{" "}
                                                    Afternoon
                                                  </label>
                                                </div>

                                                <div className="form-check form-check-inline">
                                                  <label className="form-check-label">
                                                    <input
                                                      className="form-check-input"
                                                      type="checkbox"
                                                      checked={prescription.times.includes(
                                                        "Night"
                                                      )}
                                                      onChange={() =>
                                                        handleCheckboxChange(
                                                          index,
                                                          "Night"
                                                        )
                                                      }
                                                    />{" "}
                                                    Night
                                                  </label>
                                                </div>
                                              </td>
                                              <td>
                                                <button
                                                  onClick={() =>
                                                    removePrescription(index)
                                                  }
                                                  className="btn bg-danger-light trash">
                                                  <i className="far fa-trash-alt" />
                                                </button>
                                              </td>
                                            </tr>
                                          )
                                        )}
                                      </tbody>
                                    </table>
                                  </div>
                                </div>
                              </div>
                              <div className="row">
                                <div className="col-md-12 text-end">
                                  <div
                                    className="signature-wrap"
                                    onClick={handleSignatureClick}>
                                    <div
                                      className="signature"
                                      style={{
                                        fontWeight: isSignatureClicked
                                          ? "bold"
                                          : "normal",
                                        color: isSignatureClicked
                                          ? "green"
                                          : "black",
                                      }}>
                                      {isSignatureClicked ? (
                                        <i className="fas fa-check-circle fa-2x"></i>
                                      ) : (
                                        "Click here to sign"
                                      )}
                                    </div>
                                    <div className="sign-name">
                                      <p className="mb-0">
                                        ( Dr. Darren Elder )
                                      </p>
                                      <span className="text-muted">
                                        Signature
                                      </span>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div className="row">
                                <div className="col-md-12">
                                  <div className="submit-section">
                                    <button
                                      type="submit"
                                      onClick={handlePrecriptionSubmit}
                                      className="btn btn-primary submit-btn">
                                      Save
                                    </button>
                                    <button
                                      type="reset"
                                      className="btn btn-secondary submit-btn">
                                      Clear
                                    </button>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div id="pat_medical_records" className="tab-pane fade">
                        <div className="card card-table mb-0">
                          <div className="card-body">
                            <div className="table-responsive">
                              <table className="table table-hover table-center mb-0">
                                <thead>
                                  <tr>
                                    <th>ID</th>
                                    <th>Date </th>
                                    <th>Description</th>
                                    <th>Attachment</th>
                                    <th>Created</th>
                                    <th>Action</th>
                                  </tr>
                                </thead>
                                <tbody>
                                  <tr>
                                    <td>
                                      <a href="javascript:void(0);">#MR-0010</a>
                                    </td>
                                    <td>14 Nov 2023</td>
                                    <td>Dental Filling</td>
                                    <td>
                                      <a href="#">dental-test.pdf</a>
                                    </td>
                                    <td>
                                      <h2 className="table-avatar">
                                        <a
                                          href="doctor-profile.html"
                                          className="avatar avatar-sm me-2">
                                          <img
                                            className="avatar-img rounded-circle"
                                            src="assets/img/doctors/doctor-thumb-01.jpg"
                                            alt="User Image"
                                          />
                                        </a>
                                        <a href="doctor-profile.html">
                                          Dr. Ruby Perrin <span>Dental</span>
                                        </a>
                                      </h2>
                                    </td>
                                    <td>
                                      <div className="table-action">
                                        <a
                                          href="javascript:void(0);"
                                          className="btn btn-sm bg-info-light">
                                          <i className="far fa-eye" /> View
                                        </a>
                                        <a
                                          href="javascript:void(0);"
                                          className="btn btn-sm bg-primary-light">
                                          <i className="fas fa-print" /> Print
                                        </a>
                                      </div>
                                    </td>
                                  </tr>
                                  <tr>
                                    <td>
                                      <a href="javascript:void(0);">#MR-0009</a>
                                    </td>
                                    <td>13 Nov 2023</td>
                                    <td>Teeth Cleaning</td>
                                    <td>
                                      <a href="#">dental-test.pdf</a>
                                    </td>
                                    <td>
                                      <h2 className="table-avatar">
                                        <a
                                          href="doctor-profile.html"
                                          className="avatar avatar-sm me-2">
                                          <img
                                            className="avatar-img rounded-circle"
                                            src="assets/img/doctors/doctor-thumb-02.jpg"
                                            alt="User Image"
                                          />
                                        </a>
                                        <a href="doctor-profile.html">
                                          Dr. Darren Elder <span>Dental</span>
                                        </a>
                                      </h2>
                                    </td>
                                    <td>
                                      <div className="table-action">
                                        <a
                                          href="javascript:void(0);"
                                          className="btn btn-sm bg-info-light">
                                          <i className="far fa-eye" /> View
                                        </a>
                                        <a
                                          href="javascript:void(0);"
                                          className="btn btn-sm bg-primary-light">
                                          <i className="fas fa-print" /> Print
                                        </a>
                                      </div>
                                    </td>
                                  </tr>
                                  <tr>
                                    <td>
                                      <a href="javascript:void(0);">#MR-0008</a>
                                    </td>
                                    <td>12 Nov 2023</td>
                                    <td>General Checkup</td>
                                    <td>
                                      <a href="#">cardio-test.pdf</a>
                                    </td>
                                    <td>
                                      <h2 className="table-avatar">
                                        <a
                                          href="doctor-profile.html"
                                          className="avatar avatar-sm me-2">
                                          <img
                                            className="avatar-img rounded-circle"
                                            src="assets/img/doctors/doctor-thumb-03.jpg"
                                            alt="User Image"
                                          />
                                        </a>
                                        <a href="doctor-profile.html">
                                          Dr. Deborah Angel{" "}
                                          <span>Cardiology</span>
                                        </a>
                                      </h2>
                                    </td>
                                    <td>
                                      <div className="table-action">
                                        <a
                                          href="javascript:void(0);"
                                          className="btn btn-sm bg-info-light">
                                          <i className="far fa-eye" /> View
                                        </a>
                                        <a
                                          href="javascript:void(0);"
                                          className="btn btn-sm bg-primary-light">
                                          <i className="fas fa-print" /> Print
                                        </a>
                                      </div>
                                    </td>
                                  </tr>
                                  <tr>
                                    <td>
                                      <a href="javascript:void(0);">#MR-0007</a>
                                    </td>
                                    <td>11 Nov 2023</td>
                                    <td>General Test</td>
                                    <td>
                                      <a href="#">general-test.pdf</a>
                                    </td>
                                    <td>
                                      <h2 className="table-avatar">
                                        <a
                                          href="doctor-profile.html"
                                          className="avatar avatar-sm me-2">
                                          <img
                                            className="avatar-img rounded-circle"
                                            src="assets/img/doctors/doctor-thumb-04.jpg"
                                            alt="User Image"
                                          />
                                        </a>
                                        <a href="doctor-profile.html">
                                          Dr. Sofia Brient <span>Urology</span>
                                        </a>
                                      </h2>
                                    </td>
                                    <td>
                                      <div className="table-action">
                                        <a
                                          href="javascript:void(0);"
                                          className="btn btn-sm bg-info-light">
                                          <i className="far fa-eye" /> View
                                        </a>
                                        <a
                                          href="javascript:void(0);"
                                          className="btn btn-sm bg-primary-light">
                                          <i className="fas fa-print" /> Print
                                        </a>
                                      </div>
                                    </td>
                                  </tr>
                                  <tr>
                                    <td>
                                      <a href="javascript:void(0);">#MR-0006</a>
                                    </td>
                                    <td>10 Nov 2023</td>
                                    <td>Eye Test</td>
                                    <td>
                                      <a href="#">eye-test.pdf</a>
                                    </td>
                                    <td>
                                      <h2 className="table-avatar">
                                        <a
                                          href="doctor-profile.html"
                                          className="avatar avatar-sm me-2">
                                          <img
                                            className="avatar-img rounded-circle"
                                            src="assets/img/doctors/doctor-thumb-05.jpg"
                                            alt="User Image"
                                          />
                                        </a>
                                        <a href="doctor-profile.html">
                                          Dr. Marvin Campbell{" "}
                                          <span>Ophthalmology</span>
                                        </a>
                                      </h2>
                                    </td>
                                    <td>
                                      <div className="table-action">
                                        <a
                                          href="javascript:void(0);"
                                          className="btn btn-sm bg-info-light">
                                          <i className="far fa-eye" /> View
                                        </a>
                                        <a
                                          href="javascript:void(0);"
                                          className="btn btn-sm bg-primary-light">
                                          <i className="fas fa-print" /> Print
                                        </a>
                                      </div>
                                    </td>
                                  </tr>
                                  <tr>
                                    <td>
                                      <a href="javascript:void(0);">#MR-0005</a>
                                    </td>
                                    <td>9 Nov 2023</td>
                                    <td>Leg Pain</td>
                                    <td>
                                      <a href="#">ortho-test.pdf</a>
                                    </td>
                                    <td>
                                      <h2 className="table-avatar">
                                        <a
                                          href="doctor-profile.html"
                                          className="avatar avatar-sm me-2">
                                          <img
                                            className="avatar-img rounded-circle"
                                            src="assets/img/doctors/doctor-thumb-06.jpg"
                                            alt="User Image"
                                          />
                                        </a>
                                        <a href="doctor-profile.html">
                                          Dr. Katharine Berthold{" "}
                                          <span>Orthopaedics</span>
                                        </a>
                                      </h2>
                                    </td>
                                    <td>
                                      <div className="table-action">
                                        <a
                                          href="javascript:void(0);"
                                          className="btn btn-sm bg-info-light">
                                          <i className="far fa-eye" /> View
                                        </a>
                                        <a
                                          href="javascript:void(0);"
                                          className="btn btn-sm bg-primary-light">
                                          <i className="fas fa-print" /> Print
                                        </a>
                                      </div>
                                    </td>
                                  </tr>
                                  <tr>
                                    <td>
                                      <a href="javascript:void(0);">#MR-0004</a>
                                    </td>
                                    <td>8 Nov 2023</td>
                                    <td>Head pain</td>
                                    <td>
                                      <a href="#">neuro-test.pdf</a>
                                    </td>
                                    <td>
                                      <h2 className="table-avatar">
                                        <a
                                          href="doctor-profile.html"
                                          className="avatar avatar-sm me-2">
                                          <img
                                            className="avatar-img rounded-circle"
                                            src="assets/img/doctors/doctor-thumb-07.jpg"
                                            alt="User Image"
                                          />
                                        </a>
                                        <a href="doctor-profile.html">
                                          Dr. Linda Tobin <span>Neurology</span>
                                        </a>
                                      </h2>
                                    </td>
                                    <td>
                                      <div className="table-action">
                                        <a
                                          href="javascript:void(0);"
                                          className="btn btn-sm bg-info-light">
                                          <i className="far fa-eye" /> View
                                        </a>
                                        <a
                                          href="javascript:void(0);"
                                          className="btn btn-sm bg-primary-light">
                                          <i className="fas fa-print" /> Print
                                        </a>
                                      </div>
                                    </td>
                                  </tr>
                                  <tr>
                                    <td>
                                      <a href="javascript:void(0);">#MR-0003</a>
                                    </td>
                                    <td>7 Nov 2023</td>
                                    <td>Skin Alergy</td>
                                    <td>
                                      <a href="#">alergy-test.pdf</a>
                                    </td>
                                    <td>
                                      <h2 className="table-avatar">
                                        <a
                                          href="doctor-profile.html"
                                          className="avatar avatar-sm me-2">
                                          <img
                                            className="avatar-img rounded-circle"
                                            src="assets/img/doctors/doctor-thumb-08.jpg"
                                            alt="User Image"
                                          />
                                        </a>
                                        <a href="doctor-profile.html">
                                          Dr. Paul Richard{" "}
                                          <span>Dermatology</span>
                                        </a>
                                      </h2>
                                    </td>
                                    <td>
                                      <div className="table-action">
                                        <a
                                          href="javascript:void(0);"
                                          className="btn btn-sm bg-info-light">
                                          <i className="far fa-eye" /> View
                                        </a>
                                        <a
                                          href="javascript:void(0);"
                                          className="btn btn-sm bg-primary-light">
                                          <i className="fas fa-print" /> Print
                                        </a>
                                      </div>
                                    </td>
                                  </tr>
                                  <tr>
                                    <td>
                                      <a href="javascript:void(0);">#MR-0002</a>
                                    </td>
                                    <td>6 Nov 2023</td>
                                    <td>Dental Removing</td>
                                    <td>
                                      <a href="#">dental-test.pdf</a>
                                    </td>
                                    <td>
                                      <h2 className="table-avatar">
                                        <a
                                          href="doctor-profile.html"
                                          className="avatar avatar-sm me-2">
                                          <img
                                            className="avatar-img rounded-circle"
                                            src="assets/img/doctors/doctor-thumb-09.jpg"
                                            alt="User Image"
                                          />
                                        </a>
                                        <a href="doctor-profile.html">
                                          Dr. John Gibbs <span>Dental</span>
                                        </a>
                                      </h2>
                                    </td>
                                    <td>
                                      <div className="table-action">
                                        <a
                                          href="javascript:void(0);"
                                          className="btn btn-sm bg-info-light">
                                          <i className="far fa-eye" /> View
                                        </a>
                                        <a
                                          href="javascript:void(0);"
                                          className="btn btn-sm bg-primary-light">
                                          <i className="fas fa-print" /> Print
                                        </a>
                                      </div>
                                    </td>
                                  </tr>
                                  <tr>
                                    <td>
                                      <a href="javascript:void(0);">#MR-0001</a>
                                    </td>
                                    <td>5 Nov 2023</td>
                                    <td>Dental Filling</td>
                                    <td>
                                      <a href="#">dental-test.pdf</a>
                                    </td>
                                    <td>
                                      <h2 className="table-avatar">
                                        <a
                                          href="doctor-profile.html"
                                          className="avatar avatar-sm me-2">
                                          <img
                                            className="avatar-img rounded-circle"
                                            src="assets/img/doctors/doctor-thumb-10.jpg"
                                            alt="User Image"
                                          />
                                        </a>
                                        <a href="doctor-profile.html">
                                          Dr. Olga Barlow <span>Dental</span>
                                        </a>
                                      </h2>
                                    </td>
                                    <td>
                                      <div className="table-action">
                                        <a
                                          href="javascript:void(0);"
                                          className="btn btn-sm bg-info-light">
                                          <i className="far fa-eye" /> View
                                        </a>
                                        <a
                                          href="javascript:void(0);"
                                          className="btn btn-sm bg-primary-light">
                                          <i className="fas fa-print" /> Print
                                        </a>
                                      </div>
                                    </td>
                                  </tr>
                                </tbody>
                              </table>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div id="pat_reports" className="tab-pane fade">
                        <div className="card card-table mb-0">
                          <div className="card-body">
                            <div className="table-responsive">
                              <table className="table table-hover table-center mb-0">
                                <thead>
                                  <tr>
                                    <th>Index</th>
                                    <th>Report</th>
                                    <th>Date</th>
                                    <th>View</th>
                                  </tr>
                                </thead>
                                <tbody>
                                  <tr>
                                    <td>
                                      <a>#REP-0010</a>
                                    </td>
                                    <td>
                                      <h2 className="table-avatar">
                                        <a href="doctor-profile.html">
                                          Report <span>Dental</span>
                                        </a>
                                      </h2>
                                    </td>

                                    <td>14 Nov 2023</td>
                                    <td>
                                      <div className="table-action">
                                        <a className="btn btn-sm bg-info-light">
                                          <i className="far fa-eye" /> View
                                        </a>
                                      </div>
                                    </td>
                                  </tr>
                                  <tr>
                                    <td>
                                      <a>#REP-0010</a>
                                    </td>
                                    <td>
                                      <h2 className="table-avatar">
                                        <a href="doctor-profile.html">
                                          Report <span>Dental</span>
                                        </a>
                                      </h2>
                                    </td>

                                    <td>14 Nov 2023</td>
                                    <td>
                                      <div className="table-action">
                                        <a className="btn btn-sm bg-info-light">
                                          <i className="far fa-eye" /> View
                                        </a>
                                      </div>
                                    </td>
                                  </tr>
                                  <tr>
                                    <td>
                                      <a>#REP-0010</a>
                                    </td>
                                    <td>
                                      <h2 className="table-avatar">
                                        <a href="doctor-profile.html">
                                          Report <span>Dental</span>
                                        </a>
                                      </h2>
                                    </td>

                                    <td>14 Nov 2023</td>
                                    <td>
                                      <div className="table-action">
                                        <a className="btn btn-sm bg-info-light">
                                          <i className="far fa-eye" /> View
                                        </a>
                                      </div>
                                    </td>
                                  </tr>
                                  <tr>
                                    <td>
                                      <a>#REP-0010</a>
                                    </td>
                                    <td>
                                      <h2 className="table-avatar">
                                        <a href="doctor-profile.html">
                                          Report <span>Dental</span>
                                        </a>
                                      </h2>
                                    </td>

                                    <td>14 Nov 2023</td>
                                    <td>
                                      <div className="table-action">
                                        <a className="btn btn-sm bg-info-light">
                                          <i className="far fa-eye" /> View
                                        </a>
                                      </div>
                                    </td>
                                  </tr>
                                  <tr>
                                    <td>
                                      <a>#REP-0010</a>
                                    </td>
                                    <td>
                                      <h2 className="table-avatar">
                                        <a href="doctor-profile.html">
                                          Report <span>Dental</span>
                                        </a>
                                      </h2>
                                    </td>

                                    <td>14 Nov 2023</td>
                                    <td>
                                      <div className="table-action">
                                        <a className="btn btn-sm bg-info-light">
                                          <i className="far fa-eye" /> View
                                        </a>
                                      </div>
                                    </td>
                                  </tr>
                                </tbody>
                              </table>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div id="pat_billing" className="tab-pane fade">
                        <div className="card card-table mb-0">
                          <div className="card-body">
                            <div className="table-responsive">
                              <table className="table table-hover table-center mb-0">
                                <thead>
                                  <tr>
                                    <th>Index</th>
                                    <th>Physician Name</th>
                                    <th>Date</th>
                                    <th>View</th>
                                  </tr>
                                </thead>
                                <tbody>
                                  <tr>
                                    <td>
                                      <a>#REP-0010</a>
                                    </td>
                                    <td>
                                      <h2 className="table-avatar">
                                        <a href="doctor-profile.html">
                                          Michal Chandalr <span>CheckUp</span>
                                        </a>
                                      </h2>
                                    </td>

                                    <td>24/03/2024</td>
                                    <td>
                                      <div className="table-action">
                                        <a className="btn btn-sm bg-info-light">
                                          <i className="far fa-eye" /> View
                                        </a>
                                      </div>
                                    </td>
                                  </tr>
                                  <tr>
                                    <td>
                                      <a>#REP-0010</a>
                                    </td>
                                    <td>
                                      <h2 className="table-avatar">
                                        <a href="doctor-profile.html">
                                          Michal Perry <span>CheckUp</span>
                                        </a>
                                      </h2>
                                    </td>

                                    <td>24/03/2024</td>
                                    <td>
                                      <div className="table-action">
                                        <a className="btn btn-sm bg-info-light">
                                          <i className="far fa-eye" /> View
                                        </a>
                                      </div>
                                    </td>
                                  </tr>
                                  <tr>
                                    <td>
                                      <a>#REP-0010</a>
                                    </td>
                                    <td>
                                      <h2 className="table-avatar">
                                        <a href="doctor-profile.html">
                                          Eliza Stoy <span>CheckUp</span>
                                        </a>
                                      </h2>
                                    </td>

                                    <td>24/03/2024</td>
                                    <td>
                                      <div className="table-action">
                                        <a className="btn btn-sm bg-info-light">
                                          <i className="far fa-eye" /> View
                                        </a>
                                      </div>
                                    </td>
                                  </tr>
                                </tbody>
                              </table>
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
        </div>
      </div>
      <div className="modal fade custom-modal" id="add_medical_records">
        <div
          className="modal-dialog modal-dialog-centered modal-lg"
          role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h3 className="modal-title">Medical Records</h3>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              />
            </div>
            <form>
              <div className="modal-body">
                <div className="mb-3">
                  <label className="mb-2">Date</label>
                  <input
                    type="text"
                    className="form-control datetimepicker"
                    defaultValue="31-10-2023"
                  />
                </div>
                <div className="mb-3">
                  <label className="mb-2">Description ( Optional )</label>
                  <textarea className="form-control" defaultValue={""} />
                </div>
                <div className="mb-3">
                  <label className="mb-2">Upload File</label>
                  <input type="file" className="form-control" />
                </div>
                <div className="submit-section text-center">
                  <button type="submit" className="btn btn-primary submit-btn">
                    Submit
                  </button>
                  <button
                    type="button"
                    className="btn btn-secondary submit-btn"
                    data-bs-dismiss="modal">
                    Cancel
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
      <div
        id="edit_medical_form"
        className="modal fade custom-modal"
        tabIndex={-1}
        role="dialog"
        style={{ display: "none" }}
        aria-hidden="true">
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">Add Observation</h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"></button>
            </div>
            {/* {observations.map((observation, index) => (
              <>
                <div className="modal-body">
                  <textarea
                    name="data"
                    className="form-control"
                    rows="5"
                    value={observation}
                    onChange={(e, index) => handleObservationChange(e, index)}
                    placeholder="Enter your data here..."></textarea>
                </div>
                <div className="modal-footer text-center">
                  <button
                    type="submit"
                    onClick={handleSaveObservation}
                    className="btn btn-outline btn-success">
                    Submit
                  </button>
                </div>
              </>
            ))} */}
          </div>
        </div>
      </div>
      {/* Popup for Symptoms */}
      <div className="modal fade custom-modal" id="graph1">
        <div className="modal-dialog modal-dialog-centered modal-lg">
          <div className="modal-content">
            <div className="modal-header  text-light">
              <h5 className="modal-title">Symptoms List</h5>
              <button
                type="button"
                className="btn-close btn-close-black"
                data-bs-dismiss="modal"
                aria-label="Close"></button>
            </div>
            <div className="modal-body">
              <div className="card">
                <div className="card-body">
                  <h5 className="card-title">
                    <b>Symptoms:</b>
                  </h5>
                  {selectedPatient?.symptoms.map((symptom, index) => (
                    <ul key={index} className="list-unstyled">
                      <li>{symptom}</li>
                      {/* <li>Cold</li>
                                        <li>Cough</li> */}
                      {/* Add more symptoms here */}
                    </ul>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Popup for allergies */}
      <div className="modal fade custom-modal" id="graph2">
        <div className="modal-dialog modal-dialog-centered modal-lg">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">Allergies List</h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"></button>
            </div>
            <div className="modal-body">
              <div className="card border-0">
                <div className="card-body">
                  <h5 className="card-title">
                    <b>Allergies:</b>
                  </h5>
                  {selectedPatient.patient?.allergies.map((allergy, index) => (
                    <ul key={index} className="list-unstyled">
                      <li>{allergy?.name}</li>
                      {/* Add more allergies here */}
                    </ul>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Medical info */}
      <div className="modal fade custom-modal" id="graph3">
        <div className="modal-dialog modal-dialog-centered modal-lg">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title">Medical Records</h5>
              <button
                type="button"
                class="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"></button>
            </div>
            <div class="modal-body">
              <div class="table-responsive">
                <table class="table table-hover">
                  <thead>
                    <tr>
                      <th>Record ID</th>
                      <th>Date</th>
                      <th>Type</th>
                    </tr>
                  </thead>
                  <tbody>
                    {selectedPatient?.patient?.medicalHistory.map(
                      (medhis, index) => (
                        <tr>
                          <td key={index}>{index + 1}</td>
                          <td>
                            {new Date(medhis?.date).toLocaleDateString("en-US")}
                          </td>
                          <td>{medhis?.diseaseName}</td>
                        </tr>
                      )
                    )}
                    {/* <tr>
                                            <td>002</td>
                                            <td>2024-05-04</td>
                                            <td>MRI</td>

                                        </tr>
                                        <tr>
                                            <td>003</td>
                                            <td>2024-05-04</td>
                                            <td>Ultrasound</td>

                                        </tr>
                                        <tr>
                                            <td>004</td>
                                            <td>2024-05-04</td>
                                            <td>CT Scan</td>

                                        </tr>
                                        <tr>
                                            <td>005</td>
                                            <td>2024-05-04</td>
                                            <td>Echocardiogram</td>

                                        </tr> */}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* BMI Popup */}
      <div className="modal fade custom-modal" id="graph4">
        <div className="modal-dialog modal-dialog-centered modal-lg">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">BMI Status</h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"></button>
            </div>
            <div className="modal-body">
              <div id="weight-status">
                <h4 className="text-center">Patient BMI</h4>

                <div className="d-flex justify-content-center align-items-center mt-3">
                  <span className="badge bg-success-light fs-1">
                    {(
                      selectedPatient.patient?.weight /
                      selectedPatient.patient?.height
                    ).toFixed(2)}
                  </span>
                </div>
                <p className="text-center mt-3">
                  {(() => {
                    const bmi = (
                      selectedPatient.patient?.weight /
                      selectedPatient.patient?.height
                    ).toFixed(2);
                    if (bmi < 18.5) {
                      return "Underweight: BMI below 18.5";
                    } else if (bmi >= 18.5 && bmi <= 24.9) {
                      return "Healthy weight: BMI 18.5–24.9";
                    } else if (bmi >= 25.0 && bmi <= 29.9) {
                      return "Overweight: BMI 25.0–29.9";
                    } else {
                      return "Obesity: BMI 30.0 and above";
                    }
                  })()}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
