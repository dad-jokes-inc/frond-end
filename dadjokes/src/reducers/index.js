import {
    FETCH_JOKES_START,
    FETCH_JOKES_SUCCESS,
    FETCH_JOKES_FAILURE,
    ADDING_JOKES_START,
    ADDING_JOKES_SUCCESS,
    ADDING_JOKES_FAILURE,
    DELETE_JOKES_START,
    DELETE_JOKES_SUCCESS,
    DELETE_JOKES_FAILURE,
    EDIT_JOKES_START,
    EDIT_JOKES_SUCCESS,
    EDIT_JOKES_FAILURE
} from '../actions';

const initialState = {
    error: "",
    fetchingJokes: false,
    addingJokes: false,
    deletingJokes: false,
    editingJokes: false,

    jokes: [],
    userJokes: [],
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_JOKES_START: {
            return {
                ...state,
                fetchingJokes: true,
                error: "",
            }
        }
        case FETCH_JOKES_SUCCESS: {
            return {
                ...state,
                fetchingJokes: false,
                jokes: action.payload
            }
        }
        case FETCH_JOKES_FAILURE: {
            return {
                ...state,
                error: "There is an error fetching jokes"
            }
        }
        case ADDING_JOKES_START: {
            return {
                ...state,
                addingJokes: true,
                error: "",
            }
        }
        case ADDING_JOKES_SUCCESS: {
            return {
                ...state,
                addingJokes: false,
                jokes: action.payload
            }
        }
        case ADDING_JOKES_FAILURE: {
            return {
                ...state,
                error: "Failure to add joke to list"
            }
        }
        case DELETE_JOKES_START: {
            return {
                ...state,
                deletingJokes: true,
                error: "",
            }
        }
        case DELETE_JOKES_SUCCESS: {
            return {
                ...state,
                deletingJokes: false,
                jokes: action.payload
            }
        }
        case DELETE_JOKES_FAILURE: {
            return {
                ...state,
                error: "Failure to delete joke from list"
            }
        }
        case EDIT_JOKES_START: {
            return {
                ...state,
                editingJokes: true,
                error: "",
            }
        }
        case EDIT_JOKES_SUCCESS: {
            return {
                ...state,
                editingJokes: false,
                jokes: action.payload
            }
        }
        case EDIT_JOKES_FAILURE: {
            return {
                ...state,
                error: "Failure to edit joke"
            }
        }
        default: 
            return state;

    }
}

export default reducer;