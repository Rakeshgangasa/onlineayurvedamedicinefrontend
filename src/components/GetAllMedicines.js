import React, { useEffect, useState } from "react";
import axios from 'axios';
import { Link } from 'react-router-dom';
import cumin1 from '../assests/images/cumin1.jpg';

function GetAllMedicines() {
    const [medicines, setMedicines] = useState([]);
    
    useEffect(() => {
        axios
            .get("http://localhost:8080/medicine/getallmedicines")
            .then((resp) => setMedicines(resp.data));
    }, []);

    return (
        <div className="container">
            {medicines.length > 0 && (
                <table className="table">
                    <thead className="thead-dark">
                        <tr>
                            <th>medicine Image</th>
                            <th>MedicineId</th>
                            <th>Name</th>
                            <th>cost</th>
                            <th>Mfd</th>
                            <th>expiryDate</th>
                            <th>companyName</th>
                            <th></th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {medicines.map((p) => (
                            <tr key={p.medicineId}>
                                <div>
                                    <img src={cumin1} width="100" height="100" />
                                </div>
                                <td> {p.medicineId}</td>
                                <td> {p.medicineName}</td>
                                <td> {p.medicineCost} </td>
                                <td> {p.mfd}</td>
                                <td> {p.expiryDate}</td>
                                <td> {p.companyName}</td>
                                <td><Link to={`/medicine/details/${p.medicineId}`} className="btn btn-info">View</Link></td>
                            </tr>

                        ))}
                    </tbody>
                </table>
            )}

            <button className="btn btn-primary">Place order</button>

        </div>



    );
}

export default GetAllMedicines;