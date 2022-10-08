import React, { useState } from "react";

import axios from 'axios';

import { Link, useNavigate } from "react-router-dom";

function AddCustomer() {


    const [cName, setCName] = useState('');
    const [cEmail, setCEmail] = useState('');
    const [cMobileNo, setCMobileNo] = useState('');
    const [cAddress, setCAddress] = useState('');

    const [formErrors, setFormErrors] = useState({});

    const navigate = useNavigate();

    //    const handleInputChange = () => {

    //    }


    const handleSubmit = () => {

        let errors = {};
        if (!cName) {
            errors['cNameError'] = "Customer name is required."
        }
        if (!cEmail) {
            errors['cEmailError'] = "Customer mail is required."
        }

        setFormErrors(errors);

        const noErrors = Object.keys(errors).length === 0;

        if (noErrors) {
            const payload = {

                customerName: cName,
                email: cEmail,
                mobileNo: cMobileNo,
                address: cAddress
            }

            axios.post("http://localhost:8080/customer/addcustomer", payload)
                .then(resp => {
                    alert("New Customer added successfully with Id : " + resp.data.customerId);
                    navigate("/customer/all");
                });
        }

    }

    return (
        <div className="container">


            <div className="container">
                <div className="form-group">
                    <label htmlFor="cName">Customer Name : </label>
                    <input type="text" className="form-control" name="cName" id="cName" value={cName}
                        onChange={(event) => setCName(event.target.value)} placeholder="Enter Customer Name" />
                    {
                        formErrors.cNameError && <div style={{ color: "red" }}> {formErrors.cNameError}</div>
                    }
                </div>

                <div className="form-group">
                    <label htmlfor="cEmail"> Email : </label>
                    <input type="email" className="form-control" name="cEmail" id="cEmail" value={cEmail}
                        onChange={(event) => setCEmail(event.target.value)} placeholder="Enter Customer email" />
                </div>

                <div className="form-group">
                    <label htmlFor="cMobileNo">Mobile No : </label>
                    <input type="number" className="form-control" name="cMobileNo" id="cMobileNo" value={cMobileNo}
                        onChange={(event) => setCMobileNo(event.target.value)} placeholder="Enter Mobile Number" />
                </div>

                <div className="form-group">
                    <label htmlFor="cAddress">Address : </label>
                    <input type="text" className="form-control" name="cAddress" id="cAddress" value={cAddress}
                        onChange={(event) => setCAddress(event.target.value)} />
                </div>

                <button className="btn btn-primary" onClick={handleSubmit}>Submit</button>

                <div>
                    <br></br>
                    <Link to="/" className="btn btn-danger">Back to Home</Link>
                </div>
            </div>
        </div>
    )
}

export default AddCustomer;