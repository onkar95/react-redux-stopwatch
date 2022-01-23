import React from 'react'
import { useDispatch } from "react-redux";
import {
  lapTimer,
} from "../Redux/Actions/Actions";
const LapBtn = () => {
  const dispatch = useDispatch();



  return (
    <div>
      <button
        variant="contained"
        color="primary"
        onClick={() => dispatch(lapTimer())}>
        laps
      </button>
    </div>
  )
}

export default LapBtn
