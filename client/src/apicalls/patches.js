
import axios from "axios";

export const addList = (id) => dispatch => {
    try{
        const response = axios.patch(`/${id}/lists`);
        console.log(response);
    }
    catch(err) {
        
    }
};