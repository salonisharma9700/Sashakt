import React from "react";
import { Link } from "react-router-dom";
import './ag2.css'
class WordGames extends React.Component {
    state = {  } 
    render() { 
        return (
            <div className="ag2-wordgam">
               <div className="wordgam"  style={{ backgroundImage: `url("ag2images/homepic2.jpg")`  }}>
                <div className=" wordgam-main "> 
                    <div className="wordgam-cards">
                        <div className="wordgam-card" style={{width: '18rem'}}>
                            <img src="/ag2images/Jumbled-sentences.jpeg" className="card-img-top" alt="..."/>
                            <div className="wordgam-card-body">
                            <h5 className="wordgam-card-title">Jumbled-Sentence</h5>
                            <p className="wordgam-card-text"></p>
                            <Link to="/JumbledSentenceGame" className="btn btn-primary">Start the Game</Link>
                            </div>
                        </div>
                        <div className="wordgam-card" style={{width: '18rem'}}>
                            <img src="/ag2images/wordgame.png" className="card-img-top" alt="..."/>
                            <div className="wordgam-card-body">
                            <h5 className="wordgam-card-title">WordSearch-Game</h5>
                            <p className="wordgam-card-text"></p>
                            <Link to="/WordSearchGame" className="btn btn-primary">Start the Game</Link>
                            </div>
                        </div>
                        <div className="wordgam-card" style={{width: '18rem'}}>
                            <img src="/ag2images/Jumble word.jpeg" className="card-img-top" alt="..."/>
                            <div className="wordgam-card-body">
                            <h5 className="wordgam-card-title">Jumble-Word</h5>
                            <p className="wordgam-card-text"></p>
                            <Link to ="/WordJumble " className="btn btn-primary">Start the Game</Link>
                            </div>
                        </div>
                        
                        
                    </div>

                </div>
                </div>
            </div>
        );
    }
}
 
export default WordGames;
