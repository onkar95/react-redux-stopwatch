import React from 'react'
import { useDispatch, useSelector } from "react-redux";
import {
    pauseTimer,
    resumeTimer,
} from "../Redux/Actions/Actions";
const PauseBtn = () => {
    const start = useSelector((state) => state.time.start);

    const dispatch = useDispatch();
    const handleTimer = () => {
        if (start) {
            dispatch(pauseTimer());
        } else {
            dispatch(resumeTimer());
        }
    };

    return (
        <div>
            <button variant="contained" color="primary" onClick={handleTimer}>
                {start ? "pause" : "resume"}
            </button>
        </div>
    )
}

export default PauseBtn
