import React from 'react';
import {Link} from 'react-router-dom';
const MyNav = () => {
    return ( 
        <div>
             <nav className="MyNav">

                <Link to="/">Home</Link>
                <Link to="/about">AboutUs</Link>
                <Link to="/parent">Parents</Link>
                <Link to="/chatbot">ChatBot</Link>
                <Link to="/shakti">AboutSashakt</Link>
                {/* <Link to="/feedback">Feedback</Link> */}
                
                
              </nav>

        </div>
  
     );
}
 
export default MyNav;