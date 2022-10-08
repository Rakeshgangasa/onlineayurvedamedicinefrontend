import React, { useState , useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";

import { Link } from "react-router-dom";

import axios from "axios";

function UpdateCustomer() {

    const [cId, setCId] = useState('');
    const [cName, setCName] = useState('');
    const [cEmail, setCEmail] = useState('');
    const [cMobileNo, setCMobileNo] = useState('');
    const [cAddress, setCAddress] = useState('');
    const {id} = useParams();

    const navigate = useNavigate();


    //fetch the data by id
    useEffect(() => {   // it take two argument to execute only once
        axios.get("http://localhost:8080/customer/getCustomerbyid/"+id).then(resp => {
            setCId(resp.data.customerId);
            setCName(resp.data.customerName);
            setCEmail(resp.data.email);
            setCMobileNo(resp.data.mobileNo);
            setCAddress(resp.data.address);
        })
    }, [id]);

    const handleSubmit = () => {
        const payload = {
            customerId: cId,
            customerName: cName,
            email: cEmail,
            mobileNo: cMobileNo,
            address: cAddress
          }

          axios.put("http://localhost:8080/customer/updatecustomer",payload)
          .then(resp => {
            alert("Customer Updated successfully with Id : " + resp.data.customerId);
            navigate("/customer/all");
          });
          
    }

    return (
        <div className="container">
            <h2 style={{textAlign:"center"}}>Update Customer</h2>

            <div className="form-group">
                <label htmlFor="cId">Customer Id : </label>
                <input type="number" className="form-control" name="cId" id="cId" value={cId}
                    onChange={(event) => setCId(event.target.value)} disabled />
            </div>

            <div className="form-group">
                <label htmlFor="cName">Customer Name : </label>
                <input type="text" className="form-control" name="cName" id="cName" value={cName}
                    onChange={(event) => setCName(event.target.value)} />
            </div>

            <div className="form-group">
                <label htmlfor="cEmail"> Email : </label>
                <input type="email" className="form-control" name="cEmail" id="cEmail" value={cEmail}
                    onChange={(event) => setCEmail(event.target.value)} />
            </div>

            <div className="form-group">
                <label htmlFor="cMobileNo">Mobile No : </label>
                <input type="number" className="form-control" name="cMobileNo" id="cMobileNo" value={cMobileNo}
                    onChange={(event) => setCMobileNo(event.target.value)} />
            </div>

            <div className="form-group">
                <label htmlFor="cAddress">Address: </label>
                <input type="text" className="form-control" name="cAddress" id="cAddress" value={cAddress}
                    onChange={(event) => setCAddress(event.target.value)} />
            </div>

            <button className="btn btn-primary" onClick={handleSubmit}>Update</button>

            <div>
                <br></br>
                <Link to="/" className="btn btn-danger">Back to Home</Link>
            </div>
        </div>
    )
}

export default UpdateCustomer;