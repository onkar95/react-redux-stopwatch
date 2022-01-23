import React from "react";

function FormatTimer({ miliseconds,seconds,minutes,timer }) {
  return (
    <div className="formatTimer__container">
      {/**Showing the current timer */}
      {/* <span>{`0${Math.floor(timer / 60000)}`.slice(-2)}:</span>
      <span>{`0${Math.floor(timer )}`.slice(-2)}:</span>
      <span>{`0${timer }`.slice(-2)}</span> */}
      <span>{minutes }:</span>
      <span>{seconds }:</span>
      <span>{miliseconds }</span>
    </div>
  );
}

export default FormatTimer;
