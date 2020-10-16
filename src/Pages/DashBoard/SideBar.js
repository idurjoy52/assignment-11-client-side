import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartPlus,faShoppingBag,faCommentDots,faPlus,faUserPlus} from '@fortawesome/free-solid-svg-icons'
import { UserContext } from '../../App';


const SideBar = () => {
    const[loggedInUser,setLoggedInUser] = useContext(UserContext)
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
        <div style={{height: '100vh'}}>
            {
                isAdmin ? 
                <div className="mt-5">            
                    <ul className="list-unstyled"> 
                    <Link to="/admin/dashboard"><li className="text-dark"><FontAwesomeIcon icon={faShoppingBag}/>Service List</li></Link>
                    <Link to="/admin/addService"><li className="text-dark"><FontAwesomeIcon icon={faShoppingBag}/>Add Service </li></Link>
                    <Link to='/admin/makeAdmin'><li className="text-dark"><FontAwesomeIcon icon={faShoppingBag}/>Make Admin</li></Link>
                    </ul>
                </div>
                :
                <div className="mt-5"> 
                     <ul className="list-unstyled"> 
                        <Link to="/home"><li className="text-dark"><FontAwesomeIcon icon={faCartPlus}/>Order</li></Link>
                        <Link to='/user/serviceList'><li className="text-dark"><FontAwesomeIcon icon={faShoppingBag}/>Service List</li></Link>
                        <Link to='/user/review'><li className="text-dark"><FontAwesomeIcon icon={faCommentDots}/>Review</li></Link>
                    </ul>
                </div>
            }
        </div>
    );
};

export default SideBar;