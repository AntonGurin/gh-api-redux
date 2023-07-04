import axios from "axios";
import { setErrorFetch, setForks, setForksCount, setIsFetching} from "../../reducers/forksReducer";

export const getForks = (searchValue, currentPage, perPage) => {
    if( searchValue === ""){
        searchValue = "facebook/react";
    }
    return async (dispatch) => {
        try{
            const response = await axios.get(
            `https://api.github.com/repos/${searchValue}/forks?per_page=${perPage}&page=${currentPage}`)
            const getForksCount = await axios.get(
                `https://api.github.com/repos/${searchValue}?forks_count`)
            dispatch(setForks(response.data))
            dispatch(setIsFetching(true))
            dispatch(setForksCount(getForksCount.data))
        } catch(e){
            dispatch(setErrorFetch(true))
            dispatch(setIsFetching(false))
        }
    };
};

