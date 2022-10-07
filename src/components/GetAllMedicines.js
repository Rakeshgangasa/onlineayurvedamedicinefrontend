import React, { useEffect, useState } from "react";
import axios from 'axios';
import {Link} from 'react-router-dom';

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
                            <th>MedicineId</th>
                            <th>Name</th>
                            <th>Price</th>
                            <th>Mfd</th>
                            <th>ExpairyDate</th>
                            <th>CompanyName</th>
                            <th></th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {medicines.map((p) => (
                            <tr key={p.medicineId}>
                                <td> {p.medicineId}</td>
                                <td> {p.medicineName}</td>
                                <td> {p.medicineCost} </td>
                                <td> {p.mfd}</td>
                                <td> {p.expiryDate}</td>
                                <td> {p.companyName}</td>
                                <td><Link to = {`/medicine/details/${p.medicineId}`} className="btn btn-info">View</Link></td>
                                <td><Link to={`/medicine/update/${p.medicineId}`} className="btn btn-secondary">Update</Link></td>
                                <td><Link to={`/medicine/delete/${p.medicineId}`} className="btn btn-danger">Delete</Link></td>
                                
                               
                            </tr>
                        ))}
                    </tbody>
                </table>
            )}
        </div>
    );
}

export default GetAllMedicines;