import React, { useState} from "react";
import "./primary.scss";
import { getForks } from "../actions/forks";
import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";


const Primary = () => {
 
    const dispatch = useDispatch();
    const [searchValue, setSearchValue] = useState("");
    const currentPage = useSelector(state => state.forks.currentPage);
    const perPage = useSelector(state => state.forks.perPage);

    function searchForks(){
        dispatch(getForks(searchValue, currentPage, perPage))
    }

    return  (
        <div className="primary-wrapper">
            <h1>Welcome! Please enter repository name</h1>
            <div className="search">
                <input value={searchValue} onChange={(e) => setSearchValue(e.target.value)}
                type="text"  placeholder="input: owner/repositoryName" className="search-input"/>
                <NavLink to={`/result`}>
                    <button onClick={() => searchForks ()} className="search-btn">
                    Search 
                    </button>
                </NavLink>
            </div>
        </div>        
    );  
}; 

export default Primary;