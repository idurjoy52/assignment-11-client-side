import React from 'react';
import './Footer.css';

const Footer = () => {
    return (
        <div className="bg-yellow"> 
            <div className="container"> 
                <div className="row"> 
                    <div className="col-md-4 col-md-offset-1"> 
                        <h1>Let us handle your<br/>project,professionaly</h1>
                        <p>With well written codes,we build amazing app for all platforms mobile and apps in general</p>
                    </div>
                    <div className="col-md-6 ml-auto"> 
                        <form>
                            <div className="form-group">
                                <input type="email" className="form-control" placeholder="Your Email Address"/>
                            </div>
                            <div className="form-group">
                                <input type="text" className="form-control" placeholder="Your name/company's name"/>
                            </div>
                            <div className="form-group">
                                <textarea className="form-control" rows="5" placeholder="Your Message"></textarea>
                            </div>
                            <button className="btn black-btn">Send</button>
                        </form>
                    </div>
                </div>
                <p className="text-center copyright">Copyright Orange labs 2020</p>
            </div>
        </div>
    );
};

export default Footer;