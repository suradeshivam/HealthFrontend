import { Router, Route, Routes, Navigate, useLocation } from "react-router-dom";
import "./App.css";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import Dashboard from "./Dashboard";
import Appointments from "./Components/Appointments";
import ChangePassword from "./Components/ChangePassword";
import DoctorProfile from "./Components/DoctorProfile";
import DoctorRegister from "./Components/DoctorRegister";
import LoginDoctor from "./Components/LoginDoctor";
import Reviews from "./Components/Reviews";
import ScheduleTime from "./Components/ScheduleTimings";
import Accounts from "./Components/Accounts";
import Room from "./Components/meet/Room";
import Appointment from "./Components/Appointment";
import ProtectedRoute from "./ProtectedRoute/ProtectedRoute";
import Patientdashboard from "./Components/PatientDashboard";
import PatientProfileSetting from "./Components/PatientProfileSetting";
import Orders from "./Components/Orders";
import Home from "./Components/Home";

// App changed
function App() {
  const location = useLocation();

  const shouldShowNavbarAndFooter = !location.pathname.includes("/room");

  return (
    <div className="m-0 p-0 bg-neutral-100">
      {shouldShowNavbarAndFooter && <Navbar />}
      <Routes>
        <Route path="" element={<Home />} />
        <Route path="signup" element={<DoctorRegister />} />
        <Route path="login" element={<LoginDoctor />} />
        <Route element={<ProtectedRoute />}>
          <Route path="patient" element={<Patientdashboard />} />
          <Route path="doctor" element={<Dashboard />} />
          {/* <Route path="appointments" element={<Appointments />} /> */}
          <Route path="changepassword" element={<ChangePassword />} />
          <Route path="orders" element={<Orders />} />
          <Route path="patientprofile" element={<PatientProfileSetting />} />
          <Route path="profile" element={<DoctorProfile />} />
          <Route path="reviews" element={<Reviews />} />
          <Route path="schedule" element={<ScheduleTime />} />
          <Route path="accounts" element={<Accounts />} />
          <Route path="room/:roomID" element={<Room />} />
          <Route path="appointment" element={<Appointment />} />
        </Route>
      </Routes>
      {shouldShowNavbarAndFooter && <Footer />}
    </div>
  );
}

export default App;
