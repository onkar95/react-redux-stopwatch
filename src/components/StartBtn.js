import React from 'react'
import { useDispatch } from "react-redux";
import {
    startTimer,
} from "../Redux/Actions/Actions";

const StartBtn = () => {
    const dispatch = useDispatch();


    return (
        <div>
            <button
                variant="contained"
                color="primary"
                onClick={() => dispatch(startTimer())}>
                start
            </button>
        </div>
    )
}

export default StartBtn
