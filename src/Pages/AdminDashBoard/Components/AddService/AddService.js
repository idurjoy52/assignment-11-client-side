import React from 'react';
import { useState } from 'react';
import SideBar from '../../../DashBoard/SideBar'
import DashboardTopNav from '../../../DashBoard/DashboardTopNav'

const AddService = () => {
    const [service,setService] = useState({})
    const handleBlur = (e) => { 
        const newService = {...service};
        newService[e.target.name] = e.target.value;
        setService(newService);
    };
    const[file,setFile]= useState(null)
    const handleFileChange = (e) => { 
        const newFile = e.target.files[0];
        setFile(newFile);
    };
    const handleSubmit = (e) => {
        const formData = new FormData();
        formData.append('file',file)
        formData.append('name',service.name)
        formData.append('description',service.description)
        fetch('https://boiling-hollows-59715.herokuapp.com/addService',{
            method:'POST',
            body: formData
        })
        .then(response => response.json())
        .then(data => {
            if(data) {
                alert("Service Added Successfully");
            }
        })
        .catch(error => {
            console.log(error)
        })
        e.preventDefault()
        
     }

    return (
        <div className="container">
        <DashboardTopNav></DashboardTopNav>
        <div className="row">
            <div className="col-4 col-sm-3"> 
               <SideBar></SideBar>
            </div>
            <div className="col-8 col-sm-9" style={{backgroundColor:'#F4F7FC',paddingTop:'20px'}}>
                <h5 className="text-brand">Add Services</h5> 
                <form onSubmit={handleSubmit} style={{width:"70%"}}>
                    <div className="form-row">
                        <div className="form-group col-sm-7">
                            <label htmlFor="serviceTitle">ServiceTitle</label>
                            <input onBlur={handleBlur} type="text" className="form-control" name="name" id="serviceTitle" placeholder="Enter Title" required/>
                        </div>
                        <div className="form-group col-sm-5">
                            <label htmlFor="icon">Icon</label>
                            <input onChange={handleFileChange} type="file" className="form-control" id="icon" placeholder="Upload a image" />
                        </div>
                        <div className="form-group col-sm-7">
                            <label htmlFor="icon">Enter Description</label>
                            <textarea onBlur={handleBlur} className="form-control" rows="5" name="description" placeholder="Enter Description" required></textarea>
                        </div>
                    </div>
                    <button type="submit" className="btn black-btn text-right">Submit</button>
                </form>
            </div>
        </div>
    </div>
    );
};

export default AddService;