import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import FormatTimer from "./FormatTimer";

function Laps() {
  const laps = useSelector((state) => state.time.laps);
  useEffect(() => {
        console.log("lap 1",laps);
  }, [laps])
  console.log("laps 2",laps);
  return (
    <div className="laps__container">
      {laps?.length !== 0 && <h1>LAPS</h1>}

      {laps.map((lap, index) => {
          const minutes = lap[0];
          const seconds = lap[1];
          const centiseconds = lap[2];
          return (
            <li key={lap.join("-")}>
              Lap {index + 1} =&gt;{" "}
              {minutes >= 10 ? minutes : "0" + String(minutes)} :{" "}
              {seconds >= 10 ? seconds : "0" + String(seconds)} :{" "}
              {centiseconds >= 10 ? centiseconds : "0" + centiseconds}
            </li>
          );
        })}
    </div>
  );
}

export default Laps;
