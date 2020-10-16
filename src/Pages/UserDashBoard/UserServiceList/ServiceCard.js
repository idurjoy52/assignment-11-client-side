import React from 'react';

const ServiceCard = (props) => {
    const{icon,projectName,description,status} = props.service;
    return (
        <div className="col-md-4 col-sm-6 mb-2 d-flex justify-content-center">
            <div className="card text-center" style={{width: "15rem"}}>
                <div className="">
                    
                    <img style={{width:"100px",height:"100px",float:"left"}} src={icon} className="card-img-top rounded" alt="..."/>
                    <h6 className={`ml-auto mt-2 p-2 d-inline-block ${status === "Pending" ? "bg-danger" : `${status === "OnGoing" ? "bg-warning" : "bg-success"}`}`}>{status}</h6>
                    
                </div>
                <div className="card-body">
                    <h5 className="card-title">{projectName}</h5>
                    <p className="card-text">{description}</p>
                </div>
            </div>
    </div>
    );
};

export default ServiceCard;