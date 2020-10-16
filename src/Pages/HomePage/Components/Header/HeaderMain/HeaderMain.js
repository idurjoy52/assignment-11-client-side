import React from 'react';
import Navbar from '../Navbar/Navbar';
import './HeaderMain.css'
import frame from '../../../../../images/logos/Frame.png'

const HeaderMain = () => {
    return (
        <div className="header-main">
            <div className="container">
                <Navbar></Navbar>
                <div className="banner-area"> 
                    <div className="row d-flex align-items-center"> 
                        <div className="col-md-4"> 
                            <h1>Let's Grow Your<br/>Brand To The<br/>Next Level</h1>
                            <p><small>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eligendi officiis, aliquid ipsum nesciunt minima rem.</small></p>
                            <button className="btn black-btn">Hire Us</button>
                        </div>
                        <div className="col-md-8"> 
                            <img className="img-fluid" src={frame} alt=""/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HeaderMain;