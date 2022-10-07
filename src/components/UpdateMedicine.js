import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

function UpdateMedicine(){

    const [mId, setMId] = useState('');
    const[mName, setMName] = useState('');
    const[mPrice, setMPrice] = useState('');
    const[mMfd, setMMfd] = useState('');
    const[mExpiryDate, setMexpiryDate] = useState('');
    const[mCompanyName, setMCompanyName] = useState('');
    

    const { id } = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        axios.get("http://localhost:8080/medicine/" +id).then(resp => {
            setMId(resp.data.medicineId);
            setMName(resp.data.medicineName);
            setMPrice(resp.data.medicinePrice);
            setMMfd(resp.data.mfd);
            setMexpiryDate(resp.data.expiryDate);
            setMCompanyName(resp.data.CompanyName);
            
        });
    }, [id]);

    const handleSubmit = () => {

        const payload = {

            medicineName: mName,
                medicinePrice: mPrice,
               mfd: mMfd,
               ExpiryDate : mExpiryDate,
               CompanyName: mCompanyName
        }

        axios.put("http://localhost:8080/medicine/updatemedicine", payload)
        .then(resp => {
            alert("Medicine Updated");
            navigate("/medicine/all");
        });
    }
    return(
        <div class="container">
            <h2> Update Medicine</h2>

            <div className="form-group">
                    <label htmlFor="mName">MedicineName</label>
                    <input type="text" className="form-control" name="mName" id="mName" placeholder="Enter Medicine Name"
                     onChange={(event) => setMName(event.target.value)} value={mName}/>
                     
                </div>

                <div className="form-group">
                    <label htmlFor="pPrice">MedicinePrice</label>
                    <input type="text" className="form-control" name="pPrice" id="mPrice" placeholder="Enter Medicine Price"
                    onChange={(event) => setMPrice(event.target.value)} value={mPrice}/>
                     
                </div>

                <div className="form-group">
                    <label htmlFor="mMfd">MedicineMfd</label>
                    <input type="text" className="form-control" name="mMfd" id="mMfd" placeholder="Enter Medicine Manufactured Date"
                    onChange={(event) => setMMfd(event.target.value)} value={mMfd}/>
                     
                </div>

                <div className="form-group">
                    <label htmlFor="mExpiryDate">Medicine ExpiryDate </label>
                    <input type="text" className="form-control" name="mExpiryDate" id="mExpiryDate" placeholder="Enter Medicine Expiry Date"
                    onChange={(event) => setMexpiryDate(event.target.value)} value={mExpiryDate}/>
                </div>

                

                <div className="form-group">
                    <label>Company Name</label>
                    <input type="mCompanyName" className="form-control" name="mCompanyName" id="mCompanyName" placeholder="select Company Name"
                    onChange={(event) => setMCompanyName(event.target.value)} value={mCompanyName}/>
                </div>
                <div>
                    <button onClick={handleSubmit} className="btn btn-primary">Update</button>
                </div>


        </div>
    )
}

export default UpdateMedicine;