import React, { useEffect, useState } from "react";
import axios from 'axios';
import {useParams} from 'react-router-dom';


function GetAMedicine() {

    const [medicine, setMedicines] = useState(null);
    const {id} = useParams();

    useEffect(() => {
        axios.get("http://localhost:8080/medicine/getmedicinebyid/"+id).then(resp => setMedicines(resp.data)); }, []);


    return(
        <div>
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
            
        </div>
    )
}
export default GetAMedicine;