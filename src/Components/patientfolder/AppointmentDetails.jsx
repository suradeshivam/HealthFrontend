import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { OrderState } from "../../Contexts";
import axios from "axios";
import { Bounce, ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router-dom";

export default function Info() {
  const [uploadedFileName, setUploadedFileName] = useState("");
  const [fileName, setFileName] = useState("");
  const [patientInfo, setPatientInfo] = useState("");

  const navigate = useNavigate();

  const {
    symptoms,
    setSymptoms,
    temperature,
    setTemperature,
    bloodpresure,
    setBloodpresure,
    heartRate,
    setHeartRate,
    reportFiles,
    setReportFiles,
    pdfRefs,
    setPdfRefs,
  } = OrderState();

  const [showModal, setShowModal] = useState(false);
  const [agreed, setAgreed] = useState(false);
  const [patientName, setPatientName] = useState("");
  const [isCheckboxChecked, setIsCheckboxChecked] = useState(false); // State for checkbox

  // Vitals

  const [inputSymptoms, setInputSymptoms] = useState("");

  const handleFileChange = async (event) => {
    try {
      const isAuthenticated = localStorage.getItem("token");
      const file = event.target.files[0];
      if (file) {
        setFileName(file.name);

        const formData = new FormData();
        formData.append("title", fileName);
        formData.append("file", file);
        console.log(fileName, file);

        const result = await axios.post(
          "https://healthbackend-3xh2.onrender.com/service/uploadPdf",
          formData,
          {
            headers: {
              authorization: isAuthenticated,
            },
          }
        );

        console.log(result);
        setUploadedFileName(result.data.result);

        toast(result.data.message);
      } else {
        setFileName("");
      }
    } catch (error) {
      console.log(error);
      toast.error(error.message);
    }
  };

  const addSymptom = () => {
    if (inputSymptoms.trim() !== "") {
      setSymptoms([...symptoms, inputSymptoms]); // Add new symptom to the list
      setInputSymptoms(""); // Clear input field
    }
    console.log(symptoms);
  };

  //   const handleFileChange = (e) => {
  //     const files = Array.from(e.target.files);
  //     const newFiles = files.map((file) => ({
  //       file: file,
  //       src: URL.createObjectURL(file), // Create URL for each file
  //     }));
  //     setReportFiles([...reportFiles, ...newFiles]);
  //     newFiles.forEach(({ file }) => {
  //       if (file.type === "application/pdf") {
  //         const reader = new FileReader();
  //         reader.onload = (e) => {
  //           setPdfRefs((pdfRefs) => [...pdfRefs, e.target.result]);
  //         };
  //         reader.readAsDataURL(file);
  //       }
  //     });
  //   };

  const handleRemoveFile = (index) => {
    const updatedFiles = [...reportFiles];
    updatedFiles.splice(index, 1);
    setReportFiles(updatedFiles);

    const updatedPdfRefs = [...pdfRefs];
    updatedPdfRefs.splice(index, 1);
    setPdfRefs(updatedPdfRefs);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log("Vitals:", temperature);
    console.log("Vitals:", heartRate);
    console.log("Vitals:", bloodpresure);
    console.log("Symptoms:", symptoms);
    console.log(
      "Report Files:",
      reportFiles.map(({ file }) => file)
    );
    console.log("PDF Files:", pdfRefs);

    navigate("/checkout");


  };

  const handleAgree = () => {
    setAgreed(true);
    setShowModal(false);
  };

  const handleCheckboxChange = (e) => {
    setIsCheckboxChecked(e.target.checked); // Update checkbox state
  };

  // Internal CSS for fade-in animation
  const modalStyle = `
        .fade-in {
            animation: fadeIn 0.7s ease forwards;
        }

        @keyframes fadeIn {
            from { opacity: 0; }
            to { opacity: 1; }
        }
    `;

    useEffect (() => {

      const patientInfo = JSON.parse(localStorage.getItem("patientInfo"));
      setPatientInfo(patientInfo);

    }, []);

  return (
    <div className="main-wrapper">
      {/* Consents with Symptoms */}
      <div className="container">
        <div className="row align-items-center inner-banner">
          <ToastContainer />
          <div className="col-md-12 col-12 text-center">
            <h2 className="breadcrumb-title">Consents with Symptoms</h2>
          </div>
        </div>
      </div>
      {/* Report */}
      <div className="content  mt-4">
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <form onSubmit={handleSubmit}>
                <h4>Vitals</h4>
                <div className="">
                  <div className="mb-3">
                    <label htmlFor="vitals">Temperature: ( C)</label>
                    <input
                      type="text"
                      id="vitals"
                      className="form-control"
                      value={temperature}
                      onChange={(e) => setTemperature(e.target.value)}
                      placeholder="Enter Temperature"
                    />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="vitals"> Blood Presure: (mg/dl)</label>
                    <input
                      type="text"
                      id="vitals"
                      className="form-control"
                      value={bloodpresure}
                      onChange={(e) => setBloodpresure(e.target.value)}
                      placeholder="Enter BloodPresure"
                    />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="vitals">Heart Rate: (bpm)</label>
                    <input
                      type="text"
                      id="vitals"
                      className="form-control"
                      value={heartRate}
                      onChange={(e) => setHeartRate(e.target.value)}
                      placeholder="Enter Heart Rate"
                    />
                  </div>
                </div>
                <h4>Symptoms</h4>
                <div
                  className="mb-3"
                  style={{
                    display: "flex",
                    gap: "10px",
                    alignItems: "center",
                    justifyContent: "center",
                  }}>
                  <input
                    type="text"
                    className="form-control"
                    value={inputSymptoms}
                    onChange={(e) => setInputSymptoms(e.target.value)}
                    placeholder="Enter symptoms (minimum 3)"
                  />
                  {/* Button to add symptoms */}
                  <button
                    type="button"
                    className="btn btn-primary mt-2"
                    onClick={addSymptom}>
                    Add
                  </button>
                </div>
                {/* Display added symptoms */}
                {symptoms.length > 0 && (
                  <div style={{ display: "flex", gap: "10px" }}>
                    <h5>Added Symptoms:</h5>
                    <ul
                      style={{
                        display: "flex",
                        flex: "column",
                        flexWrap: "wrap",
                      }}>
                      {symptoms.map((symptom, index) => (
                        <li key={index}>
                          {symptom}
                          {index !== symptoms.length - 1 && ","}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
                <h4>Report</h4>
                <div className="mb-3">
                  <label htmlFor="reportFile">Upload Report:</label>
                  <input
                    type="file"
                    id="reportFile"
                    className="form-control"
                    onChange={handleFileChange}
                    multiple
                  />
                </div>
                {uploadedFileName && (
                  <iframe
                    style={{ width: "100%", height: "600px" }}
                    src={`https://healthbackend-3xh2.onrender.com/files/${uploadedFileName}`}></iframe>
                )}
                {/* Terms & Conditions */}
                <div className="terms-accept">
                  <div className="custom-checkbox">
                    <input
                      type="checkbox"
                      id="terms_accept"
                      checked={isCheckboxChecked}
                      onChange={handleCheckboxChange}
                    />
                    <label
                      style={{ marginLeft: "10px" }}
                      htmlFor="terms_accept">
                      I have read and accept{" "}
                      <a
                        className="btn btn-link"
                        onClick={() => setShowModal(true)}>
                        Consent Form
                      </a>
                    </label>
                  </div>
                </div>
                {/* Submit Button */}
                {/* <Link to="/checkout"> */}
                  <button
                    type="submit"
                    className="btn btn-primary submit-btn my-3"
                    disabled={!isCheckboxChecked}
                   
                    >
                    Submit
                  </button>
                {/* </Link> */}
              </form>
            </div>
            <div className="col-md-6">
              {/* Conditionally render PDF Preview */}
              {reportFiles.length > 0 ? (
                <div>
                  <h4>PDF Previews</h4>
                  {reportFiles.map((file, index) => (
                    <div key={index}>
                      <h5>File {index + 1}</h5>
                      {pdfRefs[index] && (
                        <embed
                          src={pdfRefs[index]}
                          type="application/pdf"
                          width="100%"
                          height="300px"
                        />
                      )}
                      <button
                        className="btn btn-danger btn-sm mt-2"
                        onClick={() => handleRemoveFile(index)}>
                        Remove
                      </button>
                    </div>
                  ))}
                </div>
              ) : (
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    height: "350px",
                  }}>
                  <h4>No Files Uploaded</h4>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
      {/* Modal */}
      <style>{modalStyle}</style> {/* Include internal CSS */}
      <div
        className={`modal fade custom-modal ${showModal ? "show fade-in" : ""}`}
        style={{ display: showModal ? "block" : "none" }}
        tabIndex="-1"
        role="dialog">
        <div
          className={`modal fade custom-modal ${
            showModal ? "show fade-in" : ""
          }`}
          style={{ display: showModal ? "block" : "none" }}
          tabIndex="-1"
          role="dialog">
          <div className="modal-dialog modal-dialog-centered" role="document">
            <div className="modal-content" style={{ marginTop: "100px" }}>
              <div className="modal-header">
                <h5 className="modal-title">Consent Form</h5>
                <button
                  type="button"
                  className="btn-close"
                  onClick={() => setShowModal(false)}></button>
              </div>
              <div className="modal-body mb-3">
                {/* Terms & Conditions Agreement */}
                <p>
                  Patient Consent Form
                  <br />
                  <br />
                  I,{" "}
                  <input
                    type="text"
                    id="patientName"
                    style={{
                      width: "150px",
                      fontSize: "14px",
                      padding: "5px",
                      borderRadius: "5px",
                      border: "1px solid #ccc",
                    }}
                    value={patientInfo?.userId?.name}
                    onChange={(e) => setPatientName(e.target.value)}
                    placeholder="Enter Patient Name"
                  />
                  , hereby consent to [Procedure/Service] to be performed at
                  TwinsDoc Pvt Ltd on {new Date().toDateString()}.
                  <br />
                  <br />
                  I understand the nature of the procedure/service, its purpose,
                  potential benefits, risks, and alternatives. I have had the
                  opportunity to ask questions, and all my concerns have been
                  addressed to my satisfaction.
                  <br />
                  <br />
                  I understand that I have the right to refuse or withdraw
                  consent at any time before or during the procedure/service.
                  <br />
                  <br />
                  I acknowledge that no guarantees have been made regarding the
                  outcome of the procedure/service, and unforeseen complications
                  may occur.
                  <br />
                  <br />
                  I consent to the use of any photographs, images, or recordings
                  deemed necessary for medical, scientific, or educational
                  purposes, provided my identity remains confidential.
                  <br />
                  <br />
                  I confirm that I have been informed about the risks and
                  benefits of anesthesia, if applicable, and I consent to its
                  administration as deemed necessary by the healthcare provider.
                  <br />
                  <br />
                  I certify that I am of legal age and competent to provide
                  consent for this procedure/service.
                  <br />
                  <br />
                  I understand that I may request further information or
                  clarification at any time.
                  <br />
                  <br />
                </p>
              </div>
              <div className="modal-footer text-center">
                {!agreed && (
                  <button
                    className="btn btn-primary submit-btn"
                    onClick={handleAgree}>
                    Agree
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Blur background when modal is open */}
      {showModal && <div className="modal-backdrop fade show"></div>}
    </div>
  );
}