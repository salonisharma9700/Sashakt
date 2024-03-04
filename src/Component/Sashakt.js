
import React from "react";
import './bot.css';

const Sashakt = () => {
  return (
    <div className="shakvid">
      <video autoPlay  id="video-background">
        <source src={process.env.PUBLIC_URL + "/shakvid.mp4"} type="video/mp4" />
      </video>
    </div>
  );
};

export default Sashakt;
