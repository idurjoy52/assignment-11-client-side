import React from 'react';
import './CompanyLogos.css'
import slack from '../../../../../images/logos/slack.png'
import google from '../../../../../images/logos/google.png'
import uber from '../../../../../images/logos/uber.png'
import netflix from '../../../../../images/logos/netflix.png'
import airbnb from '../../../../../images/logos/airbnb.png'

const CompanyLogos = () => {
    return (
        <div className="container logo-area">
            <div className="row d-flex justify-content-center"> 
                <div className="col-lg-2 col-md-3 col-sm-4 img-fluid"> 
                    <img src={slack} alt=""/>
                </div>
                <div className="col-lg-2 col-md-3 col-sm-4 img-fluid"> 
                    <img src={google} alt=""/>
                </div>
                <div className="col-lg-2 col-md-3 col-sm-4 img-fluid"> 
                    <img src={uber} alt=""/>
                </div>
                <div className="col-lg-2 col-md-3 col-sm-4 img-fluid"> 
                    <img src={netflix} alt=""/>
                </div>
                <div className="col-lg-2 col-md-3 col-sm-4 img-fluid"> 
                    <img src={airbnb} alt=""/>
                </div>
            </div>
            
        </div>
    );
};

export default CompanyLogos;