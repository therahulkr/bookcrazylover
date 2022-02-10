import React from 'react';
import {Link} from 'react-router-dom';



const Bookcard = ({book}) => {
console.log("motherfucker")
  return (
      <Link className='bookCard' to={`/book/${book._id}`}>
          <img src={book.images.url} alt={book.name}/>
          <p>{book.name}</p>
          <p>{(book.type=="book")?book.category:""}</p>
      </Link>
  );
};

export default Bookcard;
