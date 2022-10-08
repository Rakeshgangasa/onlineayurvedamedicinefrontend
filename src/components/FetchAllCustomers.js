import React, { useEffect, useState } from "react";
import axios from 'axios';
import { Link } from "react-router-dom";

function FetchAllCustomers() {

    const [customers, setCustomers] = useState([]);

    useEffect(() => {
        axios.get("http://localhost:8080/customer/getallcustomers").then(resp => setCustomers(resp.data))
    },[]);  //pass empty array as an argument, so only one request is send to server 


    return (
        <div className="container">
                <h2 style={{color:"blue", textAlign:"center"}}>All Customers</h2>
                
                {
                    customers.length > 0 && 
                
                
                <table className="table" style={{width:"100%", textAlign:"center"}}>
                    <thead className="thead-dark">
                    <tr>
                        <th>Customer Id</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>MobileNo</th>
                        <th>Address</th>
                        <th></th>
                    </tr>
                    </thead>
                    <tbody>
                    {
                        customers.map(c => <tr key={c.customerId}>
                        <td> {c.customerId} </td>
                        <td> {c.customerName} </td>
                        <td> {c.email} </td>
                        <td> {c.mobileNo} </td>
                        <td> {c.address} </td>
                        <td><Link to={`/customer/details/${c.customerId}`} className="btn btn-info">View</Link></td>
                        <td><Link to={`/customer/update/${c.customerId}`}  className="btn btn-secondary">Update</Link></td>
                        <td><Link to={`/customer/delete/${c.customerId}`}  className="btn btn-danger">Delete</Link></td>
                        </tr>)
                    }
                    </tbody>
                </table>
                }

                <div>
                    <Link to="/" className="btn btn-danger">Back to Home</Link>
                </div>
        </div>
    )
}


export default FetchAllCustomers;