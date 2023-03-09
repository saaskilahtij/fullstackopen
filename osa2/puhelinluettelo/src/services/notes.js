import axios from "axios";
const baseURL = 'http://localhost:3001/persons';

const getAll = () => {
    const request = axios.get(baseURL);
    return request
        .then(response => response.data)
        .catch(error => {
            console.log('error getting the data')
            throw error;
        });
}   

const create = newObject => {
    const request = axios.post(baseURL, newObject);
    return request
        .then(response => response.data)
        .catch(error => {
            console.log('error creating an object')
            throw error;
        });
}

const update = ({ id, newObject }) => {
    const request = axios.put(`${baseURL}/${id}`, newObject);
    return request
        .then(response => response.data)
        .catch(error => {
        console.log('error updating an object')
            throw error;
        });

}

const remove = ({ id }) => {
    const request = axios.delete(`${baseURL}/${id}`);
    return request
        .then(response => response.data)
        .catch(error => {
            console.log('error deleting an object')
            throw error;
        });
}


export default {getAll, create, update, remove};