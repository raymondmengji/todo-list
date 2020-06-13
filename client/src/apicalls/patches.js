
import axios from "axios";

export const addList = (id) => dispatch => {
    try{
        const response = axios.patch(`/api/${id}/lists`);
        console.log(response);
    }
    catch(err) {
        
    }
};