import React, {useEffect, useState} from "react";
import "./primary.scss";
import { getForks } from "../actions/forks";
import { useDispatch, useSelector } from "react-redux";
import Fork from "../fork/Fork";

const Primary = () => {
    const dispatch = useDispatch();
    const [searchValue, setSearchValue] = useState("");

    const forks = useSelector(state => state.forks.items);

    useEffect(()=> {
        dispatch(getForks())
    },[])

    function searchForks(){
        dispatch(getForks(searchValue))
    }

    return  (
        <div className="primary-wrapper">
            <h1>Welcome! Please enter repository name</h1>
            <div className="search">
                <input value={searchValue} onChange={(e) => setSearchValue(e.target.value)}
                type="text"  placeholder="input: owner/repositoryName" className="search-input"/>
                <button onClick={() => searchForks ()} className="search-btn"> Search </button>
            </div>
            <div>
                {forks.map(fork =>
                    <Fork fork={fork}/>
            )}
        </div>
        </div>
        
    );  
}; 



export default Primary;