import React from "react";
import HeaderLogo from "../../assets/header-logo.png";

export const Header = () => {
  return (
    <div className="container">
      <header className="d-flex flex-wrap justify-content-between align-items-center   mt-3">
        <div>
          <img className="w-75" src={HeaderLogo} alt="Logo" />
        </div>
        <ul className="nav col-12 col-md-auto  d-flex flex-row flex-wrap">
          <li>
            <a href="#" className="nav-link  link-dark fw-semibold">
              Home
            </a>
          </li>
          <li>
            <a href="#" className="nav-link mx-4  link-dark fw-semibold">
              Services
            </a>
          </li>
          <li>
            <a href="#" className="nav-link  link-dark fw-semibold">
              Contact Us
            </a>
          </li>
        </ul>

        <div className="col-md-3  ps-3">
          <button type="button" className="btn border-0  fw-semibold me-3">
            Login
          </button>
          <button type="button" className="btn btn-warning text-white fw-semibold rounded-pill">
            Book Scooter
          </button>
        </div>
      </header>
    </div>
  );
};
