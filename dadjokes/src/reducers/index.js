import {
    FETCH_JOKES_PRIVATE_START,
    FETCH_JOKES_PRIVATE_SUCCESS,
    FETCH_JOKES_PRIVATE_FAILURE,
    FETCH_JOKES_PUBLIC_START,
    FETCH_JOKES_PUBLIC_SUCCESS,
    FETCH_JOKES_PUBLIC_FAILURE,
    ADDING_JOKES_START,
    ADDING_JOKES_SUCCESS,
    ADDING_JOKES_FAILURE,
    DELETE_JOKES_START,
    DELETE_JOKES_SUCCESS,
    DELETE_JOKES_FAILURE,
    EDIT_JOKES_START,
    EDIT_JOKES_SUCCESS,
    EDIT_JOKES_FAILURE,
    FETCH_JOKES_USER_START,
    FETCH_JOKES_USER_SUCCESS,
    FETCH_JOKES_USER_FAILURE
} from '../actions';

const initialState = {
    error: "",
    fetchingJokes: false,
    addingJokes: false,
    deletingJokes: false,
    editingJokes: false,
    publickingJokes: false,
    userOnlyJokes: false,
    jokes: [],
    privateJokes: [],
    userJokes: [],
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_JOKES_PRIVATE_START: {
            return {
                ...state,
                fetchingJokes: true,
                error: "",
            }
        }
        case FETCH_JOKES_PRIVATE_SUCCESS: {
            return {
                ...state,
                fetchingJokes: false,
                privateJokes: action.payload
            }
        }
        case FETCH_JOKES_PRIVATE_FAILURE: {
            return {
                ...state,
                error: "There is an error fetching jokes"
            }
        }
        case FETCH_JOKES_PUBLIC_START: {
            return {
                ...state,
                publickingJokes: true,
                error: "",
            }
        }
        case FETCH_JOKES_PUBLIC_SUCCESS: {
            return {
                ...state,
                publickingJokes: false,
                jokes: action.payload
            }
        }
        case FETCH_JOKES_PUBLIC_FAILURE: {
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
        case FETCH_JOKES_USER_START: {
            return {
                ...state,
                userOnlyJokes: true,
                error: "",
            }
        }
        case FETCH_JOKES_USER_SUCCESS: {
            return {
                ...state,
                userOnlyJokes: false,
                userJokes: action.payload,
                error: "",
            }
        }
        case FETCH_JOKES_USER_FAILURE: {
            return {
                ...state,
                userOnlyJokes: false,
                error: "There was an error receiving jokes"
            }
        }
        default: 
            return state;

    }
}

export default reducer;