import  React, { useEffect } from "react";
import "./result.scss";
import { useDispatch, useSelector } from "react-redux";
import Fork from "../fork/Fork";
import {getForks} from "../actions/forks";

const Result =  () => {
/*     const dispatch = useDispatch(); */
/*     const forks = useSelector(state => state.forks.items); */
    
/*     useEffect( () => {
        dispatch(getForks())
    },  [])
 */
    return(
        console.log('WOW')
    )
/*         <div>
            {forks.map(fork =>
                <Fork fork={fork}/>
            )}
        </div> */
    
};

export default Result;