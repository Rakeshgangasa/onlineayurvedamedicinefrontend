import React from "react";
import {Link} from 'react-router-dom';


function Home() {

    return(
        <div>
            
            
            <p><Link to = "/medicine/all">All Medicines</Link></p>
            <p><Link to = "/medicine/add">Add medicine</Link></p>

        </div>
    )
}

export default Home;