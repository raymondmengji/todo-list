
import axios from "axios";

export const addList = (id) => dispatch => {
    try{
        const response = axios.patch(`/${id}/lists`);
        console.log(response);
    }
    catch(err) {
        
    }
};

export const addToList = (userID, listID, item) => dispatch => {
    try{
        const response = axios.patch(`/${userID}/lists/${listID}`, item);
        console.log(response);
    }
    catch(err) {

    }
};