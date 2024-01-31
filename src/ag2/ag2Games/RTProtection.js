// import './EduMain.css'
import './gamag2.css'
import { Link } from "react-router-dom";
const RTEducation = () => {
    return (
        <div className="edu" style={{ backgroundImage: `url("ag2images/homepic2.jpg")`  }}>
        <div className="Education">
            <div className="centered-box">
                <h2>Right to Protection</h2>
                <p>
                    The right to protection is a fundamental aspect of child rights,and it is recognized
                    and articulated in various international instruments,most prominently in the United Nations
                    Convention on the Rights of the Child (CRC).The CRC, adopted in 1989, is a comprehensive treaty
                    that outlines the civil, political, economic,social, and cultural rights of children.
                </p>
                <Link to ="/ProMcq" className="btn btn-primary">Let's start Quiz</Link>
            </div>
        </div>
        </div>
    );
}

export default RTEducation;