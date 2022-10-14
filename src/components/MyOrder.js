import React, { useState, useEffect } from "react";
import axios from "axios";
function MyOrder() {
    const [orderList, setOrders] = useState(null);
    const user = JSON.parse(localStorage.getItem("loginuser"));
    console.log(user);
    useEffect(() => {
        axios.get("http://localhost:8080/customer/" + user.id).then(resp => setOrders(resp.data));

    }, [user.id]);
    useEffect(() => {
        axios.get("http://localhost:8080/order/getallorderById/" + user.id).then(resp => setOrders(resp.data));
    },[user.id]);
    return (
        <div>
            {orderList.map((p) => {

                <div key={p.orderId}>
                    <div>
                        <p>orderDate : {orderList.orderDate} </p>
                        <p>dispatchDate : {orderList.dispatchDate} </p>
                        <p>totalCost : {orderList.totalCost} </p>
                    </div>
                      {p.orderItem.map((o) => {
                        <div key={p.o.orderItemId} >
                            <div>
                                <p>medicineId: {p.o.medicine.medicineId}</p>
                                <p>Name: {p.o.medicine.medicineName}</p>
                                <p>medicineCost: {p.o.medicine.medicineCost}</p>
                                <p>Mfd: {p.o.medicine.mfd}</p>
                                <p>expiryDate: {p.o.medicine.expiryDate}</p>
                                <p>CompanyName: {p.o.medicine.companyName}</p>
                                <p>cost:{o.cost}</p>
                            </div>
                        </div>    
                        }
                      )
                    }
                </div>
            }
            )
            }
        </div >
    )
}
export default MyOrder;