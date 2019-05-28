import axios from 'axios';

const baseURL = "https://dad-jokes-buildweek.herokuapp.com/api/";

export const LOGIN_USER = "LOGIN_USER";

export const login = creds => dispatch => {
    dispatch({type: LOGIN_USER});
    return axios.post(`${baseURL}/login`, creds)
    .then(res => {
        localStorage.setItem("token", res.data.payload);
    })
    .catch(err => {
        console.log(err);
    })
};

export const REGISTER_USER = "REGISTER_USER";

export const register = creds => dispatch => {
    dispatch({type: REGISTER_USER});
    return axios.post(`${baseURL}/register`, creds)
    .then(res => {
        localStorage.setItem("username", res.data.payload);
        localStorage.setItem("password", res.data.payload);
    })
    .catch(err => {
        console.log(err);
    })
}

export default action;