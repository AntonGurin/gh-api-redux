import "./result.scss";
import { useDispatch, useSelector } from "react-redux";
import Fork from "../fork/Fork";
import { getForks } from "../actions/forks";
import { useEffect } from "react";
/* import { useState } from "react"; */
import "./result.scss";
import { setCurrentPage, setIsFetching } from "../../reducers/forksReducer";
import  {createPages}  from "../pagesCounter";
import { useNavigate} from "react-router-dom";
import { useAtom } from "jotai";
import {atomWithHash} from "jotai-location";

 const queryAtom = atomWithHash('search',"" )

const Result =  () => {

    const [searchValue, setSearchValue] = useAtom(queryAtom);
    const dispatch = useDispatch();
/*     const [searchValue, setSearchValue] = useState(""); */
    const forks = useSelector(state => state.forks.items);
    const isFetching = useSelector(state => state.forks.isFetching);
    const currentPage = useSelector(state => state.forks.currentPage);
    const forksCount = useSelector(state => state.forks.forksCount);
    const perPage = useSelector(state => state.forks.perPage);
    const pagesCount = Math.ceil(forksCount/perPage);
    const navigate = useNavigate();
    const pages = [];
    createPages(pages,pagesCount, currentPage);

    useEffect(() =>{
        dispatch(getForks(searchValue,currentPage,perPage,forksCount)) // eslint-disable-next-line
    },[currentPage])

    function searchForks(){
        dispatch(setCurrentPage(1))
        dispatch(getForks(searchValue,currentPage,perPage))
        dispatch(setIsFetching(false))
    }

    return(
            <div className="result-wrapper">
                <div className="result-search">
                    <button onClick={() => navigate(-1)} className="back-btn">
                    Go back
                    </button>
                    <h1>Please enter repository name</h1>
                    <input value={searchValue} onChange={(e) => setSearchValue(e.target.value)}
                    type="text" placeholder="input: owner/repositoryName" className="search-input"/>
                    <button  onClick={() => searchForks()} className="search-btn">
                        Search
                    </button>
                </div>
                {   
                    isFetching === true
                    ?
                    forks.map(fork =>
                    <Fork key={fork.id} fork={fork}/>)
                    :
                    <div 
                    className="fetching">   
                    </div>
                }

                <div className="pages">
                    {pages.map((page, index) => <span 
                    key={index} 
                    className={currentPage === page? "current-page" : "page"}
                    onClick={() => dispatch(setCurrentPage(page))}>{page}</span>)}
                </div>
            </div>
        )
 };

export default Result; 