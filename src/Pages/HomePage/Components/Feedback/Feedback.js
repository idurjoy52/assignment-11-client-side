import React, { useEffect, useState } from 'react';
import './Feedback.css'
import FeedbackCard from './FeedbackCard/FeedbackCard';
import loading from '../../../../images/loading.gif'

const Feedback = () => {

    const[customersReview,setCustomersReview] = useState([]);
    useEffect(() => {
        fetch('https://boiling-hollows-59715.herokuapp.com/customerReview')
        .then(res => res.json())
        .then(data => {
            setCustomersReview(data);
        })
    },[])

    return (
    
        <div className="feedback-area">
            <div className="container">
                <h2 className="text-center my-5">Clients <span className="highlight-text">Feedback</span></h2> 
                <div className="row">
                    {
                        customersReview.length === 0 && <img style={{width:"150px",height:"100px",display:"block",margin:"auto"}} src={loading} alt=""/>
                    } 
                    {
                        customersReview.map(reviewData =><FeedbackCard key={reviewData._id} reviewData={reviewData}></FeedbackCard>)
                    }
                </div>
            </div>
        </div>
    );
};

export default Feedback;