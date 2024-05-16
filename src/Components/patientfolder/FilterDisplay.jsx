import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Pagination from "../Pagination";
import { OrderState } from "../../Contexts";

const FilterDisplay = ({ filterData }) => {
  const { setSelectedDoctor } = OrderState();
  // Pagination Logic
  const [itemsPerPage] = useState(5);
  const [currentPageToday, setCurrentPageToday] = useState(1);

  const todayStartIndex = (currentPageToday - 1) * itemsPerPage;
  const todayEndIndex = currentPageToday * itemsPerPage;
  const pageDoctor = filterData.slice(todayStartIndex, todayEndIndex);

  const paginate = (pageNumber) => setCurrentPageToday(pageNumber);

  return (
    <div>
      {pageDoctor.map((doctor, index) => (
        <div className="card doctor-card" key={index}>
          <div className="card-body">
            <div className="doctor-widget-one">
              <div className="doc-info-left">
                <div className="doctor-img">
                  <a href="doctor-profile.html">
                    <img
                      src={
                        doctor?.profilePicture ||
                        "assets/img/doctors/doctor-thumb-02.jpg"
                      }
                      className="img-fluid"
                      alt={doctor.name}
                    />
                  </a>
                </div>
                <div className="doc-info-cont">
                  <h4 className="doc-name">
                    <a href="doctor-profile.html">Dr. {doctor.userId?.name}</a>
                    <i className="fas fa-circle-check" />
                  </h4>
                  <p className="doc-speciality">{doctor.specialization}</p>
                  <div className="clinic-details">
                    <p className="doc-location">
                      <i className="feather-map-pin" />
                      {doctor.city} {doctor.contry}
                    </p>
                    <p className="doc-location">
                      <i className="feather-award" /> {doctor.yearOfExperience}{" "}
                      Years of Experience
                    </p>
                  </div>
                </div>
              </div>
              <div className="doc-info-right">
                <div className="clini-infos">
                  <ul>
                    <li>
                      <i className="feather-clock available-icon" />
                      <span className="available-date">Avaliable Today</span>
                    </li>
                    <li>
                      {/* Display rating and reviews */}
                      <div className="reviews-ratings">
                        <p>
                          <span>
                            {console.log(
                              doctor.reviews.reduce(
                                (acc, review) => acc + review.rating,
                                0
                              )
                            )}
                            <i className="fas fa-star" />
                            {Math.round(
                              doctor.reviews.reduce(
                                (acc, review) => acc + review.rating,
                                0
                              ) / doctor.reviews.length
                            ) || 0}
                          </span>{" "}
                          ({doctor.reviews.length} Reviews)
                        </p>
                      </div>
                    </li>
                    <li>
                      ₹ {doctor.fees}{" "}
                      <i className="feather-info available-info-icon" />
                    </li>
                  </ul>
                </div>
                <div className="clinic-booking book-appoint">
                  <Link
                    className="btn btn-primary"
                    onClick={() => setSelectedDoctor(doctor)}
                    to="/booking">
                    Book Appointment
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
      <Pagination
        itemsPerPage={itemsPerPage}
        totalItems={filterData.length}
        paginate={paginate}
      />
    </div>
  );
};

export default FilterDisplay;
