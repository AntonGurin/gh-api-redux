const SET_FORKS = "SET_FORKS";

const initialState = {
    items: [],
    isFetching: false,
};

export const forksReducer = (state = initialState, action) => {
    switch(action.type) {
        case SET_FORKS:
            return{
                ...state,
                items: action.payload.items
            }
        default:
            return state
    }
}

export const setForks = (forks) => ({type:SET_FORKS, payload:forks});