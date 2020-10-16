import React, { useState } from 'react';
import SideBar from '../../../DashBoard/SideBar';
import DashboardTopNav from '../../../DashBoard/DashboardTopNav'

const AddAdmin = () => {
    const[admin,setAdmin] = useState({})
    const handleBlur = (e) => { 
        const newAdmin ={...admin}
        newAdmin[e.target.name]= e.target.value;
        setAdmin(newAdmin)
    };
    const handleSubmit = (e) => {
        fetch('https://boiling-hollows-59715.herokuapp.com/addAdmin',{
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(admin)
            })
        .then(response => response.json())
        .then(result => {
            if(result) {
                alert("Admin Added Successfully")
            }
        })
        e.preventDefault();
    };

    return (
        <div className="container">
            <DashboardTopNav></DashboardTopNav>
            <div className="row"> 
                <div className="col-4 col-sm-3"> 
                    <SideBar></SideBar>
                </div>
                <div className="col-8 col-sm-9"  style={{backgroundColor:'#F4F7FC',paddingTop:'20px'}}>
                    <h5 className="text-brand">Add Admin</h5> 
                    <form onSubmit={handleSubmit} style={{width:"70%"}}>
                        <label htmlFor="serviceTitle">Email</label>
                        <div className="form-row">
                            <div className="form-group col-sm-10">
                                <input onBlur={handleBlur} type="email" className="form-control" name="email" id="serviceTitle" placeholder="Enter Email" required/>
                            </div>
                            <div  className="form-group col-sm-2"> 
                                <button type="submit" className="btn btn-success ">Submit</button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default AddAdmin;