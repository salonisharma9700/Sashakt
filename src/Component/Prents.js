import React, { useState } from "react";
import axios from "axios";

const Parents = () => {
  const [email, setEmail] = useState("");
  const [userData, setUserData] = useState(null);

  const getUserData = async () => {
    try {
        console.log('Email before Axios request:', email);

    const response = await axios.get(`http://localhost:5000/api/users/getuser?email=${encodeURIComponent(email)}`);
    

    console.log('Response from server:', response.data);
   
      if (response.data.auth == true) {
        setUserData(response.data);
      } else {
        alert(response.data.message);
        setUserData(null);
      }
    } catch (error) {
      console.error("Error:", error);
      alert("Error fetching user data");
      setUserData(null);
    }
  };
  

  return (
    <div className="parent">
      <div className="subscribe">
      <label htmlFor="email">Enter Email:</label>
      <input
        type="email"
        id="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <button className="submit-btn" onClick={getUserData}>Get User Data</button>
      </div>
      <div  className="pcard-container">
      {userData && (
        <div className="pdata">
            <div className="row">
          <div className="pcards">
          
              <div className="col-md-4">
            <div className="pcard" style={{ width: "18rem" }}>
              <div className="pcard-body">
                <h5 className="pcard-title">User Data</h5>
                <p className="pcard-text">
                  Name: {userData.user_data?.name ?? "null"},
                  <br />
                  Age: {userData.user_data?.age ?? "null"},
                  <br />
                  Email: {userData.user_data?.email ?? "null"},
                  <br/>
                  Last Login: {userData.user_data?.lastPlayTimestamp? new Date(userData.user_data.lastPlayTimestamp).toLocaleString(): "Not Yet LogedIn"}
                </p>
              </div>
            </div>
            </div>
            </div>

            <div className="col-md-4">
            <div className="pcard" style={{ width: "18rem" }}>
            
              <div className="pcard-body">
                <h5 className="pcard-title">Puzzle Game</h5>
                <p className="pcard-text">
                   Level: {userData.puzzle?.level ?? "Not Yet Played"},
                  <br />
                  Last Played: {userData.puzzle?.lastPlayTimestamp? new Date(userData.puzzle.lastPlayTimestamp).toLocaleString(): "Not Yet Played"}
                </p>
              </div>
              </div>
            </div>

            <div className="col-md-4">
            <div className="pcard" style={{ width: "18rem" }}>
            
              <div className="pcard-body">
                <h5 className="pcard-title">Whack A Mole Game</h5>
                <p className="pcard-text">
                    Score:{userData.wagascore?.score ?? "Not Yet Played"},
                    
                    <br/>
                    Level: {userData.wagascore?.level ?? "Not Yet Played"},
                  <br />
                  Last Played: {userData.wagascore?.lastPlayTimestamp? new Date(userData.wagascore.lastPlayTimestamp).toLocaleString(): "Not Yet Played"}
                   <br />
                </p>
              </div>
              </div>
            </div>

            <div className="col-md-4">
            <div className="pcard" style={{ width: "18rem" }}>
            
              <div className="pcard-body">
                <h5 className="pcard-title">Candy Crush Game</h5>
                <p className="pcard-text">
                  Candy Crush Level: {userData.wagascore?.level ?? "Not Yet Played"},
                  <br />
                  Last Played: {userData.wagascore?.lastPlayTimestamp? new Date(userData.wagascore.lastPlayTimestamp).toLocaleString(): "Not Yet Played"}
                </p>
              </div>
              </div>
            </div>

            <div className="col-md-4">
             <div className="pcard" style={{ width: "18rem" }}>
            
              <div className="pcard-body">
                <h5 className="pcard-title">Jumbled Sentence Game</h5>
                <p className="pcard-text">
                  Level: {userData.Jumbleword?.score ?? "Not Yet Played"},
                  <br/>
                  Last Played: {userData.Jumbleword?.lastPlayTimestamp? new Date(userData.Jumbleword.lastPlayTimestamp).toLocaleString(): "Not Yet Played"}
                </p>
              </div>
              </div>
            </div>

            <div className="col-md-4">
            <div className="pcard" style={{ width: "18rem" }}>
            
              <div className="pcard-body">
                <h5 className="pcard-title">Word Search Game</h5>
                <p className="pcard-text">
                  Level: {userData.Wordsearch?.level ?? "Not Yet Played"},
                  <br />
                  Score:  {userData.Wordsearch?.score ?? "Not Yet Played"},
                  <br/>
                  Last Played: {userData.Wordsearch?.lastPlayTimestamp? new Date(userData.Wordsearch.lastPlayTimestamp).toLocaleString(): "Not Yet Played"}
                </p>
              </div>
              </div>
            </div>

            {/* <div className="pcard" style={{ width: "18rem" }}>
              <div className="pcard-body">
                <h5 className="pcard-title">Word Jumble Game</h5>
                <p className="pcard-text">
                  Wagamole Level: {userData.WordScore?.level ?? "null"},
                  <br />
                  Wagamole Completed:  {userData.WordScore?.isCompleted?.toString() ?? "null"},
                </p>
              </div>
            </div>  */}
            
          </div>
        </div>
      )}
      </div>
    </div>
  );
};

export default Parents;