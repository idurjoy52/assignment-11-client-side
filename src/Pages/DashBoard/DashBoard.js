import React, { useContext, useEffect, useState } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import { UserContext } from '../../App';
import SideBar from './SideBar'
import OrderTable from '../AdminDashBoard/Components/OrderTable/OrderTable'
import DashboardTopNav from './DashboardTopNav'

const UserDashBoard = () => {
    const[loggedInUser,setLoggedInUser] = useContext (UserContext);
    const [order,setOrder] = useState({})
    const {serviceName} = useParams();
    const[allServices,setAllservices] = useState([]);
    const history = useHistory();
    useEffect(() => {
        fetch('https://boiling-hollows-59715.herokuapp.com/services')
        .then(response => response.json())
        .then(result => {
            setAllservices(result)
        })
    },[])
    const selectedService = allServices.find(service => service.name === serviceName)
    const handleBlur = (e) => {
        const newOrder = {...order,customerEmail:loggedInUser.email,icon:selectedService.icon,description:selectedService.description,projectName:selectedService.name,status:'Pending'};
        newOrder[e.target.name] = e.target.value;
        setOrder(newOrder);
    }
    const handleSelectStatus =(orderId,orderStatus) => {
        console.log(orderId,orderStatus)
        const updatedOrder ={orderId,orderStatus}
        fetch(`https://boiling-hollows-59715.herokuapp.com/update/${orderId}`,{ 
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json',
                Accept: 'application/json'
            },
            body: JSON.stringify(updatedOrder)
        })
        .then(response => response.json())
        .then(data =>{
            console.log(data);
        })
    }
    const handleSubmit = (e) => {
        fetch('https://boiling-hollows-59715.herokuapp.com/addOrder',{
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(order)
        })
        .then(response => response.json())
        .then(result => {
            if(result) {
                alert('Order Submitted')
            }
        })
        e.preventDefault();
        history.push('/user/review')
    }
    const [showOrders,setShowOrders] = useState([]);
    useEffect(() => {
            fetch('https://boiling-hollows-59715.herokuapp.com/allOrders')
            .then(res => res.json())
            .then(data => {
                setShowOrders(data);
            })
     
    },[])
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
        <div className="container">
            <DashboardTopNav></DashboardTopNav>
            <div className="row"> 
                <div className="col-4 col-sm-3"> 
                    <SideBar></SideBar>
                </div>
                {
                    isAdmin?
                        <div className="col-8 col-sm-9" style={{backgroundColor:'#F4F7FC',paddingTop:'20px'}}> 
                            <h5 className="text-brand">Services List</h5>
                            <table className="table table-striped table-responsive-sm">
                                <thead>
                                    <tr>
                                        <th scope="col">Name</th>
                                        <th scope="col">Email ID</th>
                                        <th scope="col">Service</th>
                                        <th scope="col">Project Details</th>
                                        <th scope="col">Status</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {showOrders.map(order => <OrderTable handleSelectStatus={handleSelectStatus} key={order._id} orderDetails={order}></OrderTable>)}
                                </tbody>
                            </table>
                        </div>
                        :
                        <div className="col-8 col-sm-9"  style={{backgroundColor:'#F4F7FC',paddingTop:'20px'}}> 
                            <h5 className="text-brand">Order</h5>
                            <form onSubmit={handleSubmit} style={{width:"70%"}}>
                                <div className="form-row">
                                    <div className="form-group col-sm-12">
                                        <input onBlur={handleBlur} type="text" className="form-control" name="name" placeholder="Your Name/Company Name" />
                                    </div>
                                    <div className="form-group col-sm-12">
                                        <input onBlur={handleBlur} type="email" className="form-control" name="email" placeholder="Your Email Address" />
                                    </div>
                                    <div className="form-group col-sm-12">
                                        <input onBlur={handleBlur} type="text" className="form-control" name="projectTitle" placeholder="Project Title" defaultValue={serviceName}/>
                                    </div>
                                    <div className="form-group col-sm-12">
                                        <textarea onBlur={handleBlur} className="form-control" rows="5" name="projectDetails" placeholder="Project Details"></textarea>
                                    </div>
                                    <div className="form-group col-sm-4">
                                        <input onBlur={handleBlur} type="text" className="form-control" name="price" placeholder="Price" />
                                    </div>
                                    <div className="form-group col-sm-8">
                                        <input  type="file" className="form-control" placeholder="Upload Project File" />
                                    </div>
                                </div>
                                <button type="submit" className="btn black-btn">Submit</button>
                            </form>
                        </div>
                }
               
            </div>
        </div>
    );
};

export default UserDashBoard;