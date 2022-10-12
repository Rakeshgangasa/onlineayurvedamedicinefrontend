import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import './CustomerLogin.css';

function CustomerLogin() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [message, setMessage] = useState('');
    const [formErrors, setFormErrors] = useState({});
    const navigate = useNavigate();

    const handleSubmit = () => {

        let errors = {};
        if (!username) {
            errors['usernameError'] = "Username is required."
        }
        if (!password) {
            errors['passwordError'] = "Password is required."
        }
        setFormErrors(errors);
        const noErrors = Object.keys(errors).length === 0;

        if (noErrors) {
       
            const payload = {
            username: username,
            password: password
        }

        axios.post("http://localhost:8080/customer/login", payload)
            .then(resp => {
                localStorage.setItem('loginuser', JSON.stringify(resp.data));
                navigate("/customer/dashboard");
            })

            .catch(error => {
                setMessage(error.response.data);
            });
        }
    }
   

    return (
        <div className="container">
            <div class="main">
                <div class="sub-main">
                    <h2 class="form">Login </h2>
                    <div className="form-group">
                        <label htmlFor='firstName'>FirstName</label>
                        <input type="text" className="form-control" name="firstName" id="firstName"
                           onChange={(event) => setUsername(event.target.value)} value={username} />
                           {
                        formErrors.usernameError && <div style={{ color: "red" }}> {formErrors.usernameError}</div>
                    }
                    </div>
                    <div className="form-group">
                        <label htmlFor='password'>Password</label>
                        <input type="password" className="form-control" name="password" id="password"
                            onChange={(event) => setPassword(event.target.value)} value={password} />
                            {
                        formErrors.passwordError && <div style={{ color: "red" }}> {formErrors.passwordError}</div>
                    }
                    </div>
                    <div>
                        <button onClick={handleSubmit} className="btn  btn-success">Login</button>
                    </div>

                    <p><Link to="/customer/add">Click here to register first</Link></p>
                </div>
            </div>
        </div>


    )

}
export default CustomerLogin;