import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { secondsTimer } from "../Redux/Actions/Actions";
import FormatTimer from "./FormatTimer";
import LapBtn from "./LapBtn";
import Laps from "./Laps";
import PauseBtn from "./PauseBtn";
import ResetBtn from "./ResetBtn";
import ResumBtn from "./ResetBtn";
import StartBtn from "./StartBtn";

const StopWatch = () => {
  const isClicked = useSelector((state) => state.time.isClicked);
  const seconds = useSelector((state) => state.time.seconds);
  const minutes = useSelector((state) => state.time.minutes);
  const miliseconds = useSelector((state) => state.time.miliseconds);
  const timer = useSelector((state) => state.time.timer);
  const start = useSelector((state) => state.time.start);
  const dispatch = useDispatch();

  useEffect(() => {
    console.log("useEffect running");
    let timer;
    if (start === true) {
      timer = setInterval(() => {
        dispatch(secondsTimer(timer));
      }, 10);
    }

    return () => {
      clearInterval(timer);
    };
  }, [dispatch, start]);

  return (
    <div className="stopwatch__container">
      <h2>STOPWATCH</h2>
      <FormatTimer miliseconds={miliseconds} seconds={seconds} minutes={minutes} timer={ timer}/>
      {!isClicked ? (
        <StartBtn />
      ) : (
        <div className="pause-resume-btn">
          <PauseBtn />
          <LapBtn />
          <ResetBtn/>
        </div>
      )}      <Laps />
    </div>
  );
};

export default StopWatch;
