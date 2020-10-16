import React from 'react';

const OrderTable = (props) => {
    const {name,email,projectTitle,projectDetails,status,_id} = props.orderDetails;

    return (
        
        <tr>
            <td>{name}</td>
            <td>{email}</td>
            <td>{projectTitle}</td>
            <td>{projectDetails}</td>
            <td>
                <select 
                    className={
                                `${status === "Pending" ? "text-danger" 
                                                        : `${status === "OnGoing" ? "text-warning"  
                                                                                  : "text-success"}`}`
                    }
                    defaultValue={status} 
                    onChange={(e) => props.handleSelectStatus(_id,e.target.value)}
                    style={{border:"none"}}
                > 
                    <option value="Pendeng">Pending</option>
                    <option value="OnGoing">On Going</option>
                    <option value="Done">Done</option>
                </select>
            </td>
        </tr>
        
    );
};

export default OrderTable;