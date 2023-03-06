import React  from 'react';
import Project  from '../Project';
import '../../styles/portfolio.css'
import OrderManagerI from '../../images/orderManager.png';
import HermeLogisticsI from '../../images/hermesL.png';

function Portfolio() {
    
    const styles ={
        about:{
            background:"rgb(35,43,252) radial-gradient(circle, rgba(35,43,252,1) 0%, rgba(29,203,183,1) 100%)",
            borderRadius: "80px"
        }      
    }
    const works=
    [
    {
        id: 1,
        title:"Hermes Logistics",
        link:"https://caro2102.github.io/Hermes-Logistics/",
        gitHubLink:"https://github.com/Caro2102/Hermes-Logistics",
        image: HermeLogisticsI,
        tags:"HTML, CSS, JavaScript, API's"

    },
    {
        id: 2,
        title:"Order Manager",
        link:"https://order-manager-application.herokuapp.com/",
        gitHubLink:"https://github.com/jaime-a-esquivel-a/OrderManager",
        image: OrderManagerI,
        tags:"Node.js, Express"
    },
    {
        id: 3,
        title:"Take Notes",
        link:"https://pacific-inlet-24115.herokuapp.com ",
        gitHubLink:"https://github.com/Caro2102/D11-TakeNotes",
        image: OrderManagerI
    }
    ]
 

    return (
    <div >
        <div className="container-fluid my-5 " >
            <div className="row justify-content-start mx-5">
                <div className="col-lg-6 col-md-9 ">
                    <div style={styles.about}>
                        <h3 className="px-5 mt-3 ">Portfolio</h3>
                    </div>              
                </div>
            </div>
        </div>
        <div className="container text-center">
            <div className="row">
                <div className="col align-self-center">
                    <div className="row row-cols-1 row-cols-md-3 g-4 justify-content-center">
                        {/**/}
                        {works.map((work)=>{
                            return(
                                <Project work={work} key={work.id}/>
                            );
                        })
                        } 
                    </div>      
                </div>
            </div>
        </div>
    </div>
  
    );
  }
  
  export default Portfolio;