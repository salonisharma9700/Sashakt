import React from "react";
import { Link } from 'react-router-dom';
class Sidebar extends React.Component {
    state = {  } 
    render() { 
        return (
            <>
                <div className=" main ">
                    <div className="side fixed-top">
                        <h2 className="sidehead">Age:12-16</h2>
                        <Link to="/WordGames" className="circle puzzle" ></Link>
                        <Link to="/Memory" className="circle doodle" ></Link>
                        <Link to="/EducationCards" className="circle education"  ></Link>
                        <Link to="/McqCards" className="circle mcq" ></Link>
                    </div>
                </div>
            </>
        );
    }
}
 
export default Sidebar;