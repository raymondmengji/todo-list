import axios from "axios";

export const getUser = (id) => dispatch => {
    try{
        const response = axios.get(`/api/${id}`);
        return response;
    }
    catch(err) {
        dispatch({
            msg: err
        })
    }

};