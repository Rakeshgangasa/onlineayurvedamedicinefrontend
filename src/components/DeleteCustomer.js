import  React , { useState , useEffect } from "react";

import axios from "axios";
import { Link, useNavigate , useParams } from "react-router-dom";

function DeleteCustomer() {

    const [customer, setCustomer] = useState('');
    const {id} = useParams();

    const navigate = useNavigate();

    useEffect(() => {
        axios.get("http://localhost:8080/customer/getCustomerbyid/" + id).then(resp => setCustomer(resp.data))
    },[id]);

    const handleDelete = () => {
        axios.delete("http://localhost:8080/customer/delete/" + id).then(resp => {
            alert("Customer Deleted");
            navigate("/customer/all");
        });
    }

    return (
        <div className="container">
            <h2>Delete Customer</h2>
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
                <button className="btn btn-danger" onClick={handleDelete}>Delete</button>
                <Link to="/customer/all" className="btn btn-secondary">Back</Link>
            </div>

        </div>
    )
}

export default DeleteCustomer;