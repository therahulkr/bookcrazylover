import React, { Fragment,useEffect,useState } from 'react';
import {useAlert} from "react-alert";
import {useSelector,useDispatch} from "react-redux";
import { useParams } from 'react-router-dom';
import {clearErrors, getAllBooks} from "../actions/bookAction";
import Bookcard from "./Bookcard.js"
import "./books.css"
import Pagination from "react-js-pagination";
import Loader from './Loader';

const Blogs = () => {
  const alert = useAlert();
  const { loading, error, books,bookscount,resultPerPage } = useSelector((state) => state.books);
    console.log(books);
    const params = useParams();
    const type = "blog";
    const keyword = params.keyword;

    const dispatch = useDispatch();

    
    useEffect(() => {
        if(error){
          alert.error(error);
          dispatch(clearErrors());
        }
        dispatch(getAllBooks(keyword,type));
      }, [dispatch, keyword,type,error, alert]);

  return (
  <Fragment>
              {loading?<Loader/>:
                 <Fragment>
                    <h2 className='heading'>Blogs</h2>
                    <div id="container">
                      {books &&
                        books.map(book => (
                          <Bookcard book={book} />
                        ))}
                    </div>
                 </Fragment>
              }
              
</Fragment>);
};

export default Blogs;
