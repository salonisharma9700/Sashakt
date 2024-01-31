import React from "react";
import { Link } from "react-router-dom";
import './ag2.css'
class McqCards extends React.Component {
    state = {}
    render() {
        return (
            <div className="ag2-vid" >
                <div className="ag2vid" style={{ backgroundImage: `url("ag2images/homepic2.jpg")`  }} >
                    <div className="ag2vid- main " >
                        <div className="ag2vid-cards">
                            <div className="ag2vid-card">
                                <img src="/ag2images/education.jpeg" className="card-img-top" alt="..." />
                                <div className="ag2vid-card-body">
                                    <h5 className="ag2vid-card-title"></h5>
                                    <p className="ag2vid-card-text">Importance of Education</p>
                                    <Link to="/Video1" className="btn btn-primary">Let's start</Link>
                                </div>
                            </div>
                            <div className="ag2vid-card" >
                                <img src="/ag2images/touch.jpg" className="card-img-top" alt="..." />
                                <div className="ag2vid-card-body">
                                    <h5 className="ag2vid-card-title"></h5>
                                    <p className="ag2vid-card-text">Good touch-Bad touch</p>
                                    <Link to="/Video2" className="btn btn-primary">Let's start</Link>
                                </div>
                            </div>
                            <div className="ag2vid-card">
                                <img src="/ag2images/rights.jpeg" className="card-img-top" alt="..." />
                                <div className="ag2vid-card-body">
                                    <h5 className="ag2vid-card-title"></h5>
                                    <p className="ag2vid-card-text">Child-Rights</p>
                                    <Link to="/Video3" className="btn btn-primary">Let's start</Link>
                                </div>
                            </div>
                          
                        </div>
                    </div>
                </div>
            </div>

        );
    }
}

export default McqCards;