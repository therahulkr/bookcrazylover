import React, { Fragment,useEffect,useState } from 'react';
import {useAlert} from "react-alert";
import {useSelector,useDispatch} from "react-redux";
import { Link, useParams } from 'react-router-dom';
import {clearErrors, getAllBooks} from "../actions/bookAction";
import Bookcard from "./Bookcard.js"
import "./books.css"
// import Pagination from "react-js-pagination";
import Loader from './Loader';

const categories=[
   "novel","fiction","non-fiction"
];

const Books = () => {
  const alert = useAlert();
  const { loading, error, books,bookscount,resultPerPage } = useSelector((state) => state.books);
    console.log(books);
    const params = useParams();
    const type = "book";
    const keyword = params.keyword;

    const dispatch = useDispatch();
    const [category, setCategory] = useState("");

    
    useEffect(() => {
        if(error){
          alert.error(error);
          dispatch(clearErrors());
        }
        dispatch(getAllBooks(keyword,type,category));
      }, [dispatch, keyword,type,category,error, alert]);

  return (
  <Fragment>
              {loading?<Loader/>:
                 <Fragment>

                   <div className='outerdiv'>
                   <div className='firstdiv'>
                     <h3>Catogries</h3>
                     <ul className="categoryBox">
                       {
                         categories.map((category)=>(
                           <li 
                           className="category-link"
                           key={category}
                           onClick={() => setCategory(category)}
                           >
                             {category}
                           </li>
                         ))
                       }
                     </ul>
                   </div>
                   <div className='seconddiv'>

                    <h2 className='heading'>Books</h2>
                    <div id="container">
                      {books &&
                        books.map(book => (
                          <Bookcard book={book} />
                        ))}
                    </div>

                   </div>
                   </div>
                   
                 </Fragment>
              }
              
</Fragment>);
};

export default Books;
