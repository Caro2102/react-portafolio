import React from 'react';
import Navigation from './Navigation'
import Logo from '../images/Logo.png';
import '../styles/portfolio.css';


const styles ={
    logo:{
        width:"110px",
        height:"80px"
    },
   
}

function Header({ currentPage, handlePageChange }) {
    return (
      <nav className="navbar navbar-expand-lg navb">
        <div className="container-fluid ">
        <img className="mx-5 logo" src={Logo} style={styles.logo}></img>
            <button className="navbar-toggler bg-white" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
          <div className="container text-center">
            <div className="row">
              <div className="col align-self-center">
                <Navigation  currentPage={currentPage} handlePageChange={handlePageChange} />
              </div>
            </div>
          </div>
          </div>
        </div>
      </nav>
    );
  }
  
  export default Header;
  