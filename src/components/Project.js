import React from 'react';
import '../styles/portfolio.css';


function Project({work}) {
    return (
    <div className="col-auto text-decoration-none " >
      <div className="card mx-auto " style={{width:"310px", height:"450px"}}>
          <section className="work-container ">
            <section >
                <img className="img-work" src={work.image} alt="Placeholder"></img>
                    <section className="capa">
                      <a href={work.link} target="_blank" ><h2 >{work.title}</h2></a>
                      <a href={work.gitHubLink} target="_blank"><i className="fa-brands fa-github  fa-8x"></i></a>
                      <p>{work.tags}</p>
                    </section>
            </section>
          </section>
        </div>
      </div>
    );
  }
  
  export default Project;