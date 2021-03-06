import React, { useEffect, useState } from 'react';
import './Services.css'
import InfoCard from './InfoCard/InfoCard';
import loading from '../../../../images/loading.gif'

const Services = () => {
    const[servicesInfo,setServicesInfo] = useState([]);
    useEffect(() => {
        fetch('https://boiling-hollows-59715.herokuapp.com/services')
        .then(res => res.json())
        .then(data => {
            setServicesInfo(data);
        })
    },[])

    return (
        <section className="container"> 
            <h2 className="text-center my-5">Provide Awesome <span className="highlight-text">services</span></h2>
            <div className="row">
                {
                    servicesInfo.length === 0 && <img style={{width:"150px",height:"100px",display:"block",margin:"auto"}} src={loading} alt=""/>
                } 
                { 
                    servicesInfo.map(service => <InfoCard key={service._id} service={service}></InfoCard>)
                }
            </div>
        </section>
    );
};

export default Services;