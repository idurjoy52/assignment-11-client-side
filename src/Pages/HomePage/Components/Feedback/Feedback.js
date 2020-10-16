import React, { useEffect, useState } from 'react';
import './Feedback.css'
import FeedbackCard from './FeedbackCard/FeedbackCard';

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
                        customersReview.map(reviewData =><FeedbackCard key={reviewData._id} reviewData={reviewData}></FeedbackCard>)
                    }
                </div>
            </div>
        </div>
    );
};

export default Feedback;