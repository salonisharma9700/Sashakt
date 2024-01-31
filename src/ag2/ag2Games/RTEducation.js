// import './EduMain.css'
import "./gamag2.css"
import { Link } from "react-router-dom";
const RTEducation = () => {
  return (
    <div className='edu' style={{ backgroundImage: `url("ag2images/homepic2.jpg")`  }}>
      <div className="Education">
        <div className="centered-box">
          <h2>Right to Education</h2>
          <p>
            The right to education is a fundamental human right that emphasizes
            the importance of providing every individual with access to quality
            education. Education is a powerful tool that empowers individuals,
            promotes equality, and contributes to the overall development of
            societies.
          </p>
          <Link to="/EduMcq" className="btn btn-primary">Let's start Quiz</Link>
        </div>
      </div>
    </div>
  );
}

export default RTEducation;