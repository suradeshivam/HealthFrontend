import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Swal from 'sweetalert2';


const generateTimeSlots = () =>{
  const slots = [];
  const startTime = new Date().setHours(0, 0, 0, 0); // Start time at 00:00 AM
  const endTime = new Date().setHours(23, 59, 59, 999); // End time at 11:59 PM

  for (let time = startTime; time <= endTime; time += 30 * 60 * 1000) {
    const startTimeString = new Date(time).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', hour12: true });
    const endTimeString = new Date(time + 30 * 60 * 1000).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', hour12: true });
    slots.push(`${startTimeString} to ${endTimeString}`);
  }

  return slots;
}

export default function ScheduleTime() {
  const [slotDuration, setSlotDuration] = useState('30 mins');
  const [copyToAllDays, setCopyToAllDays] = useState(false);
    const [schedule, setSchedule] = useState({});
  const [selectedSlots, setSelectedSlots] = useState({
    sunday: [],
    monday: [],
    tuesday: [],
    wednesday: [],
    thursday: [],
    friday: [],
    saturday: []
  });

  // console.log(selectedSlots)

  const handleSlotClick = (day, slot) => {

    const newSlot = {
      time: slot,
      isBooked: false,
    };
  
    const isSelected = selectedSlots[day].some((selectedSlot) => selectedSlot.time === newSlot.time);
  
    if (isSelected) {
      setSelectedSlots({
        ...selectedSlots,
        [day]: selectedSlots[day].filter((selectedSlot) => selectedSlot.time !== newSlot.time)
      });
    } else {
      setSelectedSlots({
        ...selectedSlots,
        [day]: [...selectedSlots[day], newSlot]
      });
    }
  };

  

  const handleCopySlotsToAllDays = () => {
    if (copyToAllDays) {
      const mondaySlots = selectedSlots.monday;
      const updatedTimeSlots = { ...selectedSlots };
      Object.keys(updatedTimeSlots).forEach(day => {
        if (day !== 'monday' && day !== 'sunday') {
          updatedTimeSlots[day] = [...mondaySlots];
        }
      });
      setSelectedSlots(updatedTimeSlots);
    } else {
      const mondaySlots = selectedSlots.monday;
      const updatedTimeSlots = { ...selectedSlots };
      console.log(updatedTimeSlots)
      Object.keys(updatedTimeSlots).forEach(day => {
        if (day !== 'monday' && day !== 'sunday') {
          updatedTimeSlots[day] = [...mondaySlots];
        }
      });
      setSelectedSlots(updatedTimeSlots);
    }
    setCopyToAllDays(prevState => !prevState);
  };
  

  const handleSubmit = async () =>{

    const isAuthenticated = localStorage.getItem("token");

    try {
      const response = await axios.put(`https://healthbackend-3xh2.onrender.com/doctor/${schedule.userId._id}/update`,
      {
        schedules:selectedSlots,
      },
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: isAuthenticated,
        },
      }
      );


      // console.log(response); 

      Swal.fire({
        icon: 'success',
      title: 'Success!',
      text: 'Time slots updated successfully.',
      })

      const doctor = await axios.get(
        `https://healthbackend-3xh2.onrender.com/doctor/${schedule.userId._id}`,
        
        {
          headers: {
            "Content-Type": "application/json",
             Authorization: isAuthenticated,
          },
        }
      );
      // Store the token securely
      await localStorage.setItem(
        "docInfo",
        JSON.stringify(doctor.data.result.doctor)
      );

    } catch (error) {
      Swal.fire({
        icon: 'error',
        title: 'Error!',
        text: 'Failed to update time slots. Please try again later.',
      });
    }

  }

 

  useEffect (()=>{
    const t = JSON.parse(localStorage.getItem('docInfo'))
    setSchedule(t)
    setSelectedSlots(t.schedules);
  },[])


  return (
    <>
      <div className="main-wrapper">
        
        <div className="breadcrumb-bar-two">
          <div className="container">
            <div className="row align-items-center inner-banner">
              <div className="col-md-12 col-12 text-center">
                <h2 className="breadcrumb-title">Schedule Timings</h2>
                <nav aria-label="breadcrumb" className="page-breadcrumb">
                  <ol className="breadcrumb">
                    <li className="breadcrumb-item">
                      <a href="index.html">Home</a>
                    </li>
                    <li className="breadcrumb-item" aria-current="page">
                      Schedule Timings
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
                        <li className="active">
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
                        <li>
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
                <div className="row">
                  <div className="col-sm-12">
                    <div className="card">
                      <div className="card-body">
                        <h4 className="card-title">Schedule Timings</h4>
                        <div className="profile-box">
                          <div className="row">
                            <div className="col-lg-4">
                              {/* <div className="mb-3">
                                <label className="durations">
                                  Timing Slot Duration
                                </label>
                                <select 
                                value={slotDuration}
                                onChange={(event) => setSlotDuration(event.target.value)}
                                className="form-select form-control">
                                  <option>-</option>
                                  <option>15 mins</option>
                                  <option selected="selected">30 mins</option>
                                  <option>45 mins</option>
                                  <option>1 Hour</option>
                                </select>
                              </div> */}
                            </div>
                          </div>
                          <input
              type="checkbox"
              checked={copyToAllDays}
              onChange={handleCopySlotsToAllDays}
            /> Copy Monday slots to all days except Sunday
                          <div className="row">
                            <div className="col-md-12">
                              <div className="card schedule-widget mb-0">
                                <div className="schedule-header">
                                  <div className="schedule-nav">
                                    <ul className="nav nav-tabs nav-justified">
                                      <li className="nav-item">
                                        <a
                                          className="nav-link"
                                          data-bs-toggle="tab"
                                          href="#slot_sunday">
                                          Sunday
                                        </a>
                                      </li>
                                      <li className="nav-item">
                                        <a
                                          className="nav-link active"
                                          data-bs-toggle="tab"
                                          href="#slot_monday">
                                          Monday
                                        </a>
                                      </li>
                                      <li className="nav-item">
                                        <a
                                          className="nav-link"
                                          data-bs-toggle="tab"
                                          href="#slot_tuesday">
                                          Tuesday
                                        </a>
                                      </li>
                                      <li className="nav-item">
                                        <a
                                          className="nav-link"
                                          data-bs-toggle="tab"
                                          href="#slot_wednesday">
                                          Wednesday
                                        </a>
                                      </li>
                                      <li className="nav-item">
                                        <a
                                          className="nav-link"
                                          data-bs-toggle="tab"
                                          href="#slot_thursday">
                                          Thursday
                                        </a>
                                      </li>
                                      <li className="nav-item">
                                        <a
                                          className="nav-link"
                                          data-bs-toggle="tab"
                                          href="#slot_friday">
                                          Friday
                                        </a>
                                      </li>
                                      <li className="nav-item">
                                        <a
                                          className="nav-link"
                                          data-bs-toggle="tab"
                                          href="#slot_saturday">
                                          Saturday
                                        </a>
                                      </li>
                                    </ul>
                                  </div>
                                </div>
                                <div className="tab-content schedule-cont">
                                  <div
                                    id="slot_sunday"
                                    className="tab-pane fade">
                                    <h4 className="card-title d-flex justify-content-between">
                                      <span>Time Slots</span>
                                      {/* <a
                                        className="edit-link"
                                        data-bs-toggle="modal"
                                        href="#add_time_slot">
                                        <i className="fa fa-plus-circle" /> Add
                                        Slot
                                      </a> */}
                                    </h4>

                                
     <div className="doc-times" style={{ gap: '1px' }}>
  {generateTimeSlots().map((timeSlot, index) => (
    <button
      className={`col-lg-2 col-md-4 mx-auto doc-slot-list ${selectedSlots['sunday']?.includes(timeSlot) ? '' : ''}`} 
      key={index}
      onClick={() => handleSlotClick('sunday', timeSlot)}
      style={{ backgroundColor: selectedSlots['sunday']?.some((s)=>s.time === timeSlot) ? 'green' : '' }}
    >
      {timeSlot}
    </button>
  ))}
</div>
                                    
                                  </div>
                                  <div
                                    id="slot_monday"
                                    className="tab-pane fade show active">
                                    <h4 className="card-title d-flex justify-content-between">
                                      <span>Time Slots</span>
                                      {/* <a
                                        className="edit-link"
                                        data-bs-toggle="modal"
                                        href="#add_time_slot_monday">
                                        <i className="fa fa-plus-circle" /> Add
                                        Slot
                                      </a> */}
                                    </h4>

                                 
                                <div className="doc-times gap-lg-1">
  {generateTimeSlots().map((timeSlot, index) => (
    <button
      className={`col-lg-2 col-md-4 mx-auto doc-slot-list ${selectedSlots['monday']?.includes(timeSlot) ? '' : ''}`}
      key={index}
      onClick={() => handleSlotClick('monday', timeSlot)}
      style={{ backgroundColor: selectedSlots['monday']?.some((s)=>s.time === timeSlot) ? 'green' : '' }}
    >
      {timeSlot}
    </button>
  ))}
</div>

                                  </div>
                                  <div
                                    id="slot_tuesday"
                                    className="tab-pane fade">
                                    <h4 className="card-title d-flex justify-content-between">
                                      <span>Time Slots</span>
                                      {/* <a
                                        className="edit-link"
                                        data-bs-toggle="modal"
                                        href="#add_time_slot_tuesday">
                                        <i className="fa fa-plus-circle" /> Add
                                        Slot
                                      </a> */}
                                    </h4>
                                    <div className="doc-times gap-lg-1">
  {generateTimeSlots().map((timeSlot, index) => (
    <button
      className={`col-lg-2 col-md-4 mx-auto doc-slot-list ${selectedSlots['tuesday']?.includes(timeSlot) ? '' : ''}`}
      key={index}
      onClick={() => handleSlotClick('tuesday', timeSlot)}
      style={{ backgroundColor: selectedSlots['tuesday']?.some((s)=>s.time === timeSlot) ? 'green' : '' }}
    >
      {timeSlot}
    </button>
  ))}
</div>
                                  </div>
                                  <div
                                    id="slot_wednesday"
                                    className="tab-pane fade">
                                    <h4 className="card-title d-flex justify-content-between">
                                      <span>Time Slots</span>
                                      {/* <a
                                        className="edit-link"
                                        data-bs-toggle="modal"
                                        href="#add_time_slot_wednesday">
                                        <i className="fa fa-plus-circle" /> Add
                                        Slot
                                      </a> */}
                                    </h4>
                                    <div className="doc-times gap-lg-1">
  {generateTimeSlots().map((timeSlot, index) => (
    <button
      className={`col-lg-2 col-md-4 mx-auto doc-slot-list ${selectedSlots['wednesday']?.includes(timeSlot) ? '' : ''}`}
      key={index}
      onClick={() => handleSlotClick('wednesday', timeSlot)}
      style={{ backgroundColor: selectedSlots['wednesday']?.some((s)=>s.time === timeSlot) ? 'green' : '' }}
    >
      {timeSlot}
    </button>
  ))}
</div>
                                  </div>
                                  <div
                                    id="slot_thursday"
                                    className="tab-pane fade">
                                    <h4 className="card-title d-flex justify-content-between">
                                      <span>Time Slots</span>
                                      {/* <a
                                        className="edit-link"
                                        data-bs-toggle="modal"
                                        href="#add_time_slot_thursday">
                                        <i className="fa fa-plus-circle" /> Add
                                        Slot
                                      </a> */}
                                    </h4>
                                    <div className="doc-times gap-lg-1">
  {generateTimeSlots().map((timeSlot, index) => (
    <button
      className={`col-lg-2 col-md-4 mx-auto doc-slot-list ${selectedSlots['thursday']?.includes(timeSlot) ? '' : ''}`}
      key={index}
      onClick={() => handleSlotClick('thursday', timeSlot)}
      style={{ backgroundColor: selectedSlots['thursday']?.some((s)=>s.time === timeSlot) ? 'green' : '' }}
    >
      {timeSlot}
    </button>
  ))}
</div>
                                  </div>
                                  <div
                                    id="slot_friday"
                                    className="tab-pane fade">
                                    <h4 className="card-title d-flex justify-content-between">
                                      <span>Time Slots</span>
                                      {/* <a
                                        className="edit-link"
                                        data-bs-toggle="modal"
                                        href="#add_time_slot_friday">
                                        <i className="fa fa-plus-circle" /> Add
                                        Slot
                                      </a> */}
                                    </h4>
                                    <div className="doc-times gap-lg-1">
  {generateTimeSlots().map((timeSlot, index) => (
    <button
      className={`col-lg-2 col-md-4 mx-auto doc-slot-list ${selectedSlots['friday']?.includes(timeSlot) ? '' : ''}`}
      key={index}
      onClick={() => handleSlotClick('friday', timeSlot)}
      style={{ backgroundColor: selectedSlots['friday']?.some((s)=>s.time === timeSlot) ? 'green' : '' }}
    >
      {timeSlot}
    </button>
  ))}
</div>
                                  </div>
                                  <div
                                    id="slot_saturday"
                                    className="tab-pane fade">
                                    <h4 className="card-title d-flex justify-content-between">
                                      <span>Time Slots</span>
                                      {/* <a
                                        className="edit-link"
                                        data-bs-toggle="modal"
                                        href="#add_time_slot_saturday">
                                        <i className="fa fa-plus-circle" /> Add
                                        Slot
                                      </a> */}
                                    </h4>
                                    <div className="doc-times gap-lg-1">
  {generateTimeSlots().map((timeSlot, index) => (
    <button
      className={`col-lg-2 col-md-4 mx-auto doc-slot-list ${selectedSlots['saturday']?.includes(timeSlot) ? '' : ''}`}
      key={index}
      onClick={() => handleSlotClick('saturday', timeSlot)}
      style={{ backgroundColor: selectedSlots['saturday']?.some((s)=>s.time === timeSlot) ? 'green' : '' }}
    >
      {timeSlot}
    </button>
  ))}
</div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className=" text-center">
    <button type="submit"   className="btn btn-primary" onClick={()=>handleSubmit()}>
      Save The Changes
    </button>
  </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

     
    </>
  );
}
