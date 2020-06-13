import axios from "axios";

export const getUser = (id) => dispatch => {
    try{
        // return axios.get(`/${id}`).then((res) => {
        //     console.log(res.data);
        //     return res.data;
        // });
        const response = axios.get(`/api/${id}`);
        return response;
    }
    catch(err) {
        dispatch({
            msg: err
        })
    }

};