import React from "react";
import { Link } from "react-router-dom";
import './ag2.css'
class Memory extends React.Component {
    state = {}
    render() {
        return (
            <>
                <div className="Mem"  style={{ backgroundImage: `url("ag2images/homepic2.jpg")`  }}>
                    <div className=" mem-main ">
                        <div className="mem-cards">
                            <div className="mem-card" >
                                <img src="/ag2images/memory.jpeg" className="card-img-center" alt="..." />
                                <div className="mem-card-body">
                                    <h5 className="mem-card-title"></h5>
                                    <p className="mem-card-text"></p>
                                    <Link to="/GameBoard" className="btn btn-primary">Start the Game</Link>
                                </div>
                            </div>
                           
                        </div>
                    </div>
                </div>
            </>
        );
    }
}

export default Memory;
