import React, { useContext, useEffect, useState } from 'react';
import { UserContext } from '../../../App';
import SideBar from '../../DashBoard/SideBar'
import ServiceCard from './ServiceCard';
import DashboardTopNav from '../../DashBoard/DashboardTopNav'

const UserServiceList = () => {
    const[customerService,setCustomerService] = useState([]);
    const [loggedInUser,setLoggedInUser] = useContext(UserContext);
    useEffect(() => {
        fetch('https://boiling-hollows-59715.herokuapp.com/customer?email='+loggedInUser.email)
        .then(response => response.json())
        .then(result => {
            setCustomerService(result)
        })
    },[])


    return (
        <div>
            <div className="container">
            <DashboardTopNav></DashboardTopNav>
                <div className="row"> 
                    <div className="col-4 col-sm-3"> 
                        <SideBar></SideBar>
                    </div>
                    <div className="col-8 col-sm-9" style={{backgroundColor:'#F4F7FC',paddingTop:'20px'}}>
                        <h5 className="text-brand">Order List</h5> 
                        <div className="row"> 
                            { 
                                customerService.map(service => <ServiceCard key={service._id} service={service}></ServiceCard>)
                            }
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default UserServiceList;