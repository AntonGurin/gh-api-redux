import React from "react";
import {useNavigate} from "react-router-dom";

export const Error = () => {
    const navigate = useNavigate();

    <div style={{textAlign:"center"}}>
        <button onClick={() => navigate('/result')} className="back-btn">
            Go back
        </button>
    </div>
}
