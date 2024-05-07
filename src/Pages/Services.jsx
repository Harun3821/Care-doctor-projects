import { useEffect, useState } from "react";
import Servicescard from "./Servicescard";

const Services = () => {

     const [services, setService] = useState([]);

     useEffect(()=>{
       fetch('http://localhost:5000/services')
        .then(res=> res.json())
        .then(data=> setService(data))
     },[])


    return (
        <div>
            <div className="text-center space-y-3">
             <h2 className="text-3xl text-[#FF1411] font-bold">Service</h2>
             <h1 className="text-2xl font-bold">Our Service Area</h1>
             <p>the majority have suffered alteration in some form, by injected humour, or randomised<br/> words which don t look even slightly believable. </p>
            </div>
            <div className="lg:grid lg:grid-cols-3 grid-cols-1 md:grid-cols-2 gap-6">
               {
                 services.map(services => <Servicescard key={services._id}
                   services={services}
                 ></Servicescard>)
               }
            </div>
        </div>
    );
};

export default Services;