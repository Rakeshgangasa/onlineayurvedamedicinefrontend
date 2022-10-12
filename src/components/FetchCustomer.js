import axios from "axios";
import React, { useEffect, useState} from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import logo from '../assests/images/logo.jpg';

function FetchCustomer() {

    const [customer, setCustomers] = useState(null);

     const user = JSON.parse(localStorage.getItem("loginuser"));
     console.log(user);

    useEffect(() => { 
        axios.get("http://localhost:8080/customer/" +user.id).then(resp => setCustomers(resp.data));
    }, [user.id]);

    return (
        <div className="container">

<nav class="navbar bg-secondary">
                <div class="container-fluid">
                    <img src={logo} alt="Avatar Logo" width="30" height="30" class="rounded-pill" />
                    
                    <button type="button" class="btn btn-dark">MyOrders</button>
                    <Link to="/"class="btn btn-warning btn-rounded" >Logout</Link>
                </div>

            </nav>
            <h2>Customer Details</h2>
            {
             customer != null &&  
                <div>
                    <p> id : {customer.id} </p>
                    <p> username : {customer.username} </p>
                    <p> password : {customer.password} </p>
                    <p> firstName: {customer.firstName}</p>
                    <p> lastName: {customer.lastName}</p>
                    <p> email : {customer.email}</p>
                    <p> mobile : {customer.mobile} </p>
                    <p> houseNo : {customer.address.houseNo}</p>
                    <p> city : {customer.address.city} </p>
                    <p> state : {customer.address.state}</p>
                    <p> pincode : {customer.address.pincode}</p>
                </div>
            }

            <div>
            <Link to="/customer/update"  className="btn btn-danger">update</Link>
            </div>
        </div>
    )

}

export default FetchCustomer;