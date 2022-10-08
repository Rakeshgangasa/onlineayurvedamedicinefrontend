import './App.css';

import Home from './components/Home';

import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

import GetAllMedicines from './components/GetAllMedicines';
import GetAMedicine from './components/GetAMedicine';
import AddMedicine from './components/AddMedicine';
import DeleteMedicine from './components/DeleteMedicine';
import UpdateMedicine from './components/UpdateMedicine';
import AddCustomer from './components/AddCustomer';
import FetchAllCustomers from './components/FetchAllCustomers';
import FetchCustomer from './components/FetchCustomer';
import UpdateCustomer from './components/UpdateCustomer';
import DeleteCustomer from './components/DeleteCustomer';


function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path = "/" element = {<Home/>}/>
      
      <Route path = "/medicine/all" element = {<GetAllMedicines/>}/>
      <Route path = "/medicine/details/:id" element = {<GetAMedicine/>}/>
      <Route path = "/medicine/add" element = {<AddMedicine/>}/>
      <Route path = "/medicine/delete/:id" element = {<DeleteMedicine/>}/>
      <Route path = "/medicine/update/:id" element = {<UpdateMedicine/>}/>
      <Route path="/customer/add" element={<AddCustomer/>} />
        <Route path="/customer/all" element={<FetchAllCustomers />} />
        <Route path="/customer/details/:id" element={<FetchCustomer />} />
        <Route path="/customer/update/:id" element={<UpdateCustomer />} />
        <Route path="/customer/delete/:id" element={<DeleteCustomer />} />

      </Routes>
      </BrowserRouter>
  );
}

export default App;
