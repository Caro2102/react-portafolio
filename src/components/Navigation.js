import React from 'react';
import '../styles/portfolio.css';


function Navigation({ currentPage, handlePageChange }) {
    return (
        <ul className="navbar-nav me-auto mb-2 mb-lg-0 mx-2 d-flex justify-content-center position-relative">
        <li className="nav-item px-2 fs-4">
        <a className= {currentPage==="About" ? "nav-link active text-white bg-transparent border border-4 rounded-pill px-2" : "nav-link text-white"} aria-current="page" href="#about"onClick={()=> handlePageChange("About")}>About</a>
        </li>
        <li className="nav-item px-2 fs-4">
        <a className= {currentPage==="Portfolio" ? "nav-link active text-white bg-transparent border border-4 rounded-pill px-2" : "nav-link text-white"} aria-current="page" href="#portfolio"onClick={()=> handlePageChange("Portfolio")}>Portfolio</a>
        </li>
        <li className="nav-item px-2 fs-4">
        <a className= {currentPage==="Contact" ? "nav-link active text-white bg-transparent border border-4 rounded-pill px-2" : "nav-link text-white"} aria-current="page" href="#contact"onClick={()=> handlePageChange("Contact")}>Contact</a>
        </li>
        <li className="nav-item px-2 fs-4 ">
            <a className= {currentPage==="Resume" ? "nav-link active text-white bg-transparent border border-4 rounded-pill px-2" : "nav-link text-white"} aria-current="page" href="#resume"onClick={()=> handlePageChange("Resume")}>Resume</a>
        </li>
      </ul>
    );
  }
  
  export default Navigation;