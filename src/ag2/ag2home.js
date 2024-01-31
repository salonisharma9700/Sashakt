import "./ag2.css"
import { Link } from "react-router-dom";
const Ag2Home = () => {
    return ( 
        <div className="ag2-home"  style={{ backgroundImage: `url("ag2images/homepic.jpg")`  }}>
  <div className="ag2home-row ag2home-row-cols-1 ag2home-row-cols-md-2 ag2home-g-4">
  <div className="ag2home-col">
    <div className="ag2home-card">
      <img src="/ag2images/education.jpeg" className="ag2home-card-img-top" alt="..." />
      <div className="ag2home-card-body">
        <h5 className="ag2home-card-title">Education Modules</h5>
        <Link to='/EducationCards'>
          <button className="ag2home-start-button">
            Start
            <svg fill="currentColor" viewBox="0 0 24 24" className="ag2home-icon">
              <path clip-rule="evenodd" d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zm4.28 10.28a.75.75 0 000-1.06l-3-3a.75.75 0 10-1.06 1.06l1.72 1.72H8.25a.75.75 0 000 1.5h5.69l-1.72 1.72a.75.75 0 101.06 1.06l3-3z" fill-rule="evenodd"></path>
            </svg>
          </button>
        </Link>
      </div>
    </div>
  </div>
  <div className="ag2home-col">
    <div className="ag2home-card">
      <img src="/ag2images/memory.jpeg" className="ag2home-card-img-top" alt="..." />
      <div className="ag2home-card-body">
        <h5 className="ag2home-card-title">Memory Game</h5>
        <Link to="/Memory">
          <button className="ag2home-start-button">
            Start
            <svg fill="currentColor" viewBox="0 0 24 24" className="ag2home-icon">
              <path clip-rule="evenodd" d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zm4.28 10.28a.75.75 0 000-1.06l-3-3a.75.75 0 10-1.06 1.06l1.72 1.72H8.25a.75.75 0 000 1.5h5.69l-1.72 1.72a.75.75 0 101.06 1.06l3-3z" fill-rule="evenodd"></path>
            </svg>
          </button>
        </Link>
      </div>
    </div>
  </div>
  <div className="ag2home-col">
    <div className="ag2home-card">
      <img src="/ag2images/wordgame.jpeg" className="ag2home-card-img-top" alt="..." />
      <div className="ag2home-card-body">
        <h5 className="ag2home-card-title">Word Games</h5>
        <Link to="/WordGames">
          <button className="ag2home-start-button">
            Start
            <svg fill="currentColor" viewBox="0 0 24 24" className="ag2home-icon">
              <path clip-rule="evenodd" d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zm4.28 10.28a.75.75 0 000-1.06l-3-3a.75.75 0 10-1.06 1.06l1.72 1.72H8.25a.75.75 0 000 1.5h5.69l-1.72 1.72a.75.75 0 101.06 1.06l3-3z" fill-rule="evenodd"></path>
            </svg>
          </button>
        </Link>
      </div>
    </div>
  </div>
  <div className="ag2home-col">
    <div className="ag2home-card">
      <img src="/ag2images/ag2vid.jpeg" className="ag2home-card-img-top" alt="..." />
      <div className="ag2home-card-body">
        <h5 className="ag2home-card-title">Watch Videos</h5>
        <Link to="/McqCards">
          <button className="ag2home-start-button">
            Start
            <svg fill="currentColor" viewBox="0 0 24 24" className="ag2home-icon">
              <path clip-rule="evenodd" d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zm4.28 10.28a.75.75 0 000-1.06l-3-3a.75.75 0 10-1.06 1.06l1.72 1.72H8.25a.75.75 0 000 1.5h5.69l-1.72 1.72a.75.75 0 101.06 1.06l3-3z" fill-rule="evenodd"></path>
            </svg>
          </button>
        </Link>
      </div>
    </div>
  </div>
</div>

              
    
        
        </div>
            
     );
}
 
export default Ag2Home;


