import React from 'react';
import Me from '../../images/yo.jpeg';

const styles ={
    about:{
        background:"rgb(35,43,252) radial-gradient(circle, rgba(35,43,252,1) 0%, rgba(29,203,183,1) 100%)",
            borderRadius: "80px"
    },
    me:{
        width:"300px",
        height:"500px"
    },
    name:{
        fontFamily:"'Barlow Semi Condensed', sans-serif",
        WebkitTextStroke: " 2px #fff",
        color: "transparent"
    },
    surname:{
        fontFamily: "'Barlow Semi Condensed', sans-serif",
        WebkitTextStroke: " 2px #fff",  
        color: "transparent"
    }
}
function About() {
    return (
    <div className="container-fluid my-5 " >
        <div className="row justify-content-evenly">
          <div className="col-lg-6 text-start">
            <div style={styles.about}>
                <h3 className="px-5 mt-3 ">About</h3>
            </div>   
            <div>
                <h1 className="px-5 pt-5 text-white name" style={styles.name}>Diana Carolina</h1>
                <h1 className="px-5 text-white surname" style={styles.surname}> Cruz Velazquez</h1>

            </div>
            <div>
                <h4 className="px-5 py-4  text-white">Full Stack developer in training with a greater interest in frontend development, currently studying systems engineering at the Universidad del Valle de México. I consider myself a sociable, creative and responsible person. Looking to face new job challenges. </h4>
                <h4 className="px-5 py-4  text-white">I hope you enjoy my work and if you would like to contact me please feel free to email me or get in touch through one of my social media. </h4>
            </div>
          </div>
          <div className="col-lg-4 px-5">
              <img src={Me} style={styles.me} alt="Fotografia sobre mi"></img>
          </div>
      </div>
    </div> 
    );
  }
  
  export default About;