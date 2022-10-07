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

      </Routes>
      </BrowserRouter>
  );
}

export default App;
