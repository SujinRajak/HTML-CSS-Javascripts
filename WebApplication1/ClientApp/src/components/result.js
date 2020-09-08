import React from "react";
const Result = ({score, playAgian})=>(
    <div className="score-board">
        <div className="score">You scored {score}/5 correct answers!</div>
        <button className="playBtn" onClick={playAgian}>Play Agian!</button>
    </div>
)

export default Result;