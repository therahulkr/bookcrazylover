import React, { Fragment,useEffect } from 'react';
import "./home.css"
import {useSelector,useDispatch} from "react-redux";
import {clearErrors, getAllBooks} from "../actions/bookAction";
import Bookcard from './Bookcard';
import { useParams,Link } from 'react-router-dom';
import Loader from './Loader';


const Home = () => {

    const { loading, error, books,bookscount,resultPerPage } = useSelector((state) => state.books);
    const dispatch = useDispatch();
    const params = useParams();
    const type = "blog";
    const keyword = params.keyword;
    var mybooks;
    if(books!=undefined) mybooks=books.slice(0,4);
    console.log(mybooks)

    useEffect(() => {
        if(error){
          alert.error(error);
          dispatch(clearErrors());
        }
        dispatch(getAllBooks(keyword,type));
      }, [dispatch,error,keyword,type, alert]);

  return (<Fragment>
       {
           loading?<Loader/> : <Fragment><section id="home">
           <img src={require("../imgs/cover1.jpg")}/>
           <p> Bookc is place where you not only found a book but yourself. 
               If you are a new reader don't know where to start this website might help you
               to found book of your type. Here you can also explore libararies and bookshops near you.
               We provide our honest reviews and brief summary about various book which will hike your enthusiasm towards reading.
               
           </p>
           
   
       </section>
       <section className='blogsection'>
       
                       <h2 className='heading'>Featured Blogs</h2>
                       <div id="container">
                         {(mybooks) &&
                           mybooks.map(book => (
                             <Bookcard book={book} />
                           ))
                       }
                       </div>
       </section>
   
   
   
       <section id="books">
           <h1 className="usethisheading">get in touch</h1>
   
           <div className="usethisdiv">
               FOR READER QUESTIONS AND/OR EDITORIAL INQUIRIES, PLEASE CONTACT GRACE@Bookstagram
   <br></br>
   FOR PARTNERSHIPS, PLEASE CONTACT PARTNERSHIPS@Bookstagram
           </div>
       </section>
       <section id="authorsection">
       <div class="box">
          <h1 class="usethisheading">Blogs</h1>
       <u>
           <div class="usethisdiv">OUR BOOKS COLLECTIONS
           </div>
       </u>
   
   </div>
   
   <div class="box">
   <h1 class="usethisheading">Books</h1>
       <u>
           <div class="usethisdiv">OUR BOOKS COLLECTIONS
           </div>
       </u>
   
   </div>
   
   
   
   <div class="box">
       <h1 class="usethisheading"> Authors</h1>
       <u>
           <div class="usethisdiv">LIST OF Authors
   
           </div>
       </u>
       
   
   </div>
   
   
   </section></Fragment>
       }
  </Fragment>);
};

export default Home;
