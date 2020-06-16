
import axios from "axios";

export const addList = (id) => dispatch => {
    try{
        const response = axios.patch(`/api/${id}/lists`);
        console.log(response);
    }
    catch(err) {
        
    }
};

export const addToList = (userID, listID, item) => dispatch => {
    try{
        const response = axios.patch(`/api/${userID}/lists/${listID}`, item);
        console.log(response);
    }
    catch(err) {

    }
};

export const changeListName = (userID, listID, name) => dispatch => {
    try{
        const response = axios.patch(`/api/${userID}/name/${listID}`, name);
        console.log(response);
    }
    catch(err) {

    }
};

export const deleteList = (userID, listID) => dispatch => {
    try{
        const response = axios.patch(`/api/${userID}/clear/${listID}`);
        console.log(response)
    }
    catch(err) {
        
    }
}