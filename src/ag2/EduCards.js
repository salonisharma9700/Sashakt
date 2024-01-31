import React from "react";
import { Link } from "react-router-dom";
import "./ag2.css"
class EduCards extends React.Component {
    state = {}
    render() {
        
        return (
            <>
            <div className="edu-main" style={{ backgroundImage: `url("ag2images/homepic2.jpg")`  }}>
           
  <div className="edu-cards">
    <div className="edu-card" >
      <img src="/ag2images/edu.png" className="edu-card-img-top" alt="..." />
      <div className="edu-card-body">
        <h5 className="edu-card-title">Right to Education</h5>
        <p className="edu-card-text"></p>
        <Link to="/RTEducation" className="btn btn-primary edu-learn-btn">Explore</Link>
      </div>
    </div>
    <div className="edu-card">
      <img src="/ag2images/RTdev.png" className="edu-card-img-top" alt="..." />
      <div className="edu-card-body">
        <h5 className="edu-card-title">Right to Development</h5>
        <p className="edu-card-text"></p>
        <Link to="/RTDevelopment" className="btn btn-primary edu-learn-btn">Explore</Link>
      </div>
    </div>
    <div className="edu-card">
      <img src="/ag2images/RTpro.jpeg" className="edu-card-img-top" alt="..." />
      <div className="edu-card-body">
        <h5 className="edu-card-title">Right to Protection</h5>
        <p className="edu-card-text"></p>
        <Link to="/RTProtection" className="btn btn-primary edu-learn-btn">Explore</Link>
      </div>
    </div>
    <div className="edu-card" >
      <img src="/ag2images/RTdis.jpeg" className="edu-card-img-top" alt="..." />
      <div className="edu-card-body">
        <h5 className="edu-card-title">Right against Discrimination</h5>
        <p className="edu-card-text"></p>
        <Link to="/RTDiscrimination" className="btn btn-primary edu-learn-btn">Explore</Link>
      </div>
    </div>
    <div className="edu-card" >
      <img src="/ag2images/RTsur.jpeg" className="edu-card-img-top" alt="..." />
      <div className="edu-card-body">
        <h5 className="edu-card-title">Right to Survival</h5>
        <p className="edu-card-text"></p>
        <Link to="/RTSurvival" className="btn btn-primary edu-learn-btn">Explore</Link>
      </div>
    </div>
    <div className="edu-card" >
      <img src="/ag2images/RTpar.png" className="edu-card-img-top" alt="..." />
      <div className="edu-card-body">
        <h5 className="edu-card-title">Right to Participation</h5>
        <p className="edu-card-text"></p>
        <Link to="/RTParticipation" className="btn btn-primary edu-learn-btn">Explore</Link>
      </div>
    </div>
  </div>
</div>

                
            </>
        );
    }
}

export default EduCards;