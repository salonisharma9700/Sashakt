// import './EduMain.css'
import './gamag2.css'
import { Link } from "react-router-dom";
const RTDevelopment = () => {
    return (
        <div className="edu" style={{ backgroundImage: `url("ag2images/homepic2.jpg")`  }}>
        <div className="Education">
            <div className="centered-box">
                <h2>Right to Development</h2>
                <p>
                    The right to development is a broader concept that encompasses the idea that every individual and all peoples
                    have the right to participate in, contribute to, and enjoy economic, social, cultural, and political development.
                    It emphasizes the need for equitable and sustainable development at the national and international levels.
                    This right is often discussed in the context of poverty reduction.   
                </p>
                <Link to ="/DevMcq" className=" btn btn-primary">Let's start Quiz</Link>
            </div>
        </div>
        </div>
    );
}

export default RTDevelopment;