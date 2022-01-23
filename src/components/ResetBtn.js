import React from 'react'
import { useDispatch, useSelector } from "react-redux";
import {
    resetTimer,
} from "../Redux/Actions/Actions";
const ResetBtn = () => {
    const dispatch = useDispatch();


    return (
        <div>
            <button
                variant="contained"
                color="primary"
                onClick={() => dispatch(resetTimer())}>
                reset
            </button>

        </div>
    )
}

export default ResetBtn
