
import "./gamag2.css"
import { Link } from "react-router-dom";
const RTEducation = () => {
    return (
      <div className="edu" style={{ backgroundImage: `url("ag2images/homepic2.jpg")`  }}>
        <div className="Education">
        <div className="centered-box">
          <h2>Right to Survival</h2>
          <p>
          The right to survival is one of the four core principles of the United Nations Convention on the
          Rights of the Child (CRC), which is the most widely ratified human rights treaty in the world.
          The right to survival encompasses various aspects aimed at ensuring that children not only survive but thrive.
          Governments, international organizations, and communities play a crucial role in upholding the right to survival for children.
          </p>
          <Link to ="/SurMcq" className="btn btn-primary">Let's start Quiz</Link>
        </div>
      </div>
      </div>
     );
}
 
export default RTEducation;