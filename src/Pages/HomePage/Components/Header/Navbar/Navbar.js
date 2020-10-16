import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css'
import logo from '../../../../../images/logos/logo.png'
import { UserContext } from '../../../../../App';

const Navbar = () => {
    const[loggedInUser,setLoggedInUser] = useContext(UserContext);
    const[isAdmin,setIsAdmin] = useState(false);
    useEffect(() => {
        fetch('https://boiling-hollows-59715.herokuapp.com/isAdmin',{
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({email: loggedInUser.email})
        })
        .then(response => response.json())
        .then(data => setIsAdmin(data));
    },[])

    return (
        <nav className="navbar navbar-expand-lg navbar-light menu-bar">
            <Link to="/home"><li className="navbar-brand nav-link"><img style={{height: '60px'}} src={logo} alt=""/></li></Link>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav ml-auto">
                    <Link to="/home"><li className="nav-item active mr-5">Home</li></Link>
                    <Link to="/ourPortfolio"><li className="nav-item mr-5">Our Portfolio</li></Link>
                    <Link to="/ourTeam"><li className="nav-item mr-5">Our Team</li></Link>
                    <Link to="/contact"><li className="nav-item mr-5">Contact Us</li></Link>
                    {isAdmin &&<Link to="/admin/dashboard"><li className="nav-item mr-5">Dashboard</li></Link>}
                </ul>
                { 
                    loggedInUser.email ?
                                        <div>
                                            <img className="rounded-circle" style={{height: '60px'}} src={loggedInUser.image} alt=""/>
                                            <button onClick={()=>setLoggedInUser('')} className="btn black-btn nav-item ml-2">Log Out</button>
                                        </div> 
                                        :
                                        <Link to="/login"><button className="btn black-btn nav-item mr-5">Log In</button></Link> 

                }
                
            </div>
        </nav>
    );
};

export default Navbar;