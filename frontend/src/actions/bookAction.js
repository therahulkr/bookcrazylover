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

  import axios from "axios";

// Create a book
export const createBook = (book) => async (dispatch) => {
  try {
    dispatch({ type: CREATE_BOOK_REQUEST });

    const config = {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    };
    const { data } = await axios.post("/api/v1/book/new", book, config);
    dispatch({ type: CREATE_BOOK_SUCCESS, payload: data });
  } catch (error) {
    dispatch({
      type: CREATE_BOOK_FAIL,
      payload: error.response.data.message,
    });
  }
};


//get a book details
export const getBookDetails = (id)=>async(dispatch)=>{
    try {
        dispatch({type : BOOK_DETAILS_REQUEST});
        console.log("nahi aaya")
        const {data} = await axios.get(`/api/v1/book/${id}`);
        console.log(data);
        dispatch({
            type : BOOK_DETAILS_SUCCESS,
            payload : data,
        })
    } catch (error) {
        dispatch({
            type : BOOK_DETAILS_FAIL,
            payload : error.response.data.message,
        })
    }
};

//get all books
export const getAllBooks = (keyword="",type,category) => async (dispatch) => {
    try {
      dispatch({ type: ALL_BOOKS_REQUEST });
      let link = `/api/v1/books?keyword=${keyword}&type=${type}`;

      if(category){
        link = `/api/v1/books?keyword=${keyword}&type=${type}&category=${category}`;
      }

      const { data } = await axios.get(link);
  
      dispatch({ type: ALL_BOOKS_SUCCESS, payload: data});
    }
     catch (error) {
      dispatch({
        type: ALL_BOOKS_FAIL,
        payload: error.response.data.message,
      });
    }
};

  // Delete Product
  export const deleteBook = (id) => async (dispatch) => {
    try {
      dispatch({ type: DELETE_BOOK_REQUEST });
  
      const { data } = await axios.delete(`/api/v1/admin/book/${id}`);
  
      dispatch({
        type: DELETE_BOOK_SUCCESS,
        payload: data.success,
      });
    } catch (error) {
      dispatch({
        type: DELETE_BOOK_FAIL,
        payload: error.response.data.message,
      });
    }
  };

    // update Product
    export const updateBook = (book) => async (dispatch) => {
      console.log(book)
      try {
        dispatch({ type: UPDATE_BOOK_REQUEST });
        const config = {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        };
        const { data } = await axios.put(`/api/v1/admin/book/update`,book,config);
    
        dispatch({
          type: UPDATE_BOOK_SUCCESS,
          payload: data.success,
        });
      } catch (error) {
        dispatch({
          type: UPDATE_BOOK_FAIL,
          payload: error.response.data.message,
        });
      }
    };

// Clearing Errors
export const clearErrors = () => async (dispatch) => {
  dispatch({ type: CLEAR_ERRORS });
};
