import React, { useContext, useState } from 'react';
import { UserContext } from '../../../App';
import SideBar from '../../DashBoard/SideBar'
import DashboardTopNav from '../../DashBoard/DashboardTopNav'
import { useHistory } from 'react-router-dom';

const UserReview = () => {
    const[loggedInUser,setLoggedInUser] = useContext (UserContext);
    const [review,setReview] = useState ({})
    const history = useHistory();
   
    const handleBlur = (e) => {
        const newReview = {...review,image:loggedInUser.image};
        newReview[e.target.name] = e.target.value;
        setReview(newReview);
    }
    const handleSubmit = (e) => {
        fetch('https://boiling-hollows-59715.herokuapp.com/addReview',{
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(review)
        })
        .then(response => response.json())
        .then(result => {
            if(result) {
                alert("Review Submitted Successfully")
            }
        })
        history.push('/home')
        e.preventDefault();
    }
    return (
        <div className="container">
             <DashboardTopNav></DashboardTopNav>
            <div className="row">
                <div className="col-4 col-sm-3"> 
                    <SideBar></SideBar>
                </div>
                <div className="col-8 col-sm-9"  style={{backgroundColor:'#F4F7FC',paddingTop:'20px'}}>
                <h5 className="text-brand">Give a Review</h5> 
                <form onSubmit={handleSubmit} style={{width:"70%"}}>
                        <div className="form-row">
                            <div className="form-group col-sm-12">
                                <input onBlur={handleBlur} type="text" className="form-control" name="name" placeholder="Your Name" required/>
                            </div>
                            <div className="form-group col-sm-12">
                                <input onBlur={handleBlur} type="text" className="form-control" name="jobTitle" placeholder="Company's Name,Designation" required/>
                            </div>
                            <div className="form-group col-sm-12">
                                <textarea onBlur={handleBlur} className="form-control" rows="5" name="review" placeholder="Description" required></textarea>
                            </div>
                        </div>
                        <button type="submit" className="btn black-btn">Submit</button>
                    </form>

                </div>
            </div>
        </div>
    );
};

export default UserReview;