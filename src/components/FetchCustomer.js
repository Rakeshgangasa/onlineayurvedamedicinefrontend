import axios from "axios";
import React, { useEffect, useState} from "react";
import { useParams } from "react-router-dom";

import { Link } from "react-router-dom";

function FetchCustomer() {

    const [customer, setCustomers] = useState(null);

    const {id} = useParams();

    //similar to componentDidMount()
    useEffect(() => {   // it take two argument to execute only once
        axios.get("http://localhost:8080/customer/getCustomerbyid/"+id).then(resp => setCustomers(resp.data))
    }, [id]);

    return (
        <div className="container">
            <h2>Customer Details</h2>
            {
                customer != null && 
                <div>
                    <p> Customer Id : {customer.customerId} </p>
                    <p> Name : {customer.customerName} </p>
                    <p> Email : {customer.email} </p>
                    <p> Mobile No :  {customer.mobileNo} </p>
                    <p> Address : {customer.address} </p>
                </div>
            }

            <div>
                <Link to="/" className="btn btn-danger">Back to Home</Link>
            </div>
        </div>
    )

}

export default FetchCustomer;