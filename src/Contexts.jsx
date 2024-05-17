import axios from "axios";
import { createContext, useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const OrderContext = createContext();

const Context = ({ children }) => {
  const [sideOpen, setSideOpen] = useState(false);
  const [selectedDoctor, setSelectedDoctor] = useState()
  const [selectedPatient, setselectedPatient] = useState(null);
  const navigate = useNavigate();
  const [userInfo, setUserInfo] = useState({});
  const [doctorInfo, setDoctorInfo] = useState({});
  const [appointments, setAppointments] = useState([]);
  const [height, setHeight] = useState(0);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [role, setRole] = useState("");
  const [homeDocFilter, setHomeDocFilter] = useState([]);
  const [prescriptions, setPrescriptions] = useState([
    {
      name: "",
      dosage: "",
      frequency: "",
      route: "",
      quantity: "",
      refills: "",
      instructions: "",
    },
  ]);
  const [updatedObservations, setUpdatedObservations] = useState([]);
  const [selectedSpecialist, setSelectedSpecialist] = useState('');
  const [selectedLocation, setSelectedLocation] = useState('');

  const [selectedSlotDay, setSelectedSlotDay] = useState('');
  const [selectedSlotTime, setSelectedSlotTime] = useState('');
  const [selectedDate, setSelectedDate] = useState('');

  

  const [symptoms, setSymptoms] = useState([]);
  const [temperature, setTemperature] = useState('');
  const [bloodpresure, setBloodpresure] = useState('');
  const [heartRate, setHeartRate] = useState('');
  const [reportFiles, setReportFiles] = useState([]);
  const [pdfRefs, setPdfRefs] = useState([]);

  useEffect(() => {
    const userInfo = JSON.parse(localStorage.getItem("userinfo"));
    setUserInfo(userInfo);
  }, [navigate]);

  return (
    <OrderContext.Provider
      value={{
        selectedDoctor,
        setSelectedDoctor,
        sideOpen,
        setSideOpen,
        role,
        setRole,
        selectedPatient,
        setselectedPatient,
        userInfo,
        setUserInfo,
        prescriptions,
        setPrescriptions,
        appointments,
        setAppointments,
        height,
        setHeight,
        updatedObservations,
        setUpdatedObservations,
        isLoggedIn,
        setIsLoggedIn,
        doctorInfo,
        setDoctorInfo,
        homeDocFilter,
         setHomeDocFilter,
         selectedSpecialist, 
         setSelectedSpecialist,
         selectedLocation, 
         setSelectedLocation,
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
           selectedSlotDay, 
           setSelectedSlotDay,
           selectedSlotTime,
            setSelectedSlotTime,
            selectedDate, 
            setSelectedDate

      }}>
      {children}
    </OrderContext.Provider>
  );
};

export const OrderState = () => {
  return useContext(OrderContext);
};

export default Context;
