import React, { useState } from "react";
import ReactDOM from "react-dom";
import { CountdownCircleTimer } from "react-countdown-circle-timer";

import "./CircleTimer.css";

const renderTime = ({ remainingTime }) => {
  if (remainingTime === 0) {
    return <div className="timer">Times Up!!</div>;
  }

  return (
    <div className="timer">
      <div className="text">Remaining</div>
      <div className="value">{Math.floor(remainingTime/60)} Minutes</div>
      <div className="text">{Math.floor(remainingTime%60)} seconds</div>
    </div>
  );
};


const CircleTimer = ({time, handleSubmit}) => {
  const [key, setKey] = useState(0);
  return (
    <div>
      <div className="timer-wrapper">
        <CountdownCircleTimer
          key={key}
          isPlaying
          duration={time*60}
          colors={[["#004777", 0.33], ["#F7B801", 0.33], ["#A30000"]]}
          onComplete={handleSubmit}
        >
          {renderTime}
        </CountdownCircleTimer>
      </div>
    </div>
  );
};

export default CircleTimer;
