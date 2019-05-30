import {
    FETCH_JOKES_START,
    FETCH_JOKES_SUCCESS,
    FETCH_JOKES_FAILURE,
    PUBLIC_JOKES_START,
    PUBLIC_JOKES_SUCCESS,
    PUBLIC_JOKES_FAILURE,
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
    publickingJokes: false,
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
                userJokes: action.payload
            }
        }
        case FETCH_JOKES_FAILURE: {
            return {
                ...state,
                error: "There is an error fetching jokes"
            }
        }
        case PUBLIC_JOKES_START: {
            return {
                ...state,
                publickingJokes: true,
                error: "",
            }
        }
        case PUBLIC_JOKES_SUCCESS: {
            return {
                ...state,
                publickingJokes: false,
                jokes: action.payload
            }
        }
        case PUBLIC_JOKES_FAILURE: {
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