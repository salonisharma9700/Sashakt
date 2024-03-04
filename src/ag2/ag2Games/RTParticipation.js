
import './gamag2.css'
import { Link } from "react-router-dom";
const RTParticipation = () => {
    return (
        <div className="edu" style={{ backgroundImage: `url("ag2images/homepic2.jpg")`  }}>
        <div className="Education">
            <div className="centered-box">
                <h2>Right to Participation</h2>
                <p>
                 The right to participation emphasizes the evolving capacities of children and recognizes that their
                 participation contributes to their personal development and the well-being of society as a whole. 
                 Governments, families, communities, and other stakeholders are encouraged to create opportunities for meaningful
                 and age-appropriate participation of children in decision-making processes that affect them. 
                </p>
                <Link to ="/ParMcq" className="btn btn-primary">Let's start Quiz</Link>
            </div>
        </div>
        </div>
    );
}

export default RTParticipation;