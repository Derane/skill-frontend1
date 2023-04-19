import {
  REQUEST_FETCH_BOOKS, SUCCESS_FETCH_BOOKS, ERROR_FETCH_BOOKS,
  REQUEST_FETCH_BOOK, SUCCESS_FETCH_BOOK, ERROR_FETCH_BOOK,
  CLEAR_BOOKS, CLEAR_CURRENT_BOOK,
  REQUEST_EDIT_BOOK, SUCCESS_EDIT_BOOK, ERROR_EDIT_BOOK,
  REQUEST_CREATE_BOOK, SUCCESS_CREATE_BOOK, ERROR_CREATE_BOOK
} from '../constants/actionTypes'

const initialState = {
  isFetching: false,
  isUpdating: false,
  isCreating: false,
  isDeleting: false,
  items: [],
  currentItem: {}
};

export default (state = initialState, action) => {
  switch (action.type) {
    case REQUEST_FETCH_BOOK:
    case REQUEST_FETCH_BOOKS: {
      return {
        ...state,
        currentItem: {},
        items: [],
        isFetching: true,
      }
    }

    case SUCCESS_FETCH_BOOK: {
      return {
        ...state,
        currentItem: {...action.payload},
        isFetching: false,
      }
    }
    case SUCCESS_FETCH_BOOKS: {
      return {
        ...state,
        items: state.item || action.payload,
        isFetching: false,
      }
    }

    case ERROR_FETCH_BOOK:
    case ERROR_FETCH_BOOKS: {
      console.log(action.payload);

      return {
        ...state,
        isFetching: false,
      }
    }

    case CLEAR_BOOKS: {
      return initialState;
    }

    case CLEAR_CURRENT_BOOK: {
      return {
        ...state,
        currentItem: {}
      }
    }

    case REQUEST_EDIT_BOOK: {
      return {
        ...state,
        isUpdating: true,
      }
    }

    case SUCCESS_EDIT_BOOK: {
      return {
        ...state,
        currentItem: {...action.payload},
        isUpdating: false,
      }
    }

    case ERROR_EDIT_BOOK: {
      return {
        ...state,
        isUpdating: false,
      }
    }

    case REQUEST_CREATE_BOOK: {
      return {
        ...state,
        isCreating: true,
      }
    }

    case SUCCESS_CREATE_BOOK: {
      return {
        ...state,
        isCreating: false,
      }
    }

    case ERROR_CREATE_BOOK: {
      return {
        ...state,
        isCreating: false,
      }
    }

    default: return state;
  }
}
