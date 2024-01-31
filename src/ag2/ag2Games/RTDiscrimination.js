// import './EduMain.css'
import './gamag2.css'
import { Link } from "react-router-dom";
const RTDiscrimination = () => {
    return (
        <div className="edu" style={{ backgroundImage: `url("ag2images/homepic2.jpg")`  }}>
        <div className="Education">
            <div className="centered-box">
                <h2>Right against Discrimination</h2>
                <p>
                    The right against discrimination underscores the importance of treating all children fairly and equitably,
                    irrespective of their background or characteristics. It emphasizes the need to eliminate prejudices and stereotypes
                    that may lead to unequal treatment, ensuring that every child has the opportunity to enjoy their rights on an equal basis.
                </p>
                <Link to ="/DisMcq" className="btn btn-primary">Let's start Quiz</Link>
            </div>
        </div>
        </div>
    );
}

export default RTDiscrimination;