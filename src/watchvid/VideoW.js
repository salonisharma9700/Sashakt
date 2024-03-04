import React from "react";
import { Link } from "react-router-dom";
import './vid.css'
class EduCards extends React.Component {
    state = {}
    render() {
        
        return (
           
            <div className="vid-row vid-row-cols-1 vid-row-cols-md-2 vid-g-4">
      <div className="vid-col" >
        <div className="vid-card">
          <img src="/vidimg/vidimage1.jpg" className="vid-card-img-top" alt="..." />
          <div className="vid-card-body">
            <h5 className="vid-card-title">Child Rights</h5>
           
            <Link to="/watchVideo1" >
                <button className="vid-start-button">
                Watch
                <svg fill="currentColor" viewBox="0 0 24 24" className="vid-icon">
               <path clip-rule="evenodd" d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zm4.28 10.28a.75.75 0 000-1.06l-3-3a.75.75 0 10-1.06 1.06l1.72 1.72H8.25a.75.75 0 000 1.5h5.69l-1.72 1.72a.75.75 0 101.06 1.06l3-3z" fill-rule="evenodd"></path>
              </svg>
              </button></Link>
          </div>
        </div>
      </div>
      <div className="vid-col">
        <div className="vid-card">
          <img src="/vidimg/vidimage2.webp" className="vid-card-img-top" alt="..." />
          <div className="vid-card-body">
            <h5 className="vid-card-title">Right to Education</h5>
           
            <Link to="/watchVideo2" ><button className="vid-start-button">
                 Watch
                <svg fill="currentColor" viewBox="0 0 24 24" className="vid-icon">
               <path clip-rule="evenodd" d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zm4.28 10.28a.75.75 0 000-1.06l-3-3a.75.75 0 10-1.06 1.06l1.72 1.72H8.25a.75.75 0 000 1.5h5.69l-1.72 1.72a.75.75 0 101.06 1.06l3-3z" fill-rule="evenodd"></path>
              </svg>
              </button></Link>
          </div>
        </div>
      </div>
      <div className="vid-col">
        <div className="vid-card">
          <img src="/vidimg/vidimage3.jpg" className="vid-card-img-top" alt="..." />
          <div className="vid-card-body">
            <h5 className="vid-card-title">Child Labour</h5>
            
            <Link to="/watchVideo3" >
                <button className="vid-start-button">
                Watch
                <svg fill="currentColor" viewBox="0 0 24 24" className="vid-icon">
               <path clip-rule="evenodd" d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zm4.28 10.28a.75.75 0 000-1.06l-3-3a.75.75 0 10-1.06 1.06l1.72 1.72H8.25a.75.75 0 000 1.5h5.69l-1.72 1.72a.75.75 0 101.06 1.06l3-3z" fill-rule="evenodd"></path>
              </svg>
              </button></Link>
          </div>
        </div>
      </div>
      <div className="vid-col">
        <div className="vid-card">
          <img src="/vidimg/vidimage4.png" className="vid-card-img-top" alt="..." />
          <div className="vid-card-body">
            <h5 className="vid-card-title">Protection From Abuse</h5>
            
            <Link to="/watchVideo4" >
                <button className="vid-start-button">
                    Watch
                <svg fill="currentColor" viewBox="0 0 24 24" className="vid-icon">
               <path clip-rule="evenodd" d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zm4.28 10.28a.75.75 0 000-1.06l-3-3a.75.75 0 10-1.06 1.06l1.72 1.72H8.25a.75.75 0 000 1.5h5.69l-1.72 1.72a.75.75 0 101.06 1.06l3-3z" fill-rule="evenodd"></path>
              </svg>
             </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
        );
    }
}

export default EduCards;