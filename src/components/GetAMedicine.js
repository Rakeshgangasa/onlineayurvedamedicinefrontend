import React, { useEffect, useState } from "react";
import axios from 'axios';
import {useParams} from 'react-router-dom';
import { Link } from "react-router-dom";
import logo from '../assests/images/logo.jpg';

function GetAMedicine() {

    const [medicine, setMedicines] = useState(null);
    const {id} = useParams();

    useEffect(() => {
        axios.get("http://localhost:8080/medicine/getmedicinebyid/"+id).then(resp => setMedicines(resp.data)); }, []);


    return(
        <div>
          <nav class="navbar bg-secondary">
          <div class="container-fluid">
            <img src={logo} alt="Avatar Logo" width="30" height="30" class="rounded-pill" />
            
            <Link to="/customer/details" class="btn btn-dark">MyDetails</Link>
            <button type="button" class="btn btn-success btn-rounded">MyOrder</button>
            <Link to="/ " class="btn btn-warning">Logout</Link>
            
          </div>
        </nav>
            <h2>Medicine Details</h2>
            {
                medicine !== null &&
                <div>
                    <p>medicineId: {medicine.medicineId}</p>
                    <p>Name: {medicine.medicineName}</p>
                    <p>medicineCost: {medicine.medicineCost}</p>
                    <p>Mfd: {medicine.mfd}</p>
                    <p>expiryDate: {medicine.expiryDate}</p>
                    <p>CompanyName: {medicine.companyName}</p>
                    </div>
                 
                    
            }
            <div>

<br></br>

<Link to="/medicine/all" className="btn btn-danger">Back to All Medicines</Link>

</div>
            
            
        </div>
    )
}
export default GetAMedicine;