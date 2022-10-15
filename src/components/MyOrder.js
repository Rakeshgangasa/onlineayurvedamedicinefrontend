import React, { useState, useEffect } from "react";
import axios from "axios";
function MyOrder() {
    const [orders, setOrders] = useState([]);
    const user = JSON.parse(localStorage.getItem("loginuser"));
    
    useEffect(() => {
        axios.get("http://localhost:8080/order/getallorderById/" + user.id).then(resp => setOrders(resp.data.orderList));
    },[user.id]);
    return (
        <div>
            <h2>My orders {orders.length}</h2>
            {
            orders.length>0 && 
            orders.map((p) => (

                <div>
                    <div>
                        <p>orderDate : {p.orderDate} </p>
                        <p>dispatchDate : {p.dispatchDate} </p>
                        <p>totalCost : {p.totalCost} </p>
                    </div>
                      {p.orderItems.map((o) => (
                        <div key={o.orderItemId} >
                            <div>
                                <p>medicineId: {o.medicine.medicineId}</p>
                                <p>Name: {o.medicine.medicineName}</p>
                                <p>medicineCost: {o.medicine.medicineCost}</p>
                                <p>Mfd: {o.medicine.mfd}</p>
                                <p>expiryDate: {o.medicine.expiryDate}</p>
                                <p>CompanyName: {o.medicine.companyName}</p>
                                <p>cost:{o.cost}</p>
                            </div>
                        </div>    
                      )
                      )
                    }
                </div>
            )
            )
                }
        </div >
    )
}
export default MyOrder;