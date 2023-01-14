import React from 'react';
import { Link } from 'react-router-dom';

import './allBooks.css'

const CardsBook = ({ books }) => {
  return (
    <div className='cards-book' >
      {books?.length > 0 &&
        books.map(el => {
          const authors = el.volumeInfo.authors?.join(', ');
          const img = el.volumeInfo.imageLinks?.thumbnail;
          const title = el.volumeInfo.title;
          const firstCategory = el.volumeInfo.categories?.[0];

          return (
              <div key={el.id} className='card'>
                <div className='card-img-contaier d-flex justify-content-center p-5'>
                  <Link to={`/books/${el.id}`} className='text-decoration-none text-reset'>
                    <img className='shadow' src={img} />
                  </Link>
                </div>
                <div>
                  <p className='title'>{title}</p>
                  <p className='authors'>{authors}</p>
                  <p className='category'>
                   {firstCategory}
                  </p>
                </div>
              </div>
          );
        })}
    </div>
  );
};

export default CardsBook;
