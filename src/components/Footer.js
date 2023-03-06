import React from 'react';
import '../styles/portfolio.css';

function Footer() {
    return (
        <div className="d-inline container text-center my-5 ">
        <div className=" row align-items-end">
          <div className="d-inline col  ">
            <a href="https://github.com/Caro2102" className="mx-3 " target="_blank"><i className="fa-brands fa-github fa-4x icons"></i></a>
            <a href="https://www.linkedin.com/in/diana-carolina-cruz-velazquez-84426924a/" className="mx-3 " target="_blank"><i class="fa-brands fa-linkedin fa-4x icons"></i></a>
            <a href="https://es.stackoverflow.com/users/322552/carolina-cruz" className="mx-3 " target="_blank"><i class="fa-brands fa-stack-overflow fa-4x icons"></i></a>
          </div>
        </div>
      </div>
    );
  }
  
  export default Footer;