import axios from 'axios';

const baseURL = "https://dad-jokes-buildweek.herokuapp.com/api";

export const LOGIN_USER_START = "LOGIN_USER_START";
export const LOGIN_USER_SUCCESS = "LOGIN_USER_SUCCESS";
export const LOGIN_USER_FAILURE = "LOGIN_USER_FAILURE";

export const login = creds => dispatch => {
    console.log("Login", creds);
    dispatch({type: LOGIN_USER_START});
    return axios.post(`https://dad-jokes-buildweek.herokuapp.com/api/login`, creds)
    .then(res => {
        localStorage.setItem("username", creds.username)
        localStorage.setItem("password", creds.password)
        localStorage.setItem("token", res.data.token)
        dispatch({type: LOGIN_USER_SUCCESS});
    })
    .catch(err => {
        console.log(err)
        dispatch({type: LOGIN_USER_FAILURE});
    })
};

export const REGISTER_USER_START = "REGISTER_USER_START";
export const REGISTER_USER_SUCCESS = "REGISTER_USER_SUCCESS";
export const REGISTER_USER_FAILURE = "REGISTER_USER_FAILURE";

export const register = creds => dispatch => {
    dispatch({type: REGISTER_USER_START});
    return axios.post(`https://dad-jokes-buildweek.herokuapp.com/api/register`, creds)
    .then(res => {
        localStorage.setItem("username", creds.username)
        localStorage.setItem("password", creds.password)
        dispatch({type: REGISTER_USER_SUCCESS, payload: res.data});
    })
    .catch(err => {
        console.log(err)
        dispatch({type: REGISTER_USER_FAILURE});
    })
}

export const FETCH_JOKES_START = "FETCH_JOKES_START";
export const FETCH_JOKES_SUCCESS = "FETCH_JOKES_SUCCESS";
export const FETCH_JOKES_FAILURE = "FETCH_JOKES_FAILURE";

export const getJokes = () => dispatch => {
    dispatch({type: FETCH_JOKES_START});
    return axios.get(`${baseURL}/jokes`, {
        headers: {Authorization: localStorage.getItem("token")}
    })
    .then(res => {
        console.log("Joke data", res)
        dispatch({type: FETCH_JOKES_SUCCESS, payload: res.data});
    })
    .catch(err => {
        console.log(err)
        dispatch({type: ADDING_JOKES_FAILURE})
    })
}

export const ADDING_JOKES_START = "ADDING_JOKES_START";
export const ADDING_JOKES_SUCCESS = "ADDING_JOKES_SUCCESS";
export const ADDING_JOKES_FAILURE = "ADDING_JOKES_FAILURE";

export const addJokes = jokes => dispatch => {
    dispatch({type:ADDING_JOKES_START});
    return axios.post(`${baseURL}/jokes`, jokes, {
        headers: {Authorization: localStorage.getItem("token")}
    })
    .then(res => {
        dispatch({type: ADDING_JOKES_SUCCESS, payload: res.data})
    })
    .catch(err => {
        console.log(err)
        dispatch({type: ADDING_JOKES_FAILURE})
    })
}

export const DELETE_JOKES_START = "DELETE_JOKES_START";
export const DELETE_JOKES_SUCCESS = "DELETE_JOKES_SUCCESS";
export const DELETE_JOKES_FAILURE = "DELETE_JOKES_FAILURE";

export const deleteJoke = id => dispatch => {
    dispatch({type: DELETE_JOKES_START});
    axios.delete(`${baseURL}/jokes/${id}`, {
        headers: {Authorization: localStorage.getItem("token")}
    })
    .then(res => {
        console.log(id)
        dispatch({type: DELETE_JOKES_SUCCESS, payload: res.data})
    })
    .catch(err => {
        console.log(err)
        dispatch({type: DELETE_JOKES_FAILURE})
    })
}

export const EDIT_JOKES_START = "EDIT_JOKES_START";
export const EDIT_JOKES_SUCCESS = "EDIT_JOKES_SUCCESS";
export const EDIT_JOKES_FAILURE = "EDIT_JOKES_FAILURE";

export const editJoke = joke => dispatch => {
    axios.put(`${baseURL}/jokes/${joke.id}`, joke, {
        headers: {Authorization: localStorage.getItem("token")}
    })
    .then(res => {
        dispatch({type: EDIT_JOKES_SUCCESS, payload: res.data})
    })
    .catch(err => {
        console.log(err)
        dispatch({type: EDIT_JOKES_FAILURE})
    })
}