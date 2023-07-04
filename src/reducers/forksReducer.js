const SET_FORKS        = "SET_FORKS";
const SET_IS_FETCHING  = "SET_IS_FETCHING";
const SET_CURRENT_PAGE = "SET_CURRENT_PAGE";
const SET_FORKS_COUNT  = "SET_FORKS_COUNT";
const IS_ERROR_FETCH   = "IS_ERROR_FETCH";

const initialState = {
    items: [],
    isFetching: false,
    currentPage:1,
    perPage:10,
    forksCount:0,
    isErrorFetch:false
};

export const forksReducer = (state = initialState, action) => {
    switch(action.type) {
        case SET_FORKS:
            return{
                ...state,
                items: action.payload,
                isFetching: true
            }
        case SET_FORKS_COUNT:
            return{
                    ...state,
                    forksCount: action.payload.forks_count ,
                    isFetching: true
            }
        case SET_IS_FETCHING:
            return{
                ...state,
                isFetching: action.payload
            }
        case IS_ERROR_FETCH:
            return{
                    ...state,
                    isErrorFetch: action.payload
            }        
        case SET_CURRENT_PAGE:
            return{
                ...state,
                currentPage: action.payload
            }
        default:
            return state
    }
}

export const setForks = (forks) => ({type:SET_FORKS, payload:forks});
export const setIsFetching = (bool) => ({type:SET_IS_FETCHING, payload:bool});
export const setCurrentPage = (page) => ({type:SET_CURRENT_PAGE, payload:page});
export const setForksCount = (count) => ({type:SET_FORKS_COUNT, payload:count});
export const setErrorFetch = (bool) => ({type:SET_FORKS_COUNT, payload:bool});
