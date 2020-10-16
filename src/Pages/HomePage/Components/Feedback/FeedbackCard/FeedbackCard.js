import React from 'react';

const FeedbackCard = (props) => {
    const {image,name,jobTitle,review} = props.reviewData;
    return (
        <div className="col-md-4 col-sm-6 d-flex justify-content-center">
            <div className="card mb-5" style={{width: "17rem"}}>
                <div className="d-flex align-items-center">
                    <div className="mr-2"> 
                        <img style={{width: "100px",height: "100px"}} src={image} className="rounded-circle" alt="..."/>
                    </div>
                    <div>
                        <h5>{name}</h5>
                        <h6>{jobTitle}</h6>
                    </div>    
                </div>
                <div className="card-body">
                    <p className="card-text">{review}</p>
                </div>
            </div>
        </div>
    );
};

export default FeedbackCard;