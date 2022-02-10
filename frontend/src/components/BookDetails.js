import React, { Fragment, useEffect,useState } from 'react';
import "./BookDetails.css"
import {useSelector,useDispatch}from "react-redux" 
import { clearErrors, getBookDetails } from '../actions/bookAction';
import { useParams } from 'react-router-dom';
import {useAlert} from "react-alert";
import Loader from "./Loader";

// import { Rating } from "@material-ui/lab";

const BookDetails = () => {
    const alert = useAlert();
    const dispatch = useDispatch();
    const params = useParams();
    console.log(params.id)

    const {loading,error,book}=useSelector((state)=>state.book);
    console.log(loading)


    useEffect(()=>{
         if(error){
            alert.error(error);
            dispatch(clearErrors())
         }
         console.log("send ho gyi")
         dispatch(getBookDetails(params.id));
    },[dispatch,params.id,error,alert]);

  return (
      <Fragment>
          {
              (loading==undefined||loading==true)?<Loader/>:
             ( book.type=="book"?(<div className='detailsbox'>
              <div className='image'><img src={book.images.url} /></div>
                  <div className='info'>
                  <h2>{book.name}</h2>
                  <h3>Category</h3>
                  <p>{book.category}</p>
                  <h3>{book.type} id</h3>
                  <p style={{
                      textTransform:"lowercase"
                  }}>{params.id}</p>
                  <h3>Description</h3>
                  <p>{book.description}</p>
              </div>
               </div>) :(<div className='detailsbox'>
              <div className='image'><img src={book.images.url} /></div>
                  <div className='info'>
                  <h2>{book.name}</h2>
                  <h3>{book.type} id</h3>
                  <p style={{
                      textTransform:"lowercase"
                  }}>{params.id}</p>
                  <h3>Description</h3>
                  <p>{book.description}</p>
              </div>
               </div> )
               
               )
          }
          
      </Fragment>
  );
};

export default BookDetails;

//  <div className='detailsbox'>
//             <div className='image'><img src={book.images.url} /></div>
//             <div className='info'>
//                 <h2>{book.name}</h2>
//                 <h3>Category</h3>
//                 <p>{book.category}</p>
//                 <h3>Description</h3>
//                 <p>{book.description}</p>
//             </div>
//              </div> 