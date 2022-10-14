import React, { useEffect, useState } from "react";
import axios from 'axios';
import { Link } from 'react-router-dom';
import cumin1 from '../assests/images/cumin1.jpg';
import logo from '../assests/images/logo.jpg';

function GetAllMedicines() {
    const [medicines, setMedicines] = useState([]);
    const checkList = [
        {
            id: medicines.medicineId,
            name: medicines.medicineName
        },

    ]
    const [checked, setChecked] = useState([]);
    const handleCheck = (event) => {
        var updatedList = [...checked];
        if (event.target.checked) {
            updatedList = [...checked, event.target.value];
        } else {
            updatedList.splice(checked.indexOf(event.target.value), 1);
        }
        setChecked(updatedList);
    };
    const placeOrder = () => {
        console.log("total:" + checked.length);
        for (let c of checked) {
            console.log(c);
        }
        setChecked([]);
    }

    useEffect(() => {
        axios
            .get("http://localhost:8080/medicine/getallmedicines")
            .then((resp) => setMedicines(resp.data));
    }, []);

    return (
        <div>
            <nav class="navbar bg-secondary">
                <div class="container-fluid">
                    <img src={logo} alt="Avatar Logo" width="30" height="30" class="rounded-pill" />
                    <button type="button" class="fa fa-fw fa-user">MyOrders</button>
                    <Link to="/customer/details" class="fa fa-fw fa-user">MyDetails</Link>
                    <Link to="/" class="fa fa-fw fa-user" >Logout</Link>
                </div>
            </nav>
            <div className="container" style={{
                backgroundColor: "lightblue", alignItems: 'center',
                justifyContent: 'center'
            }} >
                {medicines.length > 0 && (
                    <table className="table">
                        <thead className="thead-striped">
                            <tr>
                                <th>medicine Image</th>
                                {/* <th>MedicineId</th> */}
                                <th>Name</th>

                            </tr>
                        </thead>
                        <tbody>
                            {medicines.map((p) => (
                                <tr key={p.medicineId}>
                                    <div>
                                        <img src={cumin1} width="100" height="100" />
                                    </div>
                                    {/* <td> {p.medicineId}</td> */}
                                    <td> {p.medicineName}</td>

                                    <td><Link to={`/medicine/details/${p.medicineId}`} className="btn btn-dark">View</Link></td>
                                    
                                    {checkList.map((item, index) => (

                                        <div key={index}>

                                            <input value={item.medicineId} type="checkbox" onChange={handleCheck} />

                                            <span>{item.medicineName}</span>

                                        </div>
                                    )
                                    )}
                                </tr>
                            ))}
                        </tbody>
                    </table>
                )}
                <Link to="/customer/order/" onClick={placeOrder} class="btn btn-success">Place order</Link>
                {
                    checked.length > 0 &&
                    checked.map(i => <div>
                        {i}
                    </div>
                    )
                }
            </div>
        </div>

    );
}

export default GetAllMedicines;