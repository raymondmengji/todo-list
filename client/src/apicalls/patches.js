
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

export const changeListName = (userID, listID, name) => dispatch => {
    try{
        const response = axios.patch(`/${userID}/name/${listID}`, name);
        console.log(response);
    }
    catch(err) {

    }
};

export const deleteList = (userID, listID) => dispatch => {
    try{
        const response = axios.patch(`/${userID}/clear/${listID}`);
        console.log(response)
    }
    catch(err) {
        
    }
}