import React from 'react';
import curriculumF from '../../files/Curriculum.pdf'
import '../../styles/portfolio.css';

function Resume() {
    const styles ={
        about:{
            background:"rgb(35,43,252) radial-gradient(circle, rgba(35,43,252,1) 0%, rgba(29,203,183,1) 100%)",
            borderRadius: "80px"
        }
    }
    
    return (
    <div>
        <div className="container-fluid mt-5 " >
            <div className="row justify-content-start mx-5">
                <div className="col-lg-6 col-md-9 ">
                    
                        <h3 className="px-5 mt-3 "style={styles.about}>Resume</h3>
                </div>
            </div>
        </div>
        <div class="container text-center">
            <div class="row">
                <div class="col align-self-start">
                    <div className="col-lg-4 col-md-6 ">
                        <a href={curriculumF} style={{textDecoration: "none;"}} download>
                            <h5 className="px-5 mt-3 text-black bg-white"style={{borderRadius:"80px", padding:"8px"}}><i class="fa-regular fa-circle-down mx-2"></i><span/>Download my resume</h5>
                        </a>
                        <h3 className='text-white my-4'>Front-end Proficiencies</h3>
                    </div>
                    <div class="container text-center">
                        <div class="row row-cols-4 justify-content-center">
                            <div class="col m-2"><i class="devicon-html5-plain-wordmark colored" style={{fontSize:"6em", }}></i></div>
                            <div class="col m-2"><i class="devicon-css3-plain-wordmark colored" style={{fontSize:"6em"}}></i></div>
                            <div class="col m-2"><i class="devicon-javascript-plain colored" style={{fontSize:"6em"}}></i></div>
                            <div class="col m-2"><i class="devicon-jquery-plain-wordmark colored" style={{fontSize:"6em"}}></i></div>
                            <div class="col m-2"><i class="devicon-react-original-wordmark colored" style={{fontSize:"6em"}}></i></div>
                            <div class="col m-2"><i class="devicon-bootstrap-plain-wordmark colored" style={{fontSize:"6em"}}></i></div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 ">
                        <h3 className='text-white my-4'>Back-end Proficiencies</h3>
                    </div>
                    <div class="container text-center">
                        <div class="row row-cols-4 justify-content-center">
                            <div class="col m-2"><i class="devicon-nodejs-plain-wordmark colored" style={{fontSize:"6em", }}></i></div>
                            <div class="col m-2"><i class="devicon-express-original-wordmark colored" style={{fontSize:"6em"}}></i></div>
                            <div class="col m-2"><i class="devicon-mysql-plain-wordmark colored" style={{fontSize:"6em"}}></i></div>
                            <div class="col m-2"><i class="devicon-sequelize-plain-wordmark colored" style={{fontSize:"6em"}}></i></div>
                            <div class="col m-2"><i class="devicon-mongodb-plain-wordmark colored" style={{fontSize:"6em"}}></i></div>
                            <div class="col m-2"><i class="devicon-graphql-plain-wordmark colored" style={{fontSize:"6em"}}></i></div>
                        </div>
                    </div>
                        
                        
                </div>
            </div>
        </div>
    </div>

    );
  }
  
  export default Resume;