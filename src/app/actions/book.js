import config from 'config/index'
import {fetchDelete, fetchGet, fetchPatch, fetchPost} from '../../requests/index'
import {
    REQUEST_FETCH_BOOKS, SUCCESS_FETCH_BOOKS, ERROR_FETCH_BOOKS,
    REQUEST_FETCH_BOOK, SUCCESS_FETCH_BOOK, ERROR_FETCH_BOOK,
    CLEAR_BOOKS, CLEAR_CURRENT_BOOK,
    REQUEST_EDIT_BOOK, SUCCESS_EDIT_BOOK, ERROR_EDIT_BOOK,
    REQUEST_CREATE_BOOK, SUCCESS_CREATE_BOOK, ERROR_CREATE_BOOK,
    REQUEST_DELETE_BOOK, SUCCESS_DELETE_BOOK, ERROR_DELETE_BOOK
} from '../constants/actionTypes'

import {BOOKS, BOOKS_ADD, BOOKS_DELETE, BOOKS_UPDATE} from '../constants/backendEndpoints'

export const fetchBooks = () => async dispatch => {
    dispatch({type: REQUEST_FETCH_BOOKS});
    try {
        const url = config.BASE_URL + BOOKS;
        const params = {};
        const response = await fetchGet({params, url});
        const data = await response.json();
        setTimeout(() => {
            dispatch({type: SUCCESS_FETCH_BOOKS, payload: data});
        }, 2000)

    } catch (error) {
        dispatch({type: ERROR_FETCH_BOOKS, payload: error.message});
    }
}

export const fetchBook = (id) => async dispatch => {
    dispatch({type: REQUEST_FETCH_BOOK});
    try {
        const url = config.BASE_URL + BOOKS + `/${id}`;
        const params = {};
        const response = await fetchGet({params, url});
        const data = await response.json();
        setTimeout(() => {
            dispatch({type: SUCCESS_FETCH_BOOK, payload: data});
        }, 2000)

    } catch (error) {
        dispatch({type: ERROR_FETCH_BOOK, payload: error.message});
    }
}

export const clearBooks = () => async dispatch => {
    dispatch({type: CLEAR_BOOKS});
}

export const clearCurrentBook = () => async dispatch => {
    dispatch({type: CLEAR_CURRENT_BOOK});
}

export const updateBook = (id, body) => async dispatch => {
    dispatch({type: REQUEST_EDIT_BOOK});
    const params = {};
    const url = config.BASE_URL + BOOKS_UPDATE + `/${id}`;
    try {
        const response = await fetchPatch({body, params, url})
        const data = await response.json();
        dispatch({type: SUCCESS_EDIT_BOOK, payload: data});
    } catch (error) {
        dispatch({type: ERROR_EDIT_BOOK, payload: error.message});
    }
}

export const deleteBook = (id) => async dispatch => {
    dispatch({type: REQUEST_DELETE_BOOK});
    const params = {};
    const url = config.BASE_URL + BOOKS_DELETE + `/${id}`;
    try {
        const response = await fetchDelete({params, url})
        const data = await response.json();
        dispatch({type: SUCCESS_DELETE_BOOK, payload: data});
    } catch (error) {
        dispatch({type: ERROR_DELETE_BOOK, payload: error.message});
    }
}

export const createBook = (body) => async dispatch => {
    dispatch({type: REQUEST_CREATE_BOOK});
    const params = {};
    const url = config.BASE_URL + BOOKS_ADD;
    try {
        const response = await fetchPost({body, params, url})
        const data = await response.json();
        dispatch({type: SUCCESS_CREATE_BOOK, payload: data});
    } catch (error) {
        dispatch({type: ERROR_CREATE_BOOK, payload: error.message});
    }
}