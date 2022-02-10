import {
    ALL_BOOKS_FAIL,
    ALL_BOOKS_REQUEST,
    ALL_BOOKS_SUCCESS,
    BOOK_DETAILS_FAIL,
    BOOK_DETAILS_REQUEST,
    BOOK_DETAILS_SUCCESS,
    CREATE_BOOK_FAIL,
    CREATE_BOOK_SUCCESS,
    CREATE_BOOK_REQUEST,
    DELETE_BOOK_FAIL,
    DELETE_BOOK_SUCCESS,
    DELETE_BOOK_REQUEST,
    UPDATE_BOOK_FAIL,
    UPDATE_BOOK_SUCCESS,
    UPDATE_BOOK_REQUEST,
    CLEAR_ERRORS
  } from "../constant/bookConstant";

  export const newBookReducer = (state = {}, action) => {
    switch (action.type) {
      case CREATE_BOOK_REQUEST:
        return {
          ...state,
          loading: true,
        };
  
      case CREATE_BOOK_SUCCESS:
        return {
          loading: false,
          book: action.payload,
        };
  
      case CREATE_BOOK_FAIL:
        return {
          loading: false,
          error: action.payload,
        };
      case CLEAR_ERRORS:
        return {
          ...state,
          error: null,
        };
  
      default:
        return state;
    }
  };

  export const bookDetailsReducer = (state = { book: {} }, action) => {
    switch (action.type) {
      case BOOK_DETAILS_REQUEST:
        return {
          loading: true,
      };
  
      case BOOK_DETAILS_SUCCESS:
        return {
          loading: false,
          book: action.payload.book,
        };
  
      case BOOK_DETAILS_FAIL:
        return {
          loading: false,
          error: action.payload,
        };
      case CLEAR_ERRORS:
        return {
          ...state,
          error: null,
        };
  
      default:
        return state;
    }
  };


  export const allBooksReducer = (state = { books: [] }, action) => {
    switch (action.type) {
      case ALL_BOOKS_REQUEST:
        return {
          loading: true,
        };
  
      case ALL_BOOKS_SUCCESS:
        return {
          loading: false,
          books: action.payload.books,
          bookscount: action.payload.bookscount,
          resultPerPage:action.payload.resultPerPage
        };
  
      case ALL_BOOKS_FAIL:
        return {
          loading: false,
          error: action.payload,
        };
      case CLEAR_ERRORS:
        return {
          ...state,
          error: null,
        };
  
      default:
        return state;
    }
  };

  //DELETE OR UPDATE A PRODUCT ADMIN
  export const deleteBookReducer = (state = {}, action) => {
    switch (action.type) {
      case DELETE_BOOK_REQUEST:
        case UPDATE_BOOK_REQUEST:
        return {
          ...state,
          loading: true,
        };
      case DELETE_BOOK_SUCCESS:
        return {
          ...state,
          loading: false,
          isDeleted: action.payload,
        };
        case UPDATE_BOOK_SUCCESS:
        return {
          ...state,
          loading: false,
          isUpdated: action.payload,
        };
 
      case DELETE_BOOK_FAIL:
        case UPDATE_BOOK_FAIL:
        return {
          ...state,
          loading: false,
          error: action.payload,
        };


      case CLEAR_ERRORS:
        return {
          ...state,
          error: null,
        };
      default:
        return state;
    }
  };
