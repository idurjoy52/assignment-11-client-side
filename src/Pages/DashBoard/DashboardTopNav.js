import React, { useContext} from 'react';
import logo from '../../images/logos/logo.png';
import { UserContext } from '../../App';
import { Link } from 'react-router-dom';

const DashboardTopNav = () => {
    const[loggedInUser,setLoggedInUser] = useContext(UserContext);
    return (
        
            <nav className="navbar navbar-expand-lg navbar-light">
                <Link to="/home"><li className="navbar-brand nav-link"><img style={{height: '60px'}} src={logo} alt=""/></li></Link> 
                <div className="ml-auto"> 
                    <img className="rounded-circle" style={{height: '60px'}} src={loggedInUser.image} alt=""/>
                    <span>{loggedInUser.name}</span>
                </div>
            </nav>
    
    );
};

export default DashboardTopNav;