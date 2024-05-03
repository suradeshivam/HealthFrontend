import React, { useEffect, useState } from "react";
import profile from "./vector.webp";
import { CiPhone } from "react-icons/ci";
import { MdAlternateEmail } from "react-icons/md";
import { FaRegAddressCard } from "react-icons/fa";
import { TbReportMedical } from "react-icons/tb";
import { FaSearch } from "react-icons/fa";
import { OrderState } from "../Contexts";
import { FaRegEdit } from "react-icons/fa";
import { RiDeleteBinLine } from "react-icons/ri";
import { MdOutlineGridView } from "react-icons/md";
import { FaHeadSideCough } from "react-icons/fa";
import { FaLungs } from "react-icons/fa";
import { LiaGrinBeamSweatSolid } from "react-icons/lia";
import { GiStomach } from "react-icons/gi";
import { FaGlassWater } from "react-icons/fa6";
import { GiVomiting } from "react-icons/gi";
import { MdPermIdentity } from "react-icons/md";
import { CiVirus } from "react-icons/ci";
import { PiGenderFemaleLight } from "react-icons/pi";
import { MdOutlineDateRange } from "react-icons/md";
import { MdOutlineBloodtype } from "react-icons/md";
import { FiSend } from "react-icons/fi";
// import Prescription from "./PopUps/Prescription";
import { MdOutlineSaveAlt } from "react-icons/md";
import { MdAddCircleOutline } from "react-icons/md";
import axios from "axios";
import { useLocation } from "react-router-dom";

const Appointment = () => {
  const { selectedPatient, prescriptions, setPrescriptions,setselectedPatient, updatedObservations, setUpdatedObservations } = OrderState();
  const [searchphy, setsearchphy] = useState("");
  const [prescription, setPrescription] = useState(true);
  const [showPrediction, setshowPrediction] = useState(false);
  const [observation, setobservation] = useState(false);
  const [reports, setreports] = useState(false);
  const [dishistory, setdishistory] = useState(false);
  const [symptoms, setsymptoms] = useState(false);
  const [encounters, setencounters] = useState(false);
  const [allergies, setallergies] = useState(false);
  const [vitals, setvitals] = useState(false);
  const [medhistory, setmedhistory] = useState(false);
  const [popupprescription, setpopupprescription] = useState(false);
  const [demographics, setdemograpics] = useState(false);
  const [generatedText, setGeneratedText] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [isProgressVisible, setProgressVisible] = useState(false);
  const [isResultVisible, setResultVisible] = useState(false);
  // const [showModal, setShowModal] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [] = useState([]);

  const location = useLocation();
  const patient = location.state?.patient;

  console.log(patient)

  const closeModal = () => setpopupprescription(false);

 


  const handlePrescription = () => {
    console.log("clicked")
    setobservation(false);
    setreports(false);
    setdishistory(false);
    setsymptoms(false);
    setvitals(false);
    setmedhistory(false);
    setPrescription(true);
    setencounters(false);
    setallergies(false);
    setdemograpics(false);
  }
  const handleObservation = () => {
    console.log("clicked")
    setreports(false);
    setPrescription(false);
    setdishistory(false);
    setsymptoms(false);
    setencounters(false);
    setallergies(false);
    setdemograpics(false);
    setvitals(false);
    setmedhistory(false);
    setobservation(true);

  }
  const handleReports = () => {
    console.log("clicked")
    setPrescription(false);
    setobservation(false);
    setdishistory(false);
    setsymptoms(false);
    setencounters(false);
    setallergies(false);
    setdemograpics(false);
    setvitals(false);
    setmedhistory(false);
    setreports(true);
  }

  const handleHistory = () => {
    console.log("clicked")
    setPrescription(false);
    setobservation(false);
    setreports(false);
    setsymptoms(false);
    setencounters(false);
    setallergies(false);
    setdemograpics(false);
    setvitals(false);
    setmedhistory(false);
    setdishistory(true);
  }

  const handleSympDisp = () => {
    console.log("clicked")
    setdemograpics(false);
    setPrescription(false);
    setobservation(false);
    setreports(false);
    setdishistory(false);
    setencounters(false);
    setallergies(false);
    setvitals(false);
    setmedhistory(false);
    setsymptoms(true);
  }

  const handleEncounters = () => {
    console.log("clicked")
    setdemograpics(false);
    setPrescription(false);
    setobservation(false);
    setreports(false);
    setdishistory(false);
    setsymptoms(false);
    setallergies(false);
    setvitals(false);
    setmedhistory(false);
    setencounters(true);
  }
  const handleAllergies = () => {
    console.log("clicked")
    setdemograpics(false);
    setPrescription(false);
    setobservation(false);
    setreports(false);
    setdishistory(false);
    setsymptoms(false);
    setencounters(false);
    setvitals(false);
    setmedhistory(false);
    setallergies(true);

  }
  const handleVitals = () => {
    console.log("clicked")
    setdemograpics(false);
    setPrescription(false);
    setobservation(false);
    setreports(false);
    setdishistory(false);
    setsymptoms(false);
    setencounters(false);
    setallergies(false);
    setvitals(true);
    setmedhistory(false);

  }
  const handleMedical = () => {
    console.log("clicked")
    setdemograpics(false);
    setPrescription(false);
    setobservation(false);
    setreports(false);
    setdishistory(false);
    setsymptoms(false);
    setencounters(false);
    setallergies(false);
    setvitals(false);
    setmedhistory(true);
  }
  const handleDemographics = () => {
    console.log("clicked")
    setdemograpics(false);
    setPrescription(false);
    setobservation(false);
    setreports(false);
    setdishistory(false);
    setsymptoms(false);
    setencounters(false);
    setallergies(false);
    setdemograpics(true);
  }

  const handlePopUpPrescription = () => {
    setpopupprescription(true);
    setPrescriptions(selectedPatient.prescriptions)
  }

  const handleInputChange = (e, index) => {
    const { name, value } = e.target;
    const updatedObs = [...updatedObservations];
    updatedObs[index] = value;
    setUpdatedObservations(updatedObs);
  };

  const handleEditClick = (index) => {
    setIsEditing(true);
    // setCurrentEditingIndex(index);
  };

  const handleAddObservation = () => {
    setUpdatedObservations([...updatedObservations, ""]);
  };

  const isAuthenticated = localStorage.getItem('token');

  const handleSaveObservation = async() => {
    const appointmentId = selectedPatient._id;
   try{
    const observationres = await axios.put(`https://healthcareserver.onrender.com/appointment/observation/`,
    {
      appointmentId : appointmentId,
      newObservations : updatedObservations,
    },
    {
      headers:{
      "Content-Type":"application/json",
      "Authorization":isAuthenticated,
    },
  }
    )
    console.log(observationres)

    const appointment = await axios.get(`https://healthcareserver.onrender.com/appointment/${appointmentId}`,
    {
      headers:{
      "Content-Type":"application/json",
      "Authorization":isAuthenticated,
    },
  }  
    );
  
    console.log(appointment)
    setselectedPatient(appointment.data.result);

   }catch(error){
    console.log(error)
   }

  };

  // AI
  const startVoiceRecognition = () => {
    const recognition = new window.webkitSpeechRecognition() || new window.SpeechRecognition();
    recognition.lang = 'en-US';
    recognition.start();
    recognition.onresult = event => {
        document.getElementById("prompt").value = event.results[0][0].transcript;
    }
    recognition.onend = () => {
        recognition.stop();
    }
}

// Event listener for voice input button
const handleVoiceButtonClick = () => {
    startVoiceRecognition();
}

// Event listener for form submission
const handleSubmit = event => {
    event.preventDefault(); // Prevent form submission
    
    const promptInput = document.getElementById("prompt").value.trim();
    setErrorMessage(""); // Clear previous error messages
    
    if (!promptInput) {
        setErrorMessage("Please enter a prompt.");
    } else {
        document.getElementById("submitButton").style.display = "none";
        document.getElementById("submitButton").classList.remove("pulse-button"); // Remove pulse animation
        setProgressVisible(true);

        // Call API to generate text
        generateText(promptInput)
            .then(response => {
                setGeneratedText(response);
                setResultVisible(true);
            })
            .catch(error => {
                setErrorMessage("Error: Failed to generate content. Please try again later.");
            })
            .finally(() => {
                document.getElementById("submitButton").style.display = "block";
                setProgressVisible(false);
                document.getElementById("submitButton").classList.add("pulse-button"); // Add pulse animation back
            });
    }
}

// Function to call API and generate text
const generateText = async prompt => {
    const url = "https://generativelanguage.googleapis.com/v1/models/gemini-pro:generateContent?key=AIzaSyAOw_9JeI-xld7WL3pEtFotq9HyuC9pBiw"; // Replace with your API key
    const data = {
        "contents": [
            {
                "role": "user",
                "parts": [
                    {"text": prompt + 'Predict the disease from this list of symptoms. '}
                ]
            }
        ]
    };
    
    const headers = {'Content-Type': 'application/json'};
    
    const response = await fetch(url, {
        method: 'POST',
        headers: headers,
        body: JSON.stringify(data)
    });

    if (!response.ok) {
        throw new Error("Failed to generate content.");
    }

    const result = await response.json();
    let generatedText = result['candidates'][0]['content']['parts'][0]['text'];
    // Remove or trim stars from the generated text
    generatedText = generatedText.replace(/\*/g, '').trim();
    return generatedText;
}




  useEffect(() => {
    setUpdatedObservations(selectedPatient?.observations)
  }, []);

  return (
    <>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
    {patient &&(
       <div>
       <h2>Appointment Details</h2>
       {/* <p>Name: {patient.patient.userId.name}</p>
       <p>Date: {patient.date}</p> */}
       {/* Add more details as needed */}
     </div>
    )}
    
      {selectedPatient === null ? <h1>Data not Available</h1> :
        <div className="bg-white overflow-auto shadow  text-black  flex justify-between  rounded-md m-2 p-4 ">
          <div className="w-full ">
            <div className="w-full">
              <div className="flex md:flex-row md:space-x-6 space-y-6 md:space-y-0 flex-col ">

                {/* User Section */}
                <div className=" w-full md:w-2/5  " >
                  <div className="   space-y-2 p-1 h-auto rounded-lg ">
                    <div className="  " >
                      <div className="  p-8  border-y-blue-400 shadow-2xl  border-t-4 " >
                        <div className=" rounded-3xl ">
                          <div className="ml-1/2 flex justify-center text-center">
                            <img
                              src={profile}
                              className="mt-1 justify-center rounded-full "
                              width={100}
                              height={100}
                              alt="Profile"
                            />
                          </div>
                          <div className="text-center  mt-1 p-1 border-b-2">
                            <span className="mt-4 font-bold text-lg">
                              {selectedPatient.patient.userId?.name}

                            </span></div>
                        </div>
                        <div className="mt-4  space-y-2 ">
                          <span className="flex gap-2 text-center justify-between border-b-2 p-1">

                            <span className="flex flex-row gap-2 ">
                              <MdPermIdentity className="mt-1 " /> Patient Id
                            </span>
                            {selectedPatient.patient.userId?._id}
                          </span>

                          <span className="flex gap-2 text-center justify-between border-b-2 p-1">
                            <span className="flex flex-row gap-2 ">
                              <MdOutlineDateRange className="mt-1 " /> Birth-Date
                            </span>

                            {new Date(selectedPatient.patient?.dob).toLocaleDateString("en-US")}
                          </span>
                            {/* {selectedPatient.patient.mobile} */}

                          <span className="flex gap-2 text-center justify-between border-b-2 p-1">
                            <span className="flex flex-row gap-2 ">
                              <PiGenderFemaleLight className="mt-1 " /> Gender
                            </span>

                            {selectedPatient.patient?.gender}
                            
                          </span>
                          <span className="flex gap-2 text-center justify-between border-b-2 p-1">
                            <span className="flex flex-row gap-2 ">
                              <MdOutlineBloodtype className="mt-1 " /> Blood Type
                            </span>

                            {selectedPatient.patient?.bloodType}
                            
                          </span>
                          <span className="flex gap-2 text-center justify-between border-b-2 p-1">
                            <span className="flex flex-row gap-2 ">
                              <CiPhone className="mt-1 " /> Phone
                            </span>

                            {/* {selectedPatient.patient.mobile} */}
                            {selectedPatient.patient.userId?.mobileNumber}
                          </span>
                          <span className="flex gap-2 text-center justify-between border-b-2 p-1">
                            <span className="flex flex-row gap-2">
                              <MdAlternateEmail className="mt-1" />Email
                            </span>
                            {/* {selectedPatient.patient.email} */}
                            {selectedPatient.patient.userId?.email}
                          </span>
                          <span className="flex gap-2  justify-between border-b-2 p-1">
                            <span className="flex flex-row gap-2">
                              <FaRegAddressCard className="mt-1" />Address
                            </span>
                            {/* {selectedPatient.patient.address.line1} City - {selectedPatient.patient.address.city}
                            <br /> {selectedPatient.patient.address.state}, {selectedPatient.patient.address.zipcode} */}
                            {selectedPatient.patient?.addressLine1}
                          </span>
                          <span className="flex gap-2  justify-between border-b-2 p-1">
                            <span className="flex flex-row gap-2">
                              <FaRegAddressCard className="mt-1" />Height/Weight
                            </span>
                            {selectedPatient.patient?.height}ft /  {selectedPatient.patient?.weight}kg
                          </span>

                        </div>


                        <div className=" mt-3">
                          {/* <div className="mt-4">
                            <div className=" w-full  bg-blue-50 p-2 rounded-md">
                              <h2 className="font-bold text-blue-700 text-center">Vitals</h2>
                            </div>
                            <div className=" mt-2 grid grid-cols-2 gap-2 ml-2 ">
                              <div className="">
                                <div className=" md:grid-cols-2 space-y-2  text-sm  font-bold   text-center">
                                  Blood Pressure
                                </div>
                                <div className=" md:grid-cols-2 space-y-2  text-sm  font-bold text-purple-600   text-center">
                                  120/80
                                </div>
                                <div className=" md:grid-cols-2 space-y-2 text-xs text-gray-500   text-center">
                                  Normal (mm/Hg)
                                </div>
                              </div>
                              <div className="">
                                <div className=" md:grid-cols-2 space-y-2  text-sm  font-bold   text-center">
                                  Heart Rate
                                </div>
                                <div className=" md:grid-cols-2 space-y-2  text-sm  font-bold text-teal-500 text-center">
                                  120/80
                                </div>
                                <div className=" md:grid-cols-2 space-y-2 text-xs text-gray-500   text-center">
                                  Normal (bpm)
                                </div>
                              </div>
                              <div className="">
                                <div className=" md:grid-cols-2 space-y-2  text-sm  font-bold   text-center">
                                Respiration rate
                                </div>
                                <div className=" md:grid-cols-2 space-y-2  text-sm  font-bold text-pink-600   text-center">
                                  92
                                </div>
                                <div className=" md:grid-cols-2 space-y-2 text-xs text-gray-500   text-center">
                                  High (mg/dl)
                                </div>
                              </div>
                              <div className="">
                                <div className=" md:grid-cols-2 space-y-2  text-sm  font-bold   text-center">
                                Body temperature

                                </div>
                                <div className=" md:grid-cols-2 space-y-2  text-sm  font-bold text-red-600   text-center">
                                  120

                                </div>
                                <div className=" md:grid-cols-2 space-y-2 text-xs text-gray-500   text-center">
                                  HIGH (mg/dl)
                                </div>
                              </div>

                            </div>
                            <br />
                          </div>
                          <div className="mt-4">
                            <div className=" w-full  bg-blue-50 p-2 rounded-md">
                              <h2 className="font-bold text-blue-700 text-center">Medical History</h2>
                            </div>
                            <div className=" mt-2 grid grid-cols-2 gap-2 ml-2 ">
                             <div className="text-center text-sm font-bold">
                             Covid 19
                             </div>
                             <div className="text-center text-gray-500">
                             12/03/2024
                             </div>
                             <div className="text-center text-sm font-bold">
                             Heart Surgery 
                             </div>
                             <div className="text-center text-gray-500">
                             12/04/2024
                             </div>
                             <div className="text-center text-sm font-bold">
                             Orthopedic Surgery
                             </div>
                             <div className="text-center text-gray-500">
                             15/06/2024
                             </div>
                            

                            </div>
                            <br /> 
                          </div> */}
                          <div className="bg-red-100  ml-0  rounded-lg shadow">
                            <div className="  p-3 rounded-lg shadow-lg">
                            <input type="text" id="prompt" value={selectedPatient.symptoms} maxLength="100" required className="hidden" />
                              <h1 className=" text-blue-700 text-center">
                                Generate Predicted Disease
                              </h1>
                              <form id="chatForm" onSubmit={handleSubmit}>
                              <button className="mx-auto block text-xm  rounded-lg text-red-600 font-bold" id="submitButton" type="submit" onClick={() => { setshowPrediction(true) }}>Click to Predict</button><br/>
                              {showPrediction && <h1 className="font-bold text-red-500 text-center">
                                AI Predicted Results <br/>
                                {generatedText}
                              </h1>}
                              </form>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                  </div>
                  <br />
                </div>

                <div className="md:w-full">
                  <div className="sm:text-ends text-center mb-1 flex gap-3 justify-end">
                    <div className="flex  p-1 md:p-2.5 rounded shadow-md">
                      <input type="text" className="outline-none sm:w-full border-none transition bg-transparent" value={searchphy} placeholder="Enter Physician Name" />
                      <FaSearch className="text-blue-600 mt-1 text-end justify-end " />
                    </div>
                    <button className="text-white bg-blue-500 shadow-md p-1 px-4 sm:p-1 sm:px-4 sm:text-sm    rounded-lg  mt-1"> Refer   </button>
                  </div>
                  <div className=" border-none  ">

                    <div className=" flex gap-4 mb-5 flex-wrap bg-white shadow-md rounded-sm p-2 text-gray-500">
                      {/* <span className={`text-center py-2  px-2 sm:py-2.5 sm:px-4 hover:cursor-pointer ${observation === true ? 'bg-pink-600 text-white rounded-full shadow-md shadow-pink-300'  : '' `} onClick={handlePrescription}>
                        Prescriptions</span> */}
                      {/* <span className={`py-2 px-2 sm:py-2.5 sm:px-4 cursor-pointer ${demographics === true ? 'bg-blue-600 text-white rounded-full shadow-md shadow-blue-600/50 ' : 'bg-white'}`} onClick={handleDemographics}>
                        Demography
                      </span> */}
                      <span className={`py-2 px-2 sm:py-2.5 sm:px-4 cursor-pointer ${prescription === true ? 'bg-blue-600 text-white rounded-full shadow-md shadow-blue-600/50 ' : 'bg-white'}`} onClick={handlePrescription}>
                        Prescriptions
                      </span>
                      {/* <span className="bg-gray-50 text-center  py-1  px-2 sm:py-2 sm:px-4 hover:cursor-pointer" onClick={handleObservation} >
                        Observation Notes
                      </span> */}
                      <span className={`py-2 px-2 sm:py-2.5 sm:px-4 cursor-pointer ${observation === true ? 'bg-blue-600 text-white rounded-full shadow-md shadow-blue-600/50' : 'bg-white'}`} onClick={handleObservation}>
                        Observation
                      </span>

                      {/* <span className="bg-gray-50 text-center  py-1  px-1 sm:py-2 sm:px-4 hover:cursor-pointer " onClick={handleReports}>
                        Reports
                      </span> */}
                      <span className={`py-2 px-2 sm:py-2.5 sm:px-4 cursor-pointer ${reports === true ? 'bg-blue-600 text-white rounded-full shadow-md shadow-blue-600/50' : 'bg-white'}`} onClick={handleReports}>
                        Reports
                      </span>

                      {/* <span className="bg-gray-50 text-center  py-1  px-1 sm:py-2 sm:px-4 hover:cursor-pointer " onClick={handleHistory}>
                        Medical History
                      </span> */}
                      {/* <span className={`py-2 px-2 sm:py-2.5 sm:px-4 cursor-pointer ${dishistory === true ? 'bg-blue-600 text-white rounded-full shadow-md shadow-blue-600/50' : 'bg-gray-50'}`} onClick={handleHistory}>
                        History
                      </span> */}
                      <span className={`py-2 px-2 sm:py-2.5 sm:px-4 cursor-pointer ${symptoms === true ? 'bg-blue-600 text-white rounded-full shadow-md shadow-blue-600/50' : 'bg-gray-50'}`} onClick={handleSympDisp}>
                        Symptoms
                      </span>
                      <span className={`py-2 px-2 sm:py-2.5 sm:px-4 cursor-pointer ${encounters === true ? 'bg-blue-600 text-white rounded-full shadow-md shadow-blue-600/50' : 'bg-gray-50'}`} onClick={handleEncounters}>
                        Encounters
                      </span>
                      <span className={`py-2 px-2 sm:py-2.5 sm:px-4 cursor-pointer ${allergies === true ? 'bg-blue-600 text-white rounded-full shadow-md shadow-blue-600/50' : 'bg-gray-50'}`} onClick={handleAllergies}>
                        Allergies
                      </span>
                      <span className={`py-2 px-2 sm:py-2.5 sm:px-4 cursor-pointer ${vitals === true ? 'bg-blue-600 text-white rounded-full shadow-md shadow-blue-600/50' : 'bg-gray-50'}`} onClick={handleVitals}>
                        Vitals
                      </span>
                      <span className={`py-2 px-2 sm:py-2.5 sm:px-4 cursor-pointer ${medhistory === true ? 'bg-blue-600 text-white rounded-full shadow-md shadow-blue-600/50' : 'bg-gray-50'}`} onClick={handleMedical}>
                        Medical History
                      </span>

                    </div>


                    <div>


                      {prescription &&
                        <>
                          {/* <div className="overflow-auto  shadow-xl">
                            <table className="w-full overflow-auto text-center border-none  ">
                              <thead>
                                <tr className=" border-b-2 text-gray-600 ">
                                  <th className="b  py-2   px-4">
                                    Medication
                                  </th>
                                  <th className=" py-2   px-4">
                                    Category
                                  </th>
                                  <th className=" py-2   px-4">
                                    Dose Schedule
                                  </th>
                                  <th className=" py-2   px-4">
                                    Suggested Lab
                                  </th>
                                  <th>
                                    Next Review
                                  </th>
                                  <th className="bg-gray-50 py-2   px-4">
                                    Action
                                  </th>
                                </tr>
                                <tr className="border-none ">
                                  <td className="py-4 px-4 mt-2">Medicine 1</td>
                                  <td className=""><span className="border py-0.5 px-3  rounded-full border-blue-600 text-blue-600" style={{ fontSize: "15px" }}>Tablet</span></td>
                                  <td className="">Morning</td>
                                  <td className="" rowSpan={3}>Sonography</td>
                                  <td className=" " rowSpan={3}>24/02/2002 </td>
                                  <td className="flex gap-1  mt-2 justify-center">
                                    
                                    <span className="gap-2 flex">
                                      <button className=""><FaRegEdit className="text-2xl text-purple-700" /></button>
                                      <button className=""><RiDeleteBinLine className="text-2xl text-red-600" /></button>
                                    </span>
                                  </td>
                                </tr>

                                <tr className=" ">
                                  <td className="py-4 px-4   ">Medicine 2</td>
                                  <td className=""><span className="border py-0.5 px-3.5  rounded-full border-green-600 text-green-600" style={{ fontSize: "15px" }}>Syruf</span></td>
                                  <td className=" ">Afternoon</td>
                                  <td className="flex gap-1  mt-2 justify-center">
                                    
                                    <span className="gap-2 flex">
                                      <button className=""><FaRegEdit className="text-2xl text-purple-700" /></button>
                                      <button className=""><RiDeleteBinLine className="text-2xl text-red-600" /></button>
                                    </span>
                                  </td>
                                </tr>
                                <tr >
                                  <td className="py-4 px-4 mt-2  ">Medicine 3</td>
                                  <td className=""><span className="border py-0.5 px-3  rounded-full border-blue-600 text-blue-600" style={{ fontSize: "15px" }}>Tablet</span></td>
                                  <td className=" ">Twice a day</td>
                                  <td className="flex gap-1  mt-2 justify-center">
                                   
                                    <span className="gap-2 flex">
                                      <button className=""><FaRegEdit className="text-2xl text-purple-700" /></button>
                                      <button className=""><RiDeleteBinLine className="text-2xl text-red-600" /></button>
                                    </span>
                                  </td>
                                </tr>
                              </thead>
                            </table>
                          </div> */}
                          <div className="overflow-auto  shadow-xl">
                            <span className="mb-5 ml-2 font-bold    border-blue-500 border-l-blue-500 border-l-4 shadow-sm p-2 text-blue-600 rounded-sm">Monday 04/11/2024</span>
                            <table className="w-full mt-6 overflow-auto text-center border-none  ">
                              <thead>
                                <tr className=" border-b-2 text-gray-600 ">
                                  <th className="b  py-2   px-4">
                                    Index
                                  </th>
                                  <th className=" py-2   px-4">
                                    Prescriptions
                                  </th>
                                  
                                 
                                  <th className=" py-2   px-4">
                                    View
                                  </th>
                                  <th className=" py-2   px-4">
                                    Send
                                  </th>

                                </tr>
                                <tr className="border-none ">
                                  <td className="py-4 px-4 mt-2">1</td>
                                  <td className=""><span className=" py-0.5 px-3  rounded-full  " style={{ fontSize: "15px" }}>Prescription 1</span></td>
                                 
                                  
                                  <td className=" "><button className="" onClick={handlePopUpPrescription}><MdOutlineGridView className="text-blue-600 text-3xl" /></button></td>

                                  <td className=" "><button className=""><FiSend className="text-green-600 text-2xl" /></button></td>


                                </tr>



                              </thead>
                            </table>
                          </div>
                        </>
                      }
                      {observation &&
                        <>
                          <table className="w-full text-center   shadow-xl">
                            <thead >
                              <tr className="text-gray-600 border-b-2">
                                <th className="bg-gray-50  py-3   px-4">
                                  Observation Notes
                                </th>
                                <th className="bg-gray-50 py-3   px-4">
                                  Edit
                                </th>
                              </tr>
                              {updatedObservations.map((observation, index) => (
                                <tr className=" " key={index}>
                                  <td className="text-sm mt-2 p-4  ">
                                    <input
                                      type="text"
                                      name="name"
                                      value={observation}
                                      onChange={(e) => handleInputChange(e, index)}
                                      disabled={!isEditing}
                                      className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring focus:border-blue-300"
                                    />
                                  </td>
                                  <td className="flex gap-1 border-l-2 mt-2 justify-center">
                                    {/* <button className="sm:text-white font-bold text-green-500 sm:bg-green-500  p-1 px-2 sm:p-1 sm:px-3 sm:text-sm rounded-lg">Edit</button>
                                  <button className="sm:text-white font-bold text-red-500 sm:bg-red-500 p-1 px-2 sm:p-1 sm:px-3 sm:text-sm rounded-lg">Delete</button> */}
                                    <span className="gap-2 flex">
                                      <button className=""><FaRegEdit className="text-2xl text-purple-700" onClick={handleEditClick} /></button>
                                      {/* <button className=""><RiDeleteBinLine className="text-2xl text-red-600" /></button> */}
                                    </span>
                                  </td>
                                </tr>
                              ))}
                              <div className="flex justify-between p-4">
                              <button className="flex  p-2 font-bold" onClick={handleAddObservation}><MdAddCircleOutline className="text-2xl text-red-600 mr-2" />Add Observation</button>
                              <button className="flex  p-2 font-bold" onClick={handleSaveObservation}><MdOutlineSaveAlt className="text-2xl text-red-600 mr-2" />Save Observation</button>
                              </div>


                            </thead>
                          </table>
                          

                        </>
                      }
                      {reports &&

                        <>
                          <table className="w-full text-center shadow-xl ">
                            <thead>
                              <tr className="text-gray-600 border-b-2">
                                <th className="bg-gray-50 py-2   px-4">Index</th>
                                <th className="bg-gray-50 py-2   px-4">
                                  Report
                                </th>
                                <th className="bg-gray-50 py-2   px-4">
                                  Date
                                </th>
                                <th className="bg-gray-50 py-2   px-4">
                                  Time
                                </th>
                                <th className="bg-gray-50 py-2   px-4">
                                  View
                                </th>
                              </tr>
                              <tr className="">
                                <td className="py-4 px-4  ">1</td>
                                <td className="text-sm mt-2  ">Report 1</td>
                                <td className="text-sm mt-2  ">24/02/24</td>
                                <td className="text-sm mt-2  ">10:00 PM</td>
                                <td className=" "><button className=""><MdOutlineGridView className="text-blue-600 text-3xl" /></button></td>
                              </tr>
                              <tr className="" >
                                <td className="py-4 px-4   ">2</td>
                                <td className="text-sm mt-2  ">Report 2</td>
                                <td className="text-sm mt-2  ">24/02/24</td>
                                <td className="text-sm mt-2  ">10:00 PM</td>
                                <td className=" "><button className=""><MdOutlineGridView className="text-blue-600 text-3xl" /></button></td>
                              </tr>
                              <tr >
                                <td className="py-4 px-4  ">3</td>
                                <td className="text-sm mt-2  ">Report 3</td>
                                <td className="text-sm mt-2  ">24/02/24</td>
                                <td className="text-sm mt-2  ">10:00 PM</td>
                                <td className=" "><button className=""><MdOutlineGridView className="text-blue-600 text-3xl" /></button></td>
                              </tr>
                            </thead>
                          </table>
                         
                        </>
                      }

                      {dishistory &&
                        <>
                          {/* <div className="mt-5 overflow-auto shadow-xl">

                            <table className="w-full text-center  ">
                              <thead>
                                <tr className="text-gray-600 border-b-2">
                                  <th className="bg-gray-50 py-2   px-4">Doctor Name</th>
                                  <th className="bg-gray-50 py-2   px-4">
                                    Appointment Date
                                  </th>
                                  <th className="bg-gray-50 py-2   px-4">
                                    Appointment Time
                                  </th>
                                  <th className="bg-gray-50 py-2   px-4">
                                    View
                                  </th>
                                </tr>
                                <tr className="">
                                  <td className="py-4 px-4  ">Michal Chandalr</td>
                                  <td className="text-sm mt-2  ">24/03/2024 </td>
                                  <td className="text-sm mt-2  ">4:00PM</td>
                                  
                                  <td className=" "><button className=""><MdOutlineGridView className="text-blue-600 text-3xl" /></button></td>
                                </tr>
                                <tr className="">
                                  <td className="py-4 px-4  ">Michal Perry</td>
                                  <td className="text-sm mt-2  ">24/03/2024 </td>
                                  <td className="text-sm mt-2  ">4:00PM</td>
                                  <td className=" "><button className=""><MdOutlineGridView className="text-blue-600 text-3xl" /></button></td>
                                </tr>
                                <tr >
                                  <td className="py-4 px-4  ">Eliza Stoy</td>
                                  <td className="text-sm mt-2  ">24/03/2024 </td>
                                  <td className="text-sm mt-2  ">4:00PM</td>
                                  <td className=" "><button className=""><MdOutlineGridView className="text-blue-600 text-3xl" /></button></td>
                                </tr>
                              </thead>
                            </table>
                          </div> */}
                        </>
                      }

                      {symptoms &&
                        <>
                          {/* <h1 className="text-center mb-3 font-bold">List Of Symptoms</h1> */}
                          <div className="shadow-lg mt-10">
                            <span className="mb-5 font-bold ml-10   border-blue-500 border-l-blue-500 border-l-4 shadow-sm p-2 text-blue-600 rounded-sm">Monday 04/11/2024</span>
                            <div className="grid md:grid-cols-5 grid-cols-2  gap-2 mt-5 flex-wrap justify-evenly mb-3  p-2">
                            {selectedPatient.symptoms.map((symptom,index) =>(
                              <div className="flex flex-col items-center  justify-center">
                                <div className="border-2 p-6 rounded-md border-blue-300">
                                  <FaHeadSideCough className="text-3xl mx-auto text-gray-500" />
                                </div>
                                <span className="text-center mt-3 text-gray-500">{symptom}</span>
                              </div>
                                ))}
                              {/* <div className="flex flex-col items-center  justify-center">
                                <div className="border-2 p-6 rounded-md border-blue-300 ">
                                  <LiaGrinBeamSweatSolid className="text-3xl mx-auto text-gray-500" />
                                </div>
                                <span className="text-center mt-3 text-gray-500">Swelling</span>
                              </div>
                              <div className="flex flex-col items-center  justify-center">
                                <div className="border-2 p-6 rounded-md border-blue-300 ">
                                  <GiStomach className="text-3xl mx-auto text-gray-500" />
                                </div>
                                <span className="text-center mt-3 text-gray-500">Acidity</span>
                              </div>
                              <div className="flex flex-col items-center justify-center">
                                <div className="border-2 justify-center p-6 rounded-md border-blue-300 ">
                                  <FaGlassWater className="text-3xl mx-auto text-gray-500 " />
                                </div>
                                <span className="text-center mt-3 text-gray-500">Constipation</span>
                              </div>
                              <div className="flex flex-col items-center  justify-center">
                                <div className="border-2 p-6 rounded-md border-blue-300 ">
                                  <FaLungs className="text-3xl mx-auto text-gray-500" />
                                </div>
                                <span className="text-center mt-3 text-gray-500">Shortness of Breath</span>
                              </div> */}
                            </div>

                            {/* <span className="mb-5 font-bold ml-10 mt-2  border-blue-500 border-l-blue-500 border-l-4 shadow-sm p-2 text-blue-600 rounded-sm">Saturday 24/09/2024</span>
                            <div className="grid md:grid-cols-5 grid-cols-2  gap-2 mt-5 flex-wrap justify-evenly shadow-lg p-5">
                              <div className="flex flex-col items-center  justify-center">
                                <div className="border-2 p-6 rounded-md border-blue-300">
                                  <FaHeadSideCough className="text-3xl mx-auto text-gray-500" />
                                </div>
                                <span className="text-center mt-3 text-gray-500">Cough</span>
                              </div>
                              <div className="flex flex-col items-center  justify-center">
                                <div className="border-2 p-6 rounded-md border-blue-300 ">
                                  <LiaGrinBeamSweatSolid className="text-3xl mx-auto text-gray-500" />
                                </div>
                                <span className="text-center mt-3 text-gray-500">Swelling</span>
                              </div>
                              <div className="flex flex-col items-center  justify-center">
                                <div className="border-2 p-6 rounded-md border-blue-300 ">
                                  <GiStomach className="text-3xl mx-auto text-gray-500" />
                                </div>
                                <span className="text-center mt-3 text-gray-500">Acidity</span>
                              </div>
                              <div className="flex flex-col items-center justify-center">
                                <div className="border-2 justify-center p-6 rounded-md border-blue-300 ">
                                  <FaGlassWater className="text-3xl mx-auto text-gray-500 " />
                                </div>
                                <span className="text-center mt-3 text-gray-500">Constipation</span>
                              </div>
                              <div className="flex flex-col items-center  justify-center">
                                <div className="border-2 p-6 rounded-md border-blue-300 ">
                                  <FaLungs className="text-3xl mx-auto text-gray-500" />
                                </div>
                                <span className="text-center mt-3 text-gray-500">Shortness of Breath</span>
                              </div>
                            </div> */}
                          </div>

                        </>
                      }

                      {encounters &&
                        <>
                          <div className="mt-5 overflow-auto shadow-xl">

                            <table className="w-full text-center  ">
                              <thead>
                                <tr className="text-gray-600 border-b-2">
                                  <th className="bg-gray-50 py-2   px-4">
                                    Date
                                  </th>
                                  <th className="bg-gray-50 py-2   px-4">
                                    Physician Name</th>
                                  <th className="bg-gray-50 py-2   px-4">
                                    Treatment
                                  </th>
                                  <th className="bg-gray-50 py-2   px-4">
                                    View
                                  </th>
                                </tr>
                                <tr className="">
                                  <td className="text-sm mt-2  ">24/03/2024 </td>
                                  <td className="py-4 px-4  ">Michal Chandalr</td>
                                  <td className="text-sm mt-2  ">CheckUp</td>
                                  {/* <td className=" "><button className="sm:text-white font-bold text-blue-500 sm:bg-blue-400 p-1 px-3 rounded-lg">View</button></td> */}
                                  <td className=" "><button className=""><MdOutlineGridView className="text-blue-600 text-3xl" /></button></td>
                                </tr>
                                <tr className="">
                                  <td className="text-sm mt-2  ">24/03/2024 </td>
                                  <td className="py-4 px-4  ">Michal Perry</td>
                                  <td className="text-sm mt-2  ">CheckUp</td>
                                  <td className=" "><button className=""><MdOutlineGridView className="text-blue-600 text-3xl" /></button></td>
                                </tr>
                                <tr >
                                  <td className="text-sm mt-2  ">24/03/2024 </td>
                                  <td className="py-4 px-4  ">Eliza Stoy</td>
                                  <td className="text-sm mt-2  ">CheckUp</td>
                                  <td className=" "><button className=""><MdOutlineGridView className="text-blue-600 text-3xl" /></button></td>
                                </tr>
                              </thead>
                            </table>
                          </div>
                        </>
                      }
                      {allergies &&
                        <>
                          <div className="grid grid-cols-5 gap-6 shadow-xl p-4">
                          {selectedPatient.patient.allergies.map((allergy,index)=>(
                            <div className="border rounded-full p-3 flex gap-2 border-r-8 border-r-blue-500 border-blue-500">
                              <CiVirus className="mt-1 text-lg text-blue-700" />
                              <div className="text-blue-400 font-bold">{allergy?.name}</div>
                              <div className="text-gray-500">{allergy?.type}</div>
                            </div>
                          ))}
                            {/* <div className="border rounded-full p-3 flex gap-2 border-r-8 border-r-blue-500 border-blue-500">
                              <CiVirus className="mt-1 text-lg text-blue-700" />
                              <div className="text-blue-400 font-bold">Egg</div>
                              <div className="text-red-600">High</div>
                            </div>
                            <div className="border rounded-full p-3 flex gap-2 border-r-8 border-r-blue-500 border-blue-500">
                              <CiVirus className="mt-1 text-lg text-blue-700" />
                              <div className="text-blue-400 font-bold">Fish</div>
                              <div className="text-green-500">Normal</div>
                            </div>
                            <div className="border rounded-full p-3 flex gap-2 border-r-8 border-r-blue-500 border-blue-500">
                              <CiVirus className="mt-1 text-lg text-blue-700" />
                              <div className="text-blue-400 font-bold">Dust</div>
                              <div className="text-gray-500">Moderate</div>
                            </div>
                            <div className="border rounded-full p-3 flex gap-2 border-r-8 border-r-blue-500 border-blue-500">
                              <CiVirus className="mt-1 text-lg text-blue-700" />
                              <div className="text-blue-400 font-bold">Dust</div>
                              <div className="text-red-600">High</div>
                            </div>
                            <div className="border rounded-full p-3 flex gap-2 border-r-8 border-r-blue-500 border-blue-500">
                              <CiVirus className="mt-1 text-lg text-blue-700" />
                              <div className="text-blue-400 font-bold">Dust</div>
                              <div className="text-red-600">High</div>
                            </div>
                            <div className="border rounded-full p-3 flex gap-2 border-r-8 border-r-blue-500 border-blue-500">
                              <CiVirus className="mt-1 text-lg text-blue-700" />
                              <div className="text-blue-400 font-bold">Dust</div>
                              <div className="text-red-600">High</div>
                            </div> */}

                          </div>
                        </>
                      }
                      {vitals &&
                        <>
                          <div className="mt-4 shadow-xl p-2">
                            <div className=" w-full bg-blue-50 p-1 rounded-md">
                              <h2 className="font-bold text-blue-700 mt-4 text-center mb-4">Vital Signs</h2>
                            </div>
                            <div className=" mt-2 flex justify-evenly ml-2 mt-5 ">
                            {/* {selectedPatient.vitals.map((vital,index)=>( */}
                              
                              <div className="">
                                <div className=" md:grid-cols-2 space-y-2    font-bold   text-center">
                                 BloodPressure
                                </div>
                                <div className=" md:grid-cols-2 space-y-2    font-bold text-purple-600   text-center">
                                {selectedPatient.vitals.bloodPressure}
                                </div>
                                <div className=" md:grid-cols-2 space-y-2  text-gray-500   text-center">
                                  Normal (mm/Hg)
                                </div>
                              </div>
                               {/* ))} */}
                              <div className="">
                                <div className=" md:grid-cols-2 space-y-2    font-bold   text-center">
                                  Heart Rate
                                </div>
                                <div className=" md:grid-cols-2 space-y-2    font-bold text-teal-500 text-center">
                                {selectedPatient.vitals.heartRate}
                                </div>
                                <div className=" md:grid-cols-2 space-y-2  text-gray-500   text-center">
                                  Normal (bpm)
                                </div>
                              </div>
                              <div className="">
                                <div className=" md:grid-cols-2 space-y-2    font-bold   text-center">
                                Body temperature
                                </div>
                                <div className=" md:grid-cols-2 space-y-2    font-bold text-pink-600   text-center">
                                {selectedPatient.vitals.temparature}
                                </div>
                                <div className=" md:grid-cols-2 space-y-2  text-gray-500   text-center">
                                  High (mg/dl)
                                </div>
                              </div>
                             

                            </div>
                           
                            <br />
                          </div>
                        </>
                      }
                      {medhistory &&
                        <>
                          <div className="shadow-xl ">
                            <table className="w-full text-center   ">
                              <thead >
                                <tr className="text-gray-600 border-b-2">
                                  <th className="bg-gray-50  py-3 border-r-2  ">
                                    Previous Disease
                                  </th>
                                  <th className="bg-gray-50 py-3 border-r-2 px-5">
                                    Date
                                  </th>
                                  <th className="bg-gray-50 py-3.5   px-5">
                                    View
                                  </th>
                                </tr>
                                {selectedPatient.patient.medicalHistory.map((medhis,index)=>(
                                <tr className="" key={index}>
                                  <td className="text-sm mt-2  border-r-2"> {medhis?.diseaseName} </td>
                                  <td className="py-4 px-4  border-r-2"> {new Date(medhis?.date).toLocaleDateString("en-US")}</td>
                                  <td className=" "><button className=""><MdOutlineGridView className="text-blue-600 text-3xl" /></button></td>

                                </tr>
                                ))}
                                

                                {/* </div> */}
                                <br />

                              </thead>
                            </table>
                          </div>
                        </>
                      }
                    </div>
                  </div>

                  {/* Previous History */}

                </div>
              </div>
            </div>
          </div>
        </div>
      }
       {/* {popupprescription && <Prescription closeModal={closeModal} />} */}
      {/* } */}

    </>
  );
};

export default Appointment;



