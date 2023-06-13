import axios from "axios";
import { setForks } from "../../reducers/forksReducer";

export const getForks = (searchValue) => {
    return async (dispatch) => {
        const response = await axios.get(`https://api.github.com/repos/${searchValue}/forks`)
        dispatch(setForks(response.data))
    };
};
